import Link from "next/link"
import { HeroSection } from "@/components/home/HeroSection"
export default function Home() { return <>
 <HeroSection />
 <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20" aria-labelledby="demo-heading">
  <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div><p className="font-mono text-xs tracking-[0.12em] text-primarySoft">SELECTED DEMO / 01</p><h2 id="demo-heading" className="mt-3 text-3xl font-semibold">설명보다, 실제 흐름으로.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-textSecondary">하루 · Memory OS의 기록·검색·인수인계 데모입니다.<br/>개인 환경 테스트 완료 · 실사용 예정. 다른 사용자·운영 환경까지 검증한 서비스는 아닙니다.</p></div><Link href="/projects/haru" className="inline-flex min-h-11 items-center text-sm text-primarySoft">구현 범위와 검증 기록 ↗</Link></div>
  <div className="overflow-hidden rounded-2xl border border-border bg-black"><video controls playsInline preload="none" poster="/projects/haru/demo-v2/poster.jpg" className="aspect-video w-full" aria-label="하루 실제 작업 흐름 데모"><source src="/projects/haru/demo-v2/haru-workflow-motion.mp4" type="video/mp4"/><track kind="captions" src="/projects/haru/demo-v2/haru-workflow-motion.ko.vtt" srcLang="ko" label="한국어" default/>브라우저에서 영상을 지원하지 않습니다. 아래 대본 링크를 이용해 주세요.</video></div>
  <div className="mt-4 flex flex-wrap justify-between gap-3 text-xs leading-6 text-textMuted"><p>실제 기록 편집본 · 대기 구간 축약 · 내부 식별자 마스킹</p><a href="/projects/haru/demo-v2/transcript.md" className="inline-flex min-h-11 items-center text-primarySoft">영상 대본 읽기 ↗</a></div>
  <Link href="/projects" className="mt-4 inline-flex min-h-12 items-center rounded-full border border-border px-6 text-sm font-semibold">개인 프로젝트 전체 보기 ↗</Link>
 </section>
 <section className="border-t border-border px-5 py-14"><div className="mx-auto flex max-w-[1216px] flex-wrap items-center justify-between gap-6"><div><p className="text-xs text-textMuted">LET’S TALK</p><h2 className="mt-3 text-2xl font-semibold">다음 업무를 함께 풀어가려면.</h2></div><Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-border px-6 text-sm">연락 안내 ↗</Link></div></section>
 </> }
