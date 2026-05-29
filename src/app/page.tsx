import { HeroSection } from "@/components/home/HeroSection"

import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { TechStack } from "@/components/home/TechStack"
import { CareerTimeline } from "@/components/home/CareerTimeline"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedProjects />
      <TechStack />
      <CareerTimeline />
    </div>
  )
}
