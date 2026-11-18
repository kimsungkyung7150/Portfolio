import Link from "next/link"

import { ExperienceSummary } from "@/components/home/ExperienceSummary"

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

export function WorkProjectsContent({ embedded = false }: { embedded?: boolean }) { const Title = embedded ? "h2" : "h1"; return <>
<header className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><p className="text-sm text-primarySoft">Professional Projects</p><Title className="mt-3 text-4xl font-semibold">업무 프로젝트</Title><p className="mt-5 max-w-3xl text-base leading-8 text-textSecondary">회사에서 맡은 업무와 본인 역할, 구현·개선 내용을 정리했습니다. 경력과 개인 개발 기록은 각각의 영역으로 구분합니다.</p></header>
<ExperienceSummary />
<div className="mx-auto max-w-7xl px-5 lg:px-8">
      <section className="border-t border-border py-14">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Previous Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">업무 프로젝트 경험</h2>
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-textSecondary">
              실제 회사 화면이나 소스 대신 어떤 도메인과 기술 문제를 다뤘는지 요약합니다.
            </p>
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
<aside className="mb-14 rounded-xl border border-border p-6"><h2 className="text-lg font-semibold">이전 웹 개발 참여 기록</h2><p className="mt-3 text-sm leading-7 text-textSecondary">K-POP 쇼핑몰과 교회 홈페이지 개발에 참여한 경험을 별도 기록으로 정리했습니다.</p><Link href="/project-records" className="mt-3 inline-flex min-h-11 items-center text-primarySoft">이전 프로젝트 기록 보기</Link></aside>
</div></> }
