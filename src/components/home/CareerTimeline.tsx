export function CareerTimeline() {
  const milestones = [
    {
      year: "2014",
      title: "Early Web Projects",
      description: "Java/JSP, Oracle, Neo4j 기반 초기 웹 프로젝트 구현 (Misty Foods). 색상과 느낌을 음식으로 연결하는 추천 흐름을 탐색했습니다."
    },
    {
      year: "2018-2020",
      title: "ASP.NET MVC/WebForms Development",
      description: "본격적인 ASP.NET 업무 시스템 유지보수와 기능 개선 시작. 성능 분석과 느린 쿼리 튜닝 경험을 쌓았습니다."
    },
    {
      year: "2021",
      title: "Legacy Business Systems Expansion",
      description: "회계, 전자결재, 쇼핑몰 등 다양한 엔터프라이즈 도메인으로 개발 영역을 확장했습니다."
    },
    {
      year: "2022",
      title: "Business Logic & Performance Optimization",
      description: "대규모 도매 사이트의 재고 관리 기능 고도화, 느린 쿼리 튜닝 및 B2B 쇼핑몰 WMS 연동 등 실무 환경의 성능 개선과 운영 효율화에 집중했습니다."
    },
    {
      year: "2023-2026",
      title: "HR & Recruitment Systems",
      description: "인사(HR) 통합 관리 시스템 구축에 주력했습니다. 카카오스타일 고도화 프로젝트를 성공적으로 수행하고, Slack 및 구글 캘린더 API를 연동하여 업무 편의성을 크게 높였습니다."
    },
    {
      year: "Ongoing",
      title: "Architecture & Side Projects",
      description: "실무와 병행하여 틈틈이 스마트팜 관제 시스템(IoT, Redis, K8s), 자동매매 시스템 등 백엔드 아키텍처 역량을 키우는 개인 프로젝트를 꾸준히 진행했습니다."
    },
    {
      year: "Present",
      title: "ImpactSuite (AI-Assisted Analysis)",
      description: "현재 핵심적으로 진행 중인 프로젝트입니다. 시스템 코드 수정 없이 실행 흐름을 수집하고, AI(MCP)를 활용해 레거시를 구조적으로 분석하는 도구를 개발하고 있습니다."
    }
  ]

  return (
    <section className="bg-surface py-4xl border-t border-border">
      <div className="container mx-auto max-w-4xl px-md">
        <div className="mb-xxl text-center">
          <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">Career Timeline</h2>
          <p className="mt-md font-body text-body text-textSecondary">
            경험이 누적될수록, 더 구조적이고 분석 가능한 시스템을 설계해 왔습니다.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-md md:ml-0">
          {milestones.map((item, index) => (
            <div key={index} className="mb-xl ml-lg relative">
              <div className="absolute -left-[1.8rem] top-1 h-4 w-4 rounded-full bg-background border-2 border-primarySoft" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-xs md:gap-md mb-xs">
                <span className="text-primarySoft font-mono font-bold">{item.year}</span>
                <h3 className="text-h3 font-h3 text-textPrimary">{item.title}</h3>
              </div>
              <p className="text-body text-textSecondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
