"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const tabs = [
  { href: "/experience", label: "경력" },
  { href: "/work-projects", label: "업무 프로젝트" },
  { href: "/projects", label: "개인 프로젝트" },
]
export function Header() {
 const pathname = usePathname()
 const [section,setSection]=useState("")
 useEffect(()=>{if(pathname!=="/")return;const update=()=>{let current="";for(const tab of tabs){const el=document.getElementById(tab.href.slice(1));if(el&&el.getBoundingClientRect().top<=160)current=tab.href}setSection(current)};addEventListener("scroll",update,{passive:true});update();return()=>removeEventListener("scroll",update)},[pathname])
 return <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-background/95 backdrop-blur-xl">
 <div className="mx-auto flex max-w-7xl flex-col px-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
  <Link href="/" aria-label="포트폴리오 홈" className="flex min-h-12 items-center gap-3 self-start rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarySoft sm:min-h-[72px]"><span className="font-semibold">Portfolio</span><span className="border-l border-border pl-3 font-mono text-[11px] text-textMuted">.NET Developer</span></Link>
  <nav aria-label="포트폴리오 분류" className="grid grid-cols-3 gap-2 pb-2 sm:flex sm:pb-0">
   {tabs.map(tab => { const active = pathname === "/" ? section===tab.href : pathname === tab.href || (tab.href === "/projects" && pathname.startsWith("/projects/")); return <Link key={tab.href} href={"/#"+tab.href.slice(1)} onClick={(event)=>{if(pathname!=="/"||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;const section=document.getElementById(tab.href.slice(1));if(!section)return;event.preventDefault();window.dispatchEvent(new Event("portfolio:direct-navigation"));history.replaceState(null,"","/#"+tab.href.slice(1));section.scrollIntoView({behavior:"instant",block:"start"});const heading=section.querySelector<HTMLElement>("h2");if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true})}setSection(tab.href)}} aria-current={active ? (pathname === "/" ? "location" : "page") : undefined} className={`inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg border px-2 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primarySoft sm:px-4 sm:text-sm ${active ? "border-primarySoft/50 bg-primary/15 text-primarySoft" : "border-transparent text-textSecondary hover:bg-surface hover:text-textPrimary"}`}>{tab.label}</Link> })}
  </nav>
 </div></header>
}
