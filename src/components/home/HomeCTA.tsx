import { Button } from "@/components/ui/Button"

const githubUrl = "https://github.com/kimsungkyung7150"

export function HomeCTA() {
  return (
    <section className="bg-background py-10 lg:py-12">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[14px] border border-border bg-surface px-6 py-7 sm:px-8 lg:px-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
                Explore More
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.035em] text-textPrimary sm:text-3xl">
                현재 만드는 제품과,
                <span className="block text-textSecondary">그동안 해결해 온 문제를 더 확인하세요.</span>
              </h2>
              <p className="mt-3 max-w-[560px] text-sm leading-6 text-textMuted">
                더 자세한 프로젝트 이야기와 기술적 고민, 그리고 10년+의 경험을
                프로젝트와 경력 페이지에 정리했습니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Button href="/projects">프로젝트 보기 →</Button>
              <Button href="/experience" variant="outline">경력 보기</Button>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-borderStrong px-4 text-sm font-semibold text-textSecondary transition-colors hover:border-primarySoft/50 hover:text-textPrimary"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
