export type AirFlowThemeMode = 'light' | 'dark'

export type AirFlowPairKey = 'map' | 'airport' | 'punctuality'

export interface AirFlowScreenshot {
  id: string
  indexLabel: string
  src: string
  alt: string
  theme: AirFlowThemeMode
  pairId?: AirFlowPairKey
  category: string
  shortLabel: string
  title: string
  caption: string
  description: string
  highlights: string[]
}

export const AIRFLOW_SCREENSHOTS: AirFlowScreenshot[] = [
  {
    id: 'map-live-flight',
    indexLabel: '01',
    src: '/airflow/01-map-live-flight.png',
    alt: 'AirFlow live Skia vector route map showing British Airways BA431 from Amsterdam AMS to London Heathrow LHR',
    theme: 'light',
    pairId: 'map',
    category: 'GPU ROUTE MAP',
    shortLabel: 'Live Map',
    title: 'Live Skia Route Map',
    caption: 'AMS -> LHR · BA431',
    description:
      'Custom 60fps vector map rendered via React Native Skia, paired with a floating live flight card displaying departure countdown, Airbus A320 equipment, 370 km arc, and dual UTC offsets.',
    highlights: [
      '60fps React Native Skia great-circle vector arc',
      'Floating BA431 boarding status & countdown card',
      'Airport search bar with AI insights trigger',
    ],
  },
  {
    id: 'my-flights',
    indexLabel: '02',
    src: '/airflow/02-my-flights.png',
    alt: 'AirFlow My Flights itinerary list showing Upcoming British Airways BA431 Boarding, Vueling VY8460 Delayed 25 min, and TAP TP668 On time',
    theme: 'light',
    category: 'FLIGHT TRACKER',
    shortLabel: 'My Flights',
    title: 'Upcoming & Past Itineraries',
    caption: 'Boarding, Delayed & On Time',
    description:
      'Utility-first itinerary overview separating live boarding flights, early delay alerts (Delayed 25 min), and upcoming legs, plus one-tap import from email or calendar.',
    highlights: [
      'Instant status indicators (Boarding, Delayed, On time)',
      'Upcoming & Past itinerary segmented switcher',
      'Direct email & calendar flight import drawer',
    ],
  },
  {
    id: 'airport-departures',
    indexLabel: '03',
    src: '/airflow/04-airport-departures.png',
    alt: 'AirFlow Airport Hub modal for Amsterdam Airport Schiphol AMS EHAM showing 9 degrees C Overcast weather, Low delays, and 50 live departures',
    theme: 'light',
    pairId: 'airport',
    category: 'AIRPORT HUB',
    shortLabel: 'Airport Hub',
    title: 'Live Airport Hub & Departures',
    caption: 'AMS · EHAM Schiphol',
    description:
      'Terminal telemetry dossier for Amsterdam Airport Schiphol combining local weather (9 °C Overcast), aggregate delay health bar, and a real-time carrier-badged departure board.',
    highlights: [
      'Live local weather & runway delay risk indicator',
      '100% / Delayed / Cancelled daily distribution bar',
      'Carrier-badged Departures & Arrivals live schedule',
    ],
  },
  {
    id: 'punctuality-week',
    indexLabel: '04',
    src: '/airflow/05-punctuality-week.png',
    alt: 'AirFlow Weekly Punctuality and History screen for AMS Schiphol showing 31 min average delay and AI recommendation for Wednesday',
    theme: 'light',
    pairId: 'punctuality',
    category: 'PUNCTUALITY AI',
    shortLabel: 'Week History',
    title: 'Weekly Punctuality & AI Insight',
    caption: '31 min avg · 74% on time',
    description:
      '7-day rolling airport punctuality breakdown categorizing each day (Low, Moderate, High delay risk) with AI guidance pinpointing Wednesday as the cleanest departure window.',
    highlights: [
      'Average delay duration & on-time reliability ratio',
      'Color-coded daily severity matrix (M through S)',
      'AI insight card recommending best travel day (87% on time)',
    ],
  },
  {
    id: 'punctuality-month',
    indexLabel: '05',
    src: '/airflow/06-punctuality-month.png',
    alt: 'AirFlow Monthly Punctuality calendar heatmap for November 2026 showing daily delay color severity and 72 percent on time metric',
    theme: 'light',
    category: 'MONTHLY HEATMAP',
    shortLabel: 'Month Calendar',
    title: 'Monthly Delay Calendar',
    caption: 'Nov 2026 · 72% on time',
    description:
      'Full 30-day congestion heatmap exposing multi-week airport delay waves at a glance so frequent flyers can book around predictable bottlenecks.',
    highlights: [
      'Full-month interactive delay calendar heatmap',
      'Low / Moderate / High threshold severity dots',
      'Rolling monthly reliability telemetry (72% on time)',
    ],
  },
  {
    id: 'profile-analytics',
    indexLabel: '06',
    src: '/airflow/03-profile-analytics.png',
    alt: 'AirFlow Profile and Flight Analytics screen showing active flight BA431 and personal travel statistics including distance and top airlines',
    theme: 'light',
    category: 'FLIGHT LOGBOOK',
    shortLabel: 'Analytics',
    title: 'Flight Profile & Lifetime Stats',
    caption: '2,668 km · 4h 32m airborne',
    description:
      'Personal flight passport summarizing active flights in progress, cumulative distance flown, hours spent in the air, countries visited, and ranked top carriers.',
    highlights: [
      'Live "Flying now" status pinned above stats',
      'This year vs All time telemetry toggle',
      'Automatic top airlines & distance leaderboard',
    ],
  },
  {
    id: 'map-dark',
    indexLabel: '07',
    src: '/airflow/07-map-dark.png',
    alt: 'AirFlow Dark Mode live Skia route map showing British Airways BA431 AMS to LHR in obsidian cockpit theme',
    theme: 'dark',
    pairId: 'map',
    category: 'DARK COCKPIT',
    shortLabel: 'Map (Dark)',
    title: 'Live Route Map (Dark Mode)',
    caption: 'Night Vector Map · AMS -> LHR',
    description:
      'Low-glare obsidian map styling built for night cabins and red-eye departures, preserving crisp legibility across European coastlines, borders, and active arcs.',
    highlights: [
      'Custom dark vector tile & coastline contrast tuning',
      'Anti-glare dark floating card for BA431 telemetry',
      'Adaptive translucent iOS bottom navigation pill',
    ],
  },
  {
    id: 'airport-dark',
    indexLabel: '08',
    src: '/airflow/08-airport-dark.png',
    alt: 'AirFlow Dark Mode Airport Hub modal for Amsterdam Airport Schiphol with weather and live departure times',
    theme: 'dark',
    pairId: 'airport',
    category: 'DARK TERMINAL',
    shortLabel: 'Airport (Dark)',
    title: 'Airport Departures Board (Dark)',
    caption: 'Night Terminal · EHAM',
    description:
      'Obsidian bottom-sheet view for Amsterdam Schiphol maintaining balanced hierarchy across live weather, departure breakdown, and airline badges.',
    highlights: [
      'High-contrast dark bottom sheet overlay',
      'Clear emerald status indicators without neon bleed',
      'Full carrier icon clarity against dark surfaces',
    ],
  },
  {
    id: 'punctuality-dark',
    indexLabel: '09',
    src: '/airflow/09-punctuality-dark.png',
    alt: 'AirFlow Dark Mode Punctuality and History screen showing 31 min average delay and Wednesday AI recommendation',
    theme: 'dark',
    pairId: 'punctuality',
    category: 'DARK ANALYTICS',
    shortLabel: 'Insights (Dark)',
    title: 'Punctuality & AI Insights (Dark)',
    caption: 'Dark Mode · Delay Trend',
    description:
      'Dark-mode historical performance breakdown balancing amber and crimson delay severity nodes with crisp emerald AI departure recommendations.',
    highlights: [
      'Low-fatigue obsidian delay analytics surface',
      'Instant Week / Month view switching',
      'High-contrast Wednesday AI travel insight badge',
    ],
  },
]

export const AIRFLOW_HOME_PREVIEW_IDS = ['my-flights', 'map-live-flight', 'punctuality-dark'] as const

export interface AirFlowThemePairOption {
  pairId: AirFlowPairKey
  label: string
  sublabel: string
  lightId: string
  darkId: string
}

export const AIRFLOW_THEME_PAIRS: AirFlowThemePairOption[] = [
  {
    pairId: 'map',
    label: 'Live Skia Route Map',
    sublabel: 'BA431 · AMS -> LHR great-circle vector canvas',
    lightId: 'map-live-flight',
    darkId: 'map-dark',
  },
  {
    pairId: 'airport',
    label: 'Airport Hub & Departures',
    sublabel: 'Schiphol AMS · Live weather, delays & schedule',
    lightId: 'airport-departures',
    darkId: 'airport-dark',
  },
  {
    pairId: 'punctuality',
    label: 'Punctuality & AI Insights',
    sublabel: 'Rolling delay stats & best travel day prediction',
    lightId: 'punctuality-week',
    darkId: 'punctuality-dark',
  },
]
