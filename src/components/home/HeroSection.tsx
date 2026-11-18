import { Button } from "@/components/ui/Button"

export function HeroSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-medium text-primarySoft">김성경 · ASP.NET / MS SQL Server 개발자</p>
          <h1 className="mt-5 text-[clamp(2.25rem,4.2vw,3.75rem)] font-semibold leading-[1.2] tracking-[-0.04em]">8년 6개월,<br />업무 시스템을 개발하고<br />운영 문제를 다뤘습니다.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-textSecondary">C#·ASP.NET과 MS SQL Server를 기반으로 인사·채용, 회계·결재, 커머스·재고 업무를 다뤘습니다. 업무 흐름 구현, 외부 API 연동, SQL 병목 분석 경험을 중심으로 소개합니다.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Button href="#work-cases">실무 사례 2개 보기</Button><Button href="/projects/haru" variant="outline">대표 개인 프로젝트 · 하루</Button><Button href="/contact" variant="outline">연락 안내</Button></div>
        </div>
        <aside className="self-center rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold">먼저 보실 내용</h2>
          <dl className="mt-5 space-y-5 text-sm leading-7">
            <div><dt className="text-primarySoft">실무</dt><dd className="text-textSecondary">업무 시스템 개발·운영 / 외부 서비스 연동 / SQL 조회 개선</dd></div>
            <div><dt className="text-primarySoft">대표 개인 프로젝트</dt><dd className="text-textSecondary">하루: 업무 기록 저장·검색·인수인계<br />개인 환경 테스트 완료 · 실사용 예정</dd></div>
            <div><dt className="text-primarySoft">확인 가능한 자료</dt><dd className="text-textSecondary">역할과 조치, 구현 화면, 데모, 검증 기록과 남은 한계를 구분합니다.</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
