"use client";
import Link from "next/link";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";
import { STUDIO_CONFIG } from "../lib/appsData";

export default function AppCard({ app, onSelectDownload }) {
  const waHelpUrl = buildWhatsAppChatUrl({
    appName: app.name,
    topic: "App Support & Feedback",
    details: `I have a question or need assistance with ${app.name} (${app.version}).`,
  });

  const waBuyUrl = buildWhatsAppChatUrl({
    appName: app.name,
    topic: "Buy PRO License & Download",
    details: `Hello Mohd Khan, I want to get the PRO version / License Key for ${app.name} (${app.price}). Please share payment details and download package.`,
  });

  return (
    <div className={`app-card ${!app.isFree ? "app-card--pro" : ""}`} id={app.id}>
      <div className="app-card__header">
        <div className="app-card__icon-wrap">
          <span>{app.icon}</span>
        </div>
        <div className="app-card__badges">
          <span className={`badge ${app.isFree ? "badge--free" : "badge--pro"}`}>
            {app.tier || app.status}
          </span>
          <span className="badge badge--ver">{app.version}</span>
        </div>
      </div>

      <h3 className="app-card__title">{app.name}</h3>
      <div className="app-card__tagline">{app.tagline}</div>
      <p className="app-card__desc">{app.description}</p>

      {/* Pricing Banner */}
      <div className="app-card__price-box">
        <span className="app-card__price-label">Price &amp; Access:</span>
        <span className={`app-card__price-value ${app.isFree ? "text-free" : "text-pro"}`}>
          {app.price}
        </span>
      </div>

      <ul className="app-card__features">
        {app.features.map((feat, idx) => (
          <li key={idx} className="app-card__feature">
            {feat}
          </li>
        ))}
      </ul>

      {/* PRO Highlights */}
      {app.proFeatures && (
        <div className="app-card__pro-box">
          <div className="app-card__pro-title">✨ PRO Benefits Included:</div>
          <ul className="app-card__pro-list">
            {app.proFeatures.map((pf, idx) => (
              <li key={idx}>✓ {pf}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="app-card__platforms">
        {app.platforms.map((plat, idx) => (
          <span key={idx} className="platform-pill">
            {plat}
          </span>
        ))}
      </div>

      <div className="app-card__actions">
        {app.liveUrl ? (
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center" }}
            title={`Open ${app.name} online in your browser`}
          >
            <span>🚀 Launch Web Tool (Free) ↗</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onSelectDownload(app)}
            className="btn btn--pro"
            style={{ width: "100%", justifyContent: "center" }}
            title={`Get ${app.name} installer and license key`}
          >
            <span>💎 Get PRO License &amp; Download</span>
          </button>
        )}

        <div className="app-card__actions-row" style={{ flexWrap: "wrap", gap: 8 }}>
          <Link
            href={`/apps/${app.id}`}
            className="btn btn--secondary"
            style={{ flex: "1 1 calc(50% - 4px)", fontSize: 12, padding: "8px 10px", justifyContent: "center" }}
            title={`View features & interactive tutorial for ${app.name}`}
          >
            <span>🔍 Tutorial &amp; Details ↗</span>
          </Link>

          <button
            type="button"
            onClick={() => onSelectDownload(app)}
            className="btn btn--secondary"
            style={{ flex: "1 1 calc(50% - 4px)", fontSize: 12, padding: "8px 10px", justifyContent: "center" }}
            title="Download offline package"
          >
            <span>📥 Direct Download</span>
          </button>

          <a
            href={waHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa"
            style={{ width: "100%", fontSize: 12, padding: "8px 10px", justifyContent: "center" }}
            title={`Chat with developer on WhatsApp for ${app.name}`}
          >
            <span>💬 Chat on WhatsApp with Developer</span>
          </a>
        </div>
      </div>
    </div>
  );
}
