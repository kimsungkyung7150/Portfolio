import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

type Category = {
  name: string
  description: string
  projects: Project[]
}

const projectCategories: Category[] = [
  {
    name: "AI / 자동화",
    description: "레거시 시스템을 지능화하고 반복되는 작업을 자동화한 프로젝트",
    projects: [
      {
        title: "ImpactSuite",
        subtitle: "비침습형 레거시 시스템 분석 도구",
        description: "레거시 시스템을 직접 수정하지 않고 사용자 행동, API 호출, SQL 실행 흐름을 수집해 변경 영향과 병목을 분석하는 도구입니다. AI(MCP) 기반 자동 탐색과 결합 중입니다.",
        tags: ["C#", "ASP.NET Core", "Playwright", "Neo4j", "AI (MCP)"],
      },
      {
        title: "스마트팜 관리/API",
        subtitle: "센서 데이터 모니터링 및 예측",
        description: "NB-IoT/MQTT 기반 센서 데이터를 실시간으로 수집하고, 생육 상태를 모니터링 및 제어하는 백엔드/관리자 플랫폼 구축.",
        tags: ["ASP.NET Core", "Redis", "Docker", "Kubernetes", "Prometheus"],
      },
      {
        title: "내부 자동화 도구",
        subtitle: "마이그레이션 및 설정 자동화 도구",
        description: "서버 마이그레이션과 반복적인 셋업 과정을 자동화하여 내부 운영팀의 작업 시간을 단축하는 Windows 유틸리티 개발.",
        tags: ["C# WinForms", "MS SQL Server", "자동화"],
      }
    ]
  },
  {
    name: "업무 시스템",
    description: "ASP.NET 및 MS SQL Server 기반 엔터프라이즈 업무 시스템 구축",
    projects: [
      {
        title: "채용 프로세스 시스템",
        subtitle: "채용 전 과정 통합 관리",
        description: "채용 합격 이후 발생하는 오퍼레터, 품의, 계약, 발령 프로세스를 하나의 업무 흐름으로 통합 연결하는 관리 시스템 구축.",
        tags: ["ASP.NET WebForms", "MS SQL Server", "jQuery"],
      },
      {
        title: "회계 업무 시스템",
        subtitle: "재무 데이터 처리",
        description: "매출 시점 관리, 환율 계산 등 복잡한 회계 업무 로직을 프로시저로 구현하여 실무자의 수기 업무 자동화.",
        tags: ["ASP.NET MVC", "MS SQL Server", "T-SQL"],
      },
      {
        title: "전자결재 및 휴가 관리",
        subtitle: "사내 인사 도구",
        description: "전자결재 문서의 자동 결재선 지정, 대체 결재, 전자서명 기능 구현 및 연차 일수 자동 계산 로직 적용.",
        tags: ["ASP.NET MVC", "MS SQL Server"],
      }
    ]
  },
  {
    name: "커머스 / 운영",
    description: "쇼핑몰, 물류, 재고 관리 등 이커머스 운영 시스템 개선",
    projects: [
      {
        title: "B2B 쇼핑몰 연동",
        subtitle: "주문 흐름 및 WMS 연동",
        description: "화장품 및 K-Pop 상품의 B2B 대량 주문 시스템과 WMS(창고관리시스템) 연동으로 실시간 주문 처리 흐름 자동화.",
        tags: ["ASP.NET MVC", "WMS API", "C#"],
      },
      {
        title: "재고 관리 및 성능 튜닝",
        subtitle: "도매 플랫폼 개선",
        description: "대규모 도매 사이트의 재고 관리 기능을 Vue.js로 재작성하고, MS SQL Server의 느린 쿼리를 튜닝하여 조회 속도 개선.",
        tags: ["ASP.NET MVC", "Vue.js", "SQL 튜닝"],
      }
    ]
  },
  {
    name: "초기 웹 프로젝트",
    description: "개발 역량의 기반이 된 초기 교육 및 학습 프로젝트",
    projects: [
      {
        title: "Misty Foods",
        subtitle: "취향 기반 음식 탐색",
        description: "사용자의 색깔, 느낌, 보유 재료 등 감각적 선택값을 탐색 조건으로 변환하여 적절한 음식을 추천하는 Java/JSP 기반 웹 서비스. DB 설계와 Neo4j 그래프 데이터베이스 활용의 출발점.",
        tags: ["Java", "JSP", "Oracle", "Neo4j", "Spring"],
      }
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-md py-4xl max-w-6xl">
      <div className="mb-xxl text-center">
        <h1 className="font-h1 text-h1 text-textPrimary mb-sm">전체 프로젝트</h1>
        <p className="font-body text-body text-textSecondary max-w-2xl mx-auto">
          다양한 도메인에서 마주한 문제를 기술로 해결해 온 발자취입니다.
        </p>
      </div>

      <div className="flex flex-col gap-4xl">
        {projectCategories.map((category) => (
          <section key={category.name}>
            <div className="mb-lg border-b border-border pb-md">
              <h2 className="font-h2 text-h2 text-textPrimary">{category.name}</h2>
              <p className="text-textSecondary mt-xs font-body text-body">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project, idx) => (
                <Card key={idx} className="flex flex-col h-full hover:border-primarySoft/50 hover:shadow-glow transition-all">
                  <CardHeader>
                    <CardTitle className="text-textPrimary">{project.title}</CardTitle>
                    <CardDescription className="font-mono text-xs mt-xs text-textMuted">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="font-body text-small text-textSecondary flex-1 mb-md">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-xs mb-md">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="default" className="text-xs bg-surfaceElevated border-border text-textSecondary px-2 py-1">
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
