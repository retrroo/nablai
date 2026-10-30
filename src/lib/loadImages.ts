export interface LoadedAssets {
  bare: ImageBitmap
  moss: ImageBitmap
}

async function fetchWithProgress(
  url: string,
  onProgress: (loadedBytes: number, totalBytes: number) => void
): Promise<Blob> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`)
  }

  const contentLength = response.headers.get('Content-Length')
  const total = contentLength ? parseInt(contentLength, 10) : 0

  if (!response.body || total === 0) {
    const blob = await response.blob()
    onProgress(blob.size, blob.size)
    return blob
  }

  const reader = response.body.getReader()
  let received = 0
  const chunks: Uint8Array[] = []

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) {
      chunks.push(value)
      received += value.length
      onProgress(received, total)
    }
  }

  const fullBuffer = new Uint8Array(received)
  let offset = 0
  for (const chunk of chunks) {
    fullBuffer.set(chunk, offset)
    offset += chunk.length
  }

  return new Blob([fullBuffer], { type: 'image/webp' })
}

export async function loadHeroAssets(
  onProgress: (progress: number) => void
): Promise<LoadedAssets> {
  const BARE_URL = 'https://assets.uberdesigner.ai/easylog/log-bare.webp'
  const MOSS_URL = 'https://assets.uberdesigner.ai/easylog/log-moss.webp'

  let bareLoaded = 0
  let bareTotal = 1
  let mossLoaded = 0
  let mossTotal = 1

  const updateOverall = () => {
    const totalBytes = bareTotal + mossTotal
    const loadedBytes = bareLoaded + mossLoaded
    const fraction = totalBytes > 0 ? loadedBytes / totalBytes : 0
    onProgress(Math.min(0.95, fraction * 0.9))
  }

  // Load fonts and images concurrently
  const fontsPromise = Promise.allSettled([
    document.fonts.load('italic 400 1em "Instrument Serif"'),
    document.fonts.load('400 1em "Instrument Sans"'),
    document.fonts.load('500 1em "Instrument Sans"'),
  ])

  const [bareBlob, mossBlob] = await Promise.all([
    fetchWithProgress(BARE_URL, (loaded, total) => {
      bareLoaded = loaded
      bareTotal = total || loaded
      updateOverall()
    }),
    fetchWithProgress(MOSS_URL, (loaded, total) => {
      mossLoaded = loaded
      mossTotal = total || loaded
      updateOverall()
    }),
  ])

  await fontsPromise

  const [bare, moss] = await Promise.all([
    createImageBitmap(bareBlob),
    createImageBitmap(mossBlob),
  ])

  onProgress(1.0)
  return { bare, moss }
}
