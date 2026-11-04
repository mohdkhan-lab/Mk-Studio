"use client";
import { STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function Hero({ onOpenAuth }) {
  const waUrl = buildWhatsAppChatUrl({
    topic: "Studio Hub Software Inquiry",
    details: "Hello Mohd Khan, I want to inquire about your software tools or order custom video automation.",
  });

  return (
    <section className="hero">
      <div className="container">
        {/* Modern Floating Chip */}
        <div className="hero__chip">
          <span className="hero__pulse-dot"></span>
          <span>Next-Gen Creator Software Suite • Tested on @MKFinance18</span>
        </div>

        {/* High-Impact Headline */}
        <h1 className="hero__title">
          Software Engineered For <br />
          <span className="hero__title-gradient">Creators Who Value Speed.</span>
        </h1>

        <p className="hero__subtitle">
          Eliminate hours of manual editing and slow cloud queues. Discover production-grade software tools built for YouTube automation, automated audio-voiceover video syncing, and high-throughput 4K media extraction.
        </p>

        {/* Dual Primary Actions */}
        <div className="hero__actions">
          <a
            href="https://mk-autoeditor-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ fontSize: 14.5, padding: "12px 24px", borderRadius: 12 }}
            title="Launch flagship MK AutoEditor web studio"
          >
            <span>🚀 Launch AutoEditor Web Studio (Free) ↗</span>
          </a>

          <a
            href="#showcase"
            className="btn btn--gold"
            style={{ fontSize: 14.5, padding: "12px 24px", borderRadius: 12 }}
          >
            <span>🔥 Real Video Showcase</span>
          </a>

          <button
            type="button"
            onClick={onOpenAuth}
            className="btn btn--secondary"
            style={{ fontSize: 14, padding: "12px 20px", borderRadius: 12 }}
            title="Create a free creator account"
          >
            <span>👤 Join Creator Portal</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa"
            style={{ fontSize: 14, padding: "12px 20px", borderRadius: 12 }}
            title="Chat directly with Mohd Khan on WhatsApp"
          >
            <span>💬 WhatsApp Developer ({STUDIO_CONFIG.whatsappDisplayNumber})</span>
          </a>
        </div>

        {/* 2026 Micro-Metrics Pill Bar */}
        <div className="hero__stats">
          <div className="stat-item">
            <div className="stat-item__num">100% Free + PRO</div>
            <div className="stat-item__label">Web Tools &amp; Offline Desktop</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">5x Turbo GPU</div>
            <div className="stat-item__label">WebCodecs Hardware Render</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">100% Private</div>
            <div className="stat-item__label">Zero Cloud Upload / Local-First</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__num">Direct Access</div>
            <div className="stat-item__label">Personal WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
