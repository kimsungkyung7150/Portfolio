import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { projectDetails } from "@/lib/projectDetails"

const routoon = projectDetails.find((project) => project.slug === "routoon")!
const showroom = projectDetails.find((project) => project.slug === "showroom")!
const randomDefense = projectDetails.find((project) => project.slug === "random-defense")!
const impactSuite = projectDetails.find((project) => project.slug === "impactsuite")!

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
    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-textMuted">
      {tags.slice(0, 6).map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="selected-work" className="bg-backgroundSoft py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-7 grid gap-4 border-b border-border pb-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
              Selected Work
            </p>
            <h2 className="mt-1.5 text-[clamp(2rem,3vw,2.65rem)] font-[740] tracking-[-0.04em] text-textPrimary">
              지금 만들고 있는 제품
            </h2>
          </div>
          <p className="max-w-[500px] text-sm leading-6 text-textSecondary lg:justify-self-end">
            현재 공개 가능한 주요 프로젝트입니다. 실제 동작하는 서비스와 도구의 화면,
            구조와 기술 스택을 바탕으로 소개합니다.
          </p>
        </div>

        <div className="space-y-4">
          <article className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-card">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex flex-col justify-center p-6 lg:p-7">
                <ProjectMeta type="AI / 웹소설 플랫폼" status="LIVE" variant="success" />
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-textPrimary">
                  Routoon
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-textSecondary">
                  AI 웹소설 생성 · 품질 검증 · 독자 서비스 플랫폼
                </p>
                <p className="mt-4 max-w-[430px] text-sm leading-6 text-textSecondary">
                  정본, 캐릭터 보이스, 회차 맥락을 기반으로 집필부터 검수와 발행까지 연결합니다.
                  실제 독자 서비스와 작가 작업 흐름을 함께 개발하고 있습니다.
                </p>
                <div className="mt-5">
                  <TechRow tags={routoon.tags} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href="https://reader.routoon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    실제 서비스 보기 ↗
                  </a>
                  <Button href="/projects/routoon" variant="outline">Case Study</Button>
                </div>
              </div>

              <Link
                href="/projects/routoon"
                className="group relative min-h-[300px] overflow-hidden border-t border-border bg-background lg:min-h-[360px] lg:border-l lg:border-t-0"
              >
                <Image
                  src="/projects/routoon/home.png"
                  alt="Routoon 실제 서비스 메인 화면"
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.012]"
                />
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-card">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
              <Link
                href="/projects/showroom"
                className="relative min-h-[260px] overflow-hidden border-b border-border bg-[#101620] lg:min-h-[300px] lg:border-b-0 lg:border-r"
              >
                <Image
                  src="/projects/showroom/comparison-final.png"
                  alt="ShowRoom 원화와 결과 비교 화면"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-contain p-3"
                />
              </Link>

              <div className="flex flex-col justify-center p-6 lg:p-7">
                <ProjectMeta type="WPF / 게임 에셋 도구" status="개발 중" variant="warning" />
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-textPrimary">
                  ShowRoom
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-textSecondary">
                  WPF 기반 AI 게임 에셋 제작 · 검수 도구
                </p>
                <p className="mt-4 max-w-[560px] text-sm leading-6 text-textSecondary">
                  WPF Studio에서 원화를 입력하고 AI, Blender, 로컬 도구를 오케스트레이션해
                  게임용 2D 스프라이트와 모션 자산을 생성·검수합니다.
                </p>
                <div className="mt-5">
                  <TechRow tags={showroom.tags} />
                </div>
                <div className="mt-6">
                  <Button href="/projects/showroom" variant="outline">Case Study</Button>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-card">
              <div className="grid min-h-full sm:grid-cols-[0.82fr_1.18fr]">
                <div className="flex flex-col justify-center p-5">
                  <ProjectMeta type="Unity / 게임" status="개발 중" variant="warning" />
                  <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.035em] text-textPrimary">
                    랜덤 디펜스 게임
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-textSecondary">
                    140종 몬스터와 3마리 조합, 웨이브 전투를 구현하는 모바일 WebGL 프로젝트입니다.
                  </p>
                  <div className="mt-4">
                    <TechRow tags={randomDefense.tags} />
                  </div>
                  <Link href="/projects/random-defense" className="mt-5 text-sm font-semibold text-primarySoft hover:text-white">
                    Case Study →
                  </Link>
                </div>

                <Link
                  href="/projects/random-defense"
                  className="grid min-h-[280px] grid-cols-2 gap-2 border-t border-border bg-backgroundSoft p-3 sm:border-l sm:border-t-0"
                >
                  <div className="relative overflow-hidden rounded-lg border border-border bg-black">
                    <Image
                      src="/projects/random-defense/gold-active.png"
                      alt="랜덤 디펜스 골드 몬스터 전투 화면"
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg border border-border bg-black">
                    <Image
                      src="/projects/random-defense/boss-fight.png"
                      alt="랜덤 디펜스 보스 전투 화면"
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </div>
                </Link>
              </div>
            </article>

            <article className="flex min-h-[330px] flex-col rounded-[14px] border border-border bg-surface p-5 shadow-card">
              <ProjectMeta type="업무 자동화 / AI" status="ARCHITECTURE" variant="default" />
              <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.035em] text-textPrimary">
                ImpactSuite
              </h3>
              <p className="mt-2 max-w-[540px] text-[13px] leading-5 text-textSecondary">
                브라우저 행동, API, SQL 실행 흐름을 연결해 레거시 시스템의 변경 영향과 병목을
                탐색하는 비침습 분석 도구입니다.
              </p>

              <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 rounded-xl border border-border bg-background p-4 text-center">
                <div className="rounded-lg border border-border bg-surfaceElevated px-2 py-3 text-[11px] text-textSecondary">Browser Trace</div>
                <span className="text-textMuted">→</span>
                <div className="rounded-lg border border-border bg-surfaceElevated px-2 py-3 text-[11px] text-textSecondary">API / SQL</div>
                <span className="text-textMuted">→</span>
                <div className="rounded-lg border border-primary/30 bg-primary/10 px-2 py-3 text-[11px] text-primarySoft">Neo4j · AI/MCP</div>
              </div>

              <div className="mt-auto pt-5">
                <TechRow tags={impactSuite.tags} />
                <Link href="/projects/impactsuite" className="mt-4 inline-flex text-sm font-semibold text-primarySoft hover:text-white">
                  구조 자세히 보기 →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
