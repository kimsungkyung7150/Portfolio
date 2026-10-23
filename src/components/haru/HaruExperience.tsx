"use client"

import { useId, useRef, useState, type KeyboardEvent } from "react"
import { ArrowDown, Check, ChevronDown, FileText, Layers3, Quote } from "lucide-react"

const scenarios = [
  {
    label: "저장",
    actor: "업무 AI → Writer",
    question: "작업 정리해서 저장해줘.",
    title: "원본과 업무 맥락을 함께 남깁니다.",
    lines: ["변경 이유 · 이전/이후 상태 · 수정 파일 · 남은 일", "제출자 · 작성 AI · 실제 작업자를 구분", "보고서와 실제 첨부를 저장하고 영수증 반환"],
    source: "Writer 제출 검수 · 2026.10.23",
    excerpt: "원문 3,138바이트, 업무 항목 2개, 첨부 3개. 원문·스냅샷·첨부 바이트와 SHA256, 영수증 재조회가 실제 SQL과 일치했다.",
    footer: "접수 후 자동 정리 · 기존 기억 연결 · 색인",
  },
  {
    label: "회상",
    actor: "사용자 → 하루",
    question: "이번 복구는 왜 했고, 무엇이 남았어?",
    title: "이유와 현재 상태를 구분해 답합니다.",
    lines: ["미전송과 실패 입력을 구분해 안전하게 복구", "벡터 8개를 추가 저장해 26/27까지 복구", "미확정 1개와 과거 품질 평가 FAIL은 유지"],
    source: "실제 하루 답변 검수 · 2026.10.23",
    excerpt: "원래 UNKNOWN 벡터 1개는 결과가 없어 재전송 없이 복구할 수 없다. 이번 SQL 재확인에서도 26개 저장·UNKNOWN 1개의 결과 0건이었다.",
    footer: "답변 · 선택 인용 · 원문 해시 저장 및 재조회",
  },
  {
    label: "후속 질문",
    actor: "사용자 → 같은 대화의 하루",
    question: "그때 수정한 파일과 남은 확인 사항은?",
    title: "방금 이야기한 작업을 이어갑니다.",
    lines: ["이전 답변의 업무 대상을 유지", "개별 작업 원문에서 파일·검사 결과·남은 일 확인", "사람 작업자가 미기록이면 추정하지 않음"],
    source: "정상 후속 질문 검수 · 2026.10.23",
    excerpt: "기록된 작성 AI는 Codex이고, 사람 작업자는 미기록으로 다뤘다. 인증 제출자를 사람 작업자로 추정하지 않았다.",
    footer: "다른 업무와 섞지 않고, 같은 출처로 후속 답변",
  },
  {
    label: "인수인계",
    actor: "사용자 → 하루",
    question: "이어받을 수 있게 인수인계를 만들어줘.",
    title: "다음 작업에 필요한 문서로 남깁니다.",
    lines: ["배경 · 수정 내용 · 확인 결과 · 미확인 사항", "본문 · 개별 작업 · 필수 첨부의 근거 수집", "Markdown 전체 저장 후 같은 문서를 재조회"],
    source: "인수인계 3부 저장·재조회 검수 · 2026.10.23",
    excerpt: "원문 1건의 작업 3개·근거 46개 수집, 누락 0. 최초 MCP 결과와 저장 결과, SQL의 인용 구절 ID·바이트·해시 대조.",
    footer: "접수 → 서버에서 생성 → 전체 문서 저장 → 재조회",
  },
]

export function HaruExperience({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(compact ? 0 : 1)
  const id = useId()
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const scenario = scenarios[active]

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % scenarios.length
      : event.key === "ArrowLeft" ? (index + scenarios.length - 1) % scenarios.length
        : event.key === "Home" ? 0 : event.key === "End" ? scenarios.length - 1 : null
    if (next === null) return
    event.preventDefault()
    setActive(next)
    buttons.current[next]?.focus()
  }

  return (
    <div className="haru-experience overflow-hidden rounded-2xl border border-borderStrong bg-surface shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primarySoft"><Layers3 className="size-4" aria-hidden="true" /></span>
          <span className="text-sm font-semibold tracking-tight">하루 <span className="ml-1 font-mono text-[10px] font-normal text-textMuted">MEMORY OS</span></span>
        </div>
        <span className="text-[10px] text-textSecondary">읽기 전용 예시</span>
      </div>

      <div className="grid grid-cols-4 border-b border-border bg-backgroundSoft p-1.5" role="tablist" aria-label="하루 사용 흐름">
        {scenarios.map((item, index) => (
          <button
            type="button" key={item.label} ref={(el) => { buttons.current[index] = el }}
            id={`${id}-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1} onKeyDown={(e) => navigateTabs(e, index)} onClick={() => setActive(index)}
            className={`min-h-10 rounded-md px-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarySoft ${active === index ? "bg-surfaceElevated text-textPrimary shadow-sm" : "text-textMuted hover:text-textPrimary"}`}
          >{item.label}</button>
        ))}
      </div>

      <div key={active} id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="px-4 py-5 outline-primarySoft sm:px-6 sm:py-6">
        <p className="mb-2 font-mono text-[10px] text-textMuted">{scenario.actor}</p>
        <p className="rounded-xl rounded-tr-sm border border-border bg-backgroundSoft px-4 py-3 text-[14px] font-medium leading-6">{scenario.question}</p>
        <div className="my-3 flex items-center gap-2 pl-3 font-mono text-[9px] uppercase tracking-wider text-textMuted"><ArrowDown className="size-3" aria-hidden="true" />Context · Evidence · Answer</div>
        <div className="border-l-2 border-primarySoft/60 pl-4">
          <p className="text-[14px] font-semibold leading-6 text-textPrimary">{scenario.title}</p>
          <ul className={`mt-3 space-y-2 ${compact ? "text-xs" : "text-sm"} text-textSecondary`}>
            {scenario.lines.map((line) => <li key={line} className="flex gap-2 leading-6"><Check className="mt-1.5 size-3 shrink-0 text-primarySoft" aria-hidden="true" /><span>{line}</span></li>)}
          </ul>
        </div>
        <details className="group mt-5 rounded-lg border border-border bg-backgroundSoft open:border-primarySoft/30">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-3 py-2 text-xs text-textSecondary focus-visible:outline-2 focus-visible:outline-primarySoft [&::-webkit-details-marker]:hidden">
            <Quote className="size-3.5 text-primarySoft" aria-hidden="true" />근거 구간 보기<ChevronDown className="ml-auto size-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-border px-3 py-3">
            <p className="text-[10px] text-primarySoft">{scenario.source}</p>
            <blockquote className="mt-2 text-xs leading-6 text-textSecondary">{scenario.excerpt}</blockquote>
          </div>
        </details>
        <div className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-textMuted"><FileText className="mt-1 size-3 shrink-0" aria-hidden="true" /><span>{scenario.footer}</span></div>
      </div>
      <p className="border-t border-border px-4 py-2.5 text-[10px] leading-5 text-textMuted sm:px-6">실제 검수 내용을 축약·재구성한 설명입니다. 새 AI 호출이나 저장은 실행하지 않습니다.</p>
    </div>
  )
}
