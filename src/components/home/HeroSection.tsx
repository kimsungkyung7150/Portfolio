import Image from "next/image"

import { Button } from "@/components/ui/Button"

function ProductWindow({
  label,
  meta,
  src,
  alt,
  className = "",
  imageClassName = "object-cover object-top",
}: {
  label: string
  meta: string
  src: string
  alt: string
  className?: string
  imageClassName?: string
}) {
  const frameClassName = [
    "overflow-hidden rounded-[14px] border border-borderStrong bg-surface shadow-card",
    className,
  ].filter(Boolean).join(" ")

  return (
    <div className={frameClassName}>
      <div className="flex h-9 items-center justify-between border-b border-border bg-surfaceElevated/90 px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]/80" />
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]/80" />
          <span className="h-2 w-2 rounded-full bg-[#34d399]/80" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">{meta}</span>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden bg-backgroundSoft">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 620px"
          className={imageClassName}
          priority
        />
      </div>
      <div className="border-t border-border px-3 py-2 text-[11px] font-medium text-textSecondary">{label}</div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:py-14 xl:gap-14">
        <div className="max-w-[560px]">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primarySoft">
              Product / AI Engineer
            </span>
            <span className="text-[12px] text-textMuted">· 10년+ 엔터프라이즈 개발 경험</span>
          </div>

          <h1 className="max-w-[11.5ch] text-[clamp(2.65rem,4.35vw,3.65rem)] font-[760] leading-[1.08] tracking-[-0.045em] text-textPrimary">
            복잡한 문제를,
            <span className="block text-primarySoft">실제 제품으로 풀어가고 있습니다.</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-textSecondary sm:text-[16px]">
            업무 시스템과 데이터베이스를 다뤄온 경험을 바탕으로,
            AI 웹 서비스, WPF 데스크톱 도구, Unity 게임 등
            아이디어를 구조화해 실제 구현으로 이어가는 작업을 하고 있습니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Button href="/projects">주요 프로젝트 보기 →</Button>
            <Button href="/experience" variant="outline">경력 보기</Button>
          </div>

          <dl className="mt-8 grid max-w-[500px] grid-cols-3 border-t border-border pt-5">
            <div className="pr-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Experience</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">10년+</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">엔터프라이즈 개발 경험</dd>
            </div>
            <div className="border-l border-border px-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Current</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">5 Projects</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">현재 개발·운영 중</dd>
            </div>
            <div className="border-l border-border pl-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Focus</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">AI · .NET · Unity</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">아이디어 → 제품</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[660px] pb-12 sm:pb-14 lg:pb-4">
          <div className="absolute inset-[12%] -z-10 rounded-full bg-primary/10 blur-[72px]" />
          <ProductWindow
            label="Routoon · AI 웹소설 플랫폼"
            meta="LIVE PRODUCT"
            src="/projects/routoon/home.png"
            alt="Routoon 실제 서비스 메인 화면"
            className="relative z-10 ml-auto w-[92%]"
          />
          <ProductWindow
            label="ShowRoom · WPF Asset Foundry"
            meta="WPF DESKTOP"
            src="/projects/showroom/direction-lab.png"
            alt="ShowRoom WPF Direction Lab 화면"
            className="relative z-20 -mt-10 w-[64%] sm:-mt-14"
            imageClassName="object-contain bg-[#101620]"
          />
        </div>
      </div>
    </section>
  )
}
