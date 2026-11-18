const cases = [
  { title: "채용 합격자 통합 관리 시스템", period: "ASP.NET WebForms · JavaScript · jQuery · MS SQL Server", rows: [
    ["다룬 업무", "합격 후 오퍼레터·품의·계약·발령으로 이어지는 절차를 다뤘습니다."],
    ["본인 역할", "아키텍처 설계와 전반 개발을 담당했습니다."],
    ["조치", "오퍼레터·품의·계약·발령 절차를 통합 관리하는 시스템을 구축했습니다."],
    ["구현 내용", "합격 이후 절차의 통합 관리 시스템 구축 경험입니다. "],
  ]},
  { title: "재고관리·도매 사이트 개선", period: "ASP.NET MVC · MS SQL Server · JavaScript · jQuery · Vue", rows: [
    ["문제", "느린 쿼리와 기존 비즈니스 로직의 개선이 필요했습니다."],
    ["본인 역할", "화면·백엔드·프로시저 개발을 담당했습니다."],
    ["조치", "느린 쿼리를 튜닝하고 비즈니스 로직을 개선했습니다. Vue를 도입해 프론트엔드와 백엔드를 분리했습니다."],
    ["개선 내용", "프론트엔드·백엔드 분리와 유지보수 구조 개선 경험입니다. "],
  ]},
]

export function ExperienceSummary() {
  return (
    <section id="work-cases" className="scroll-mt-24 bg-backgroundSoft py-14">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-primarySoft">Professional experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">대표 업무 사례</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-textSecondary">여러 업무 프로젝트 중 채용 합격자 관리와 재고·도매 사이트 개선 사례를 자세히 정리했습니다.</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">{cases.map(item => <article key={item.title} className="rounded-xl border border-border bg-surface p-5 sm:p-7"><p className="text-xs text-primarySoft">{item.period}</p><h3 className="mt-3 text-xl font-semibold leading-8">{item.title}</h3><dl className="mt-5 divide-y divide-border">{item.rows.map(([label,text])=><div key={label} className="py-4"><dt className="text-sm font-semibold text-textPrimary">{label}</dt><dd className="mt-2 text-sm leading-7 text-textSecondary">{text}</dd></div>)}</dl></article>)}</div>
      </div>
    </section>
  )
}
