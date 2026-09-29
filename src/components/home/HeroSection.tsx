import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-md py-4xl text-center">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-backgroundSoft)_0%,var(--color-background)_100%)] opacity-50" />

      <div className="z-10 flex max-w-4xl flex-col items-center gap-xl">
        <h1 className="font-h1 text-h1 leading-none tracking-h1 text-textPrimary drop-shadow-md">
          AI 기술을 실험에서 끝내지 않고,
          <br className="hidden md:block" /> 실제 <span className="text-primarySoft drop-shadow-glow">제품</span>으로 만듭니다.
        </h1>

        <p className="max-w-2xl font-body text-lg text-textSecondary">
          웹소설 AI 플랫폼, 게임 에셋 제작 도구, Unity WebGL 게임, 레거시 분석까지.
          새로운 기술을 빠르게 검증하고 구조화해 <strong>실제로 동작하는 제품으로 만드는 개발자 김성경</strong>입니다.
        </p>

        <div className="mt-lg flex gap-md">
          <Button variant="primary" href="/projects">프로젝트 보기</Button>
        </div>
      </div>
    </section>
  )
}
