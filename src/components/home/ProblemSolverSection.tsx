import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"

export function ProblemSolverSection() {
  return (
    <section className="container mx-auto max-w-6xl py-4xl px-md">
      <div className="mb-xxl text-center">
        <h2 className="font-h2 text-h2 text-textPrimary tracking-h2">
          I solve problems by tracing the flow, <br className="hidden md:block"/> not guessing the cause.
        </h2>
        <p className="mt-md font-body text-body text-textSecondary">
          단순히 기능을 구현하는 것보다, 데이터 구조를 이해하고 원인을 끝까지 추적하는 과정을 중요하게 생각합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-sm text-info">
              {/* Optional: Icon here */}
              <span className="font-mono text-xl font-bold">01.</span>
            </div>
            <CardTitle>Trace</CardTitle>
            <CardDescription className="mt-sm">
              사용자 행동, API 호출, SQL 실행 흐름을 외부에서 추적하여 블랙박스 같은 시스템의 동작을 가시화합니다.
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="mb-sm text-primarySoft">
              <span className="font-mono text-xl font-bold">02.</span>
            </div>
            <CardTitle>Analyze</CardTitle>
            <CardDescription className="mt-sm">
              병목 구간과 장애 원인을 추측하지 않고, 수집된 로그와 데이터 흐름을 바탕으로 구조적으로 분석합니다.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-sm text-success">
              <span className="font-mono text-xl font-bold">03.</span>
            </div>
            <CardTitle>Automate</CardTitle>
            <CardDescription className="mt-sm">
              반복되는 분석 과정과 배포 파이프라인을 자동화하여 팀 전체의 개발 생산성을 높입니다.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}
