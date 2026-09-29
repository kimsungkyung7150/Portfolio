import { EngineeringStrengths } from "@/components/home/EngineeringStrengths"
import { ExperienceSummary } from "@/components/home/ExperienceSummary"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { HeroSection } from "@/components/home/HeroSection"
import { HomeCTA } from "@/components/home/HomeCTA"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProjects />
      <EngineeringStrengths />
      <ExperienceSummary />
      <HomeCTA />
    </div>
  )
}
