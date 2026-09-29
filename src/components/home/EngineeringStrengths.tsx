import Link from "next/link"
import {
  Blocks,
  Bot,
  Database,
  Gamepad2,
  MonitorCog,
} from "lucide-react"

const strengths = [
  {
    title: "Product Architecture",
    description: "아이디어를 서비스로 옮길 때 필요한 구조를 설계하고 단계적으로 구현해 왔습니다.",
    evidence: "Routoon · ShowRoom",
    href: "/projects",
    icon: Blocks,
  },
  {
    title: "AI Systems",
    description: "LLM, MCP, 지식 그래프를 업무와 서비스에 연결하는 구조를 실험하고 적용하고 있습니다.",
    evidence: "LLM · MCP · Neo4j",
    href: "/projects/routoon",
    icon: Bot,
  },
  {
    title: ".NET & Desktop",
    description: "ASP.NET, WPF, C# 기반의 웹·데스크톱 업무 시스템과 도구를 개발해 왔습니다.",
    evidence: "ASP.NET · WPF · C#",
    href: "/projects/showroom",
    icon: MonitorCog,
  },
  {
    title: "Game & Unity",
    description: "Unity를 활용해 게임 프로토타입과 WebGL 배포 흐름을 구현하고 있습니다.",
    evidence: "Unity · WebGL",
    href: "/projects/random-defense",
    icon: Gamepad2,
  },
  {
    title: "Enterprise & Data",
    description: "대용량 데이터, 업무 시스템 연동, 외부 API 같은 실무 데이터 문제를 다뤄왔습니다.",
    evidence: "MS SQL · Workflow · Integration",
    href: "/experience",
    icon: Database,
  },
]

export function EngineeringStrengths() {
  return (
    <section className="border-y border-white/[0.06] bg-background py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.64fr_1.36fr] lg:gap-14">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
              What I Build
            </p>
            <h2 className="mt-1.5 max-w-[420px] text-[clamp(2rem,3vw,2.65rem)] font-[740] tracking-[-0.04em] text-textPrimary">
              기술 이름보다,
              <span className="block text-textSecondary">무엇을 구조화할 수 있는지.</span>
            </h2>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-textSecondary">
              기술 이름보다 실제 프로젝트에서 어떤 역할로 사용했는지를 중심으로 정리했습니다.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {strengths.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid gap-3 py-3.5 transition-colors hover:bg-surface/60 sm:grid-cols-[34px_155px_1fr_145px] sm:items-center sm:px-2"
                >
                  <Icon className="h-[18px] w-[18px] text-primarySoft" strokeWidth={1.7} />
                  <span className="text-sm font-semibold text-textPrimary group-hover:text-primarySoft">
                    {item.title}
                  </span>
                  <span className="text-[12px] leading-5 text-textSecondary">{item.description}</span>
                  <span className="font-mono text-[9px] text-textMuted sm:text-right">{item.evidence}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
