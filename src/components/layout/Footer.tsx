export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-xl">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-md px-md text-center md:flex-row md:px-xl md:text-left">
        <p className="text-small text-textMuted">
          © {new Date().getFullYear()} 김성경. 모든 권리 보유.
        </p>
        <div className="flex gap-md text-small text-textMuted">
          <a href="#" className="hover:text-textPrimary transition-colors">깃허브</a>
          <a href="#" className="hover:text-textPrimary transition-colors">링크드인</a>
          <a href="#" className="hover:text-textPrimary transition-colors">이력서</a>
        </div>
      </div>
    </footer>
  )
}
