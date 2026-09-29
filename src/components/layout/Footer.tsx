import Link from "next/link"

const githubUrl = "https://github.com/kimsungkyung7150"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-textPrimary">김성경</p>
          <p className="mt-1 text-sm text-textMuted">
            실제 제품과 시스템 구조로 경험을 설명하는 개발자 포트폴리오
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-textSecondary">
          <Link href="/projects" className="transition-colors hover:text-textPrimary">프로젝트</Link>
          <Link href="/experience" className="transition-colors hover:text-textPrimary">경력</Link>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-textPrimary">
            GitHub ↗
          </a>
          <span className="text-textMuted">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
