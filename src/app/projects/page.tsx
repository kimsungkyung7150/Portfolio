import { ProjectsContent } from "@/components/home/ProjectsContent"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "개인 프로젝트",
  description: "하루 업무 기억 시스템, Routoon AI 플랫폼 등 개발자의 제품 설계·구현·검증 사례를 살펴보세요.",
}
export default function ProjectsPage() { return <ProjectsContent /> }
