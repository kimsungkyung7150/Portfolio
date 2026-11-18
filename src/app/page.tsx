import { BackToTop } from "@/components/home/BackToTop"
import Link from "next/link"
import { Chapter } from "@/components/home/Chapter"
import { HeroSection } from "@/components/home/HeroSection"
import { ExperienceContent } from "@/components/home/ExperienceContent"
import { WorkProjectsContent } from "@/components/home/WorkProjectsContent"
import { ProjectsContent } from "@/components/home/ProjectsContent"
export default function Home(){return <><BackToTop/><HeroSection/><div id="explore-work"><Chapter id="experience" number="01" label="경력"><ExperienceContent embedded /></Chapter><Chapter id="work-projects" number="02" label="업무 프로젝트"><WorkProjectsContent embedded /></Chapter><Chapter id="projects" number="03" label="개인 프로젝트"><ProjectsContent embedded /></Chapter></div><div className="mx-auto flex max-w-7xl justify-end px-5 py-12"><Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-border px-6 text-sm">연락 안내</Link></div></>}
