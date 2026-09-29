import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { projectDetails } from "@/lib/projectDetails"

const routoon = projectDetails.find((project) => project.slug === "routoon")!
const showroom = projectDetails.find((project) => project.slug === "showroom")!
const randomDefense = projectDetails.find((project) => project.slug === "random-defense")!
const impactSuite = projectDetails.find((project) => project.slug === "impactsuite")!

function SectionHeading() {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">Selected Work</p>
        <h2 className="mt-2 text-h2 font-[720] tracking-h2 text-textPrimary">지금 만들고 있는 제품</h2>
      </div>
      <p className="max-w-[36rem] text-sm leading-6 text-textSecondary">
        공개 가능한 현재 프로젝트는 실제 화면과 구조를 함께 보여줍니다.
        완성되지 않은 부분은 현재 상태를 그대로 표시합니다.
      </p>
    </div>
  )
}

function ProjectMeta({
  type,
  status,
  variant,
}: {
  type: string
  status: string
  variant: "default" | "info" | "success" | "warning"
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant={variant}>{type}</Badge>
      <Badge variant={variant}>{status}</Badge>
    </div>
  )
}

function TechRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-textMuted">
      {tags.slice(0, 6).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="selected-work" className="bg-backgroundSoft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading />

        <div className="space-y-6">
          <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <ProjectMeta type={routoon.type} status="LIVE" variant="info" />
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-textPrimary sm:text-4xl">
                  Routoon
                </h3>
                <p className="mt-2 text-sm font-medium text-textSecondary">{routoon.subtitle}</p>
                <p className="mt-5 max-w-[36rem] leading-7 text-textSecondary">
                  정본, 캐릭터 보이스, 회차 맥락을 기반으로 집필부터 검수와 발행까지 연결하는
                  AI 웹소설 플랫폼입니다. 실제 독자 서비스와 작가 작업 흐름을 함께 개발하고 있습니다.
                </p>
                <div className="mt-6"><TechRow tags={routoon.tags} /></div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/projects/routoon">Case Study</Button>
                  <a
                    href="https://reader.routoon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-lg border border-borderStrong px-4 text-sm font-semibold text-textPrimary transition-colors hover:border-primarySoft/50 hover:bg-surfaceElevated"
                  >
                    실제 서비스 ↗
                  </a>
                </div>
              </div>

              <Link href="/projects/routoon" className="group relative min-h-[330px] overflow-hidden border-t border-border bg-background lg:min-h-[470px] lg:border-l lg:border-t-0">
                <Image
                  src="/projects/routoon/home.png"
                  alt="Routoon 실제 서비스 메인 화면"
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/35 to-transparent px-5 pb-5 pt-20">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">Production UI</p>
                </div>
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <Link href="/projects/showroom" className="group relative min-h-[330px] overflow-hidden border-b border-border bg-[#111827] lg:min-h-[440px] lg:border-b-0 lg:border-r">
                <Image
                  src="/projects/showroom/comparison-final.png"
                  alt="ShowRoom 원화와 결과 비교 화면"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 backdrop-blur">
                  WPF Desktop
                </div>
              </Link>

              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                <ProjectMeta type={showroom.type} status={showroom.status} variant="warning" />
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-textPrimary">ShowRoom</h3>
                <p className="mt-2 text-sm font-medium text-textSecondary">{showroom.subtitle}</p>
                <p className="mt-5 leading-7 text-textSecondary">
                  WPF Studio에서 원화를 입력하고 AI, Blender, 로컬 도구를 오케스트레이션해
                  게임용 2D 스프라이트와 모션 자산을 생성·검수하는 Asset Foundry입니다.
                </p>
                <div className="mt-6"><TechRow tags={showroom.tags} /></div>
                <div className="mt-8">
                  <Button href="/projects/showroom" variant="outline">Case Study</Button>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <div className="grid min-h-full sm:grid-cols-[0.92fr_1.08fr]">
                <div className="flex flex-col justify-center p-7">
                  <ProjectMeta type="Game / Unity" status={randomDefense.status} variant="warning" />
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-textPrimary">랜덤 디펜스 게임</h3>
                  <p className="mt-3 text-sm leading-6 text-textSecondary">
                    140종 몬스터와 3마리 조합, 웨이브 전투를 구현하는 모바일 WebGL 프로젝트.
                  </p>
                  <div className="mt-5"><TechRow tags={randomDefense.tags} /></div>
                  <Link href="/projects/random-defense" className="mt-7 inline-flex text-sm font-semibold text-primarySoft hover:text-white">
                    Case Study →
                  </Link>
                </div>
                <Link href="/projects/random-defense" className="grid min-h-[320px] grid-cols-2 gap-2 border-t border-border bg-backgroundSoft p-3 sm:border-l sm:border-t-0">
                  <div className="relative overflow-hidden rounded-lg border border-border">
                    <Image src="/projects/random-defense/gold-active.png" alt="랜덤 디펜스 골드 몬스터 전투 화면" fill sizes="220px" className="object-cover object-top" />
                  </div>
                  <div className="relative overflow-hidden rounded-lg border border-border">
                    <Image src="/projects/random-defense/boss-fight.png" alt="랜덤 디펜스 보스 전투 화면" fill sizes="220px" className="object-cover object-top" />
                  </div>
                </Link>
              </div>
            </article>

            <article className="flex min-h-[360px] flex-col rounded-2xl border border-border bg-surface p-7 shadow-card">
              <ProjectMeta type={impactSuite.type} status="ARCHITECTURE" variant="default" />
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-textPrimary">ImpactSuite</h3>
              <p className="mt-3 max-w-[32rem] text-sm leading-6 text-textSecondary">
                브라우저 행동, API, SQL 실행 흐름을 연결하고 Neo4j와 AI(MCP)로
                레거시 시스템의 변경 영향과 병목을 탐색하는 비침습 분석 도구입니다.
              </p>

              <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border border-border bg-background p-4 text-center">
                <div className="rounded-lg border border-border bg-surfaceElevated px-3 py-3 text-xs text-textSecondary">Browser Trace</div>
                <span className="text-textMuted">→</span>
                <div className="rounded-lg border border-border bg-surfaceElevated px-3 py-3 text-xs text-textSecondary">API / SQL</div>
                <div className="col-span-3 text-textMuted">↓</div>
                <div className="rounded-lg border border-border bg-surfaceElevated px-3 py-3 text-xs text-textSecondary">Neo4j Graph</div>
                <span className="text-textMuted">→</span>
                <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-3 text-xs text-primarySoft">AI / MCP</div>
              </div>

              <div className="mt-auto pt-7">
                <TechRow tags={impactSuite.tags} />
                <Link href="/projects/impactsuite" className="mt-5 inline-flex text-sm font-semibold text-primarySoft hover:text-white">
                  Case Study →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
