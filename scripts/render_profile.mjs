import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/branding');

const svgPureIcon = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="softBackdrop" cx="50%" cy="48%" r="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10" />
      <stop offset="30%" stop-color="#71717a" stop-opacity="0.04" />
      <stop offset="70%" stop-color="#000000" stop-opacity="0" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="nablaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#71717a" />
    </linearGradient>
  </defs>

  <!-- Pitch-black background (#000000) matches X dark mode seamlessly -->
  <rect width="800" height="800" fill="#000000" />
  
  <!-- Subtle circular atmospheric aura -->
  <circle cx="400" cy="390" r="380" fill="url(#softBackdrop)" />

  <!-- Centered Pure Nabla Mark: Scaled & centered specifically for X circle-crop -->
  <g transform="translate(170, 160) scale(4.6)">
    <!-- Left side (Titanium White) -->
    <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
    <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />

    <!-- Right side (Silver Gradient) -->
    <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGrad)" />
    <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />

    <!-- Core node -->
    <circle cx="50" cy="48" r="4.5" fill="#71717a" />
    <circle cx="50" cy="48" r="2" fill="#ffffff" />
  </g>
</svg>
`;

const svgTransparentIcon = `
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="nablaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#71717a" />
    </linearGradient>
  </defs>

  <g transform="translate(170, 160) scale(4.6)">
    <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
    <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
    <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGrad)" />
    <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
    <circle cx="50" cy="48" r="4.5" fill="#71717a" />
    <circle cx="50" cy="48" r="2" fill="#ffffff" />
  </g>
</svg>
`;

async function render() {
  const solidPath = path.join(outputDir, 'nablai-x-profile.png');
  const transparentPath = path.join(outputDir, 'nablai-x-profile-transparent.png');

  await sharp(Buffer.from(svgPureIcon))
    .png()
    .toFile(solidPath);
  console.log('✅ Generated solid profile avatar:', solidPath);

  await sharp(Buffer.from(svgTransparentIcon))
    .png()
    .toFile(transparentPath);
  console.log('✅ Generated transparent profile avatar:', transparentPath);
}

render().catch(console.error);
