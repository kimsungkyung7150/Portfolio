import Link from "next/link"
import { experiences } from "@/lib/experienceTimeline"
import type { Metadata } from "next"

import { Badge } from "@/components/ui/Badge"
import { projectDetails } from "@/lib/projectDetails"

export const metadata: Metadata = {
  title: "개인 프로젝트",
  description: "하루 업무 기억 시스템, Routoon AI 플랫폼 등 김성경의 제품 설계·구현·검증 사례를 살펴보세요.",
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Personal Projects</p>
          <h1 className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            개인 프로젝트,
            <span className="block text-textSecondary">설계와 구현의 기록.</span>
          </h1>
        </div>
        <p className="max-w-[36rem] text-[1.05rem] leading-8 text-textSecondary">
          공개 가능한 개인 프로젝트는 화면과 구조를 함께 정리했습니다.
          업무 프로젝트는 별도 탭에서 확인할 수 있습니다.
        </p>
      </header>
      <aside className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-textPrimary">설계·이전 프로젝트 기록</h2>
        <p className="mt-2 text-sm leading-7 text-textSecondary">레거시 분석, 스마트팜 데이터 파이프라인, 음식 탐색 교육 프로젝트와 웹 개발 참여 기록을 원본 근거·담당 역할·검증 범위로 나누어 정리했습니다.</p>
        <Link href="/project-records" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primarySoft">6개 프로젝트 기록 보기 →</Link>
      </aside>

      <section className="py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">주요 개인 프로젝트</h2>
          </div>
          <span className="hidden text-sm text-textMuted sm:block">{projectDetails.length} projects</span>
        </div>

        <p className="mb-6 text-sm leading-7 text-textSecondary">하루는 개인 환경 테스트 완료 후 실사용 예정이며, Routoon은 고도화 예정입니다. 그 외 프로젝트는 하드웨어 환경 개선 후 개발 재개 예정으로 묶어 소개합니다. 기존 구현 기록과 남은 품질·검증 과제는 각 사례에서 구분합니다.</p>
        {[
          { title: "테스트 완료 · 고도화 예정", slugs: ["haru", "routoon"] },
          { title: "하드웨어 환경 개선 후 개발 재개 예정", slugs: ["showroom", "idle-game", "random-defense", "impactsuite"] },
        ].map((group) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <h3 className="mb-4 text-lg font-semibold leading-7 text-textPrimary">{group.title}</h3>
            <div className="grid gap-4 md:grid-cols-2">
          {projectDetails.filter((project) => group.slugs.includes(project.slug)).map((project) => (
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
                <span className="shrink-0 whitespace-nowrap font-mono text-xs text-textMuted">0{projectDetails.indexOf(project) + 1}</span>
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
          </div>
        ))}
      </section>

      <section className="border-t border-border py-10"><h2 className="text-2xl font-semibold">개인 개발 기록</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{experiences.slice(0,2).map(item => <article key={item.title} className="rounded-xl border border-border p-6"><p className="text-sm text-primarySoft">{item.period} · {item.role}</p><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-textSecondary">{item.summary}</p><ul className="mt-4 space-y-2 text-sm leading-7 text-textSecondary">{item.points.map(point=><li key={point}>{point}</li>)}</ul><p className="mt-4 text-xs leading-6 text-textMuted">{item.stack}</p></article>)}</div></section>
    </div>
  )
}
