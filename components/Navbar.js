"use client";
import { STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function Navbar() {
  const waUrl = buildWhatsAppChatUrl({
    topic: "General Inquiry",
    details: "I am visiting MK Studio Hub and want to connect with Mohd Khan.",
  });

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a href="#" className="navbar__brand">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`} alt="MK Studio" className="navbar__logo" />
            <span className="navbar__title">
              <span>MK</span> Studio
            </span>
          </a>

          <nav className="navbar__links">
            <a href="#apps" className="navbar__link">All Apps</a>
            <a
              href="https://mk-autoeditor-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__link"
              style={{ color: "var(--gold)" }}
            >
              🎬 AutoEditor Online ↗
            </a>
            <a href="#updates" className="navbar__link">Changelog &amp; Updates</a>
            <a href="#support" className="navbar__link">Help &amp; Problem Center</a>
          </nav>

          <div className="navbar__actions">
            <a
              href="https://mk-autoeditor-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
              title="Launch MK AutoEditor on Vercel"
            >
              <span>🚀 Launch AutoEditor</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--sm"
              title="Chat directly on WhatsApp"
            >
              <span>💬 +91 8198966902</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

