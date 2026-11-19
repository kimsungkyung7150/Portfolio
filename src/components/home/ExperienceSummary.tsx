const cases = [
  { title: "채용 합격자 통합 관리 시스템", period: "ASP.NET WebForms · JavaScript · jQuery · MS SQL Server", rows: [
    ["다룬 업무", "합격 후 오퍼레터·품의·계약·발령으로 이어지는 절차를 다뤘습니다."],
    ["본인 역할", "아키텍처 설계와 전반 개발을 담당했습니다."],
    ["조치", "오퍼레터, 품의, 계약, 발령 화면을 합격자별 업무 흐름으로 연결했습니다."],
    ["결과", "담당자가 한 시스템에서 합격자 건별로 오퍼레터부터 발령까지 이어서 처리할 수 있게 했습니다."],
  ]},
  { title: "재고관리·도매 사이트 개선", period: "ASP.NET MVC · MS SQL Server · JavaScript · jQuery · Vue", rows: [
    ["문제", "재고 조회가 느렸고 화면과 비즈니스 로직을 함께 유지보수해야 했습니다."],
    ["본인 역할", "화면·백엔드·프로시저 개발을 담당했습니다."],
    ["조치", "병목이 있던 재고 조회 쿼리와 프로시저를 튜닝하고, Vue로 화면을 분리했습니다."],
    ["결과", "재고 조회 병목을 개선하고, 화면과 서버의 업무 규칙을 각각 관리할 수 있는 구조를 만들었습니다."],
  ]},
]

export function ExperienceSummary() {
  return (
    <section id="work-cases" tabIndex={-1} aria-labelledby="work-cases-title" className="scroll-mt-28 bg-backgroundSoft py-14 sm:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-primarySoft">Professional experience</p>
        <h2 id="work-cases-title" className="mt-3 text-3xl font-semibold tracking-tight">대표 업무 사례</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-textSecondary">여러 업무 프로젝트 중 채용 합격자 관리와 재고·도매 사이트 개선 사례를 자세히 정리했습니다.</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">{cases.map(item => <article key={item.title} className="rounded-xl border border-border bg-surface p-5 sm:p-7"><p className="text-xs text-primarySoft">{item.period}</p><h3 className="mt-3 text-xl font-semibold leading-8">{item.title}</h3><dl className="mt-5 divide-y divide-border">{item.rows.map(([label,text])=><div key={label} className="py-4"><dt className="text-sm font-semibold text-textPrimary">{label}</dt><dd className="mt-2 text-sm leading-7 text-textSecondary">{text}</dd></div>)}</dl></article>)}</div>
      </div>
    </section>
  )
}
