import Link from "next/link"
import Image from "next/image"


import { Badge } from "@/components/ui/Badge"
import { projectDetails } from "@/lib/projectDetails"



export function ProjectsContent({ embedded = false }: { embedded?: boolean }) { const Title = embedded ? "h2" : "h1";
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Personal Projects</p>
          <Title className="mt-3 text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            개인 프로젝트,
            <span className="block text-textSecondary">설계와 구현의 기록.</span>
          </Title>
        </div>
        <p className="max-w-[36rem] text-[1.05rem] leading-8 text-textSecondary">
          공개 가능한 개인 프로젝트는 화면과 구조를 함께 정리했습니다.
          업무 프로젝트는 위의 업무 프로젝트 영역에서 확인할 수 있습니다.
        </p>
      </header>
      <aside className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-textPrimary">설계·이전 프로젝트 기록</h2>
        <p className="mt-2 text-sm leading-7 text-textSecondary">레거시 분석, 스마트팜 데이터 파이프라인, 음식 탐색 교육 프로젝트와 웹 개발 참여 기록을 원본 근거·담당 역할·검증 범위로 나누어 정리했습니다.</p>
        <Link href="/project-records" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primarySoft">설계·이전 프로젝트 기록</Link>
      </aside>

      <section className="py-14">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primarySoft">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">주요 개인 프로젝트</h2>
          </div>
          <span className="hidden text-sm text-textMuted sm:block">{projectDetails.length} projects</span>
        </div>

        <p className="mb-6 text-sm leading-7 text-textSecondary">하루는 개인 환경 테스트 완료 후 실사용 예정이며, Routoon은 고도화 예정입니다. 빛의 기사단은 모바일 UI와 품질 보완 중이며, ImpactSuite는 종료된 프로젝트입니다. 그 외 보류 프로젝트는 하드웨어 환경 개선 후 개발 재개 예정입니다. 기존 구현 기록과 남은 품질·검증 과제는 각 사례에서 구분합니다.</p>
        {[
          { title: "테스트 완료 · 고도화 예정", slugs: ["haru", "routoon"] },
          { title: "개발 보류 및 종료 기록", slugs: ["showroom", "idle-game", "random-defense", "impactsuite"] },
          { title: "제작·품질 보완 중", slugs: ["light-knights"] },
        ].map((group) => (
          <div key={group.title} className="mb-10 last:mb-0">
            <h3 className="mb-4 text-lg font-semibold leading-7 text-textPrimary">{group.title}</h3>
            <div className={`grid gap-4 ${group.slugs.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {projectDetails.filter((project) => group.slugs.includes(project.slug)).map((project) => (
            <article
              key={project.slug}
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
                <Link
                  href={"/projects/" + project.slug}
                  aria-label={`${project.title} 상세 보기`}
                  className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-primarySoft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarySoft"
                >
                  상세 보기 <span aria-hidden="true">→</span>
                </Link>
                <details className="group/summary mt-2 scroll-mt-28 border-t border-border pt-3">
                  <summary className="flex min-h-11 cursor-pointer items-center text-sm font-medium text-textSecondary">
                    <span className="group-open/summary:hidden">프로젝트 요약 펼치기</span>
                    <span className="hidden group-open/summary:inline">프로젝트 요약 접기</span>
                  </summary>
                  <div className="space-y-6 pt-5 text-sm leading-7 text-textSecondary">
                    <p>{project.description}</p>
                    <section><h4 className="font-semibold text-textPrimary">담당 역할</h4><p className="mt-2">{project.role}</p></section>
                    <section><h4 className="font-semibold text-textPrimary">다룬 문제</h4><p className="mt-2">{project.problem}</p></section>
                    <section><h4 className="font-semibold text-textPrimary">설계와 선택</h4><div className="mt-3 space-y-4">{project.decisions.map(item=><div key={item.title}><h5 className="font-medium text-textPrimary">{item.title}</h5><p>{item.reason}</p></div>)}</div></section>
                    <section><h4 className="font-semibold text-textPrimary">구현 범위와 현재 상태</h4><ul className="mt-2 list-disc space-y-2 pl-4">{project.currentScope.map(item=><li key={item}>{item}</li>)}</ul></section>
                    <section><h4 className="font-semibold text-textPrimary">구조</h4><div className="mt-3 space-y-3">{project.architecture.map(item=><div key={item.title}><h5 className="font-medium text-textPrimary">{item.title}</h5><p>{item.description}</p></div>)}</div></section>
                    {project.screenshotNote && <p className="text-xs leading-6 text-textMuted">{project.screenshotNote}</p>}
                    {project.screenshots.map(shot=><figure key={shot.src}><Image src={shot.src} alt={shot.alt} width={1000} height={700} sizes="(max-width:768px) 90vw, 600px" className="h-auto max-h-[600px] w-full rounded-lg border border-border object-contain"/><figcaption className="mt-2 text-xs leading-6 text-textMuted">{shot.caption}</figcaption></figure>)}
                  </div>
                </details>
              </div>
            </article>
          ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
