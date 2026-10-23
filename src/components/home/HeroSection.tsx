import { Button } from "@/components/ui/Button"
import { HaruExperience } from "@/components/haru/HaruExperience"
import { projectDetails } from "@/lib/projectDetails"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="haru-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="max-w-[560px]">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primarySoft">
              Product / AI Engineer
            </span>
            <span className="text-[12px] text-textMuted">· 10년+ 엔터프라이즈 개발 경험</span>
          </div>

          <h1 className="text-[clamp(2.5rem,4.2vw,3.75rem)] font-[760] leading-[1.18] tracking-[-0.045em] text-textPrimary">
            복잡한 업무를,
            <span className="block text-primarySoft">근거가 남는</span>
            <span className="block text-primarySoft">시스템으로.</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-textSecondary sm:text-[16px]">
            C#과 SQL로 업무 시스템을 만들던 경험을 AI 서비스로 확장합니다.
            업무를 기억하는 비서 <strong className="font-medium text-textPrimary">하루</strong>부터
            웹소설 플랫폼 Routoon까지, 데이터·권한·AI를 연결하고 실제 저장 결과로 확인합니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Button href="/projects/haru">하루 사례 살펴보기 ↗</Button>
            <Button href="#selected-work" variant="outline">전체 프로젝트</Button>
          </div>

          <dl className="mt-8 grid max-w-[500px] grid-cols-3 border-t border-border pt-5">
            <div className="pr-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Experience</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">10년+</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">엔터프라이즈 개발 경험</dd>
            </div>
            <div className="border-l border-border px-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Case Studies</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">{projectDetails.length} Projects</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">설계·구현 사례</dd>
            </div>
            <div className="border-l border-border pl-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-textMuted">Focus</dt>
              <dd className="mt-1.5 text-[15px] font-semibold text-textPrimary">AI · .NET · Data</dd>
              <dd className="mt-0.5 text-[10px] text-textMuted">기록 → 검증 → 제품</dd>
            </div>
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[580px]">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-textMuted">Featured system / 01</p>
          <HaruExperience compact />
        </div>
      </div>
    </section>
  )
}
