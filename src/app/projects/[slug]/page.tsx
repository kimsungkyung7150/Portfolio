import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"

import { Badge } from "@/components/ui/Badge"
import { getProjectDetail, projectDetails, type ProjectDetail } from "@/lib/projectDetails"

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
    title: project.title,
    description: project.summary,
  }
}

function BrowserFrame({
  src,
  alt,
  label,
  contain = false,
}: {
  src: string
  alt: string
  label: string
  contain?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-borderStrong bg-surface shadow-card">
      <div className="flex h-9 items-center justify-between border-b border-border bg-surfaceElevated/90 px-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]/80" />
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]/80" />
          <span className="h-2 w-2 rounded-full bg-[#34d399]/80" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-textMuted">{label}</span>
      </div>
      <div className="relative aspect-[16/9] bg-backgroundSoft">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 700px"
          className={contain ? "object-contain p-3" : "object-cover object-top"}
          priority
        />
      </div>
    </div>
  )
}

function RandomDefenseHero() {
  const images = [
    ["/projects/random-defense/gold-active.png", "골드 몬스터 전투"],
    ["/projects/random-defense/wave-deployed.png", "웨이브 전개"],
    ["/projects/random-defense/boss-fight.png", "보스 전투"],
  ]

  return (
    <div className="grid min-h-[330px] grid-cols-3 gap-2.5 rounded-[18px] border border-border bg-backgroundSoft p-3 shadow-card sm:min-h-[430px] sm:gap-3 sm:p-4">
      {images.map(([src, alt], index) => (
        <div
          key={src}
          className={[
            "relative overflow-hidden rounded-xl border border-border bg-black",
            index === 1 ? "translate-y-5" : "",
          ].join(" ")}
        >
          <Image src={src} alt={alt} fill sizes="220px" className="object-cover object-top" priority />
        </div>
      ))}
    </div>
  )
}

function ImpactSuiteHero({ project }: { project: ProjectDetail }) {
  return (
    <div className="rounded-[18px] border border-border bg-surface p-5 shadow-card sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primarySoft">
          Evidence-driven analysis flow
        </p>
        <span className="rounded-md border border-border px-2 py-1 font-mono text-[9px] text-textMuted">
          ARCHITECTURE
        </span>
      </div>

      <div className="grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <div className="rounded-xl border border-border bg-background px-4 py-5 text-center">
          <p className="text-[13px] font-semibold text-textPrimary sm:text-sm">Browser Trace</p>
          <p className="mt-1 text-[11px] text-textMuted">사용자 행동 수집</p>
        </div>
        <ChevronRight className="mx-auto hidden h-4 w-4 text-textMuted md:block" />
        <div className="rounded-xl border border-border bg-background px-4 py-5 text-center">
          <p className="text-[13px] font-semibold text-textPrimary sm:text-sm">API / SQL</p>
          <p className="mt-1 text-[11px] text-textMuted">실행 증거 연결</p>
        </div>
        <ChevronRight className="mx-auto hidden h-4 w-4 text-textMuted md:block" />
        <div className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-5 text-center">
          <p className="text-sm font-semibold text-primarySoft">Neo4j · AI / MCP</p>
          <p className="mt-1 text-[11px] text-textMuted">영향 범위 탐색</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {project.highlights.slice(0, 3).map((item) => (
          <div key={item} className="rounded-lg border border-border bg-background/70 px-3 py-3 text-[11px] leading-5 text-textSecondary">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectHeroVisual({ project }: { project: ProjectDetail }) {
  if (project.slug === "random-defense") {
    return <RandomDefenseHero />
  }

  if (project.slug === "impactsuite") {
    return <ImpactSuiteHero project={project} />
  }

  if (project.slug === "showroom") {
    return (
      <div className="relative pb-0 sm:pb-10">
        <BrowserFrame
          src="/projects/showroom/comparison-final.png"
          alt="ShowRoom 원화와 결과 비교 화면"
          label="WPF · SOURCE / RESULT"
          contain
        />
        <div className="absolute -bottom-2 right-0 hidden w-[46%] sm:block">
          <BrowserFrame
            src="/projects/showroom/direction-lab.png"
            alt="ShowRoom Direction Lab"
            label="DIRECTION LAB"
            contain
          />
        </div>
      </div>
    )
  }

  return (
    <div className="relative pb-0 sm:pb-9">
      <BrowserFrame
        src="/projects/routoon/home.png"
        alt="Routoon 실제 서비스 메인 화면"
        label="LIVE · READER.ROUTOON.COM"
      />
      <div className="absolute -bottom-2 right-0 hidden w-[42%] sm:block">
        <BrowserFrame
          src="/projects/routoon/reader.png"
          alt="Routoon 실제 회차 읽기 화면"
          label="READER"
          contain
        />
      </div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-5 grid gap-3 sm:mb-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
          {eyebrow}
        </p>
        <h2 className="mt-1.5 text-[clamp(1.85rem,3vw,2.45rem)] font-[740] tracking-[-0.04em] text-textPrimary">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[600px] text-sm leading-6 text-textSecondary lg:justify-self-end">
          {description}
        </p>
      )}
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
    <div>
      <section className="border-b border-white/[0.06] bg-background">
        <div className="mx-auto max-w-[1240px] px-5 py-8 sm:py-10 lg:px-8 lg:py-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-textMuted transition-colors hover:text-textPrimary"
          >
            <ArrowLeft className="h-4 w-4" />
            전체 프로젝트
          </Link>

          <div className="mt-6 grid gap-7 sm:mt-8 sm:gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant={project.statusVariant}>{project.type}</Badge>
                <Badge variant={project.statusVariant}>{project.status}</Badge>
              </div>

              <h1 className="mt-5 text-[clamp(2.55rem,5vw,4.6rem)] font-[780] leading-[1.02] tracking-[-0.055em] text-textPrimary">
                {project.title}
              </h1>
              <p className="mt-3 max-w-[540px] text-[15px] font-medium leading-6 text-textSecondary">
                {project.subtitle}
              </p>
              <p className="mt-6 max-w-[560px] text-sm leading-7 text-textSecondary">
                {project.summary}
              </p>

              <div className="mt-7 grid gap-3 border-y border-border py-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Role</p>
                  <p className="mt-1.5 text-sm font-medium leading-6 text-textPrimary">{project.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Status</p>
                  <p className="mt-1.5 text-sm font-medium text-textPrimary">{project.status}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 7).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-textMuted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  {project.liveLabel ?? "서비스 접속"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            <ProjectHeroVisual project={project} />
          </div>
        </div>
      </section>

      <section className="bg-backgroundSoft py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Context"
            title="왜 이 구조가 필요했는가"
            description="기능 목록보다 먼저, 프로젝트가 풀려고 한 문제와 실제 제약을 정리합니다."
          />

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-xl border border-border bg-surface p-6 lg:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primarySoft">Problem</p>
              <p className="mt-4 text-[15px] leading-7 text-textSecondary">{project.problem}</p>
            </article>

            <article className="rounded-xl border border-border bg-surface p-6 lg:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primarySoft">Constraints</p>
              <ul className="mt-4 space-y-3">
                {project.constraints.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-textSecondary">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primarySoft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-background py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Architecture"
            title="요청에서 결과까지"
            description="실제 구현의 계층과 책임을 흐름 순서대로 요약했습니다."
          />

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-3">
            {project.architecture.map((step, index) => (
              <article key={step.title} className="relative rounded-xl border border-border bg-surface p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-primarySoft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < project.architecture.length - 1 && (
                    <ChevronRight className="hidden h-4 w-4 text-textMuted lg:block" />
                  )}
                </div>
                <h3 className="mt-3 text-[13px] font-semibold leading-5 text-textPrimary sm:mt-4 sm:text-[15px]">{step.title}</h3>
                <p className="mt-2 text-[11px] leading-[1.4] text-textSecondary sm:text-[12px] sm:leading-5">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-backgroundSoft py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Key Decisions"
            title="핵심 기술적 의사결정"
            description="무엇을 썼는지가 아니라, 왜 그 구조를 선택했는지 설명합니다."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {project.decisions.map((decision, index) => (
              <article key={decision.title} className="rounded-xl border border-border bg-surface p-6">
                <span className="font-mono text-[10px] text-textMuted">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-textPrimary">{decision.title}</h3>
                <p className="mt-3 text-sm leading-6 text-textSecondary">{decision.reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-background py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="역할별 기술 스택"
            description="프로젝트 안에서 실제로 맡은 역할 기준으로 기술을 묶었습니다."
          />

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {project.techGroups.map((group) => (
              <article key={group.name} className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                <h3 className="text-[13px] font-semibold text-textPrimary sm:text-sm">{group.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[9px] text-textMuted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-backgroundSoft py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-border bg-surface p-6 lg:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primarySoft">Design Principles</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-textPrimary">설계 원칙</h2>
              <ul className="mt-5 space-y-3">
                {project.architectureNotes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-textSecondary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primarySoft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-border bg-surface p-6 lg:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primarySoft">Current Scope</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-textPrimary">현재 구현 범위</h2>
              <ul className="mt-5 space-y-3">
                {project.currentScope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-textSecondary">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primarySoft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionHeading
            eyebrow="Evidence"
            title="화면 및 검증 자료"
            description={project.screenshotNote}
          />

          {project.screenshots.length > 0 ? (
            <div
              className={
                project.slug === "random-defense"
                  ? "grid grid-cols-2 gap-3 lg:grid-cols-4"
                  : "grid gap-4 lg:grid-cols-2"
              }
            >
              {project.screenshots.map((shot, index) => (
                <figure
                  key={shot.src}
                  className={[
                    "overflow-hidden rounded-xl border border-border bg-surface shadow-card",
                    project.slug !== "random-defense" && index === 0 ? "lg:col-span-2" : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "relative bg-backgroundSoft",
                      project.slug === "random-defense"
                        ? "aspect-[430/844]"
                        : index === 0
                          ? "aspect-[16/8.5]"
                          : "aspect-[16/10]",
                    ].join(" ")}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes={
                        project.slug === "random-defense"
                          ? "(max-width: 768px) 50vw, 280px"
                          : index === 0
                            ? "(max-width: 1024px) 100vw, 1180px"
                            : "(max-width: 1024px) 100vw, 580px"
                      }
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-border px-3 py-2.5 text-[10px] text-textSecondary sm:px-4 sm:py-3 sm:text-[11px]">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <ImpactSuiteHero project={project} />
          )}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-backgroundSoft py-8 sm:py-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-textMuted">Next Project</p>
            <p className="mt-1 text-lg font-semibold text-textPrimary">다른 프로젝트도 같은 깊이로 확인해보세요.</p>
          </div>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-borderStrong px-4 text-sm font-semibold text-textPrimary transition hover:border-primarySoft/50 hover:bg-surface"
          >
            전체 프로젝트
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
