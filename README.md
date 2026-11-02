# 🌐 MK Studio — Mohd Khan Apps & Creator Hub

> Official developer portfolio and software ecosystem platform by **Mohd Khan**. Featuring **MK AutoEditor V2**, **OmniGrab Pro**, **Flow MK Studio**, live web app launchpad, release changelogs, and direct WhatsApp developer support.

---

## 🚀 Live Applications

- 🎬 **MK AutoEditor V2 (Online Web Studio)**: [https://mk-autoeditor-v2.vercel.app/](https://mk-autoeditor-v2.vercel.app/)
- 📥 **OmniGrab Pro**: Native Windows bulk video & media downloader
- ⚡ **Flow MK Studio**: Multi-account browser profile and automation suite

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🚢 Deploy to Vercel (1-Click)

1. Push this directory to your GitHub account (`https://github.com/mohdkhan-lab/mk-studio-hub`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select `mk-studio-hub` and click **"Deploy"**!
4. Your website is instantly live at `https://mk-studio-hub.vercel.app`!

---

## ➕ How to Add a New App

Adding a new app is as simple as adding an object into [`lib/appsData.js`](lib/appsData.js):

```javascript
{
  id: "my-new-app",
  name: "My App Name",
  tagline: "Short punchy subtitle",
  description: "What the app does...",
  category: "Video & Creative Tools",
  icon: "🚀",
  status: "Live Web App",
  badgeType: "live",
  version: "v1.0",
  liveUrl: "https://my-app.vercel.app/", // or null
  githubUrl: "https://github.com/mohdkhan-lab/my-app",
  downloadUrl: "https://...",
  platforms: ["Web", "Windows"],
  features: ["Feature 1", "Feature 2"],
  updates: [{ version: "v1.0", date: "Initial Release", notes: "Launched app" }]
}
```

---

## 💬 Developer & Support Contact

- **WhatsApp Direct**: [+91 8198966902](https://wa.me/918198966902)
- **Telegram Support**: [@Mohdashraff18](https://t.me/Mohdashraff18)
- **Email**: mohdkhan837218@gmail.com
- **Built by**: Mohd Khan (2026)

