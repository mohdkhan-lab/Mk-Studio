"use client";
import { STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function Hero() {
  const waUrl = buildWhatsAppChatUrl({
    topic: "Studio Hub Inquiry",
    details: "Hello Mohd Khan, I explored your apps hub and would like to connect.",
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__chip">
          <span className="hero__pulse-dot"></span>
          <span>Mohd Khan Developer Ecosystem • Apps &amp; Support Hub</span>
        </div>

        <h1 className="hero__title">
          Built for Velocity, Precision &amp; <br />
          <span className="hero__title-gradient">Creative Freedom.</span>
        </h1>

        <p className="hero__subtitle">
          Welcome to the official <strong>{STUDIO_CONFIG.brandName}</strong> portfolio. Discover high-performance in-browser video editors, high-speed bulk media downloaders, and desktop automation suites. All tools, downloads, release notes, and developer support are accessible right here.
        </p>

        <div className="hero__actions">
          <a
            href="https://mk-autoeditor-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            title="Open MK AutoEditor deployed on Vercel"
          >
            <span>🚀 Open AutoEditor Online (Free) ↗</span>
          </a>
          <a href="#apps" className="btn btn--secondary">
            <span>📱 Explore All Apps &amp; Downloads</span>
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa"
            title="Chat with Mohd Khan on WhatsApp"
          >
            <span>💬 WhatsApp Developer ({STUDIO_CONFIG.whatsappDisplayNumber})</span>
          </a>
        </div>

        <div className="hero__stats">
          <div className="stat-item">
            <div className="stat-item__num">3+</div>
            <div className="stat-item__label">Production Apps</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">5x Turbo</div>
            <div className="stat-item__label">WebCodecs Hardware Render</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">100%</div>
            <div className="stat-item__label">Privacy &amp; Local First</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">Direct</div>
            <div className="stat-item__label">WhatsApp &amp; Telegram Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

