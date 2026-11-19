import Link from "next/link"

import { ExperienceSummary } from "@/components/home/ExperienceSummary"

const otherExperience = [
  { domain: "Accounting", title: "회계 프로그램", description: "백엔드·프로시저·화면 개발을 맡아 매출 시점 관리와 환율 계산 등 회계 업무 자동화를 구현했습니다.", stack: "ASP.NET MVC · JavaScript · jQuery · MS SQL Server" },
  { domain: "B2B / Logistics", title: "B2B 쇼핑몰 · WMS 연동", description: "백엔드·프로시저·UI를 개발하고 화장품·케이팝 주문 시스템과 WMS를 연동한 자동 주문 처리를 구현했습니다.", stack: "ASP.NET MVC · JavaScript · jQuery" },
  { domain: "Approval", title: "전자결재 · 연차 관리", description: "화면과 기능 개발을 맡아 자동 결재선·대체 결재·전자서명 기능을 구현했습니다.", stack: "ASP.NET MVC · MS SQL Server · JavaScript · jQuery" },
  { domain: "Web / CMS", title: "홈페이지 제작 · 제작 엔진", description: "여러 스택의 홈페이지 제작·유지보수·기능 개선과 프리미엄 홈페이지 제작 엔진의 기능 확장·안정화 개발에 참여했습니다.", stack: "ASP.NET MVC · PHP · Classic ASP · MySQL · JavaScript · jQuery" },
  { domain: "Church Administration", title: "웹 교적 · 재정 관리", description: "유지보수와 테스트를 맡아 기능 개선과 장애 대응을 수행했습니다.", stack: "ASP.NET WebForms · MS SQL Server" },
  { domain: "Operations", title: "운영 자동화 도구", description: "마이그레이션 자동화와 서버 환경 설정 자동화 도구를 설계·개발했습니다.", stack: "C# WinForms · MS SQL Server" },
]

export function WorkProjectsContent({ embedded = false }: { embedded?: boolean }) { const Title = embedded ? "h2" : "h1"; return <>
<header className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><p className="text-sm text-primarySoft">Professional Projects</p><Title className="mt-3 text-4xl font-semibold">업무 프로젝트</Title><p className="mt-5 max-w-3xl text-base leading-8 text-textSecondary">회사에서 맡은 업무와 본인 역할, 구현·개선 내용을 정리했습니다. 경력과 개인 개발 기록은 각각의 영역으로 구분합니다.</p></header>
<ExperienceSummary />

<div className="mx-auto max-w-7xl px-5 lg:px-8">
      <section className="border-t border-border py-14">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Areas of Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">그 밖에 담당한 업무</h2>
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-textSecondary">
              회계·전자결재를 비롯한 업무 시스템 개발과 운영 자동화 경험입니다.
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
