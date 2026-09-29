import Link from "next/link"

const principles = [
  {
    title: "흐름을 먼저 봅니다",
    body: "문제가 생긴 지점만 고치기보다 사용자 행동, API, 데이터와 상태 변화가 어디서 이어지는지 추적합니다.",
  },
  {
    title: "권위와 경계를 분리합니다",
    body: "UI, 도메인 규칙, 저장소, AI 작업자가 서로의 책임을 침범하지 않도록 상태의 소유권과 변경 경로를 먼저 정합니다.",
  },
  {
    title: "검증 가능한 결과를 남깁니다",
    body: "결정론 테스트, 후보 버전, 품질 게이트처럼 다시 확인할 수 있는 증거를 제품 구조 안에 넣으려고 합니다.",
  },
]

const currentFocus = [
  "AI 웹소설 생성·품질 검증 플랫폼 Routoon",
  "WPF 기반 AI 게임 에셋 제작 도구 ShowRoom",
  "Unity WebGL 랜덤 디펜스 게임",
  "레거시 실행 흐름 분석 도구 ImpactSuite",
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">About</p>
          <h1 className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            기능보다 구조를,
            <span className="block text-textSecondary">구조보다 실제 동작을 봅니다.</span>
          </h1>
        </div>
        <div className="max-w-[36rem] text-[1.05rem] leading-8 text-textSecondary">
          <p>
            ASP.NET과 MS SQL Server 기반 업무 시스템을 오래 개발·운영하며 HR, 회계, 결재,
            커머스와 재고 같은 복잡한 업무 흐름을 다뤘습니다.
          </p>
          <p className="mt-4">
            지금은 그 경험을 AI, WPF 데스크톱 도구, Unity 게임으로 확장하면서
            아이디어를 실제 제품 구조로 만드는 일을 하고 있습니다.
          </p>
        </div>
      </header>

      <section className="grid gap-10 py-16 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">How I Work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">개발할 때 중요하게 보는 것</h2>
        </div>
        <div className="grid gap-4">
          {principles.map((item, index) => (
            <article key={item.title} className="grid gap-3 rounded-xl border border-border bg-surface p-6 sm:grid-cols-[48px_1fr]">
              <span className="font-mono text-xs text-textMuted">0{index + 1}</span>
              <div>
                <h3 className="font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-textSecondary">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-border py-16 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Current Focus</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">현재 만들고 있는 것</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {currentFocus.map((item) => (
            <div key={item} className="py-4 text-textSecondary">{item}</div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3 border-t border-border pt-10">
        <Link href="/projects" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-white">
          프로젝트 보기
        </Link>
        <Link href="/experience" className="inline-flex min-h-11 items-center rounded-lg border border-borderStrong px-4 text-sm font-semibold text-textPrimary">
          경력 보기
        </Link>
      </div>
    </div>
  )
}
