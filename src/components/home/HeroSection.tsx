"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
export function HeroSection() {
 const [motion, setMotion] = useState(true)
 const [visible, setVisible] = useState(true)
 const section = useRef<HTMLElement>(null)
 useEffect(()=>{
  let onScreen = true
  const update=()=>setVisible(onScreen && !document.hidden)
  const observer=new IntersectionObserver(([entry])=>{onScreen=entry.isIntersecting;update()})
  if(section.current) observer.observe(section.current)
  document.addEventListener("visibilitychange",update)
  return ()=>{observer.disconnect();document.removeEventListener("visibilitychange",update)}
 },[])
 return <section ref={section} className={`portfolio-stage relative isolate overflow-hidden border-b border-border ${motion && visible ? "" : "motion-paused"}`}>
  <div aria-hidden="true" className="stage-orbit" />
  <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 lg:px-8 lg:pb-16 lg:pt-24">
   <div className="flex flex-wrap items-center justify-between gap-4"><p className="text-xs tracking-[0.12em] text-textSecondary">KIM SUNGKYUNG / .NET DEVELOPER</p><button type="button" onClick={()=>setMotion(!motion)} aria-pressed={!motion} className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-xs text-textSecondary">배경 움직임 {motion ? "정지" : "재생"}</button></div>
   <p className="stage-enter mt-12 text-sm text-primarySoft">ASP.NET · MS SQL Server / 실무 8년 6개월</p>
   <h1 className="stage-enter mt-5 max-w-5xl text-[clamp(2.5rem,6.8vw,6rem)] font-semibold leading-[1.12] tracking-[-0.055em]">복잡한 업무를<br/><span className="text-textSecondary">작동하는 시스템으로.</span></h1>
   <div className="stage-enter mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end"><p className="w-full max-w-[36rem] text-base leading-8 text-textSecondary">김성경입니다. C#·ASP.NET과 SQL을 기반으로<br className="hidden sm:block"/> 업무 흐름을 구현하고, 운영 문제를 다뤄 왔습니다.</p><Link href="/work-projects" className="inline-flex min-h-12 w-fit items-center gap-10 rounded-full bg-textPrimary px-6 font-semibold text-background transition-transform hover:-translate-y-0.5">업무 프로젝트 보기 <span aria-hidden="true">↗</span></Link></div>
   <div className="mt-14 grid grid-cols-3 border-y border-border text-xs sm:mt-20 sm:text-sm">{[["01","경력","/experience"],["02","업무 프로젝트","/work-projects"],["03","개인 프로젝트","/projects"]].map(([n,label,href])=><Link key={href} href={href} className="group flex min-h-20 flex-col justify-center gap-2 border-r border-border px-2 last:border-0 sm:px-6"><span className="font-mono text-[10px] text-textMuted">{n}</span><span className="font-semibold transition-colors group-hover:text-primarySoft">{label} <span aria-hidden="true">↗</span></span></Link>)}</div>
  </div>
 </section>
}
