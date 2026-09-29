import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/Badge"
import { getProjectDetail, projectDetails } from "@/lib/projectDetails"

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectDetail(slug)

  if (!project) {
    return { title: "프로젝트" }
  }

  return {
    title: project.title + " | 김성경 포트폴리오",
    description: project.summary,
  }
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-lg">
      <p className="mb-xs font-mono text-xs uppercase tracking-[0.16em] text-primarySoft">{eyebrow}</p>
      <h2 className="font-h2 text-h2 text-textPrimary">{title}</h2>
      {description && <p className="mt-sm max-w-3xl text-body text-textSecondary">{description}</p>}
    </div>
  )
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectDetail(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-6xl px-md py-4xl">
      <Link
        href="/projects"
        className="mb-xl inline-flex text-small text-textMuted transition-colors hover:text-textPrimary"
      >
        ← 전체 프로젝트
      </Link>

      <header className="mb-xxl border-b border-border pb-xl">
        <div className="mb-md flex flex-wrap gap-sm">
          <Badge variant={project.statusVariant}>{project.type}</Badge>
          <Badge variant={project.statusVariant}>{project.status}</Badge>
        </div>

        <div className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-h1 text-h1 text-textPrimary">{project.title}</h1>
            <p className="mt-sm max-w-3xl font-mono text-body text-textSecondary">{project.subtitle}</p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary px-lg py-sm text-small font-h3 text-textPrimary transition-all hover:-translate-y-[1px] hover:shadow-glow"
            >
              {project.liveLabel ?? "서비스 접속"} ↗
            </a>
          )}
        </div>
      </header>

      <section className="rounded-xl border border-border bg-surface p-xl shadow-card">
        <SectionTitle eyebrow="Overview" title="프로젝트 개요" />
        <p className="max-w-4xl leading-relaxed text-textSecondary">{project.description}</p>
      </section>

      <section className="mt-xxl">
        <SectionTitle
          eyebrow="Technology"
          title="기술 스택"
          description="단순 키워드 나열이 아니라 실제 역할별로 사용 기술을 구분했습니다."
        />
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {project.techGroups.map((group) => (
            <div key={group.name} className="rounded-xl border border-border bg-surface p-lg shadow-card">
              <h3 className="mb-md font-h3 text-h3 text-textPrimary">{group.name}</h3>
              <div className="flex flex-wrap gap-xs">
                {group.items.map((item) => (
                  <Badge key={item} variant="default" className="bg-surfaceElevated text-textSecondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-xxl">
        <SectionTitle
          eyebrow="Architecture"
          title="아키텍처"
          description="요청이 들어와 결과가 만들어질 때 어떤 계층을 통과하는지 프로젝트별 실제 구조를 요약했습니다."
        />
        <div className="grid gap-sm lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          {project.architecture.map((step, index) => (
            <div key={step.title} className="relative rounded-xl border border-border bg-surface p-lg shadow-card">
              <div className="mb-sm flex items-center justify-between">
                <span className="font-mono text-xs text-primarySoft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < project.architecture.length - 1 && (
                  <span className="hidden text-textMuted lg:block">→</span>
                )}
              </div>
              <h3 className="font-h3 text-body text-textPrimary">{step.title}</h3>
              <p className="mt-xs text-small leading-relaxed text-textMuted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-xxl grid gap-xl lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-xl shadow-card">
          <SectionTitle eyebrow="Design Principles" title="설계 원칙" />
          <ul className="space-y-md">
            {project.architectureNotes.map((item) => (
              <li key={item} className="flex gap-sm text-body leading-relaxed text-textSecondary">
                <span className="mt-[2px] text-primarySoft">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-surface p-xl shadow-card">
          <SectionTitle eyebrow="Current Scope" title="현재 구현 범위" />
          <ul className="space-y-md">
            {project.currentScope.map((item) => (
              <li key={item} className="flex gap-sm text-body leading-relaxed text-textSecondary">
                <span className="mt-[2px] text-primarySoft">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-xxl rounded-xl border border-border bg-surface p-xl shadow-card">
        <SectionTitle eyebrow="Implementation" title="핵심 구현" />
        <div className="grid gap-md md:grid-cols-2">
          {project.highlights.map((item) => (
            <div key={item} className="rounded-lg border border-border bg-background p-md text-body text-textSecondary">
              <span className="mr-sm text-primarySoft">→</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-xxl">
        <SectionTitle eyebrow="Evidence" title="화면 및 검증 자료" />
        {project.screenshotNote && (
          <p className="-mt-sm mb-lg max-w-3xl text-small leading-relaxed text-textMuted">
            {project.screenshotNote}
          </p>
        )}

        {project.screenshots.length > 0 ? (
          <div className="grid gap-xl">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-xl border border-border bg-surface shadow-card"
              >
                <div className="relative min-h-[260px] w-full bg-backgroundSoft md:min-h-[520px]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1100px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="border-t border-border px-lg py-md text-small text-textSecondary">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-surface p-xxl text-center text-textMuted">
            공개 가능한 실제 화면 캡처를 정리 중입니다.
          </div>
        )}
      </section>
    </div>
  )
}
