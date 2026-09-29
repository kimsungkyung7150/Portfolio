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
  title: {
    default: "김성경 | Product / AI Engineer",
    template: "%s | 김성경",
  },
  description:
    "10년 이상의 엔터프라이즈 개발 경험을 기반으로 AI, 웹, WPF 데스크톱, Unity 게임까지 실제 제품을 설계하고 구현하는 개발자 김성경의 포트폴리오입니다.",
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
