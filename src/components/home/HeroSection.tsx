import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-md text-center py-4xl">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-backgroundSoft)_0%,var(--color-background)_100%)] opacity-50" />
      
      <div className="z-10 flex max-w-4xl flex-col items-center gap-xl">
        <h1 className="font-h1 text-h1 text-textPrimary leading-none tracking-h1 drop-shadow-md">
          레거시 시스템을 <span className="text-primarySoft drop-shadow-glow">지능형</span> 엔지니어링 도구로
        </h1>
        
        <p className="font-body text-body text-textSecondary max-w-2xl text-lg">
          레거시 업무 시스템의 흐름을 분석하고, 문제를 구조화하며, AI와 자동화를 통해 더 나은 개발 환경을 설계하는 개발자 <strong>김성경</strong>입니다.
        </p>

        <div className="flex gap-md mt-lg">
          <Button variant="primary" href="/projects">프로젝트 보기</Button>
        </div>
      </div>
    </section>
  )
}
