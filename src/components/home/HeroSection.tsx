"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
const scenes = [
 {title:"Routoon",tag:"독자 서비스 · 실제 화면",src:"/projects/routoon/home.png",href:"/projects/routoon",fit:"object-cover object-top"},
 {title:"하루 · Memory OS",tag:"개인 환경 테스트 · 실제 데모",src:"/projects/haru/demo-v2/poster.jpg",href:"/projects/haru",fit:"object-contain"},
 {title:"ShowRoom",tag:"원화 기반 8방향 제작 예시",src:"/projects/showroom/directional-row.png",href:"/projects/showroom",fit:"object-contain"},
 {title:"Routoon 연동 방치형 게임",tag:"UI 방향 시안 · 구현 화면 아님",src:"/projects/idle-game/ui-concept.png",href:"/projects/idle-game",fit:"object-contain"},
 {title:"랜덤 디펜스",tag:"28종 비주얼 로스터 · 개발 기록",src:"/projects/random-defense/roster-28.png",href:"/projects/random-defense",fit:"object-contain"},
]
export function HeroSection() {
 const [index,setIndex]=useState(0)
 const [motion,setMotion]=useState(true)
 const [visible,setVisible]=useState(true)
 const [reduced,setReduced]=useState(false)
 const section=useRef<HTMLElement>(null)
 useEffect(()=>{let onScreen=true;const update=()=>setVisible(onScreen&&!document.hidden);const observer=new IntersectionObserver(([entry])=>{onScreen=entry.isIntersecting;update()});if(section.current)observer.observe(section.current);document.addEventListener("visibilitychange",update);const media=matchMedia("(prefers-reduced-motion: reduce)");const change=()=>setReduced(media.matches);change();media.addEventListener("change",change);return()=>{observer.disconnect();document.removeEventListener("visibilitychange",update);media.removeEventListener("change",change)}},[])
 const playing=motion&&visible&&!reduced
 useEffect(()=>{if(!playing)return;const timer=setInterval(()=>setIndex(i=>(i+1)%scenes.length),5500);return()=>clearInterval(timer)},[playing])
 const choose=(i:number)=>{setIndex((i+scenes.length)%scenes.length);setMotion(false)}
 return <section ref={section} className={`project-theatre relative isolate overflow-hidden border-b border-border ${playing?"":"motion-paused"}`} aria-label="소개와 프로젝트 쇼케이스">
  <div className="theatre-wash" aria-hidden="true" />
  <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-10 lg:px-10 lg:pt-16">
   <p className="text-xs tracking-[.14em] text-textSecondary">KIM SUNGKYUNG / .NET DEVELOPER</p>
   <div className="mt-7 grid items-center gap-10 lg:grid-cols-[.85fr_1.25fr] lg:gap-12">
    <div className="stage-enter"><p className="text-sm text-primarySoft">ASP.NET · MS SQL Server / 실무 8년 6개월</p><h1 className="mt-5 text-[clamp(2.2rem,4.3vw,4.3rem)] font-semibold leading-[1.16] tracking-[-.05em]">복잡한 업무를<br/><span className="text-textSecondary">작동하는<br className="hidden lg:block"/> 시스템으로.</span></h1><p className="mt-6 max-w-[30rem] text-base leading-8 text-textSecondary">김성경입니다. 업무 시스템을 개발하고,<br className="hidden sm:block"/> 아이디어를 직접 만들며 경험을 넓혀 왔습니다.</p><Link href="/work-projects" className="mt-7 inline-flex min-h-12 items-center gap-8 rounded-full bg-textPrimary px-6 text-sm font-semibold text-background">업무 프로젝트 보기 <span aria-hidden="true">↗</span></Link></div>
    <div className="min-w-0" role="region" aria-roledescription="캐러셀" aria-label="개인 프로젝트 이미지">
     <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15 bg-[#0b101b] shadow-[0_24px_70px_#0008] sm:aspect-[16/10]">
      {scenes.map((scene,i)=><Link key={scene.title} href={scene.href} tabIndex={i===index?0:-1} aria-hidden={i!==index} className={`theatre-scene absolute inset-0 ${i===index?"scene-active":"pointer-events-none opacity-0"}`}><Image src={scene.src} alt={scene.title+" · "+scene.tag} fill sizes="(max-width:1024px) 100vw,800px" priority={i===0} className={`${scene.fit} theatre-image`} /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-5 pb-5 pt-16"><span className="block text-[11px] tracking-wide text-white/80">{scene.tag}</span><span className="mt-2 flex items-center justify-between gap-4 text-xl font-semibold text-white sm:text-2xl">{scene.title}<span aria-hidden="true">↗</span></span></span></Link>)}
     </div>
     <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><div className="flex gap-2">{scenes.map((s,i)=><button type="button" key={s.title} onClick={()=>choose(i)} aria-label={s.title+" 이미지 보기"} aria-pressed={index===i} className={`relative h-11 w-11 overflow-hidden rounded-full border font-mono text-xs ${i===index?"border-textPrimary bg-textPrimary text-background":"border-border text-textSecondary"}`}>{String(i+1).padStart(2,"0")}</button>)}</div><div className="flex gap-2"><button type="button" aria-label="이전 프로젝트 이미지" onClick={()=>choose(index-1)} className="h-11 w-11 rounded-full border border-border">←</button><button type="button" aria-label="다음 프로젝트 이미지" onClick={()=>choose(index+1)} className="h-11 w-11 rounded-full border border-border">→</button><button type="button" disabled={reduced} onClick={()=>setMotion(!motion)} aria-pressed={!motion||reduced} className="min-h-11 rounded-full border border-border px-4 text-xs text-textSecondary">{reduced?"동작 줄임":motion?"일시정지":"자동 재생"}</button></div></div>
    </div>
   </div>
   <div className="mt-10 grid grid-cols-3 border-y border-border text-xs sm:text-sm">{[["01","경력","/experience"],["02","업무 프로젝트","/work-projects"],["03","개인 프로젝트","/projects"]].map(([n,label,href])=><Link key={href} href={href} className="group flex min-h-16 flex-col justify-center gap-1 border-r border-border px-2 last:border-0 sm:px-5"><span className="font-mono text-[10px] text-textMuted">{n}</span><span className="font-semibold group-hover:text-primarySoft">{label} ↗</span></Link>)}</div>
  </div>
 </section>
}
