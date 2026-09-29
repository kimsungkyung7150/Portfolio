import Link from "next/link"

const strengths = [
  {
    index: "01",
    title: "Product Architecture",
    description: "기능 하나가 아니라 제품 전체 흐름과 상태 권위를 먼저 설계합니다.",
    evidence: "Routoon · ShowRoom",
    href: "/projects",
  },
  {
    index: "02",
    title: "AI Systems",
    description: "LLM 호출 자체보다 컨텍스트, 검증, 실패 경로와 운영 구조를 함께 만듭니다.",
    evidence: "LLM · MCP · Neo4j",
    href: "/projects/routoon",
  },
  {
    index: "03",
    title: ".NET / Desktop",
    description: "ASP.NET 업무 시스템 경험을 WPF 기반 제작 도구와 호스트 구조까지 확장했습니다.",
    evidence: "ASP.NET · WPF · C#",
    href: "/projects/showroom",
  },
  {
    index: "04",
    title: "Game / Unity",
    description: "게임 규칙과 표현 계층을 분리하고 데이터 중심으로 확장 가능한 구조를 만듭니다.",
    evidence: "Unity · WebGL · C#",
    href: "/projects/random-defense",
  },
  {
    index: "05",
    title: "Enterprise / Data",
    description: "HR, 회계, 결재, 커머스, 재고 시스템에서 복잡한 업무 흐름과 SQL 병목을 다뤄왔습니다.",
    evidence: "MS SQL · Workflow · Integration",
    href: "/experience",
  },
]

export function EngineeringStrengths() {
  return (
    <section className="border-y border-white/[0.06] bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
              What I Build
            </p>
            <h2 className="mt-2 max-w-[28rem] text-h2 font-[720] tracking-h2 text-textPrimary">
              기술 이름보다,
              <span className="block text-textSecondary">무엇을 구조화할 수 있는지.</span>
            </h2>
            <p className="mt-5 max-w-[28rem] text-sm leading-7 text-textSecondary">
              스택을 많이 나열하기보다 실제 프로젝트에서 반복해서 사용한 문제 해결 축을 정리했습니다.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {strengths.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                className="group grid gap-3 py-5 transition-colors hover:bg-surface/60 sm:grid-cols-[48px_180px_1fr_auto] sm:items-center sm:px-3"
              >
                <span className="font-mono text-xs text-textMuted">{item.index}</span>
                <span className="font-semibold text-textPrimary group-hover:text-primarySoft">{item.title}</span>
                <span className="text-sm leading-6 text-textSecondary">{item.description}</span>
                <span className="font-mono text-[10px] text-textMuted sm:text-right">{item.evidence}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
