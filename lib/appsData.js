// Centralized Creator Software & Apps Catalog for Mohd Khan (MK Studio)
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
    numericPrice: 499,
    isFree: true,
    liveUrl: "https://mk-autoeditor-v2.vercel.app/",
    downloadUrl: "https://mk-autoeditor-v2.vercel.app/",
    directDownloadZip: "https://mk-autoeditor-v2.vercel.app/api/download/mk-autoeditor-v2.zip",
    platforms: ["Web (Chrome / Edge)", "Windows PC 10/11", "Android Mobile (Termux)"],
    supportedFormats: ["MP4", "WebM", "MP3", "WAV", "AAC", "PNG", "JPEG", "SRT", "VTT"],
    features: [
      "⚡ 5x WebCodecs GPU Turbo Render directly in browser",
      "🎙️ Voiceover Audio Peak Detection & Frame-Accurate Clip Sync",
      "💬 Word-by-word Burn-in Captions (.srt / .vtt sync)",
      "🎬 6+ Cinematic Transitions (Crossfade, Zoom, Glitch, Wipe) with SFX",
      "🔒 100% Privacy & Local-First (Zero cloud upload needed)"
    ],
    proFeatures: [
      "No Watermark on any exported videos",
      "4K 60fps Ultra-High Bitrate Export Engine",
      "Automated Batch Render Queue for YouTube Shorts",
      "Offline Windows Portable Build (No internet needed)",
      "VIP Developer WhatsApp (+91 8198966902) Support"
    ],
    tutorial: [
      {
        step: 1,
        title: "Import Voiceover & Media",
        desc: "Drag and drop your audio narration file (MP3/WAV) and media clips (images or videos) into the editor zone.",
        simulator: {
          icon: "🎙️",
          badge: "Audio Waveform Ready",
          text: "voiceover_story_final.mp3 (01:15) • 44.1kHz stereo detected",
        }
      },
      {
        step: 2,
        title: "Automated Timestamp Peak Detection",
        desc: "The engine scans voice pauses and syllable peaks, snapping your media clips perfectly to match sentence beats.",
        simulator: {
          icon: "⚡",
          badge: "Auto-Sync Active",
          text: "8 Clips Snapped to 0.0s, 2.4s, 5.8s, 11.2s, 16.5s...",
        }
      },
      {
        step: 3,
        title: "Generate Animated Word-by-Word Captions",
        desc: "Choose from viral TikTok, Hormozi, or Cinematic font styles with highlight colors and bounce effects.",
        simulator: {
          icon: "💬",
          badge: "Dynamic Captions Burned In",
          text: "Styling: Anton Bold 48px • Gold Highlight on Active Words",
        }
      },
      {
        step: 4,
        title: "5x GPU Hardware Acceleration & Export",
        desc: "Click Export to render high-bitrate 1080p / 4K MP4 in seconds using your device's native WebCodecs hardware encoder.",
        simulator: {
          icon: "🚀",
          badge: "WebCodecs Hardware Rendered",
          text: "Exported in 18s at 60 FPS • 1920x1080 MP4 Ready to Upload!",
        }
      }
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
    ]
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
    numericPrice: 299,
    isFree: false,
    liveUrl: null,
    downloadUrl: null,
    directDownloadZip: null,
    platforms: ["Windows 10 / 11 (64-bit)"],
    supportedFormats: ["MP4 (4K/1080p/720p)", "MP3 320kbps", "WAV", "M4A"],
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
    tutorial: [
      {
        step: 1,
        title: "Paste URL or Playlist Link",
        desc: "Paste single video links or entire YouTube playlists and Instagram profiles into the bulk import queue.",
        simulator: {
          icon: "🔗",
          badge: "Playlist Parsed",
          text: "https://youtube.com/playlist?list=... • 24 Videos Queued",
        }
      },
      {
        step: 2,
        title: "Select Resolution & Audio Preset",
        desc: "Choose pristine 4K 60fps, 1080p, or high-fidelity 320kbps MP3 for audio tracks.",
        simulator: {
          icon: "⚙️",
          badge: "Quality Selected",
          text: "Format: 1080p 60fps MP4 + High-Bitrate AAC Audio",
        }
      },
      {
        step: 3,
        title: "Turbo Multi-Threaded Download",
        desc: "The engine runs multi-part downloads across threads, maxing out your connection speed without throttling.",
        simulator: {
          icon: "🚀",
          badge: "Download Complete",
          text: "Downloaded 24 videos (1.8 GB) in 2m 14s • Saved to /B-Roll",
        }
      }
    ],
    updates: [
      {
        version: "v1.0.0",
        date: "Stable Release",
        notes: "Initial native Windows desktop release with FastAPI backend, Electron main process, and high-speed engine."
      }
    ]
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
    numericPrice: 999,
    isFree: false,
    liveUrl: null,
    downloadUrl: null,
    directDownloadZip: null,
    platforms: ["Windows Desktop (64-bit)"],
    supportedFormats: ["Chromium Persistent Profiles", "SQLite Data Store", "JSON Task Queues"],
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
    tutorial: [
      {
        step: 1,
        title: "Create Isolated Profile",
        desc: "Set up a clean, isolated Chromium profile with independent cookies, user agent, and storage.",
        simulator: {
          icon: "🛡️",
          badge: "Isolated Container Active",
          text: "Profile: Channel_Alpha_US • Zero Cookie Leakage Guaranteed",
        }
      },
      {
        step: 2,
        title: "Safe Login & Session Locking",
        desc: "Log in safely with 2FA; session tokens are securely locked and persisted in local SQLite.",
        simulator: {
          icon: "🔐",
          badge: "Google Session Authenticated",
          text: "State: LoggedIn • Single-Instance Lock Engaged",
        }
      },
      {
        step: 3,
        title: "Run Workflow Queues",
        desc: "Execute automated browser tasks, scheduled publishing, and analytics extraction seamlessly.",
        simulator: {
          icon: "⚙️",
          badge: "Task Queue Running",
          text: "Automated YouTube Scheduler running on worker thread #2",
        }
      }
    ],
    updates: [
      {
        version: "v1.0 Pro",
        date: "Stable Release",
        notes: "Multi-account profile isolation, Chromium session manager, Playwright queue controller, and SQLite state persistence."
      }
    ]
  }
];

export function getAppById(id) {
  return APPS_DATA.find((a) => a.id === id) || null;
}

export const STUDIO_CONFIG = {
  ownerName: "Mohd Khan",
  brandName: "MK Studio",
  portalTitle: "Mohd Khan Creator Hub",
  portalSubtitle: "High-Performance Creator Tools, Video Editors & YouTube Automation Software",
  whatsappNumber: "8198966902",
  whatsappDisplayNumber: "+91 8198966902",
  upiId: "8198966902@upi", // Mohd Khan UPI
  telegramUsername: "Mohdashraff18",
  email: "mohdkhan837218@gmail.com",
  activeYear: "2026"
};
