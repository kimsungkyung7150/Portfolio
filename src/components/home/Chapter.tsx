"use client"
import { useEffect, useRef } from "react"
export function Chapter({ id, number, label, children }: { id:string; number:string; label:string; children:React.ReactNode }) {
 const root=useRef<HTMLElement>(null)
 useEffect(()=>{const el=root.current;if(!el)return;const observer=new IntersectionObserver(entries=>{for(const item of entries)if(item.isIntersecting){el.dataset.visible="true";observer.unobserve(el)}},{threshold:.03});observer.observe(el);return()=>observer.disconnect()},[])
 return <section ref={root} id={id} className="portfolio-section chapter" aria-label={label}><div className="chapter-ribbon" aria-hidden="true"><span className="chapter-number">{number}</span><span className="chapter-line"/><span>{label}</span></div>{children}</section>
}
