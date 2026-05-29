import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-sm md:px-xl">
        <Link href="/" className="font-h3 text-lg md:text-h3 font-bold text-textPrimary tracking-tight shrink-0">
          Kim Sungkyung
        </Link>
        <nav className="flex gap-sm md:gap-lg overflow-x-auto hide-scrollbar">
          <Link href="/about" className="text-xs md:text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors whitespace-nowrap">
            About
          </Link>
          <Link href="/projects" className="text-xs md:text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors whitespace-nowrap">
            Projects
          </Link>
          <Link href="/experience" className="text-xs md:text-small font-h3 text-textSecondary hover:text-textPrimary transition-colors whitespace-nowrap">
            Experience
          </Link>
        </nav>
      </div>
    </header>
  )
}
