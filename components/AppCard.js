"use client";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function AppCard({ app }) {
  const waHelpUrl = buildWhatsAppChatUrl({
    appName: app.name,
    topic: "App Support & Feedback",
    details: `I have a question or need assistance with ${app.name} (${app.version}).`,
  });

  return (
    <div className="app-card" id={app.id}>
      <div className="app-card__header">
        <div className="app-card__icon-wrap">
          <span>{app.icon}</span>
        </div>
        <div className="app-card__badges">
          <span className={`badge badge--${app.badgeType}`}>
            {app.status}
          </span>
          <span className="badge badge--ver">{app.version}</span>
        </div>
      </div>

      <h3 className="app-card__title">{app.name}</h3>
      <div className="app-card__tagline">{app.tagline}</div>
      <p className="app-card__desc">{app.description}</p>

      <ul className="app-card__features">
        {app.features.map((feat, idx) => (
          <li key={idx} className="app-card__feature">
            {feat}
          </li>
        ))}
      </ul>

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
            title={`Open ${app.name} on Vercel`}
          >
            <span>🚀 Launch Online Web App ↗</span>
          </a>
        ) : (
          <a
            href={app.downloadUrl || app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>📥 Download &amp; Releases ↗</span>
          </a>
        )}

        <div className="app-card__actions-row">
          {app.downloadUrl && app.liveUrl && (
            <a
              href={app.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              style={{ flex: 1, fontSize: 12, padding: "7px 10px" }}
              title="Download offline package"
            >
              <span>📥 Download PC</span>
            </a>
          )}
          {app.githubUrl && (
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              style={{ flex: 1, fontSize: 12, padding: "7px 10px" }}
            >
              <span>⭐ GitHub</span>
            </a>
          )}
          <a
            href={waHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa"
            style={{ flex: 1.2, fontSize: 12, padding: "7px 10px" }}
            title={`Get WhatsApp Support for ${app.name}`}
          >
            <span>💬 Get Help</span>
          </a>
        </div>
      </div>
    </div>
  );
}

