import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

function FlowStep({
  children,
  emphasis = false,
}: {
  children: React.ReactNode
  emphasis?: boolean
}) {
  return (
    <div
      className={
        emphasis
          ? "rounded-lg bg-primary/10 border border-primary/40 px-md py-xs text-xs text-primarySoft w-full max-w-[210px]"
          : "rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[210px]"
      }
    >
      {children}
    </div>
  )
}

function FlowArrow() {
  return <span className="text-textMuted text-xs">↓</span>
}

function RoutoonFlow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-lg text-center">
      <FlowStep>정본 · 캐릭터 보이스 · 회차 맥락</FlowStep>
      <FlowArrow />
      <FlowStep>AI Writer</FlowStep>
      <FlowArrow />
      <FlowStep>Critic · 품질 검증</FlowStep>
      <FlowArrow />
      <FlowStep emphasis>발행 후보 생성</FlowStep>
    </div>
  )
}

function ShowRoomFlow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-lg text-center">
      <FlowStep>캐릭터 원화 입력</FlowStep>
      <FlowArrow />
      <FlowStep>2D 스프라이트 · 모션 프레임</FlowStep>
      <FlowArrow />
      <FlowStep>방향 · 액션 품질 검증</FlowStep>
      <FlowArrow />
      <FlowStep emphasis>Unity 전달 · 3D는 개발 중</FlowStep>
    </div>
  )
}

function RandomDefenseFlow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-lg text-center">
      <FlowStep>140종 몬스터 도감</FlowStep>
      <FlowArrow />
      <FlowStep>결정론 전투 코어</FlowStep>
      <FlowArrow />
      <FlowStep>서버 권위 · 재시뮬레이션</FlowStep>
      <FlowArrow />
      <FlowStep emphasis>Unity WebGL · 자산 연동 중</FlowStep>
    </div>
  )
}

const flowComponents = [RoutoonFlow, ShowRoomFlow, RandomDefenseFlow]

export function FeaturedProjects() {
  const projects = [
    {
      type: "AI / 생성·검증",
      title: "Routoon",
      status: "고도화 중",
      subtitle: "AI 웹소설 생성·품질 검증 플랫폼",
      description:
        "정본(Canon), 캐릭터 보이스, 회차 맥락을 기반으로 Writer·Critic·품질 검증·발행 흐름을 연결하는 AI 웹소설 플랫폼입니다. 생성 품질과 운영 파이프라인을 지속적으로 고도화하고 있습니다.",
      tags: ["AI", "LLM", "ASP.NET Core", "Neo4j", "MS SQL Server", "MCP"],
      variant: "info" as const,
    },
    {
      type: "AI / 게임 에셋",
      title: "ShowRoom",
      status: "개발 중",
      subtitle: "AI 기반 2D 스프라이트·게임 에셋 파이프라인",
      description:
        "원화에서 방향·액션별 PNG 스프라이트와 모션 프레임을 생성·검증해 Unity로 전달하는 Asset Foundry입니다. 2D 산출과 모션 검증은 진행됐지만 원화 보존 8방향 자동화와 제품용 3D 경로는 아직 미완성입니다.",
      tags: ["AI", "2D Sprite", "Unity", "Blender", "ComfyUI", "MCP"],
      variant: "warning" as const,
    },
    {
      type: "AI / 게임",
      title: "랜덤 디펜스 게임",
      status: "개발 중",
      subtitle: "AI 에셋 파이프라인과 결정론 전투 코어를 결합한 웹 게임",
      description:
        "140종 몬스터 도감과 3마리 조합을 중심으로 서버 권위·결정론 전투·재시뮬레이션·보상 위변조 방지를 적용하고 있습니다. 전투 코어는 진행됐지만 ShowRoom의 대량 캐릭터 자산 파이프라인이 미완성이라 전체 게임은 개발 중입니다.",
      tags: ["Unity WebGL", "C#", ".NET", "Deterministic", "Server Authority", "AI Asset Pipeline"],
      variant: "warning" as const,
    },
  ]

  return (
    <section className="bg-backgroundSoft py-4xl">
      <div className="container mx-auto max-w-6xl px-md">
        <div className="mb-xxl text-left">
          <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">주요 AI 프로젝트</h2>
          <p className="mt-md max-w-2xl font-body text-body text-textSecondary">
            AI를 실제 제품 흐름에 연결하고 있는 핵심 프로젝트입니다. 개발 중인 프로젝트는 현재 구현 상태를 그대로 표시했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-xl">
          {projects.map((project, index) => {
            const FlowComponent = flowComponents[index]

            return (
              <Card key={project.title} className="group flex flex-col overflow-hidden md:flex-row">
                <div className="flex flex-1 flex-col p-xl">
                  <div className="mb-lg flex flex-wrap gap-sm">
                    <Badge variant={project.variant}>{project.type}</Badge>
                    <Badge variant={project.status === "고도화 중" ? "info" : "warning"}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="mb-xs font-h3 text-h2 text-textPrimary">{project.title}</h3>
                  <p className="mb-md font-mono text-small text-textSecondary">{project.subtitle}</p>
                  <p className="mb-xl flex-1 font-body text-body text-textMuted">{project.description}</p>

                  <div className="mb-lg flex flex-wrap gap-sm">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="default"
                        className="border-border bg-surfaceElevated text-textSecondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <Button variant="outline" className="w-full md:w-auto" href="/projects">
                      상세 보기
                    </Button>
                  </div>
                </div>

                <div className="min-h-[250px] w-full border-t border-border bg-surfaceElevated md:w-2/5 md:border-l md:border-t-0">
                  <FlowComponent />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}