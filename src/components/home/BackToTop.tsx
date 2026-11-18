"use client"
import { useEffect, useState } from "react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => { const intro=document.querySelector<HTMLElement>(".scroll-film"); const threshold=intro ? intro.offsetTop+intro.offsetHeight-120 : innerHeight; setVisible(scrollY > Math.max(innerHeight,threshold)) }
    update()
    addEventListener("scroll", update, { passive: true })
    addEventListener("resize", update)
    return () => { removeEventListener("scroll", update); removeEventListener("resize", update) }
  }, [])
  if (!visible) return null
  return <button type="button" aria-label="페이지 맨 위로 이동" onClick={() => {
    const heading = document.querySelector<HTMLElement>("h1")
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }) }
    scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })
  }} className="fixed bottom-5 right-5 z-50 min-h-11 rounded-full border border-white/20 bg-[#141820]/95 px-5 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#242b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none">맨 위로</button>
}
