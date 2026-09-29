const experiences = [
  {
    period: "현재",
    title: "Routoon · ShowRoom · 랜덤 디펜스 게임",
    role: "Product / AI / Game Engineering",
    summary: "개인 제품을 직접 설계하고 구현하며 AI, WPF, Unity까지 개발 범위를 확장하고 있습니다.",
    points: [
      "Routoon: 정본·캐릭터 보이스·회차 맥락을 활용하는 AI 웹소설 생성·검수·발행 흐름 개발",
      "ShowRoom: WPF Studio와 Foundry Host를 분리한 AI 게임 에셋 제작·검수 파이프라인 개발",
      "랜덤 디펜스: 140종 몬스터와 3마리 조합, 웨이브 전투를 구현하는 Unity WebGL 프로젝트",
    ],
    stack: "React · ASP.NET Core · WPF · Neo4j · MCP · Unity",
  },
  {
    period: "2024 - 현재",
    title: "ImpactSuite",
    role: "AI-assisted Legacy Analysis",
    summary: "실행 증거를 기반으로 레거시 시스템의 구조와 변경 영향을 탐색하는 비침습 분석 도구를 설계했습니다.",
    points: [
      "브라우저 행동, API 호출, SQL 실행 흐름을 하나의 분석 경로로 연결",
      "Neo4j 그래프로 화면·API·서비스·SQL 간 의존성을 구조화",
      "AI(MCP)가 실행 증거를 근거로 병목과 영향 범위를 탐색하도록 설계",
    ],
    stack: "C# · ASP.NET Core · Playwright · Neo4j · MCP",
  },
  {
    period: "2023 - 2026",
    title: "인사 · 채용 시스템",
    role: "Enterprise Application Engineering",
    summary: "채용 이후 계약과 발령까지 이어지는 HR 업무 흐름과 외부 서비스 연동을 개발·고도화했습니다.",
    points: [
      "오퍼레터, 계약, 발령으로 이어지는 업무 흐름 구현",
      "Slack 및 Google Calendar 등 외부 API 연동",
      "운영 중인 업무 시스템의 기능 개선과 장애 대응",
    ],
    stack: "ASP.NET · MS SQL Server · REST API",
  },
  {
    period: "2021 - 2022",
    title: "회계 · 전자결재 · 커머스 · 재고",
    role: "Business Systems / Data",
    summary: "여러 업무 도메인의 복잡한 규칙과 대규모 데이터 조회 문제를 시스템으로 구현했습니다.",
    points: [
      "매출·원가·환율 계산 등 회계 업무 로직 자동화",
      "전자결재, 대체결재, 전자서명과 휴가 관리 기능 개발",
      "B2B 주문·WMS 연동과 재고 조회 SQL 성능 개선",
    ],
    stack: "ASP.NET MVC/WebForms · MS SQL Server · T-SQL · Vue.js",
  },
  {
    period: "2015 - 2020",
    title: "웹 · 업무 시스템 유지보수와 기반 구축",
    role: "Web / Backend Engineering",
    summary: "웹사이트와 업무 시스템을 운영하며 장애 원인 분석, 마이그레이션, 성능 개선 경험을 쌓았습니다.",
    points: [
      "ASP.NET 기반 업무 시스템 유지보수와 기능 개발",
      "SQL 병목 분석과 운영 성능 개선",
      "WinForms 기반 반복 운영 작업·마이그레이션 도구 개발",
    ],
    stack: "C# · ASP.NET · JavaScript · MS SQL Server · WinForms",
  },
]

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Experience</p>
          <h1 className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            10년+의 업무 시스템 경험
          </h1>
        </div>
        <div className="max-w-[36rem]">
          <p className="text-[1.05rem] leading-8 text-textSecondary">
            회사 내부 화면, 소스, 고객 데이터는 공개하지 않습니다.
            대신 맡았던 문제의 범위, 역할, 기술적 판단과 사용 기술을 중심으로 정리했습니다.
          </p>
        </div>
      </header>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {experiences.map((item) => (
          <article key={item.period + item.title} className="grid gap-5 py-8 lg:grid-cols-[150px_1fr] lg:gap-10">
            <div>
              <p className="font-mono text-xs text-primarySoft">{item.period}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-textMuted">{item.role}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-textPrimary">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-textSecondary">{item.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm text-textSecondary">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-primarySoft">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-[11px] text-textMuted">{item.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
