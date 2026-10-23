import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-pied-70.vercel.app"),
  title: {
    default: "김성경 | Product / AI Engineer",
    template: "%s | 김성경",
  },
  description:
    "10년 이상의 C#·SQL 업무 시스템 경험을 바탕으로 업무 기억 비서 하루, AI 웹소설 플랫폼 Routoon 등 근거와 검증이 남는 제품을 만드는 개발자 김성경의 포트폴리오입니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const bodyClassName = [geistSans.variable, geistMono.variable, "min-h-screen antialiased"].join(" ")

  return (
    <html lang="ko" className="dark">
      <body className={bodyClassName}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
