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
            <p className="mt-sm max-w-3xl font-mono text-body text-textSecondary">
              {project.subtitle}
            </p>
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

      <div className="grid gap-xl lg:grid-cols-[1.35fr_.65fr]">
        <section className="rounded-xl border border-border bg-surface p-xl shadow-card">
          <h2 className="mb-md font-h2 text-h3 text-textPrimary">프로젝트 개요</h2>
          <p className="leading-relaxed text-textSecondary">{project.description}</p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-xl shadow-card">
          <h2 className="mb-md font-h2 text-h3 text-textPrimary">기술 스택</h2>
          <div className="flex flex-wrap gap-sm">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-xl rounded-xl border border-border bg-surface p-xl shadow-card">
        <h2 className="mb-lg font-h2 text-h3 text-textPrimary">핵심 구현</h2>
        <div className="grid gap-md md:grid-cols-2">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-background p-md text-body text-textSecondary"
            >
              <span className="mr-sm text-primarySoft">→</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-xxl">
        <div className="mb-lg">
          <h2 className="font-h2 text-h2 text-textPrimary">화면 및 검증 자료</h2>
          {project.screenshotNote && (
            <p className="mt-sm max-w-3xl text-small leading-relaxed text-textMuted">
              {project.screenshotNote}
            </p>
          )}
        </div>

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