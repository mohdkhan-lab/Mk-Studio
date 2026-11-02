"use client";
import { STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function Hero() {
  const waUrl = buildWhatsAppChatUrl({
    topic: "Studio Hub Software Inquiry",
    details: "Hello Mohd Khan, I explored your tools hub and want to inquire about software or custom automation.",
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__chip">
          <span className="hero__pulse-dot"></span>
          <span>Mohd Khan Creator Studio • YouTube Video Automation &amp; Software Hub</span>
        </div>

        <h1 className="hero__title">
          Built for Velocity, Precision &amp; <br />
          <span className="hero__title-gradient">YouTube Content Automation.</span>
        </h1>

        <p className="hero__subtitle">
          Welcome to the official <strong>{STUDIO_CONFIG.brandName}</strong> software portal. Discover high-performance in-browser video editors with audio voiceover sync, 4K bulk media downloaders, and desktop profile automation. Available in <strong>Free Forever</strong> tiers and <strong>PRO Lifetime Licenses</strong>.
        </p>

        <div className="hero__actions">
          <a
            href="https://mk-autoeditor-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            title="Launch MK AutoEditor deployed on Vercel"
          >
            <span>🚀 Open AutoEditor Online (Free) ↗</span>
          </a>
          <a href="#apps" className="btn btn--secondary">
            <span>📱 Explore Free &amp; PRO Tools</span>
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa"
            title="Chat directly with Mohd Khan on WhatsApp"
          >
            <span>💬 WhatsApp Developer ({STUDIO_CONFIG.whatsappDisplayNumber})</span>
          </a>
        </div>

        <div className="hero__stats">
          <div className="stat-item">
            <div className="stat-item__num">Free + PRO</div>
            <div className="stat-item__label">Flexible Software Tiers</div>
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
