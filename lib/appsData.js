// Centralized Portfolio & Apps Registry for Mohd Khan (MK Studio)
export const APPS_DATA = [
  {
    id: "mk-autoeditor",
    name: "MK AutoEditor V2",
    tagline: "AI & Timeline Video Editor with Audio Voiceover Sync",
    description:
      "Modern in-browser and offline video creation studio. Automatically syncs images and video clips to voiceover narration, adds dynamic TikTok/Reels captions, and renders 1080p MP4 via 5x hardware-accelerated WebCodecs.",
    category: "Video & Creative Tools",
    icon: "🎬",
    accentColor: "#fbbf24",
    status: "Live Web App",
    badgeType: "live",
    version: "v2.1 Stable",
    liveUrl: "https://mk-autoeditor-v2.vercel.app/",
    githubUrl: "https://github.com/mohdkhan-lab/mk-autoeditorV2",
    downloadUrl: "https://github.com/mohdkhan-lab/mk-autoeditorV2/archive/refs/heads/main.zip",
    platforms: ["Web (Online)", "Windows PC", "Android Mobile"],
    features: [
      "⚡ 5x WebCodecs GPU-Accelerated Export directly in browser",
      "🎙️ Voiceover Audio Peak Detection & Frame-Accurate Clip Sync",
      "💬 Word-by-word Burn-in Captions (.srt / .vtt sync)",
      "🎬 6+ Cinematic Transitions (Crossfade, Zoom, Glitch, Wipe) with Sound SFX",
      "🔒 100% Local-First & Private (Media never leaves your device)"
    ],
    updates: [
      {
        version: "v2.1",
        date: "Latest Release",
        notes: "Direct WhatsApp (+91 8198966902) & Telegram Support integration, WebCodecs turbo render engine, Opus audio fallback, and Android Termux touch enhancements."
      },
      {
        version: "v2.0",
        date: "Major Overhaul",
        notes: "Full timeline UI redesign, multi-clip gap filling, and local IndexedDB project persistence."
      }
    ],
    quickGuide: {
      web: "Open https://mk-autoeditor-v2.vercel.app/ in Chrome/Edge, drop voiceover + media clips, and export 1080p video instantly.",
      windows: "Download the ZIP package, extract files, and double-click start.bat to run 100% offline.",
      android: "Run using Termux on your Android phone for on-the-go timeline video production."
    }
  },
  {
    id: "omnigrab-pro",
    name: "OmniGrab Pro",
    tagline: "High-Speed Bulk Video & Social Media Media Downloader",
    description:
      "Native Windows desktop tool engineered for high-throughput batch media downloads. Powered by Electron, FastAPI, and yt-dlp, OmniGrab Pro enables simultaneous multi-platform video extraction in up to 4K resolution.",
    category: "Downloader & Media Archiving",
    icon: "📥",
    accentColor: "#38bdf8",
    status: "Desktop App",
    badgeType: "desktop",
    version: "v1.0.0",
    liveUrl: null,
    githubUrl: "https://github.com/mohdkhan-lab/bulk-video-downloader",
    downloadUrl: "https://github.com/mohdkhan-lab/bulk-video-downloader/releases",
    platforms: ["Windows 10 / 11 (64-bit)"],
    features: [
      "🚀 Multi-Threaded Batch Download Engine with zero throttling",
      "📺 Up to 4K / 1080p 60fps Video & High-Bitrate MP3 Extraction",
      "📑 Full Channel & Playlist One-Click Downloader",
      "🎯 Native Electron GUI with real-time speed & progress telemetry",
      "🛠️ Auto-updating yt-dlp core for maximum platform compatibility"
    ],
    updates: [
      {
        version: "v1.0.0",
        date: "Stable Release",
        notes: "Initial native Windows desktop release with FastAPI backend, Electron main process, and yt-dlp integration."
      }
    ],
    quickGuide: {
      windows: "Download the installer or release build, paste your video or playlist links, select quality, and start high-speed batch downloads."
    }
  },
  {
    id: "flow-mk-studio",
    name: "Flow MK Studio",
    tagline: "Multi-Account Browser Profiles & Video Automation Workspace",
    description:
      "Production-grade desktop application for managing multiple isolated Google browser profiles, persistent Chromium sessions, and automated workflow queues. Zero cookie leakage, single-instance profile locks, and local SQLite persistence.",
    category: "Automation & Workflow",
    icon: "⚡",
    accentColor: "#a855f7",
    status: "Pro Suite Beta",
    badgeType: "beta",
    version: "v1.0 Beta",
    liveUrl: null,
    githubUrl: "https://github.com/mohdkhan-lab/Flow-Mk-Studio",
    downloadUrl: "https://github.com/mohdkhan-lab/Flow-Mk-Studio/releases",
    platforms: ["Windows Desktop (64-bit)"],
    features: [
      "🛡️ Completely Isolated Google Profiles (zero session or cookie sharing)",
      "🔐 Safe Google Sign-In with manual 2FA verification & secure detection",
      "⚙️ Authoritative Account State Machine with background worker threads",
      "📊 Local SQLite Database (sql.js) for activity logs, profiles, and tasks",
      "🔒 Strict Context Isolation Bridge with zero unsafe shell access"
    ],
    updates: [
      {
        version: "v1.0 Beta",
        date: "Phase 1–4 Complete",
        notes: "Multi-account profile isolation, Chromium session manager, Playwright queue controller, and SQLite state persistence."
      }
    ],
    quickGuide: {
      windows: "Manage multiple Google profiles and automated tasks securely without session conflicts or browser crashes."
    }
  }
];

export const STUDIO_CONFIG = {
  ownerName: "Mohd Khan",
  brandName: "MK Studio",
  portalTitle: "Mohd Khan Apps Hub",
  portalSubtitle: "High-Performance Creator Tools, Video Editors & Software by Mohd Khan",
  whatsappNumber: "8198966902",
  whatsappDisplayNumber: "+91 8198966902",
  telegramUsername: "Mohdashraff18",
  email: "mohdkhan837218@gmail.com",
  githubOrg: "https://github.com/mohdkhan-lab",
  activeYear: "2026"
};

