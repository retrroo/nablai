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

/**
 * Transforms all green moss/foliage on the log into deep, majestic dark purple
 * while preserving the natural wood bark and transparent background.
 */
async function transformGreenToDarkPurple(bitmap: ImageBitmap): Promise<ImageBitmap> {
  const canvas = document.createElement('canvas')
  canvas.width = bitmap.width
  canvas.height = bitmap.height
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return bitmap

  ctx.drawImage(bitmap, 0, 0)
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imgData.data
  const len = data.length

  for (let i = 0; i < len; i += 4) {
    const a = data[i + 3]
    if (a < 10) continue

    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    if (delta < 8) continue // neutral grey / black / white

    // Calculate hue [0, 360]
    let hue = 0
    if (max === r) {
      hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60
    } else if (max === g) {
      hue = ((b - r) / delta + 2) * 60
    } else {
      hue = ((r - g) / delta + 4) * 60
    }

    const lightness = (max + min) / 510
    const saturation = lightness > 0.5 ? delta / (510 - max - min) : delta / (max + min)

    // Green moss hue range: ~50° (yellow-green) to 175° (cyan-green)
    if (hue >= 50 && hue <= 175 && saturation > 0.12) {
      // Smooth edge blending so no harsh pixel borders appear
      let weight = 1
      if (hue < 64) {
        weight = (hue - 50) / 14
      } else if (hue > 160) {
        weight = (175 - hue) / 15
      }

      // Target: Deep Dark Purple / Cosmic Violet
      // Target Hue = 280° (Royal Dark Violet/Purple)
      const targetH = 280
      const targetS = Math.min(1.0, saturation * 1.35)
      // "Donker paars" - deep, rich purple
      const targetL = Math.max(0.14, Math.min(0.48, lightness * 0.70))

      // HSL to RGB conversion
      const c = (1 - Math.abs(2 * targetL - 1)) * targetS
      const x = c * (1 - Math.abs(((targetH / 60) % 2) - 1))
      const m = targetL - c / 2

      // targetH = 280 -> [240, 300) -> r'=x, g'=0, b'=c
      const rNew = Math.round((x + m) * 255)
      const gNew = Math.round(m * 255)
      const bNew = Math.round((c + m) * 255)

      data[i] = Math.round(r * (1 - weight) + rNew * weight)
      data[i + 1] = Math.round(g * (1 - weight) + gNew * weight)
      data[i + 2] = Math.round(b * (1 - weight) + bNew * weight)
    }
  }

  ctx.putImageData(imgData, 0, 0)
  return createImageBitmap(canvas)
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
    onProgress(Math.min(0.92, fraction * 0.9))
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

  const [rawBare, rawMoss] = await Promise.all([
    createImageBitmap(bareBlob),
    createImageBitmap(mossBlob),
  ])

  // Transform green moss into dark purple on both layers for 100% dark purple tree foliage!
  const [bare, moss] = await Promise.all([
    transformGreenToDarkPurple(rawBare),
    transformGreenToDarkPurple(rawMoss),
  ])

  onProgress(1.0)
  return { bare, moss }
}
