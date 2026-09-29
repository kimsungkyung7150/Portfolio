import { Button } from "@/components/ui/Button"

const githubUrl = "https://github.com/kimsungkyung7150"

export function HomeCTA() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primarySoft">
                Explore More
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-textPrimary sm:text-4xl">
                현재 만드는 제품과,
                <span className="block text-textSecondary">그동안 해결해 온 문제를 더 확인하세요.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/projects">프로젝트</Button>
              <Button href="/experience" variant="outline">경력</Button>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 text-sm font-semibold text-textSecondary transition-colors hover:text-textPrimary"
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
