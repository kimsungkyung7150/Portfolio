import { Button } from "@/components/ui/Button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-md py-4xl max-w-4xl">
      <div className="mb-xxl text-center">
        <h1 className="font-h1 text-h1 text-textPrimary mb-sm">About Me</h1>
        <p className="font-body text-body text-textSecondary">
          안정적으로 동작하고 유지보수가 가능한 구조를 만드는 개발자, 김성경입니다.
        </p>
      </div>

      <div className="prose prose-invert max-w-none prose-p:text-body prose-p:text-textSecondary prose-headings:text-textPrimary prose-p:font-body prose-headings:font-h2 bg-surface p-xl md:p-3xl rounded-xl border border-border shadow-card leading-relaxed">
        <p className="mb-md">
          안녕하세요. 배움에 즐거움을 느끼는 개발자 김성경입니다.
        </p>
        <p className="mb-md">
          프로그래밍에 흥미를 느낀 이후, 더 깊이 있는 이해를 위해 꾸준히 학습하고 실무 경험을 쌓아왔습니다. 
          저는 단순히 기능을 구현하는 것에서 끝나지 않고, <strong>문제가 발생했을 때 원인을 끝까지 분석하고 같은 문제가 반복되지 않도록 구조를 개선하는 과정</strong>을 중요하게 생각합니다.
        </p>
        <p className="mb-md">
          ASP.NET과 MS SQL Server 기반 업무 시스템을 개발·유지보수하며 
          채용, 회계, 전자결재, 쇼핑몰, 재고관리 등 다양한 도메인의 업무 흐름을 경험했습니다. 
          현업의 복잡한 로직을 프로시저와 API로 구현하고, 
          데이터베이스 튜닝을 통해 시스템의 응답 속도를 개선하며 안정적인 운영을 이끌었습니다.
        </p>
        <p className="mb-xl">
          최근에는 이러한 경험을 바탕으로 <strong>레거시 시스템 분석 자동화 도구, 스마트팜 관제 시스템, AI(MCP) 기반 개발 지원 도구 설계</strong>로 
          역량을 확장하고 있습니다. 클라우드와 컨테이너(Docker, Kubernetes) 환경에서의 배포, 
          Redis와 Prometheus를 활용한 실시간 모니터링 아키텍처를 결합하여, 
          더욱 현대적이고 효율적인 엔지니어링 생태계를 구축하는 데 기여하고 싶습니다.
        </p>
        
        <div className="flex gap-md pt-lg border-t border-border">
          <Button variant="primary" href="/experience">View Experience</Button>
        </div>
      </div>
    </div>
  )
}
