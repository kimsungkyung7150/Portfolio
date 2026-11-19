import { isRoutoonReaderReachable } from "@/lib/routoon"

export async function GET() {
  const reachable = await isRoutoonReaderReachable()
  return Response.json({ reachable }, {
    headers: { "Cache-Control": "public, max-age=0, s-maxage=15" },
  })
}
