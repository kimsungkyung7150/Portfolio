import Link from "next/link"

const githubUrl = "https://github.com/kimsungkyung7150"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="text-base font-semibold tracking-[-0.02em] text-textPrimary transition-colors group-hover:text-primarySoft">
            김성경
          </span>
          <span className="hidden border-l border-border pl-3 font-mono text-[11px] uppercase tracking-[0.14em] text-textMuted sm:inline">
            Product / AI Engineer
          </span>
        </Link>

        <nav aria-label="주요 메뉴" className="flex items-center gap-1 sm:gap-2">
          <Link href="/projects" className="rounded-md px-2.5 py-2 text-xs font-medium text-textSecondary transition-colors hover:bg-surface hover:text-textPrimary sm:px-3 sm:text-sm">
            프로젝트
          </Link>
          <Link href="/experience" className="rounded-md px-2.5 py-2 text-xs font-medium text-textSecondary transition-colors hover:bg-surface hover:text-textPrimary sm:px-3 sm:text-sm">
            경력
          </Link>
          <Link href="/about" className="rounded-md px-2.5 py-2 text-xs font-medium text-textSecondary transition-colors hover:bg-surface hover:text-textPrimary sm:px-3 sm:text-sm">
            소개
          </Link>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md border border-border px-3 py-2 text-sm font-medium text-textPrimary transition-colors hover:border-primarySoft/50 hover:bg-surface sm:inline-flex"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
