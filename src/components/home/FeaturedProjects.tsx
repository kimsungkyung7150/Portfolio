import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { projectDetails } from "@/lib/projectDetails"

export function FeaturedProjects() {
  return (
    <section className="bg-backgroundSoft py-4xl">
      <div className="container mx-auto max-w-6xl px-md">
        <div className="mb-xxl text-left">
          <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">주요 AI 프로젝트</h2>
          <p className="mt-md max-w-2xl font-body text-body text-textSecondary">
            현재 개발 중인 제품과 핵심 AI 프로젝트입니다. 개발 중인 항목은 완성된 것처럼 포장하지 않고 현재 상태를 그대로 표시했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-xl">
          {projectDetails.map((project) => (
            <Card key={project.slug} className="group overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[1fr_300px]">
                <div className="flex flex-col p-xl">
                  <div className="mb-lg flex flex-wrap gap-sm">
                    <Badge variant={project.statusVariant}>{project.type}</Badge>
                    <Badge variant={project.statusVariant}>{project.status}</Badge>
                  </div>

                  <h3 className="mb-xs font-h3 text-h2 text-textPrimary">{project.title}</h3>
                  <p className="mb-md font-mono text-small text-textSecondary">{project.subtitle}</p>
                  <p className="mb-xl flex-1 font-body text-body text-textMuted">{project.summary}</p>

                  <div className="mb-lg flex flex-wrap gap-sm">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="default"
                        className="border-border bg-surfaceElevated text-textSecondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-sm">
                    <Button variant="outline" href={"/projects/" + project.slug}>
                      상세 보기
                    </Button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-lg py-sm text-small font-h3 text-textPrimary transition-all hover:-translate-y-[1px] hover:shadow-glow"
                      >
                        {project.liveLabel ?? "서비스 접속"} ↗
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex min-h-[220px] flex-col justify-center border-t border-border bg-surfaceElevated p-xl md:border-l md:border-t-0">
                  <p className="mb-md text-xs font-mono uppercase tracking-wider text-textMuted">핵심 구현</p>
                  <ul className="space-y-sm text-small text-textSecondary">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-sm">
                        <span className="text-primarySoft">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}