import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

function ImpactSuiteFlow() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-lg text-center h-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          🖥️ Browser Trace
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          📡 API / SQL Capture
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-background border border-primary/30 px-md py-xs text-xs text-primarySoft w-full max-w-[180px]">
          🔗 Neo4j Graph
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-primary/10 border border-primary/40 px-md py-xs text-xs text-primarySoft w-full max-w-[180px]">
          🤖 AI (MCP) Analysis
        </div>
      </div>
    </div>
  )
}

function SmartFarmFlow() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-lg text-center h-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          🌱 NB-IoT Sensors
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          📨 MQTT Broker
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="flex gap-2 w-full max-w-[180px]">
          <div className="rounded-lg bg-background border border-success/30 px-sm py-xs text-xs text-success flex-1">
            Redis
          </div>
          <div className="rounded-lg bg-background border border-success/30 px-sm py-xs text-xs text-success flex-1">
            SQL
          </div>
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-success/10 border border-success/40 px-md py-xs text-xs text-success w-full max-w-[180px]">
          📊 Admin Dashboard
        </div>
      </div>
    </div>
  )
}

function LegacyHRFlow() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-lg text-center h-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          👤 User Request
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-background border border-border px-md py-xs text-xs text-textSecondary w-full max-w-[180px]">
          ⚙️ ASP.NET Backend
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-background border border-warning/30 px-md py-xs text-xs text-warning w-full max-w-[180px]">
          🗄️ SP / T-SQL Logic
        </div>
        <span className="text-textMuted text-xs">↓</span>
        <div className="rounded-lg bg-warning/10 border border-warning/40 px-md py-xs text-xs text-warning w-full max-w-[180px]">
          📋 Business Output
        </div>
      </div>
    </div>
  )
}

const flowComponents = [ImpactSuiteFlow, SmartFarmFlow, LegacyHRFlow]

export function FeaturedProjects() {
  const projects = [
    {
      type: "AI / Legacy Analysis",
      title: "ImpactSuite",
      subtitle: "Non-invasive legacy system analysis tool",
      description: "레거시 시스템을 직접 수정하지 않고 사용자 행동, API 호출, SQL 실행 흐름을 수집해 변경 영향과 병목을 분석하는 도구입니다.",
      tags: ["C#", "ASP.NET Core", "Playwright", "Neo4j", "GraphRAG"],
      variant: "default" as const
    },
    {
      type: "Architecture / IoT",
      title: "SmartFarm Admin/API",
      subtitle: "Sensor data monitoring and control platform",
      description: "NB-IoT/MQTT 기반 센서 데이터를 수집하고 ASP.NET Core API와 MVC Admin을 통해 스마트팜 상태를 모니터링하는 시스템입니다.",
      tags: ["ASP.NET Core", "MVC", "MQTT", "Redis", "Docker", "Kubernetes"],
      variant: "success" as const
    },
    {
      type: "Enterprise / Backend",
      title: "Legacy HR/EHR System",
      subtitle: "Business system development and troubleshooting",
      description: "ASP.NET과 MS SQL Server 기반 업무 시스템에서 기능 개발, 복잡한 SQL 분석, 운영 이슈 대응 경험을 쌓았습니다.",
      tags: ["ASP.NET WebForms", "MS SQL Server", "T-SQL", "Performance Analysis"],
      variant: "warning" as const
    }
  ]

  return (
    <section className="bg-backgroundSoft py-4xl">
      <div className="container mx-auto max-w-6xl px-md">
        <div className="mb-xxl text-left">
          <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">Featured Projects</h2>
          <p className="mt-md font-body text-body text-textSecondary max-w-2xl">
            실무에서 마주한 복잡한 문제를 구조화하고, 분석 가능한 시스템으로 바꾸기 위해 진행한 주요 프로젝트와 경험입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-xl">
          {projects.map((project, index) => {
            const FlowComponent = flowComponents[index]
            return (
              <Card key={index} className="flex flex-col md:flex-row overflow-hidden group">
                <div className="flex-1 flex flex-col p-xl">
                  <div className="mb-lg">
                    <Badge variant={project.variant}>{project.type}</Badge>
                  </div>
                  <h3 className="font-h3 text-h2 text-textPrimary mb-xs">{project.title}</h3>
                  <p className="text-small text-textSecondary font-mono mb-md">{project.subtitle}</p>
                  <p className="font-body text-body text-textMuted mb-xl flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-sm mb-lg">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="default" className="bg-surfaceElevated border-border text-textSecondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <Button variant="outline" className="w-full md:w-auto" href="/projects">View Case Study</Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 bg-surfaceElevated border-t md:border-t-0 md:border-l border-border min-h-[250px]">
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
