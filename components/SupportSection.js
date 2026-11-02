"use client";
import { useState } from "react";
import { APPS_DATA, STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl, buildTelegramChatUrl, buildEmailMailtoUrl } from "../lib/supportConfig";

export default function SupportSection() {
  const [selectedApp, setSelectedApp] = useState(APPS_DATA[0].name);
  const [topic, setTopic] = useState("Buy PRO License & Download");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const url = buildWhatsAppChatUrl({
      appName: selectedApp,
      topic,
      userName: name.trim() || "User",
      details: details.trim() || "Need assistance with this software or purchase.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = () => {
    const url = buildEmailMailtoUrl({
      appName: selectedApp,
      topic,
      userName: name.trim() || "User",
      details: details.trim(),
    });
    window.location.href = url;
  };

  return (
    <div className="support-card" id="support">
      <div className="section__head" style={{ marginBottom: 20 }}>
        <span className="section__badge">Orders, Custom Automation &amp; Problem Center</span>
        <h3 className="section__title" style={{ fontSize: 22 }}>
          Buy Licenses, Request Custom Tools or Report Problems
        </h3>
        <p className="section__subtitle" style={{ fontSize: 13.5 }}>
          Get instant 1-on-1 assistance directly from <strong>{STUDIO_CONFIG.ownerName}</strong> on WhatsApp. Instant delivery for licenses, custom automation tools, and priority bug resolution.
        </p>
      </div>

      <form onSubmit={handleSendWhatsApp} className="support-form">
        <div className="form-group">
          <label className="form-label">Select Application or Service</label>
          <select
            className="form-select"
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
          >
            {APPS_DATA.map((app) => (
              <option key={app.id} value={app.name}>
                {app.icon} {app.name} ({app.price})
              </option>
            ))}
            <option value="Custom YouTube Automation Tool">🤖 Custom YouTube Video Automation Software</option>
            <option value="General Question / Feedback">❓ General Question or Custom Request</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Category / Purpose</label>
          <select
            className="form-select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Buy PRO License & Download">💎 Buy PRO License &amp; Direct Download</option>
            <option value="Custom YouTube Tool Order">🤖 Order Custom YouTube Automation Script / Tool</option>
            <option value="Bug Report / Error">⚠️ Bug Report / Error</option>
            <option value="Export / Render Problem">🚀 Video Export / Render Help</option>
            <option value="Download / Setup Help">📥 Installation &amp; Setup Help</option>
            <option value="Feature Suggestion">💡 New Feature Suggestion</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Your Name / Contact Info</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Rahul / rahul@example.com"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Details / Requirements</label>
          <textarea
            className="form-textarea"
            placeholder="Tell us what tool you want to purchase, what automation feature you need, or what error occurred..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn--wa" style={{ width: "100%", justifyContent: "center", padding: "12px" }}>
          <span>💬 Chat on WhatsApp ({STUDIO_CONFIG.whatsappDisplayNumber})</span>
        </button>

        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          <a
            href={buildTelegramChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <span>✈️ Telegram (@{STUDIO_CONFIG.telegramUsername})</span>
          </a>
          <button
            type="button"
            onClick={handleSendEmail}
            className="btn btn--secondary btn--sm"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <span>✉️ Send Email</span>
          </button>
        </div>
      </form>
    </div>
  );
}
