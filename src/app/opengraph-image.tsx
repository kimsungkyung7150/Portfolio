import { ImageResponse } from "next/og"

export const alt = ".NET 개발자 포트폴리오 · ASP.NET과 SQL Server 업무 시스템 개발 경험"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function PortfolioShareImage() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex", alignItems: "center", width: "100%", height: "100%",
        background: "#080a10", color: "#f4f7fb", padding: 64,
      }}>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          width: "100%", height: "100%", padding: 64, border: "1px solid #344155",
          borderRadius: 28, background: "#0f141e",
        }}>
          <div style={{ color: "#a895ff", fontSize: 24, letterSpacing: 4 }}>PORTFOLIO</div>
          <div style={{ marginTop: 24, fontSize: 94, fontWeight: 700, letterSpacing: -4 }}>.NET Developer</div>
          <div style={{ marginTop: 26, color: "#aab4c3", fontSize: 34 }}>ASP.NET · SQL Server</div>
          <div style={{ marginTop: 52, color: "#a895ff", fontSize: 25 }}>8 years 6 months in business systems</div>
        </div>
      </div>
    ),
    size,
  )
}
