"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
export function HeroSection(){
 const [motion,setMotion]=useState(true)
 const [visible,setVisible]=useState(true)
 const section=useRef<HTMLElement>(null)
 useEffect(()=>{let onScreen=true;const update=()=>setVisible(onScreen&&!document.hidden);const observer=new IntersectionObserver(([entry])=>{onScreen=entry.isIntersecting;update()});if(section.current)observer.observe(section.current);document.addEventListener("visibilitychange",update);return()=>{observer.disconnect();document.removeEventListener("visibilitychange",update)}},[])
 return <section ref={section} className={`art-intro ${motion&&visible?"":"motion-paused"}`}>
  <div className="art-copy"><p className="font-mono text-xs tracking-[.15em] text-textSecondary">KIM SUNGKYUNG / PORTFOLIO</p><div className="art-statement"><p className="text-sm text-primarySoft">ASP.NET · MS SQL Server · 8년 6개월</p><h1 className="mt-6 text-[clamp(2.6rem,5.8vw,5.5rem)] font-semibold leading-[1.12] tracking-[-.05em]">구조를 설계하고.<br/><span className="text-textSecondary">가능성을<br/>만듭니다.</span></h1><p className="mt-7 max-w-[31rem] text-base leading-8 text-textSecondary">업무 시스템을 다뤄 온 개발자 김성경입니다.<br className="hidden sm:block"/> 실무의 경험과 개인 프로젝트의 시도를 함께 담았습니다.</p><Link href="/work-projects" className="mt-7 inline-flex min-h-12 items-center gap-12 border-b border-textPrimary text-sm font-semibold">업무 프로젝트 살펴보기 <span aria-hidden="true">↗</span></Link></div><div className="flex flex-wrap items-center justify-between gap-4"><p className="font-mono text-[10px] tracking-widest text-textMuted">ENGINEERING × CREATIVE EXPLORATION</p><button type="button" onClick={()=>setMotion(!motion)} aria-pressed={!motion} className="min-h-11 rounded-full border border-border px-4 text-xs text-textSecondary">모션 {motion?"정지":"재생"}</button></div></div>
  <div className="art-stage"><div className="art-type" aria-hidden="true"><span>CRAFT</span><span>BUILD</span></div><div className="art-rule" aria-hidden="true"/><Link href="/projects/showroom" className="art-subject" aria-label="ShowRoom 기준 원화와 제작 기록 보기"><Image src="/projects/showroom/fullbody-reference.png" alt="ShowRoom 프로젝트에 사용된 여성 기사 기준 원화" width={223} height={628} priority sizes="(max-width:640px) 180px,223px" className="h-full w-auto object-contain"/></Link><div className="art-caption"><div><p className="font-mono text-[10px] tracking-widest">CREATIVE STUDY / SHOWROOM</p><p className="mt-2 text-sm">프로젝트 기준 원화</p></div><Link href="/projects/showroom" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/30 text-xl" aria-label="ShowRoom 상세 보기">↗</Link></div></div>
 </section>
}
