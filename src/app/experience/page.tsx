import { Badge } from "@/components/ui/Badge"

const experiences = [
  {
    period: "2024 - Present",
    title: "AI-Assisted Tools & Architecture",
    description: "레거시 시스템 분석 자동화 및 스마트팜 관제 시스템 설계",
    details: [
      "AI(MCP) 연동 레거시 시스템 분석 도구 (ImpactSuite) 설계 및 개발",
      "NB-IoT/MQTT 기반 센서 데이터 수집 및 관제 시스템 구축 (SmartFarm)",
      "Docker/Kubernetes 기반 CI/CD 구축 및 Prometheus/Grafana 모니터링 환경 셋업"
    ],
    tags: [".NET 8", "ASP.NET Core", "Redis", "Docker", "Neo4j"]
  },
  {
    period: "2023 - 2026",
    title: "HR & Recruitment Systems",
    description: "통합 인사 관리 시스템 고도화 및 외부 플랫폼 API 연동",
    details: [
      "채용 합격자 오퍼레터, 계약, 발령 통합 인사(HR) 관리 시스템 구축",
      "카카오스타일 고도화 프로젝트 성공적 수행",
      "Slack 및 구글 캘린더 API 구축 연동을 통한 실무 업무 편의성 극대화"
    ],
    tags: ["ASP.NET", "MS SQL Server", "API Integration", "Slack API"]
  },
  {
    period: "2021 - 2022",
    title: "Enterprise Business Systems Expansion",
    description: "다양한 도메인의 엔터프라이즈 업무 시스템 및 상거래 시스템 고도화",
    details: [
      "매출 시점 관리, 환율 계산 등 회계 업무 자동화 기능 개발",
      "전자결재 자동 결재선 지정, 대체 결재, 전자서명 연차 관리 기능 구현",
      "B2B 쇼핑몰 WMS 연동 자동 주문 처리 및 대규모 도매 사이트 재고 관리 성능 개선"
    ],
    tags: ["ASP.NET MVC", "ASP.NET WebForms", "Vue.js", "SQL Tuning"]
  },
  {
    period: "2015 - 2018",
    title: "Web Maintenance & System Foundation",
    description: "업무 시스템 유지보수 및 홈페이지 제작 엔진 고도화",
    details: [
      "100여 개 이상 다양한 웹사이트 제작, 유지보수 및 성능 최적화",
      "교적/재정 관리 시스템의 레거시 구조 분석 및 장애 대응",
      "마이그레이션 자동화 도구 및 셋업 유틸리티(WinForms) 개발을 통한 내부 효율성 개선"
    ],
    tags: ["C#", "ASP.NET", "JavaScript", "MS SQL Server", "WinForms"]
  },
  {
    period: "2014",
    title: "Early Web Projects",
    description: "웹 프로그래밍 입문 및 DB 설계 (Misty Foods)",
    details: [
      "사용자의 감각적 선호(색상, 느낌)를 음식 추천으로 연결하는 알고리즘 구현",
      "Oracle과 Neo4j 그래프 데이터베이스를 결합한 데이터 구조 설계",
      "Ajax 기반 실시간 댓글 및 계층형 게시판 커뮤니티 구현"
    ],
    tags: ["Java", "JSP", "Oracle 11g", "Neo4j", "Spring"]
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-md py-4xl max-w-4xl">
      <div className="mb-xxl text-center">
        <h1 className="font-h1 text-h1 text-textPrimary mb-sm">Experience</h1>
        <p className="font-body text-body text-textSecondary max-w-2xl mx-auto">
          기술의 트렌드를 좇기보다, 비즈니스의 문제를 가장 안정적이고 효율적으로 해결하는 과정에 집중했습니다.
        </p>
      </div>

      <div className="space-y-xl">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-xl p-xl shadow-card hover:border-primarySoft/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between mb-lg border-b border-border pb-md">
              <div>
                <h2 className="font-h2 text-h3 text-textPrimary">{exp.title}</h2>
                <p className="text-small text-primarySoft font-mono mt-xs">{exp.description}</p>
              </div>
              <div className="mt-xs md:mt-0">
                <Badge variant="default" className="text-small">{exp.period}</Badge>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-sm text-body text-textSecondary mb-xl ml-xs">
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx} className="leading-relaxed">{detail}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-xs">
              {exp.tags.map(tag => (
                <span key={tag} className="text-xs bg-background border border-border text-textMuted px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
