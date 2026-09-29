import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { projectDetails } from "@/lib/projectDetails"

const otherExperience = [
  {
    domain: "Enterprise",
    title: "인사 · 채용 시스템",
    description: "채용 이후 계약·발령까지 이어지는 업무 흐름과 외부 API 연동을 개발했습니다.",
    stack: "ASP.NET · MS SQL Server · REST API",
  },
  {
    domain: "Business Systems",
    title: "회계 · 전자결재",
    description: "회계 계산 로직과 결재·전자서명·휴가 관리 등 예외가 많은 업무 규칙을 시스템화했습니다.",
    stack: "ASP.NET MVC/WebForms · T-SQL",
  },
  {
    domain: "Commerce / Data",
    title: "B2B · WMS · 재고",
    description: "주문·물류 시스템 연동과 대규모 재고 조회의 SQL 병목을 분석하고 개선했습니다.",
    stack: "C# · MS SQL Server · WMS API · Vue.js",
  },
  {
    domain: "Automation",
    title: "운영 · 마이그레이션 도구",
    description: "반복되는 운영 작업과 시스템 이전 과정을 줄이기 위한 Windows 유틸리티를 개발했습니다.",
    stack: "C# · WinForms · MS SQL Server",
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Projects</p>
          <h1 className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            제품으로 증명하고,
            <span className="block text-textSecondary">업무 경험은 문제로 설명합니다.</span>
          </h1>
        </div>
        <p className="max-w-[36rem] text-[1.05rem] leading-8 text-textSecondary">
          현재 공개 가능한 제품은 실제 화면과 아키텍처를 함께 보여줍니다.
          과거 회사 프로젝트는 내부 자산을 노출하지 않고 역할과 기술적 문제 해결 중심으로 정리했습니다.
        </p>
      </header>

      <section className="py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">주요 제품</h2>
          </div>
          <span className="hidden text-sm text-textMuted sm:block">{projectDetails.length} projects</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projectDetails.map((project, index) => (
            <Link
              key={project.slug}
              href={"/projects/" + project.slug}
              className="group flex min-h-[300px] flex-col rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-primarySoft/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={project.statusVariant}>{project.type}</Badge>
                  <Badge variant={project.statusVariant}>{project.status}</Badge>
                </div>
                <span className="font-mono text-xs text-textMuted">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em] text-textPrimary group-hover:text-primarySoft">
                {project.title}
              </h3>
              <p className="mt-3 max-w-[32rem] text-sm leading-7 text-textSecondary">{project.summary}</p>
              <div className="mt-auto pt-8">
                <p className="font-mono text-[11px] leading-5 text-textMuted">{project.tags.slice(0, 6).join(" · ")}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-primarySoft">Case Study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-14">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Previous Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">업무 프로젝트 경험</h2>
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-textSecondary">
              실제 회사 화면이나 소스 대신 어떤 도메인과 기술 문제를 다뤘는지 요약합니다.
            </p>
            <Link href="/experience" className="mt-6 inline-flex text-sm font-semibold text-primarySoft hover:text-white">
              경력 자세히 보기 →
            </Link>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {otherExperience.map((item) => (
              <article key={item.title} className="grid gap-3 py-5 sm:grid-cols-[140px_1fr]">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-textMuted">{item.domain}</span>
                <div>
                  <h3 className="font-semibold text-textPrimary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-textSecondary">{item.description}</p>
                  <p className="mt-2 font-mono text-[11px] text-textMuted">{item.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
