"use client";
import { useState } from "react";
import { APPS_DATA, STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl, buildTelegramChatUrl, buildEmailMailtoUrl } from "../lib/supportConfig";

export default function SupportSection() {
  const [selectedApp, setSelectedApp] = useState(APPS_DATA[0].name);
  const [topic, setTopic] = useState("Bug Report / Issue");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const url = buildWhatsAppChatUrl({
      appName: selectedApp,
      topic,
      userName: name.trim() || "User",
      details: details.trim() || "Need assistance with this application.",
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
        <span className="section__badge">Direct Help &amp; Problem Center</span>
        <h3 className="section__title" style={{ fontSize: 22 }}>
          Have a Problem or Idea?
        </h3>
        <p className="section__subtitle" style={{ fontSize: 13.5 }}>
          Get instant 1-on-1 developer support directly from <strong>{STUDIO_CONFIG.ownerName}</strong> via WhatsApp or Telegram.
        </p>
      </div>

      <form onSubmit={handleSendWhatsApp} className="support-form">
        <div className="form-group">
          <label className="form-label">Select Application</label>
          <select
            className="form-select"
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
          >
            {APPS_DATA.map((app) => (
              <option key={app.id} value={app.name}>
                {app.icon} {app.name} ({app.version})
              </option>
            ))}
            <option value="New App / Custom Software">💡 Request New App / Custom Software</option>
            <option value="General Question">❓ General Feedback / Question</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Issue Category</label>
          <select
            className="form-select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="Bug Report / Error">⚠️ Bug Report / Error</option>
            <option value="Export / Render Freeze">🚀 Export / Render Problem</option>
            <option value="Download / Setup Help">📥 Installation &amp; Setup Help</option>
            <option value="Feature Suggestion">💡 New Feature Suggestion</option>
            <option value="Custom Project Inquiry">💼 Build Custom Software / Partnership</option>
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
          <label className="form-label">Describe Problem or Feedback</label>
          <textarea
            className="form-textarea"
            placeholder="Tell us what issue you faced or what feature you'd like added..."
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
            title="Chat on Telegram @Mohdashraff18"
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

