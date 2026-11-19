import type { NextConfig } from "next";

const sharedContentPolicy = [
  "default-src 'self'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
].join("; ");

// Prerendered Next.js pages emit inline hydration scripts.
const appScriptPolicy = `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`;

const nextConfig: NextConfig = {
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: `${sharedContentPolicy}; ${appScriptPolicy}` },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/projects/haru/report/:path*",
        headers: [
          { key: "Content-Security-Policy", value: `${sharedContentPolicy}; script-src 'self'` },
        ],
      },
    ];
  },
};

export default nextConfig;
