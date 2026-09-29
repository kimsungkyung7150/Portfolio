export function CareerTimeline() {
  const milestones = [
    {
      year: "2014",
      title: "초기 웹 프로젝트",
      description: "Java/JSP, Oracle, Neo4j를 활용한 웹 프로젝트를 만들며 서비스와 데이터 구조 설계 경험을 시작했습니다.",
    },
    {
      year: "2018-2020",
      title: "ASP.NET MVC/WebForms 개발",
      description: "ASP.NET 기반 업무 시스템 유지보수와 기능 개선을 수행하며 장애 분석, SQL 튜닝, 운영 대응 경험을 쌓았습니다.",
    },
    {
      year: "2021-2022",
      title: "엔터프라이즈 업무 시스템 확장",
      description: "회계, 전자결재, 쇼핑몰, 재고관리 등 여러 업무 도메인으로 개발 범위를 확장하고 대규모 데이터 처리와 성능 개선을 진행했습니다.",
    },
    {
      year: "2023-2026",
      title: "인사·채용 시스템",
      description: "채용부터 계약·발령까지 이어지는 HR 업무 흐름을 시스템화하고 외부 API 연동과 운영 고도화를 수행했습니다.",
    },
    {
      year: "2024-현재",
      title: "ImpactSuite · AI 시스템 분석",
      description: "실행 흐름과 데이터 의존성을 추적해 레거시 시스템의 변경 영향과 병목을 분석하는 AI(MCP) 기반 도구를 주요 AI 프로젝트로 개발했습니다.",
    },
    {
      year: "현재",
      title: "Routoon · ShowRoom · 랜덤 디펜스 게임",
      description: "현재 개발의 중심은 AI 웹소설 플랫폼 Routoon, AI 게임 에셋 파이프라인 ShowRoom, 그리고 140종 몬스터·3마리 조합·웨이브 전투를 구현하는 Unity WebGL 랜덤 디펜스 게임입니다.",
    },
  ]

  return (
    <section className="border-t border-border bg-surface py-4xl">
      <div className="container mx-auto max-w-4xl px-md">
        <div className="mb-xxl text-center">
          <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">경력 타임라인</h2>
          <p className="mt-md font-body text-body text-textSecondary">
            업무 시스템 개발에서 AI 기반 제품과 게임 제작 파이프라인까지 확장해 온 흐름입니다.
          </p>
        </div>

        <div className="relative ml-xl border-l-2 border-border">
          {milestones.map((item) => (
            <div key={item.year + item.title} className="relative mb-xl ml-lg">
              <div className="absolute -left-[1.8rem] top-1 h-4 w-4 rounded-full border-2 border-primarySoft bg-background" />
              <div className="mb-xs flex flex-col gap-xs md:flex-row md:items-baseline md:gap-md">
                <span className="font-mono font-bold text-primarySoft">{item.year}</span>
                <h3 className="font-h3 text-h3 text-textPrimary">{item.title}</h3>
              </div>
              <p className="text-body text-textSecondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}