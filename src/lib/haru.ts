import type { ProjectDetail } from "@/lib/projectDetails"

export const haruProject: ProjectDetail = {
  slug: "haru",
  title: "하루 · Memory OS",
  type: "AI / 업무 기억 시스템",
  status: "개인 실사용 검증",
  statusVariant: "info",
  subtitle: "여러 AI의 작업 기록을, 근거 있는 업무 기억으로",
  summary: "Codex·ChatGPT 등에서 제출한 업무 기록을 원본과 함께 보존하고, 변경 이유·작업자·남은 일을 찾아 인수인계로 연결하는 AI 비서입니다.",
  description: "업무 AI는 기록을 제출하고, Memory OS는 원본과 정리된 기억을 관리하며, 중앙 비서 하루는 허용된 근거를 검색해 답변합니다. 기억의 기준을 모델 밖에 두고, 실제 MCP 제출부터 SQL 저장·재조회까지 연결했습니다.",
  role: "기획 · 아키텍처 · AI 협업 개발 · 실사용 검수",
  problem: "작업은 여러 AI와 대화에 흩어지지만, 다음 담당자에게 필요한 것은 왜 바꿨고 어디까지 확인했는지입니다. 보고서·첨부·변경 이력·작성 주체를 함께 관리하는 기억 계층이 필요했습니다.",
  constraints: ["원본과 파생 요약을 분리", "쓰기·읽기 권한 분리", "8GB VRAM에서 모델 순차 실행", "미확정 호출의 무단 재전송 방지"],
  decisions: [
    { title: "Writer와 하루의 책임 분리", reason: "기록을 남기는 업무 AI는 제출과 자기 영수증 조회만 담당합니다. 검색·해석·답변은 하루로 모아 동일한 근거 검증 경로를 적용합니다." },
    { title: "원본을 기준으로 하는 기억", reason: "요약·연결·색인은 파생 자료입니다. 보고서와 첨부의 바이트·해시를 보존하고, 답변이 선택한 원문 구절을 서버가 다시 확인합니다." },
    { title: "모델과 저장소의 수명 분리", reason: "기억은 SQL Server와 원본 저장소에 두고, 생성·임베딩·재랭킹을 어댑터로 분리합니다. 모델 교체가 기록 소실로 이어지지 않도록 경계를 둡니다." },
  ],
  tags: ["C#", "ASP.NET Core", "SQL Server", "MCP", "Hybrid RAG", "Codex CLI", "Qwen3"],
  techGroups: [
    { name: "서비스 / 인증", items: ["C# · .NET 10", "ASP.NET Core", "MCP", "OAuth / OIDC"] },
    { name: "기억 / 검색", items: ["SQL Server", "EF Core", "전문·벡터 검색", "원문 바이트 / SHA256"] },
    { name: "생성 / 모델", items: ["Codex CLI", "Qwen3-Embedding-8B Q4", "Qwen3 Reranker", "모델 교체 어댑터"] },
    { name: "실행 / 검증", items: ["백그라운드 작업", "GPU 순차 실행", "SQL 추적", "인용 Gate"] },
  ],
  architecture: [
    { title: "MCP 제출", description: "업무 AI가 작업 보고서와 실제 첨부를 제출합니다. 인증 제출자·작성 AI·실제 작업자를 구분합니다." },
    { title: "원본 보존", description: "원문·첨부 바이트와 해시, 제출 영수증을 저장합니다. 요약이 원본을 덮어쓰지 않습니다." },
    { title: "자동 정리·연결", description: "근거 구절을 선택해 정리된 기억을 만들고 기존 주제와 연결합니다. 불완전한 맥락도 상태로 남깁니다." },
    { title: "증분 색인·검색", description: "본문·개별 작업·첨부를 분할·색인하고, 질문에 따라 전문·벡터 검색과 재랭킹을 사용합니다." },
    { title: "근거 검증·답변", description: "권한·삭제·원문·선택 인용을 확인합니다. 대상이 불명확하면 확인하고, 부족한 범위는 안내합니다." },
    { title: "인수인계·재조회", description: "답변과 인수인계 Markdown을 영구 저장합니다. 긴 생성은 접수 후 계속하고 같은 요청으로 진행 상태를 조회합니다." },
  ],
  architectureNotes: ["업무 AI는 제출, 하루는 검색과 답변", "원본·정리된 기억·검색 색인의 역할 분리", "추측한 작업자·미검증 완료 선언 방지", "실패·UNKNOWN과 과거 평가 보존"],
  currentScope: ["본인 계정의 MCP 제출·자동 정리·회상 검증", "후속 질문·인수인계 저장 및 SQL 재조회 검증", "팀원 공동 운영·새 장치 복구 검수는 별도"],
  highlights: ["여러 AI의 보고서를 하나의 기억으로", "변경 이유·이전/현재 상태·남은 일 회상", "원문 구절 검증과 인용", "인수인계 Markdown 저장·재조회"],
  screenshots: [],
  screenshotNote: "실제 검수 내용을 축약한 읽기 전용 인터랙티브 설명입니다. 공개 AI 실행 화면이 아닙니다.",
}

export const haruComparison = [
  { question: "작업이 여러 AI에 흩어지면?", context: "프로젝트의 채팅·파일·지침을 함께 활용", memory: "MCP 제출 형식으로 보고서를 모으고, 기본 프로젝트의 업무 기억으로 연결" },
  { question: "누가, 왜 바꿨는지 알려면?", context: "공유한 대화와 자료를 질문의 맥락으로 제공", memory: "변경 이유·이전/이후 상태·수정 파일을 기록하고 제출자·작성 AI·실제 작업자를 구분" },
  { question: "답변의 출처를 다시 확인하려면?", context: "첨부·연결 자료를 바탕으로 대화를 이어감", memory: "선택한 원문 구절 ID·바이트·해시를 서버에서 검증하고 답변과 인용을 함께 저장" },
  { question: "다음 사람이 업무를 이어받으려면?", context: "프로젝트의 자료와 대화 맥락을 활용", memory: "본문·개별 작업·필수 첨부를 수집해 확인 결과·미확인 사항·남은 일이 담긴 Markdown으로 보존" },
]
