import { Badge } from "@/components/ui/Badge"

const experiences = [
  {
    period: "2026 - 현재",
    title: "Routoon · ShowRoom · 랜덤 디펜스 게임",
    description: "AI 제품과 게임 제작 파이프라인 개발",
    details: [
      "Routoon: 정본(Canon)·캐릭터 보이스·회차 맥락을 기반으로 AI 웹소설 생성·검수·발행 파이프라인 고도화",
      "ShowRoom: 캐릭터 원화를 방향·액션별 2D 스프라이트와 모션 프레임으로 생성·검증하는 게임 에셋 파이프라인 개발",
      "랜덤 디펜스 게임: 결정론 전투 코어, 서버 권위, 재시뮬레이션과 AI 에셋 파이프라인을 결합한 Unity WebGL 게임 개발",
    ],
    tags: ["AI", "LLM", "MCP", "Unity WebGL", "Neo4j", "ASP.NET Core"],
  },
  {
    period: "2024 - 현재",
    title: "ImpactSuite",
    description: "AI 지원 레거시 시스템 분석",
    details: [
      "애플리케이션 코드를 직접 수정하지 않고 사용자 행동·API·SQL 실행 흐름을 수집하는 분석 구조 설계",
      "Neo4j 그래프를 이용해 의존성과 변경 영향 범위를 구조화",
      "AI(MCP)를 결합해 병목·원인 탐색과 레거시 분석을 자동화하는 도구 개발",
    ],
    tags: ["C#", "ASP.NET Core", "Playwright", "Neo4j", "GraphRAG", "MCP"],
  },
  {
    period: "2023 - 2026",
    title: "인사 및 채용 시스템",
    description: "통합 인사 관리 시스템 고도화 및 외부 플랫폼 API 연동",
    details: [
      "채용 합격 이후 오퍼레터, 계약, 발령까지 이어지는 HR 관리 흐름 구축",
      "카카오스타일 고도화 프로젝트 수행",
      "Slack 및 Google Calendar API 연동을 통한 업무 편의성 개선",
    ],
    tags: ["ASP.NET", "MS SQL Server", "API Integration", "Slack API"],
  },
  {
    period: "2021 - 2022",
    title: "엔터프라이즈 업무 시스템 확장",
    description: "회계·전자결재·커머스·재고 관리 시스템 개발",
    details: [
      "매출·원가·환율 계산 등 회계 업무 자동화 기능 개발",
      "전자결재 자동 결재선, 대체결재, 전자서명과 연차 관리 기능 구현",
      "B2B 쇼핑몰과 WMS 연동, 대규모 재고 조회 성능 개선",
    ],
    tags: ["ASP.NET MVC", "ASP.NET WebForms", "Vue.js", "SQL Tuning"],
  },
  {
    period: "2015 - 2018",
    title: "웹 유지보수 및 시스템 기반 구축",
    description: "업무 시스템 유지보수와 웹사이트 제작",
    details: [
      "다양한 웹사이트 제작·유지보수 및 성능 최적화",
      "교육·행정 관리 시스템의 레거시 구조 분석과 장애 대응",
      "마이그레이션 자동화 및 WinForms 업무 유틸리티 개발",
    ],
    tags: ["C#", "ASP.NET", "JavaScript", "MS SQL Server", "WinForms"],
  },
  {
    period: "2014",
    title: "초기 웹 프로젝트",
    description: "웹 프로그래밍 입문 및 데이터베이스 설계",
    details: [
      "사용자의 감각적 선호와 보유 재료를 음식 추천으로 연결하는 알고리즘 구현",
      "Oracle과 Neo4j 그래프 데이터베이스를 결합한 데이터 구조 설계",
      "Ajax 기반 실시간 UI와 계층형 게시판 커뮤니티 구현",
    ],
    tags: ["Java", "JSP", "Oracle 11g", "Neo4j", "Spring"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-4xl px-md py-4xl">
      <div className="mb-xxl text-center">
        <h1 className="font-h1 text-h1 text-textPrimary mb-sm">경력</h1>
        <p className="mx-auto max-w-2xl font-body text-body text-textSecondary">
          업무 시스템 개발 경험을 기반으로 현재는 AI 제품과 게임 제작 파이프라인까지 개발 범위를 확장하고 있습니다.
        </p>
      </div>

      <div className="space-y-xl">
        {experiences.map((exp) => (
          <div
            key={exp.period + exp.title}
            className="rounded-xl border border-border bg-surface p-xl shadow-card transition-colors hover:border-primarySoft/30"
          >
            <div className="mb-lg flex flex-col justify-between border-b border-border pb-md md:flex-row">
              <div>
                <h2 className="font-h2 text-h3 text-textPrimary">{exp.title}</h2>
                <p className="mt-xs font-mono text-small text-primarySoft">{exp.description}</p>
              </div>
              <div className="mt-xs md:mt-0">
                <Badge variant="default" className="text-small">
                  {exp.period}
                </Badge>
              </div>
            </div>

            <ul className="mb-xl ml-xs list-inside list-disc space-y-sm text-body text-textSecondary">
              {exp.details.map((detail) => (
                <li key={detail} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-xs">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-background px-2 py-1 text-xs text-textMuted"
                >
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