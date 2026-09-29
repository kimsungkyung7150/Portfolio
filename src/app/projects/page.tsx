import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { projectDetails } from "@/lib/projectDetails"

type LegacyProject = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

type Category = {
  name: string
  description: string
  projects: LegacyProject[]
}

const otherCategories: Category[] = [
  {
    name: "IoT / 자동화",
    description: "반복 업무와 실시간 데이터 처리를 자동화한 프로젝트",
    projects: [
      {
        title: "스마트팜 관리/API",
        subtitle: "센서 데이터 모니터링 및 제어 플랫폼",
        description:
          "NB-IoT/MQTT 기반 센서 데이터를 수집하고 ASP.NET Core API와 관리 화면에서 생육 상태를 모니터링·관리하는 시스템을 구축했습니다.",
        tags: ["ASP.NET Core", "Redis", "Docker", "Kubernetes", "Prometheus"],
      },
      {
        title: "내부 자동화 도구",
        subtitle: "마이그레이션 및 설정 자동화",
        description:
          "서버 마이그레이션과 반복 운영 작업을 자동화해 작업 시간과 운영 실수를 줄이기 위한 Windows 유틸리티를 개발했습니다.",
        tags: ["C# WinForms", "MS SQL Server", "Automation"],
      },
    ],
  },
  {
    name: "업무 시스템",
    description: "ASP.NET과 MS SQL Server 기반 엔터프라이즈 업무 시스템 구축",
    projects: [
      {
        title: "채용 프로세스 시스템",
        subtitle: "채용 전 과정 통합 관리",
        description:
          "채용 합격 이후의 오퍼레터, 품의, 계약, 발령 과정을 하나의 업무 흐름으로 연결하는 관리 시스템을 구축했습니다.",
        tags: ["ASP.NET WebForms", "MS SQL Server", "jQuery"],
      },
      {
        title: "회계 업무 시스템",
        subtitle: "재무 데이터 처리와 업무 자동화",
        description:
          "매출·원가·환율 계산 등 복잡한 회계 업무 로직을 프로세스로 구현하고 반복 업무를 자동화했습니다.",
        tags: ["ASP.NET MVC", "MS SQL Server", "T-SQL"],
      },
      {
        title: "전자결재 및 휴가 관리",
        subtitle: "사내 인사·결재 도구",
        description:
          "전자결재 문서의 자동 결재선 지정, 대체 결재, 전자서명과 연차 일수 자동 계산 기능을 구현했습니다.",
        tags: ["ASP.NET MVC", "MS SQL Server"],
      },
    ],
  },
  {
    name: "커머스 / 운영",
    description: "쇼핑몰, 물류, 재고 관리 등 커머스 운영 시스템 개선",
    projects: [
      {
        title: "B2B 쇼핑몰 연동",
        subtitle: "주문 흐름 및 WMS 연동",
        description:
          "B2B 대량 주문 시스템과 WMS를 연동해 주문·출고 처리 흐름을 자동화했습니다.",
        tags: ["ASP.NET MVC", "WMS API", "C#"],
      },
      {
        title: "재고 관리 및 성능 튜닝",
        subtitle: "도매 플랫폼 개선",
        description:
          "대규모 도매 사이트의 재고 관리 기능을 개선하고 MS SQL Server의 병목 쿼리를 튜닝해 조회 성능을 높였습니다.",
        tags: ["ASP.NET MVC", "Vue.js", "SQL Tuning"],
      },
    ],
  },
  {
    name: "초기 웹 프로젝트",
    description: "개발 기반을 만든 초기 교육·학습 프로젝트",
    projects: [
      {
        title: "Misty Foods",
        subtitle: "취향 기반 음식 탐색",
        description:
          "사용자의 색상·느낌·보유 재료 등 감각적 선택값을 검색 조건으로 변환해 음식을 추천하는 Java/JSP 기반 웹 서비스입니다. Oracle과 Neo4j를 함께 활용했습니다.",
        tags: ["Java", "JSP", "Oracle", "Neo4j", "Spring"],
      },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-md py-4xl">
      <div className="mb-xxl text-center">
        <h1 className="font-h1 text-h1 text-textPrimary mb-sm">전체 프로젝트</h1>
        <p className="mx-auto max-w-2xl font-body text-body text-textSecondary">
          현재 개발 중인 AI 제품부터 엔터프라이즈 업무 시스템까지, 실제 문제를 해결하며 확장해 온 프로젝트입니다.
        </p>
      </div>

      <section className="mb-4xl">
        <div className="mb-lg border-b border-border pb-md">
          <h2 className="font-h2 text-h2 text-textPrimary">주요 AI 프로젝트</h2>
          <p className="mt-xs font-body text-body text-textSecondary">
            Routoon, ShowRoom, 랜덤 디펜스 게임과 ImpactSuite를 핵심 AI 프로젝트로 관리하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
          {projectDetails.map((project) => (
            <Card
              key={project.slug}
              className="flex h-full flex-col transition-all hover:border-primarySoft/50 hover:shadow-glow"
            >
              <CardHeader>
                <div className="mb-sm flex flex-wrap gap-xs">
                  <Badge variant={project.statusVariant}>{project.type}</Badge>
                  <Badge variant={project.statusVariant}>{project.status}</Badge>
                </div>
                <CardTitle className="text-textPrimary">{project.title}</CardTitle>
                <CardDescription className="mt-xs font-mono text-xs text-textMuted">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="mb-md flex-1 font-body text-small text-textSecondary">
                  {project.summary}
                </p>

                <div className="mb-lg flex flex-wrap gap-xs">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="default"
                      className="border-border bg-surfaceElevated px-2 py-1 text-xs text-textSecondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-sm">
                  <Button variant="outline" href={"/projects/" + project.slug}>
                    상세 보기
                  </Button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-lg py-sm text-small font-h3 text-textPrimary transition-all hover:-translate-y-[1px] hover:shadow-glow"
                    >
                      {project.liveLabel ?? "서비스 접속"} ↗
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-4xl">
        {otherCategories.map((category) => (
          <section key={category.name}>
            <div className="mb-lg border-b border-border pb-md">
              <h2 className="font-h2 text-h2 text-textPrimary">{category.name}</h2>
              <p className="mt-xs font-body text-body text-textSecondary">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <Card key={project.title} className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle className="text-textPrimary">{project.title}</CardTitle>
                    <CardDescription className="mt-xs font-mono text-xs text-textMuted">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="mb-md flex-1 font-body text-small text-textSecondary">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-xs">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="border-border bg-surfaceElevated px-2 py-1 text-xs text-textSecondary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}