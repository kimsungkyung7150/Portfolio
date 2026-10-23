"""Make a reversible, privacy-redacted publication copy of saved handoff Markdown.

Reads only local saved evidence; never calls a model, database, or MCP server.
The private replacement map is written beside the private source documents.
"""

import argparse
import hashlib
import json
from pathlib import Path
import re


UUID = r"(?<![0-9a-fA-F])[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?![0-9a-fA-F])"
FORBIDDEN = {
    "uuid": UUID,
    "sha256_value": r"(?<![0-9a-fA-F])[0-9a-fA-F]{64}(?![0-9a-fA-F])",
    "quote_identifier": r"hq\\?_[0-9a-fA-F]{24,}",
    "email": r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}",
    "windows_absolute_path": r"\b[A-Za-z]:[\\/]",
    "unc_path": r"\\\\[A-Za-z0-9_.-]+\\",
    "private_posix_path": r"(?<![\w./-])/(?:Users|home|mnt|private|var)/(?:[^\s]+)",
    "submission_account": r"B26\s+primary\s+account",
    "credential": r"(?:sk-[A-Za-z0-9_-]{16,}|Bearer\s+[A-Za-z0-9._~-]{16,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|eyJ[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,})",
}


def sha256(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    source_dir = args.source_dir.resolve(strict=True)
    output = args.output.resolve()
    paths = [source_dir / f"handoff-part-{part}.md" for part in range(1, 4)]
    originals = [path.read_bytes() for path in paths]
    original_texts = [raw.decode("utf-8") for raw in originals]
    proof = json.loads((source_dir / "verification-current.json").read_text(encoding="utf-8"))
    matching = [
        row for row in proof["handoffs"]
        if row["status"] == "COMPLETED"
        and row["parts"] == row["completed_parts"] == len(paths)
        and row["markdown_bytes"] == sum(map(len, originals))
        and row["mcp_sql_readback_match"] is True
    ]
    if len(matching) != 1:
        raise ValueError("Saved local verification evidence does not uniquely match the three source files.")
    if output in paths or source_dir in output.parents:
        raise ValueError("Publication output must be separate from the private evidence directory.")

    snapshot = re.search(r"(\d{4})년 (\d{1,2})월 (\d{1,2})일 (\d{2})시 (\d{2})분 기준", original_texts[0])
    if snapshot is None:
        raise ValueError("Snapshot timestamp is missing from saved handoff.")
    year, month, day, hour, minute = map(int, snapshot.groups())
    date = f"{year:04d}-{month:02d}-{day:02d}"
    timestamp = f"{date} {hour:02d}:{minute:02d}"
    mappings: dict[tuple[str, str], dict] = {}
    counts: dict[str, int] = {}

    def replacement(kind: str, original: str) -> str:
        key = (kind, original)
        if key not in mappings:
            ordinal = 1 + sum(1 for known, _ in mappings if known == kind)
            mappings[key] = {"kind": kind, "original": original, "replacement": f"[{kind} 비공개 {ordinal:02d}]", "occurrences": 0}
        row = mappings[key]
        row["occurrences"] += 1
        counts[kind] = counts.get(kind, 0) + 1
        return row["replacement"]

    def redact(text: str) -> str:
        text = re.sub(r"B26\s+primary\s+account\s+" + UUID, lambda m: replacement("제출 계정", m[0]), text)
        text = re.sub(r"(원문(?: ID)? )(" + UUID + r")", lambda m: m[1] + replacement("원문 식별자", m[2]), text)
        text = re.sub(r"(활동 )(" + UUID + r")", lambda m: m[1] + replacement("활동 식별자", m[2]), text)
        text = re.sub(UUID, lambda m: replacement("내부 식별자", m[0]), text)
        text = re.sub(FORBIDDEN["quote_identifier"], lambda m: replacement("인용 식별자", m[0]), text)
        text = re.sub(FORBIDDEN["sha256_value"], lambda m: replacement("해시", m[0]), text)
        text = re.sub(FORBIDDEN["email"], lambda m: replacement("이메일", m[0]), text)
        # Unknown paths or credentials require a review instead of silently publishing them.
        for name, pattern in FORBIDDEN.items():
            if re.search(pattern, text, flags=re.IGNORECASE):
                raise ValueError(f"Unreviewed forbidden content remains: {name}")
        return text

    parts = [redact(text) for text in original_texts]
    for original, redacted in zip(original_texts, parts):
        restored = redacted
        for row in mappings.values():
            restored = restored.replace(row["replacement"], row["original"])
        if restored != original:
            raise ValueError("A source character changed outside the recorded privacy substitutions.")

    header = (
        "# 하루 인수인계 — 공개용 가림 사본\n\n"
        f"> {date}에 저장한 인수인계 3부를 합친 공개용 사본입니다. "
        f"문서의 기준 시점은 {timestamp}이며, 최신 제품 상태를 뜻하지 않습니다.\n\n"
        "원문·활동·인용 식별자, 제출 계정과 해시 값을 공개용 표기로 가렸습니다. "
        "아래 각 부의 본문·인용·보고 여부·미확인 상태·검증 한계는 다시 쓰지 않았습니다. "
        "이 사본은 비공개 원본과 바이트가 동일한 파일이 아닙니다.\n\n"
        f"비공개 원본은 3부, UTF-8 합계 {sum(map(len, originals)):,}바이트로 보존되어 있습니다. "
        "원본의 SQL 저장·MCP 재조회 일치는 당시 저장된 검증 자료로 확인했으며, "
        "이번 공개 사본 제작에서는 모델이나 SQL을 다시 호출하지 않았습니다.\n\n"
        "‘영상 미추가’ 등의 남은 일과 PARTIAL_CONTEXT·SEARCH_PENDING 안내도 "
        "원문 작성 당시의 기록으로 읽어 주세요. 과거 FAIL·UNKNOWN을 완료로 바꾸지 않았습니다.\n"
    )
    combined = header + "".join(
        f"\n---\n\n<!-- 공개용 가림 사본: 저장된 {index}부 시작 -->\n\n{part}"
        f"\n<!-- 공개용 가림 사본: 저장된 {index}부 끝 -->\n"
        for index, part in enumerate(parts, 1)
    )
    for name, pattern in FORBIDDEN.items():
        if re.search(pattern, combined, flags=re.IGNORECASE):
            raise ValueError(f"Forbidden publication content: {name}")
    encoded = combined.encode("utf-8")
    if any(path.read_bytes() != original for path, original in zip(paths, originals)):
        raise ValueError("Private original changed during preparation.")
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(encoded)
    evidence = {
        "schema": "haru.public-handoff-redaction.v1",
        "source_snapshot": timestamp,
        "source_files": [{"file": path.name, "bytes": len(raw), "sha256": sha256(raw)} for path, raw in zip(paths, originals)],
        "source_total_bytes": sum(map(len, originals)),
        "local_verification_sha256": sha256((source_dir / "verification-current.json").read_bytes()),
        "public_file": output.name,
        "public_bytes": len(encoded),
        "public_sha256": sha256(encoded),
        "source_unchanged": True,
        "reverse_substitution_matches_all_source_characters": True,
        "forbidden_patterns_absent": list(FORBIDDEN),
        "redaction_counts": counts,
        "private_mapping": list(mappings.values()),
        "model_calls": 0,
        "sql_calls": 0,
    }
    (source_dir / "report-redaction.json").write_text(json.dumps(evidence, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: evidence[key] for key in ("source_total_bytes", "public_bytes", "public_sha256", "source_unchanged", "reverse_substitution_matches_all_source_characters", "redaction_counts")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
