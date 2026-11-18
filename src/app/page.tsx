import Link from "next/link"
import { ExperienceSummary } from "@/components/home/ExperienceSummary"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { HeroSection } from "@/components/home/HeroSection"
export default function Home() {
 return <div><HeroSection /><ExperienceSummary /><FeaturedProjects /><section className="border-t border-border bg-backgroundSoft px-5 py-12"><div className="mx-auto flex max-w-[1176px] flex-wrap items-center justify-between gap-6"><div><h2 className="text-2xl font-semibold">경력과 프로젝트를 더 이야기하려면</h2><p className="mt-3 text-sm leading-7 text-textSecondary">ASP.NET·SQL 기반 업무 시스템 경험과 개인 프로젝트의 구현 범위를 설명드리겠습니다.</p></div><Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 font-semibold text-white">연락 안내 →</Link></div></section></div>
}
