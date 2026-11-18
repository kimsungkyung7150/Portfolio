import { WorkProjectsContent } from "@/components/home/WorkProjectsContent"
import type { Metadata } from "next"
export const metadata: Metadata = { title: "업무 프로젝트", description: "업무 프로젝트의 담당 역할과 구현·개선 내용. 공개 승인된 경력 사례만 소개합니다." }
export default function WorkProjectsPage() { return <WorkProjectsContent /> }
