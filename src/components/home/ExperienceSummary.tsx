import Link from "next/link"

const domains = [
  "HR / 채용",
  "회계",
  "전자결재",
  "커머스 / WMS",
  "재고 관리",
  "SQL 성능 개선",
  "외부 API 연동",
  "레거시 유지보수",
]

const challenges = [
  {
    title: "데이터가 커질수록 느려지는 조회",
    role: "Backend / Database",
    decision: "서버 증설보다 실행 계획과 SQL 접근 패턴을 먼저 추적하고 병목을 좁혔습니다.",
    stack: "ASP.NET · MS SQL Server · T-SQL",
  },
  {
    title: "복잡한 업무 규칙을 시스템 흐름으로",
    role: "Business System",
    decision: "채용·계약·발령, 회계, 결재처럼 예외가 많은 업무를 상태와 권한 중심으로 구조화했습니다.",
    stack: "ASP.NET MVC/WebForms · SQL",
  },
  {
    title: "서로 다른 시스템을 하나의 운영 흐름으로",
    role: "Integration",
    decision: "WMS, Slack, Calendar 등 외부 시스템을 실제 업무 프로세스에 맞춰 연결했습니다.",
    stack: "REST API · C# · Automation",
  },
]

export function ExperienceSummary() {
  return (
    <section className="bg-backgroundSoft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
              Engineering Experience
            </p>
            <h2 className="mt-2 text-h2 font-[720] tracking-h2 text-textPrimary">
              10년+의 업무 시스템 경험
            </h2>
            <p className="mt-5 max-w-[32rem] text-sm leading-7 text-textSecondary">
              이전 회사의 화면·소스·내부 데이터는 공개하지 않습니다.
              대신 어떤 문제를 맡았고 어떤 기술적 판단을 했는지 중심으로 경험을 설명합니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {domains.map((domain) => (
                <span key={domain} className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-textSecondary">
                  {domain}
                </span>
              ))}
            </div>

            <Link href="/experience" className="mt-8 inline-flex text-sm font-semibold text-primarySoft hover:text-white">
              전체 경력 보기 →
            </Link>
          </div>

          <div className="space-y-3">
            {challenges.map((challenge, index) => (
              <article key={challenge.title} className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-textMuted">0{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-semibold text-textPrimary">{challenge.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-textMuted">{challenge.role}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-textSecondary">{challenge.decision}</p>
                    <p className="mt-3 font-mono text-[11px] text-textMuted">{challenge.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
