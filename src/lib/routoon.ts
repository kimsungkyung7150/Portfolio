export const routoonReaderUrl = "https://reader.routoon.com/"

export async function isRoutoonReaderReachable(): Promise<boolean> {
  try {
    const response = await fetch(routoonReaderUrl, {
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(3_500),
    })
    await response.body?.cancel()
    return response.ok
  } catch {
    return false
  }
}
