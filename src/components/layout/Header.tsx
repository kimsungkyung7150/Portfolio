import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-md md:px-xl">
        <Link href="/" className="font-h3 text-h3 font-bold text-textPrimary tracking-tight">
          Kim Sungkyung
        </Link>
        <nav className="flex gap-md md:gap-lg">
          <Link href="/about" className="text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors">
            Experience
          </Link>
        </nav>
      </div>
    </header>
  )
}
