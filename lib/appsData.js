// Centralized Portfolio & Creator Software Ecosystem for Mohd Khan (MK Studio)
export const APPS_DATA = [
  {
    id: "mk-autoeditor",
    name: "MK AutoEditor V2",
    tagline: "AI & Timeline Video Editor with Audio Voiceover Sync",
    description:
      "Engineered for YouTube creators, Shorts & Reels makers. Automatically syncs images and video clips to voiceover narration timestamps, burns in dynamic animated captions, and renders 1080p MP4 via 5x hardware-accelerated WebCodecs on your device.",
    category: "Video & YouTube Creation",
    icon: "🎬",
    accentColor: "#fbbf24",
    status: "Web Studio + Desktop",
    badgeType: "live",
    version: "v2.1 Stable",
    tier: "FREE & PRO",
    price: "Free Online / ₹499 Lifetime Offline",
    isFree: true,
    liveUrl: "https://mk-autoeditor-v2.vercel.app/",
    downloadUrl: "https://mk-autoeditor-v2.vercel.app/",
    directDownloadZip: "https://mk-autoeditor-v2.vercel.app/api/download/mk-autoeditor-v2.zip",
    platforms: ["Web (Chrome / Edge)", "Windows PC", "Android Mobile"],
    features: [
      "⚡ 5x WebCodecs GPU Turbo Render directly in browser",
      "🎙️ Voiceover Audio Peak Detection & Frame-Accurate Clip Sync",
      "💬 Word-by-word Burn-in Captions (.srt / .vtt sync)",
      "🎬 6+ Cinematic Transitions (Crossfade, Zoom, Glitch, Wipe) with SFX",
      "🔒 100% Privacy & Local-First (Zero cloud upload needed)"
    ],
    proFeatures: [
      "No Watermark on exported videos",
      "4K 60fps Ultra-High Bitrate Export",
      "Batch Video Render Queue for YouTube Shorts",
      "VIP Developer WhatsApp (+91 8198966902) Support"
    ],
    updates: [
      {
        version: "v2.1",
        date: "Latest Release",
        notes: "Direct WhatsApp (+91 8198966902) & Telegram Support, WebCodecs turbo render engine, Opus audio fallback, and Android touch enhancements."
      },
      {
        version: "v2.0",
        date: "Major Overhaul",
        notes: "Full timeline UI redesign, multi-clip gap filling, and local IndexedDB project persistence."
      }
    ],
    quickGuide: {
      web: "Open the online studio in Chrome or Edge, drop voiceover audio + media clips, and export 1080p video instantly.",
      windows: "Run 100% offline with zero internet requirement on Windows 10/11.",
      android: "Run using Termux on your phone for portable video editing."
    }
  },
  {
    id: "omnigrab-pro",
    name: "OmniGrab Pro",
    tagline: "High-Speed Bulk Video & Social Media Downloader",
    description:
      "Native Windows desktop tool engineered for YouTube creators needing B-roll, research footage, and media archiving. Simultaneous multi-threaded batch video extraction in up to 4K resolution with automatic audio extraction.",
    category: "Media Downloader & YouTube Tools",
    icon: "📥",
    accentColor: "#38bdf8",
    status: "Desktop Software",
    badgeType: "desktop",
    version: "v1.0.0",
    tier: "PRO AUTOMATION",
    price: "₹299 (Lifetime License)",
    isFree: false,
    liveUrl: null,
    downloadUrl: null,
    directDownloadZip: null,
    platforms: ["Windows 10 / 11 (64-bit)"],
    features: [
      "🚀 Multi-Threaded Batch Download Engine with zero throttling",
      "📺 Up to 4K / 1080p 60fps Video & High-Bitrate 320kbps MP3 Extraction",
      "📑 Full Channel & Playlist One-Click Downloader for B-Roll Archiving",
      "🎯 Native Electron GUI with real-time speed & progress telemetry",
      "🛠️ Auto-updating core for 100% platform compatibility"
    ],
    proFeatures: [
      "Unlimited simultaneous batch downloads",
      "Full YouTube channel / playlist mass download",
      "Background auto-convert to MP4 / MP3",
      "Lifetime updates and direct developer assistance"
    ],
    updates: [
      {
        version: "v1.0.0",
        date: "Stable Release",
        notes: "Initial native Windows desktop release with FastAPI backend, Electron main process, and high-speed engine."
      }
    ],
    quickGuide: {
      windows: "Download installer, paste video or playlist links, choose desired resolution, and start high-speed batch downloads."
    }
  },
  {
    id: "flow-mk-studio",
    name: "Flow MK Studio",
    tagline: "Multi-Account Browser Profiles & Video Automation Suite",
    description:
      "Production-grade desktop application for YouTube creators and automation teams managing multiple isolated accounts, persistent browser sessions, and automated workflow queues. Zero session conflicts, strict context isolation, and local SQLite persistence.",
    category: "Workflow Automation & Studio Suite",
    icon: "⚡",
    accentColor: "#a855f7",
    status: "Creator Suite",
    badgeType: "beta",
    version: "v1.0 Pro",
    tier: "PRO ENTERPRISE",
    price: "₹999 (Creator License)",
    isFree: false,
    liveUrl: null,
    downloadUrl: null,
    directDownloadZip: null,
    platforms: ["Windows Desktop (64-bit)"],
    features: [
      "🛡️ Completely Isolated Google Profiles (zero session or cookie sharing)",
      "🔐 Safe Google Sign-In with manual 2FA verification & secure detection",
      "⚙️ Authoritative Account State Machine with background worker threads",
      "📊 Local SQLite Database (sql.js) for activity logs, profiles, and tasks",
      "🔒 Strict Context Isolation Bridge with zero unsafe shell access"
    ],
    proFeatures: [
      "Unlimited multi-account Google & YouTube profiles",
      "Automated video upload & schedule queue workflows",
      "Crash-safe state recovery with persistent local storage",
      "1-on-1 Remote Setup & Priority WhatsApp Support"
    ],
    updates: [
      {
        version: "v1.0 Pro",
        date: "Stable Release",
        notes: "Multi-account profile isolation, Chromium session manager, Playwright queue controller, and SQLite state persistence."
      }
    ],
    quickGuide: {
      windows: "Manage multiple YouTube accounts, browser profiles, and automated publishing workflows securely without login collisions."
    }
  }
];

export const STUDIO_CONFIG = {
  ownerName: "Mohd Khan",
  brandName: "MK Studio",
  portalTitle: "Mohd Khan Creator Hub",
  portalSubtitle: "High-Performance Creator Tools, Video Editors & YouTube Automation Software",
  whatsappNumber: "8198966902",
  whatsappDisplayNumber: "+91 8198966902",
  telegramUsername: "Mohdashraff18",
  email: "mohdkhan837218@gmail.com",
  activeYear: "2026"
};
