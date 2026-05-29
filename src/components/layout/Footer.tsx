export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-xl">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-md px-md text-center md:flex-row md:px-xl md:text-left">
        <p className="text-small text-textMuted">
          © {new Date().getFullYear()} Kim Sungkyung. All rights reserved.
        </p>
        <div className="flex gap-md text-small text-textMuted">
          <a href="#" className="hover:text-textPrimary transition-colors">GitHub</a>
          <a href="#" className="hover:text-textPrimary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-textPrimary transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  )
}
