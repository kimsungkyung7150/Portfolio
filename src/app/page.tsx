import Link from "next/link"
import { HeroSection } from "@/components/home/HeroSection"
import { ExperienceContent } from "@/components/home/ExperienceContent"
import { WorkProjectsContent } from "@/components/home/WorkProjectsContent"
import { ProjectsContent } from "@/components/home/ProjectsContent"
export default function Home(){return <><HeroSection/><div id="explore-work"><section id="experience" className="portfolio-section" aria-label="경력"><ExperienceContent embedded /></section><section id="work-projects" className="portfolio-section border-t border-border" aria-label="업무 프로젝트"><WorkProjectsContent embedded /></section><section id="projects" className="portfolio-section border-t border-border" aria-label="개인 프로젝트"><ProjectsContent embedded /></section></div><div className="mx-auto flex max-w-7xl justify-end px-5 py-12"><Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-border px-6 text-sm">연락 안내</Link></div></>}
