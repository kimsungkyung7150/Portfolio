import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

export function TechStack() {
  const stackCategories = [
    {
      category: "Backend & Frameworks",
      skills: ["C#", "ASP.NET MVC", "ASP.NET WebForms", "ASP.NET Core", ".NET 8", "Java", "Spring"],
      icon: "⚙️"
    },
    {
      category: "Database & Data",
      skills: ["MS SQL Server", "Oracle", "Neo4j", "Redis", "T-SQL", "Performance Tuning"],
      icon: "💾"
    },
    {
      category: "Frontend",
      skills: ["JavaScript", "jQuery", "Vue", "React", "Next.js", "Tailwind CSS"],
      icon: "🖥️"
    },
    {
      category: "Infra & Architecture",
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "MQTT"],
      icon: "☁️"
    }
  ]

  return (
    <section className="container mx-auto max-w-6xl py-4xl px-md">
      <div className="mb-xxl text-center">
        <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">Tech Stack</h2>
        <p className="mt-md font-body text-body text-textSecondary max-w-2xl mx-auto">
          다양한 환경에서 안정적으로 동작하는 시스템을 구축하고 운영한 기술 경험입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {stackCategories.map((group) => (
          <Card key={group.category} className="group">
            <CardHeader className="flex flex-row items-center gap-sm">
              <span className="text-2xl">{group.icon}</span>
              <CardTitle>{group.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-sm">
                {group.skills.map(skill => (
                  <span 
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-background px-md py-xs text-small font-medium text-textPrimary transition-colors group-hover:border-primarySoft/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
