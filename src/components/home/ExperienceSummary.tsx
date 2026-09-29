import {
  DatabaseZap,
  Network,
  PanelsTopLeft,
  UsersRound,
} from "lucide-react"

const domains = [
  "HR/채용",
  "회계",
  "전자결재",
  "커머스/WMS",
  "재고",
  "SQL 성능 개선",
  "외부 API",
  "레거시 유지보수",
]

const challenges = [
  {
    title: "데이터가 커질수록 느려지는 조회",
    body: "데이터가 증가하며 느려지는 조회를 실행 계획, 인덱스와 SQL 접근 패턴 중심으로 분석하고 병목을 좁혔습니다.",
    tags: ["MS SQL", "쿼리 최적화", "대용량 데이터"],
    icon: DatabaseZap,
  },
  {
    title: "복잡한 업무 규칙을 시스템 흐름으로",
    body: "예외가 많은 채용·계약·회계·결재 업무를 상태와 권한 중심의 시스템 흐름으로 구조화했습니다.",
    tags: ["업무 설계", "워크플로우", "유지보수성"],
    icon: Network,
  },
  {
    title: "서로 다른 시스템을 하나의 운영 흐름으로",
    body: "외부 API와 사내 시스템을 연결해 중복 작업을 줄이고 하나의 운영 흐름으로 이어지게 만들었습니다.",
    tags: ["외부 API", "데이터 연동", "운영 효율화"],
    icon: PanelsTopLeft,
  },
  {
    title: "다양한 도메인과 함께한 개발 경험",
    body: "HR, 회계, 커머스, 재고부터 AI 서비스와 게임까지 문제 정의부터 구현·운영까지 경험했습니다.",
    tags: ["기획 · 개발", "프로덕트", "지속적 개선"],
    icon: UsersRound,
  },
]

export function ExperienceSummary() {
  return (
    <section className="bg-backgroundSoft py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
              Experience
            </p>
            <h2 className="mt-1.5 text-[clamp(2rem,3vw,2.55rem)] font-[740] tracking-[-0.04em] text-textPrimary">
              10년+의 업무 시스템 경험
            </h2>
          </div>
          <p className="max-w-[590px] text-sm leading-6 text-textSecondary lg:justify-self-end">
            회사 내부 화면, 소스, 고객 정보는 공개하지 않지만
            다양한 도메인의 업무 시스템을 설계하고 개발해온 경험을 문제의 범위와 기술적 판단 중심으로 정리합니다.
          </p>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {domains.map((domain) => (
            <span
              key={domain}
              className="rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] text-textSecondary"
            >
              {domain}
            </span>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {challenges.map((challenge) => {
            const Icon = challenge.icon

            return (
              <article key={challenge.title} className="rounded-xl border border-border bg-surface p-5">
                <Icon className="h-6 w-6 text-primarySoft" strokeWidth={1.6} />
                <h3 className="mt-4 text-[15px] font-semibold leading-5 text-textPrimary">{challenge.title}</h3>
                <p className="mt-3 text-[12px] leading-5 text-textSecondary">{challenge.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[9px] text-textMuted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
