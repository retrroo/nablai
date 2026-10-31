import os
import subprocess
from PIL import Image

SCRIPTS_DIR = os.path.abspath("scripts")
OUTPUT_DIR = os.path.abspath("public/branding")
os.makedirs(OUTPUT_DIR, exist_ok=True)

CHROME_PATH = "C:/Program Files/Google/Chrome/Application/chrome.exe"

def render_html_to_png(html_content, output_png_path, width, height, transparent=False):
    temp_html = os.path.join(SCRIPTS_DIR, "temp_render.html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)

    file_url = "file:///" + temp_html.replace("\\", "/")
    
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--virtual-time-budget=4500",
        f"--window-size={width},{height}",
        f"--screenshot={output_png_path}",
    ]
    if transparent:
        cmd.append("--default-background-color=00000000")
        
    cmd.append(file_url)

    subprocess.run(cmd, check=True)
    
    if os.path.exists(temp_html):
        try:
            os.remove(temp_html)
        except Exception:
            pass

    if os.path.exists(output_png_path):
        with Image.open(output_png_path) as img:
            print(f"Rendered {os.path.basename(output_png_path)}: size={img.size}, mode={img.mode}")


# ==============================================================================
# 1. Official Logo Badge (800x800 px) - Obsidian Deep Black
# ==============================================================================
LOGO_800_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 800px;
    height: 800px;
    background: #000000;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #ffffff;
    position: relative;
  }
  
  .bg-glow {
    position: absolute;
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(113,113,122,0.02) 45%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .stars {
    position: absolute;
    inset: 0;
    background-image: 
      radial-gradient(1px 1px at 120px 140px, rgba(255,255,255,0.7), transparent),
      radial-gradient(1px 1px at 680px 160px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1.5px 1.5px at 180px 650px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 700px 680px, rgba(255,255,255,0.7), transparent),
      radial-gradient(1px 1px at 400px 80px, rgba(255,255,255,0.4), transparent),
      radial-gradient(1.5px 1.5px at 350px 720px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 740px 380px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 60px 420px, rgba(255,255,255,0.4), transparent);
  }

  .frame-border {
    position: absolute;
    inset: 36px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 28px;
    pointer-events: none;
  }
  
  .crosshair {
    position: absolute;
    width: 14px;
    height: 14px;
    pointer-events: none;
  }
  .ch-tl { top: 48px; left: 48px; border-top: 1.5px solid rgba(255,255,255,0.35); border-left: 1.5px solid rgba(255,255,255,0.35); }
  .ch-tr { top: 48px; right: 48px; border-top: 1.5px solid rgba(255,255,255,0.35); border-right: 1.5px solid rgba(255,255,255,0.35); }
  .ch-bl { bottom: 48px; left: 48px; border-bottom: 1.5px solid rgba(255,255,255,0.35); border-left: 1.5px solid rgba(255,255,255,0.35); }
  .ch-br { bottom: 48px; right: 48px; border-bottom: 1.5px solid rgba(255,255,255,0.35); border-right: 1.5px solid rgba(255,255,255,0.35); }

  .top-tag {
    position: absolute;
    top: 56px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.28em;
    color: #71717a;
    text-transform: uppercase;
  }
  .tag-dot {
    width: 6px;
    height: 6px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255,255,255,0.9);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .icon-wrapper {
    width: 210px;
    height: 210px;
    margin-bottom: 34px;
    filter: drop-shadow(0 0 35px rgba(255,255,255,0.18));
  }

  .brand-name {
    font-size: 88px;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    display: flex;
    align-items: baseline;
    margin-bottom: 16px;
  }
  .part-nabl { color: #ffffff; }
  .part-a-wrap {
    position: relative;
    display: inline-block;
    color: #ffffff;
  }
  .part-a-split {
    position: absolute;
    inset: 0;
    color: #71717a;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
  .part-i { color: #71717a; }

  .tagline {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.35em;
    color: #a1a1aa;
    text-transform: uppercase;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .tagline::before, .tagline::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }

  .bottom-meta {
    position: absolute;
    bottom: 56px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #52525b;
    letter-spacing: 0.18em;
    display: flex;
    gap: 16px;
  }
  .bottom-meta span { color: #71717a; }
</style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="stars"></div>
  <div class="frame-border"></div>
  <div class="crosshair ch-tl"></div>
  <div class="crosshair ch-tr"></div>
  <div class="crosshair ch-bl"></div>
  <div class="crosshair ch-br"></div>

  <div class="top-tag">
    <div class="tag-dot"></div>
    <span>Autonomous AI Systems &bull; 800&times;800 HD</span>
  </div>

  <div class="content">
    <div class="icon-wrapper">
      <svg viewBox="0 0 100 100" fill="none" style="width:100%; height:100%;">
        <defs>
          <linearGradient id="nablaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#71717a" />
          </linearGradient>
        </defs>

        <!-- Left arm: Pure White Nabla -->
        <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
        <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />

        <!-- Right arm: Metallic Silver Gradient -->
        <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGrad)" />
        <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />

        <!-- Central Vector Node -->
        <circle cx="50" cy="48" r="5" fill="#71717a" />
        <circle cx="50" cy="48" r="2.5" fill="#ffffff" />
      </svg>
    </div>

    <div class="brand-name">
      <span class="part-nabl">Nabl</span>
      <span class="part-a-wrap">
        <span>a</span>
        <span class="part-a-split">a</span>
      </span>
      <span class="part-i">i</span>
    </div>

    <div class="tagline">
      AI Engineering &bull; Software Studio
    </div>
  </div>

  <div class="bottom-meta">
    <div>&nabla;L(&theta;) // VECTOR SPACE</div>
    <div>&bull;</div>
    <div>FOUNDED BY ONUR &amp; KARIM</div>
  </div>
</body>
</html>
"""

# ==============================================================================
# 2. Transparent Background Official Logo (800x800 px)
# ==============================================================================
LOGO_800_TRANSPARENT_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 800px;
    height: 800px;
    background: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #ffffff;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon-wrapper {
    width: 250px;
    height: 250px;
    margin-bottom: 38px;
    filter: drop-shadow(0 0 30px rgba(255,255,255,0.15));
  }
  .brand-name {
    font-size: 96px;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    display: flex;
    align-items: baseline;
    margin-bottom: 18px;
  }
  .part-nabl { color: #ffffff; }
  .part-a-wrap {
    position: relative;
    display: inline-block;
    color: #ffffff;
  }
  .part-a-split {
    position: absolute;
    inset: 0;
    color: #71717a;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
  .part-i { color: #71717a; }
  .tagline {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.35em;
    color: #a1a1aa;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="content">
    <div class="icon-wrapper">
      <svg viewBox="0 0 100 100" fill="none" style="width:100%; height:100%;">
        <defs>
          <linearGradient id="nablaGradTrans" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#71717a" />
          </linearGradient>
        </defs>
        <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
        <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
        <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGradTrans)" />
        <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
        <circle cx="50" cy="48" r="5" fill="#71717a" />
        <circle cx="50" cy="48" r="2.5" fill="#ffffff" />
      </svg>
    </div>
    <div class="brand-name">
      <span class="part-nabl">Nabl</span>
      <span class="part-a-wrap">
        <span>a</span>
        <span class="part-a-split">a</span>
      </span>
      <span class="part-i">i</span>
    </div>
    <div class="tagline">
      AI Engineering &bull; Software Studio
    </div>
  </div>
</body>
</html>
"""

# ==============================================================================
# 3. Pure Vector App / Avatar Icon (800x800 px) - Obsidian Space
# ==============================================================================
ICON_800_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 800px;
    height: 800px;
    background: #000000;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .bg-glow {
    position: absolute;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(113,113,122,0.03) 45%, rgba(0,0,0,0) 75%);
    border-radius: 50%;
  }
  .outer-ring {
    position: absolute;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.07);
    pointer-events: none;
  }
  .icon-svg {
    width: 480px;
    height: 480px;
    z-index: 10;
    filter: drop-shadow(0 0 50px rgba(255,255,255,0.22));
  }
</style>
</head>
<body>
  <div class="bg-glow"></div>
  <div class="outer-ring"></div>
  <svg class="icon-svg" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="nablaGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#71717a" />
      </linearGradient>
    </defs>
    <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
    <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
    <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGradIcon)" />
    <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
    <circle cx="50" cy="48" r="5" fill="#71717a" />
    <circle cx="50" cy="48" r="2.5" fill="#ffffff" />
  </svg>
</body>
</html>
"""

# ==============================================================================
# 4. Pure Vector App / Avatar Icon Transparent (800x800 px)
# ==============================================================================
ICON_800_TRANSPARENT_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 800px;
    height: 800px;
    background: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-svg {
    width: 520px;
    height: 520px;
    filter: drop-shadow(0 0 40px rgba(255,255,255,0.25));
  }
</style>
</head>
<body>
  <svg class="icon-svg" viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="nablaGradIconTrans" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#71717a" />
      </linearGradient>
    </defs>
    <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
    <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
    <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGradIconTrans)" />
    <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
    <circle cx="50" cy="48" r="5" fill="#71717a" />
    <circle cx="50" cy="48" r="2.5" fill="#ffffff" />
  </svg>
</body>
</html>
"""

# ==============================================================================
# 5. Master Banner (1500x500 px) - The Architectural Constellation Banner
# ==============================================================================
BANNER_1500_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1500px;
    height: 500px;
    background: #000000;
    overflow: hidden;
    position: relative;
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .space-bg {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 80% 45%, rgba(255,255,255,0.04) 0%, rgba(20,20,28,0.2) 40%, rgba(0,0,0,0) 70%),
      radial-gradient(circle at 15% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 60%),
      #000000;
  }

  #constellation-canvas {
    position: absolute;
    inset: 0;
    width: 1500px;
    height: 500px;
    z-index: 2;
  }

  .frame-border {
    position: absolute;
    inset: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    pointer-events: none;
    z-index: 20;
  }

  .crosshair {
    position: absolute;
    width: 12px;
    height: 12px;
    pointer-events: none;
    z-index: 21;
  }
  .ch-tl { top: 30px; left: 30px; border-top: 1.5px solid rgba(255,255,255,0.35); border-left: 1.5px solid rgba(255,255,255,0.35); }
  .ch-tr { top: 30px; right: 30px; border-top: 1.5px solid rgba(255,255,255,0.35); border-right: 1.5px solid rgba(255,255,255,0.35); }
  .ch-bl { bottom: 30px; left: 30px; border-bottom: 1.5px solid rgba(255,255,255,0.35); border-left: 1.5px solid rgba(255,255,255,0.35); }
  .ch-br { bottom: 30px; right: 30px; border-bottom: 1.5px solid rgba(255,255,255,0.35); border-right: 1.5px solid rgba(255,255,255,0.35); }

  .hero-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 80px;
    width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 15;
  }

  .tag-pill {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 14px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    margin-bottom: 24px;
    width: fit-content;
  }
  .tag-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px rgba(255,255,255,0.9);
  }
  .tag-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    color: #e4e4e7;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .logo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .logo-icon {
    width: 36px;
    height: 36px;
    filter: drop-shadow(0 0 12px rgba(255,255,255,0.3));
  }
  .logo-brand {
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.04em;
    display: flex;
    align-items: baseline;
    line-height: 1;
  }
  .logo-brand .part-nabl { color: #ffffff; }
  .logo-brand .part-a-wrap {
    position: relative;
    display: inline-block;
    color: #ffffff;
  }
  .logo-brand .part-a-split {
    position: absolute;
    inset: 0;
    color: #71717a;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
  .logo-brand .part-i { color: #71717a; }
  .logo-divider {
    width: 1px;
    height: 18px;
    background: rgba(255,255,255,0.18);
    margin: 0 4px;
  }
  .logo-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #71717a;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .main-headline {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .headline-italic {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-size: 58px;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 0 35px rgba(255,255,255,0.35), 0 4px 18px rgba(0,0,0,0.9);
  }
  .headline-sans {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 300;
    font-size: 50px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: #ffffff;
    text-shadow: 0 0 35px rgba(255,255,255,0.35), 0 4px 18px rgba(0,0,0,0.9);
  }

  .description {
    font-size: 15px;
    line-height: 1.5;
    color: #a1a1aa;
    max-width: 520px;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .footer-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #71717a;
    letter-spacing: 0.15em;
  }
  .footer-meta .active-val {
    color: #e4e4e7;
  }
  .footer-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #52525b;
  }

  .top-right-meta {
    position: absolute;
    top: 40px;
    right: 50px;
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #71717a;
    letter-spacing: 0.18em;
    z-index: 15;
    line-height: 1.6;
  }
  .top-right-meta span {
    color: #ffffff;
  }

  .bottom-right-meta {
    position: absolute;
    bottom: 38px;
    right: 50px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: #e4e4e7;
    letter-spacing: 0.22em;
    z-index: 15;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .bottom-right-meta::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
  }
</style>
</head>
<body>
  <div class="space-bg"></div>
  <canvas id="constellation-canvas" width="1500" height="500"></canvas>

  <div class="frame-border"></div>
  <div class="crosshair ch-tl"></div>
  <div class="crosshair ch-tr"></div>
  <div class="crosshair ch-bl"></div>
  <div class="crosshair ch-br"></div>

  <div class="hero-content">
    <div class="logo-row">
      <div class="logo-icon">
        <svg viewBox="0 0 100 100" fill="none" style="width:100%; height:100%;">
          <defs>
            <linearGradient id="bGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#71717a" />
            </linearGradient>
          </defs>
          <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
          <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
          <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#bGrad)" />
          <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
          <circle cx="50" cy="48" r="4.5" fill="#71717a" />
          <circle cx="50" cy="48" r="2" fill="#ffffff" />
        </svg>
      </div>
      <div class="logo-brand">
        <span class="part-nabl">Nabl</span>
        <span class="part-a-wrap">
          <span>a</span>
          <span class="part-a-split">a</span>
        </span>
        <span class="part-i">i</span>
      </div>
      <div class="logo-divider"></div>
      <div class="logo-sub">STUDIO // 2026</div>
    </div>

    <div class="main-headline">
      <div class="headline-italic">Where models</div>
      <div class="headline-sans">become products.</div>
    </div>

    <p class="description">
      Autonomous multi-agent architectures, bespoke neural systems &amp; production AI engineering.
    </p>

    <div class="footer-meta">
      <div>&nabla;L(&theta;) &rarr; <span class="active-val">GLOBAL OPTIMUM</span></div>
      <div class="footer-dot"></div>
      <div>VECTOR SPACE // <span class="active-val">LATENT DYNAMICS</span></div>
    </div>
  </div>

  <div class="top-right-meta">
    <div>SYS_STATUS: <span>OPTIMAL</span></div>
    <div>LATENT_DIM: <span>4096-D</span></div>
  </div>

  <div class="bottom-right-meta">
    NABLAI.APP
  </div>

  <script>
    const canvas = document.getElementById('constellation-canvas');
    const ctx = canvas.getContext('2d');
    const width = 1500;
    const height = 500;

    let seed = 1337;
    function random() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let i = 0; i < 90; i++) {
      const sx = random() * width;
      const sy = random() * height;
      const sr = 0.5 + random() * 1.2;
      const sa = 0.15 + random() * 0.65;
      
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${sa})`;
      ctx.fill();

      if (random() > 0.88) {
        ctx.beginPath();
        ctx.moveTo(sx - sr * 3, sy);
        ctx.lineTo(sx + sr * 3, sy);
        ctx.moveTo(sx, sy - sr * 3);
        ctx.lineTo(sx, sy + sr * 3);
        ctx.strokeStyle = `rgba(255, 255, 255, ${sa * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    const nodeConfigs = [
      { x: 800, y: 240, r: 4.5, type: 'major' },
      { x: 890, y: 190, r: 3.5, type: 'medium' },
      { x: 960, y: 260, r: 4.0, type: 'major' },
      { x: 1040, y: 170, r: 3.0, type: 'medium' },
      { x: 1120, y: 220, r: 4.5, type: 'major' },
      { x: 1200, y: 150, r: 3.5, type: 'medium' },
      { x: 1280, y: 230, r: 4.0, type: 'major' },
      { x: 1360, y: 180, r: 3.0, type: 'minor' },
      { x: 1420, y: 250, r: 3.0, type: 'minor' },

      { x: 850, y: 110, r: 3.0, type: 'minor' },
      { x: 930, y: 90, r: 3.5, type: 'medium' },
      { x: 1020, y: 95, r: 4.0, type: 'major' },
      { x: 1100, y: 80, r: 3.0, type: 'minor' },
      { x: 1180, y: 90, r: 3.5, type: 'medium' },
      { x: 1260, y: 110, r: 3.0, type: 'minor' },
      { x: 1340, y: 100, r: 3.5, type: 'medium' },

      { x: 860, y: 350, r: 3.5, type: 'medium' },
      { x: 940, y: 380, r: 4.0, type: 'major' },
      { x: 1020, y: 320, r: 3.5, type: 'medium' },
      { x: 1110, y: 390, r: 4.5, type: 'major' },
      { x: 1190, y: 330, r: 3.5, type: 'medium' },
      { x: 1270, y: 370, r: 4.0, type: 'major' },
      { x: 1350, y: 340, r: 3.0, type: 'minor' },
      { x: 1410, y: 380, r: 3.0, type: 'minor' },

      { x: 740, y: 210, r: 3.0, type: 'minor' },
      { x: 770, y: 300, r: 2.5, type: 'minor' },
      { x: 880, y: 270, r: 3.0, type: 'medium' },
      { x: 990, y: 210, r: 3.5, type: 'medium' },
      { x: 1060, y: 280, r: 3.5, type: 'medium' },
      { x: 1150, y: 280, r: 3.0, type: 'minor' },
      { x: 1230, y: 260, r: 3.5, type: 'medium' },
      { x: 1320, y: 270, r: 3.0, type: 'minor' },
      { x: 980, y: 140, r: 3.0, type: 'minor' },
      { x: 1140, y: 150, r: 3.0, type: 'minor' },
      { x: 1060, y: 390, r: 3.0, type: 'minor' },
      { x: 1230, y: 410, r: 2.5, type: 'minor' },
      { x: 1320, y: 420, r: 3.0, type: 'minor' },
      { x: 1390, y: 140, r: 2.5, type: 'minor' },
      { x: 1440, y: 190, r: 2.5, type: 'minor' },

      { x: 670, y: 230, r: 2.5, type: 'minor' },
      { x: 620, y: 250, r: 2.0, type: 'minor' },
      { x: 580, y: 230, r: 1.8, type: 'minor' },
    ];

    const edges = [];
    for (let i = 0; i < nodeConfigs.length; i++) {
      for (let j = i + 1; j < nodeConfigs.length; j++) {
        const dx = nodeConfigs[i].x - nodeConfigs[j].x;
        const dy = nodeConfigs[i].y - nodeConfigs[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 135) {
          edges.push({
            from: nodeConfigs[i],
            to: nodeConfigs[j],
            dist: dist,
            alpha: Math.max(0.08, (1 - dist / 135) * 0.45)
          });
        }
      }
    }

    edges.forEach(edge => {
      const grad = ctx.createLinearGradient(edge.from.x, edge.from.y, edge.to.x, edge.to.y);
      grad.addColorStop(0, `rgba(255, 255, 255, ${edge.alpha})`);
      grad.addColorStop(1, `rgba(161, 161, 170, ${edge.alpha * 0.7})`);
      
      ctx.beginPath();
      ctx.moveTo(edge.from.x, edge.from.y);
      ctx.lineTo(edge.to.x, edge.to.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = edge.dist < 70 ? 1.4 : 0.9;
      ctx.stroke();
    });

    nodeConfigs.forEach(node => {
      if (node.type === 'major') {
        const haloGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 4.5);
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        haloGrad.addColorStop(0.5, 'rgba(113, 113, 122, 0.15)');
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();
      } else if (node.type === 'medium') {
        const haloGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 3.5);
        haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = haloGrad;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = node.type === 'minor' ? '#a1a1aa' : '#ffffff';
      ctx.fill();

      if (node.type === 'major') {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    });
  </script>
</body>
</html>
"""

# ==============================================================================
# 6. Minimalist Master Banner (1500x500 px) - Cinematic Space Void
# ==============================================================================
BANNER_MINIMAL_1500_HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1500px;
    height: 500px;
    background: #000000;
    overflow: hidden;
    position: relative;
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .space-bg {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, rgba(10,10,15,0.2) 50%, rgba(0,0,0,0) 80%),
      #000000;
  }

  #canvas-bg {
    position: absolute;
    inset: 0;
    width: 1500px;
    height: 500px;
  }

  .frame-border {
    position: absolute;
    inset: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    pointer-events: none;
  }

  .center-lockup {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .icon-wrapper {
    width: 90px;
    height: 90px;
    margin-bottom: 22px;
    filter: drop-shadow(0 0 30px rgba(255,255,255,0.25));
  }

  .brand-title {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -0.04em;
    display: flex;
    align-items: baseline;
    line-height: 1;
    margin-bottom: 12px;
  }
  .brand-title .part-nabl { color: #ffffff; }
  .brand-title .part-a-wrap {
    position: relative;
    display: inline-block;
    color: #ffffff;
  }
  .brand-title .part-a-split {
    position: absolute;
    inset: 0;
    color: #71717a;
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
  .brand-title .part-i { color: #71717a; }

  .headline-wrap {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-size: 28px;
    color: #d4d4d8;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
  }

  .tagline-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    letter-spacing: 0.35em;
    color: #71717a;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .tagline-meta::before, .tagline-meta::after {
    content: "";
    display: inline-block;
    width: 32px;
    height: 1px;
    background: rgba(255,255,255,0.18);
  }

  .corner-left {
    position: absolute;
    bottom: 40px;
    left: 48px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #71717a;
    letter-spacing: 0.2em;
    z-index: 12;
  }

  .corner-right {
    position: absolute;
    bottom: 40px;
    right: 48px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #a1a1aa;
    letter-spacing: 0.2em;
    z-index: 12;
  }
</style>
</head>
<body>
  <div class="space-bg"></div>
  <canvas id="canvas-bg" width="1500" height="500"></canvas>
  <div class="frame-border"></div>

  <div class="center-lockup">
    <div class="icon-wrapper">
      <svg viewBox="0 0 100 100" fill="none" style="width:100%; height:100%;">
        <defs>
          <linearGradient id="nablaGradMin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#71717a" />
          </linearGradient>
        </defs>
        <path d="M 18 24 L 50 82 L 42 82 L 12 28 Z" fill="#ffffff" />
        <path d="M 14 24 L 50 24 L 50 31 L 14 31 Z" fill="#ffffff" />
        <path d="M 50 82 L 82 24 L 88 28 L 58 82 Z" fill="url(#nablaGradMin)" />
        <path d="M 50 24 L 86 24 L 86 31 L 50 31 Z" fill="#71717a" />
        <circle cx="50" cy="48" r="4.5" fill="#71717a" />
        <circle cx="50" cy="48" r="2" fill="#ffffff" />
      </svg>
    </div>

    <div class="brand-title">
      <span class="part-nabl">Nabl</span>
      <span class="part-a-wrap">
        <span>a</span>
        <span class="part-a-split">a</span>
      </span>
      <span class="part-i">i</span>
    </div>

    <div class="headline-wrap">
      Where models become products.
    </div>

    <div class="tagline-meta">
      Autonomous AI Systems &bull; Software Lab
    </div>
  </div>

  <div class="corner-left">
    &nabla;L(&theta;) // VECTOR SPACE
  </div>
  <div class="corner-right">
    NABLAI.APP
  </div>

  <script>
    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');
    const width = 1500;
    const height = 500;

    let seed = 999;
    function random() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let i = 0; i < 110; i++) {
      const sx = random() * width;
      const sy = random() * height;
      const sr = 0.5 + random() * 1.3;
      const sa = 0.15 + random() * 0.6;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${sa})`;
      ctx.fill();
    }

    const leftNodes = [
      { x: 100, y: 150, r: 2.5 }, { x: 180, y: 120, r: 3 }, { x: 240, y: 180, r: 3.5 },
      { x: 160, y: 250, r: 3 }, { x: 90, y: 320, r: 2.5 }, { x: 220, y: 340, r: 3 },
      { x: 290, y: 260, r: 3 }, { x: 340, y: 190, r: 2 }
    ];
    const rightNodes = [
      { x: 1400, y: 150, r: 2.5 }, { x: 1320, y: 120, r: 3 }, { x: 1260, y: 180, r: 3.5 },
      { x: 1340, y: 250, r: 3 }, { x: 1410, y: 320, r: 2.5 }, { x: 1280, y: 340, r: 3 },
      { x: 1210, y: 260, r: 3 }, { x: 1160, y: 190, r: 2 }
    ];

    function drawMesh(mesh) {
      for (let i = 0; i < mesh.length; i++) {
        for (let j = i + 1; j < mesh.length; j++) {
          const dx = mesh[i].x - mesh[j].x;
          const dy = mesh[i].y - mesh[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(mesh[i].x, mesh[i].y);
            ctx.lineTo(mesh[j].x, mesh[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 130) * 0.25})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
      mesh.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });
    }

    drawMesh(leftNodes);
    drawMesh(rightNodes);
  </script>
</body>
</html>
"""

if __name__ == "__main__":
    print("========================================")
    print("Generating Complete Nablai Brand Suite...")
    print("========================================")
    
    # 1. 800x800 Logo Badge (Solid Black Space)
    render_html_to_png(LOGO_800_HTML, os.path.join(OUTPUT_DIR, "nablai-logo-800x800.png"), 800, 800)
    
    # 2. 800x800 Logo Badge (Transparent Background)
    render_html_to_png(LOGO_800_TRANSPARENT_HTML, os.path.join(OUTPUT_DIR, "nablai-logo-transparent-800x800.png"), 800, 800, transparent=True)
    
    # 3. 800x800 Icon Avatar (Solid Black Space)
    render_html_to_png(ICON_800_HTML, os.path.join(OUTPUT_DIR, "nablai-icon-800x800.png"), 800, 800)
    
    # 4. 800x800 Icon Avatar (Transparent Background)
    render_html_to_png(ICON_800_TRANSPARENT_HTML, os.path.join(OUTPUT_DIR, "nablai-icon-transparent-800x800.png"), 800, 800, transparent=True)

    # 5. 1500x500 Master Banner (Architectural Constellation Banner)
    render_html_to_png(BANNER_1500_HTML, os.path.join(OUTPUT_DIR, "nablai-banner-1500x500.png"), 1500, 500)

    # 6. 1500x500 Master Banner (Minimalist Cinematic Void)
    render_html_to_png(BANNER_MINIMAL_1500_HTML, os.path.join(OUTPUT_DIR, "nablai-banner-minimal-1500x500.png"), 1500, 500)

    print("========================================")
    print("All Brand Assets Generated Successfully!")
    print("========================================")
