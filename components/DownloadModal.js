"use client";
import { useState } from "react";
import { STUDIO_CONFIG } from "../lib/appsData";

export default function DownloadModal({ app, isOpen, onClose, user, onRequireAuth }) {
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen || !app) return null;

  const handleStartDownload = () => {
    if (!user) {
      onRequireAuth();
      return;
    }

    setDownloadStarted(true);

    // If there is a direct download URL, trigger it
    if (app.directDownloadZip) {
      window.location.href = app.directDownloadZip;
    } else if (app.liveUrl) {
      window.open(app.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      // PRO tools direct download via WhatsApp delivery
      const text = encodeURIComponent(
        `Hello Mohd Khan, I am registered as ${user.name} (${user.phone}). I want to download/activate the setup package for *${app.name}* (${app.price}).`
      );
      window.open(`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 32 }}>{app.icon}</span>
            <div>
              <h3 className="modal-title">{app.name}</h3>
              <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
                {app.version} • {app.status}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="modal-close-btn">
            ✕
          </button>
        </div>

        <div style={{ margin: "16px 0 20px" }}>
          <div className="dl-info-row">
            <span className="dl-info-label">Access Level:</span>
            <strong style={{ color: app.isFree ? "var(--emerald)" : "var(--gold)" }}>
              {app.tier} ({app.price})
            </strong>
          </div>
          <div className="dl-info-row">
            <span className="dl-info-label">Supported Systems:</span>
            <span>{app.platforms.join(" • ")}</span>
          </div>
          <div className="dl-info-row">
            <span className="dl-info-label">Package Type:</span>
            <span>Standalone Offline Installer / Web Studio</span>
          </div>
        </div>

        {!user ? (
          <div style={{ padding: "16px", background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.25)", borderRadius: 12, marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gold)", marginBottom: 4 }}>
              ⚡ 1-Click Free Registration Required
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>
              Join Mohd Khan Creator Hub to unlock direct high-speed software downloads and lifetime update notifications.
            </p>
            <button
              type="button"
              onClick={onRequireAuth}
              className="btn btn--primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>👤 Register &amp; Download Free</span>
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 10, marginBottom: 16 }}>
              <span>✓</span>
              <span style={{ fontSize: 12.5, color: "#10b981", fontWeight: 600 }}>
                Verified Creator: <strong>{user.name}</strong> ({user.phone})
              </span>
            </div>

            <button
              type="button"
              onClick={handleStartDownload}
              className="btn btn--primary"
              style={{ width: "100%", justifyContent: "center", padding: "13px" }}
            >
              <span>{downloadStarted ? "✓ Download Package Started" : "🚀 Download Software Package Now"}</span>
            </button>
          </div>
        )}

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a
            href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hello Mohd Khan, I need setup help or license activation for ${app.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12.5, color: "var(--whatsapp)", textDecoration: "none", fontWeight: 700 }}
          >
            💬 Need 1-on-1 Setup Assistance? WhatsApp Mohd Khan ({STUDIO_CONFIG.whatsappDisplayNumber})
          </a>
        </div>
      </div>
    </div>
  );
}
