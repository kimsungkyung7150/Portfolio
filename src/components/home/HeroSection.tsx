import Image from "next/image"

import { Button } from "@/components/ui/Button"

const githubUrl = "https://github.com/kimsungkyung7150"

function ProductWindow({
  label,
  meta,
  src,
  alt,
  className = "",
}: {
  label: string
  meta: string
  src: string
  alt: string
  className?: string
}) {
  const frameClassName =
    "overflow-hidden rounded-xl border border-borderStrong bg-surface shadow-card " + className

  return (
    <div className={frameClassName}>
      <div className="flex h-10 items-center justify-between border-b border-border bg-surfaceElevated/80 px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]/80" />
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]/80" />
          <span className="h-2 w-2 rounded-full bg-[#34d399]/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-textMuted">{meta}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-backgroundSoft">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 620px"
          className="object-cover object-top"
        />
      </div>
      <div className="border-t border-border px-3 py-2 text-xs font-medium text-textSecondary">{label}</div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-14 xl:gap-20 xl:py-16">
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-primarySoft">
              Product / AI Engineer
            </span>
            <span className="text-sm text-textMuted">10년+ 엔터프라이즈 개발 경험</span>
          </div>

          <h1 className="max-w-[11ch] text-[clamp(2.75rem,5vw,4rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            복잡한 문제를
            <span className="block text-primarySoft">실제로 동작하는 제품으로.</span>
          </h1>

          <p className="mt-6 max-w-[36rem] text-[1.05rem] leading-8 text-textSecondary">
            업무 시스템과 데이터베이스를 오래 다뤄온 경험을 기반으로,
            지금은 AI 웹 서비스, WPF 데스크톱 도구, Unity 게임까지
            아이디어를 구조화하고 직접 구현합니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">주요 프로젝트 보기</Button>
            <Button href="/experience" variant="outline">경력 보기</Button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 text-sm font-semibold text-textSecondary transition-colors hover:text-textPrimary"
            >
              GitHub ↗
            </a>
          </div>

          <dl className="mt-10 grid max-w-[36rem] grid-cols-3 gap-3 border-t border-border pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-textMuted">Experience</dt>
              <dd className="mt-1 text-sm font-semibold text-textPrimary">10년+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-textMuted">Current</dt>
              <dd className="mt-1 text-sm font-semibold text-textPrimary">4 Products</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-textMuted">Focus</dt>
              <dd className="mt-1 text-sm font-semibold text-textPrimary">AI · .NET · Unity</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[680px] pb-10 sm:pb-12 lg:pb-0">
          <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <ProductWindow
            label="Routoon · AI 웹소설 플랫폼"
            meta="LIVE PRODUCT"
            src="/projects/routoon/home.png"
            alt="Routoon 실제 서비스 메인 화면"
            className="relative z-10 w-[94%]"
          />
          <ProductWindow
            label="ShowRoom · WPF Asset Foundry"
            meta="WPF DESKTOP"
            src="/projects/showroom/direction-lab.png"
            alt="ShowRoom WPF Direction Lab 화면"
            className="relative z-20 -mt-8 ml-auto w-[72%] sm:-mt-14"
          />
        </div>
      </div>
    </section>
  )
}
