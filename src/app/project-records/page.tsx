import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "설계·이전 프로젝트 기록",
  description: "레거시 분석, 스마트팜, 음식 탐색 서비스와 웹 개발 참여 기록. 설계 내용과 진행 상태를 구분합니다.",
}

const records = [
  {
    id: "legacy", title: "레거시 시스템 분석", category: "설계 사례 · ImpactSuite 관련 기록", period: "2025–2026", role: "개인 프로젝트",
    summary: "정적 코드 분석과 실제 실행 증거를 구분하여, 화면에서 SQL까지의 의존성과 변경 영향을 탐색하는 구조를 설계했습니다.",
    flow: ["Roslyn 정적 분석 / UI·SQL 런타임 수집", "MSSQL Fact 정규화", "Neo4j 의존성 그래프", "정·역방향 영향도 탐색"],
    points: ["정적 분석 결과는 후보 관계, 런타임 수집 결과는 관측된 실행 관계로 구분합니다.", "Menu·Screen·Action·SQL·Table·Class·Method를 연결하고 GraphRAG 기반 탐색을 설계했습니다.", "민감 정보 마스킹, 설정 외부화, 탐색 깊이와 Top-K 제한을 설계에 포함했습니다."],
    scope: "설계 단계의 기록입니다. 자동 탐색과 운영 환경 검증은 남은 과제이며, 구현 상태는 ImpactSuite 사례에 정리했습니다.",
    source: "레거시 시스템 분석 프로젝트.pptx · 설계 발표자료", stack: ".NET 8 · Roslyn · MS SQL Server · Neo4j · Redis · GraphRAG", href: "/projects/impactsuite", linkLabel: "ImpactSuite 사례 보기",
  },
  {
    id: "smart-farm", title: "스마트팜 데이터 파이프라인", category: "개인 설계·개발 기록", period: "2025", role: "개인 프로젝트",
    summary: "센서 수집부터 시계열 저장, 예측, 관리자 화면 전달까지 이어지는 데이터 처리 구조와 장애 대응 경로를 정리했습니다.",
    flow: ["Sensor → MQTT → Kafka", "ASP.NET Core → Bounded Channel", "InfluxDB / MSSQL / Redis", "ML.NET / SignalR → 관리자"],
    points: ["조회 실패를 대비한 3단계 fallback과 Outbox·Retry 기반 재시도 경로를 설계했습니다.", "예측 모델을 사용할 수 없는 경우 규칙 기반 대체 경로를 두었습니다.", "JWT·Refresh token rotation과 센서 API key를 분리하는 인증 구조를 설명했습니다."],
    scope: "데이터 처리 구조와 장애 대응을 설계한 개인 프로젝트입니다. 실농장 운영과 예측 성능 평가는 후속 과제입니다.",
    source: "스마트팜 프로젝트.pptx · 설계 발표자료", stack: "ASP.NET Core · MQTT · Kafka · InfluxDB · MSSQL · Redis · ML.NET · SignalR",
  },
  {
    id: "misty-foods", title: "Misty Foods · 색과 느낌으로 찾는 음식", category: "교육 팀 프로젝트", period: "2014", role: "DB 설계·구축 / Neo4j 설계·구축 / Java·JSP 개발",
    summary: "사용자가 선택한 색과 느낌, 보유한 재료를 음식 탐색으로 연결한 팀 프로젝트입니다. 입력된 조건 사이의 관계를 활용해 음식을 탐색합니다.",
    flow: ["색·느낌 또는 재료 입력", "관계 기반 음식 탐색", "추천 결과 / 레시피 외부 링크"],
    points: ["본인 담당 범위는 DB·Neo4j 설계와 구축, Java·JSP 개발입니다.", "팀 결과물에는 재료 기반 우선 추천, 계층형 게시판과 Ajax 댓글 흐름이 포함되어 있습니다."],
    scope: "2014년 교육 과정에서 진행한 팀 프로젝트입니다. 교육 당시 구현 내용을 중심으로 소개합니다.",
    source: "무의식에서 고객이 원하는 음식을 찾아주는 서비스.docx · 교육 프로젝트 보고서", stack: "Java · JSP · Spring · JavaScript · jQuery · Bootstrap · Tomcat 7 · Oracle 11g · Neo4j",
  },
]

const webRecords = [
  { title: "K-pop 쇼핑몰", name: "kpop.stylekorean.com", period: "2022.04–05", stack: ".NET · HTML · CSS · jQuery · MS SQL Server", scope: "2022년 K-POP 쇼핑몰 개발에 참여했습니다." },
  { title: "이천은광교회 홈페이지", name: "www.ieunkwang.or.kr", period: "기간 별도 확인", stack: ".NET MVC", scope: "과거 홈페이지 개발 기록입니다." },
  { title: "경동교회 홈페이지", name: "www.kdchurch.or.kr", period: "기간 별도 확인", stack: ".NET MVC", scope: "과거 홈페이지 개발 기록입니다." },
]

export default function ProjectRecordsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
      <Link href="/projects" className="inline-flex min-h-11 items-center text-sm text-primarySoft">← 전체 프로젝트</Link>
      <header className="mt-6 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primarySoft">Project archive</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">설계와 이전 개발 경험</h1>
        <p className="mt-6 text-base leading-8 text-textSecondary">대표 제품 외에도 데이터 처리, 시스템 분석, 웹 개발 경험을 기록했습니다. 각 프로젝트에서 맡은 역할과 설계 내용을 소개합니다.</p>
        <nav aria-label="프로젝트 기록 바로가기" className="mt-6 flex flex-wrap gap-2">
          {records.map((item) => <a key={item.id} href={"#" + item.id} className="inline-flex min-h-11 items-center rounded-lg border border-border px-3 text-sm text-textSecondary hover:border-primarySoft">{item.title.split(" · ")[0]}</a>)}
          <a href="#web" className="inline-flex min-h-11 items-center rounded-lg border border-border px-3 text-sm text-textSecondary hover:border-primarySoft">웹 개발 참여</a>
        </nav>
      </header>
      <div className="mt-12 space-y-8">
        {records.map((item) => (
          <article id={item.id} key={item.id} className="scroll-mt-24 rounded-xl border border-border bg-surface p-5 sm:p-8">
            <p className="text-xs font-medium text-primarySoft">{item.category} · {item.period}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-textPrimary sm:text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-textSecondary">{item.role}</p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-textSecondary">{item.summary}</p>
            <ol aria-label="처리 흐름" className="my-6 grid gap-2 sm:grid-cols-2">
              {item.flow.map((step, i) => <li key={step} className="flex gap-3 rounded-lg border border-border bg-backgroundSoft p-4 text-sm leading-6"><span className="font-mono text-primarySoft">0{i + 1}</span><span className="min-w-0 text-textPrimary">{step}</span></li>)}
            </ol>
            <ul className="space-y-3 text-sm leading-7 text-textSecondary">{item.points.map((point) => <li key={point} className="flex gap-3"><span aria-hidden="true" className="text-primarySoft">•</span><span>{point}</span></li>)}</ul>
            <div className="mt-6 border-t border-border pt-5">
              <h3 className="text-sm font-semibold text-textPrimary">진행 상태</h3>
              <p className="mt-2 text-sm leading-7 text-textSecondary">{item.scope}</p>
              <p className="mt-3 break-words text-xs leading-6 text-textSecondary">자료: {item.source}</p>
              <p className="mt-3 text-xs leading-6 text-primarySoft">{item.stack}</p>
              {item.href && <Link href={item.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primarySoft">{item.linkLabel}</Link>}
            </div>
          </article>
        ))}
      </div>
      <section id="web" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold">웹 개발 참여 기록</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-textSecondary">과거 웹 개발 참여 기록입니다. 외부 사이트의 현재 화면은 당시 구현 버전과 다를 수 있습니다.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{webRecords.map((item) => <article key={item.name} className="min-w-0 rounded-xl border border-border p-5"><p className="text-xs text-primarySoft">{item.period}</p><h3 className="mt-3 text-lg font-semibold">{item.title}</h3><a href={"https://" + item.name} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center break-all font-mono text-xs text-primarySoft">{item.name} ↗</a><p className="mt-4 text-sm leading-7 text-textSecondary">{item.scope}</p><p className="mt-4 text-xs leading-6 text-primarySoft">{item.stack}</p></article>)}</div>
      </section>
      
    </main>
  )
}
