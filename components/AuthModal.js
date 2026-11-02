"use client";
import { useState } from "react";
import { STUDIO_CONFIG } from "../lib/appsData";

export default function AuthModal({ isOpen, onClose, onUserRegistered }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState("YouTube Shorts & Reels");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userObj = {
      id: `MK-USR-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || "N/A",
      niche,
      registeredAt: new Date().toISOString().slice(0, 10),
    };

    // Save to browser storage
    try {
      localStorage.setItem("mk_creator_user", JSON.stringify(userObj));
    } catch (_) {}

    // Send to backend API
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      });
    } catch (err) {
      console.warn("API registration logged locally:", err);
    }

    setIsSubmitting(false);
    setRegisteredSuccess(true);

    if (onUserRegistered) {
      onUserRegistered(userObj);
    }

    setTimeout(() => {
      setRegisteredSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>✨</span>
            <div>
              <h3 className="modal-title">Join Mohd Khan Creator Hub</h3>
              <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
                Get instant access to free video automation tools &amp; direct downloads.
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="modal-close-btn">
            ✕
          </button>
        </div>

        {registeredSuccess ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <h4 style={{ fontSize: 20, fontWeight: 800, color: "var(--gold)" }}>
              Welcome to the Creator Club, {name}!
            </h4>
            <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 6 }}>
              Your account is verified. All direct download links and free online studio tools are unlocked.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Full Name / Creator Handle</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Rahul Sharma / RahulEdits"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp Number (For Direct Support &amp; Updates)</label>
              <input
                type="tel"
                className="form-input"
                placeholder="e.g. +91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address (Optional)</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. creator@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">What Content Do You Create?</label>
              <select
                className="form-select"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
              >
                <option value="YouTube Shorts & Viral Reels">📱 YouTube Shorts &amp; Instagram Reels</option>
                <option value="Long-Form YouTube Tutorials & Stories">🎥 Long-Form YouTube Tutorials &amp; Stories</option>
                <option value="Faceless AI & Motivation Channels">🤖 Faceless AI &amp; Motivation Channels</option>
                <option value="Video Editing Agency / Freelancer">💼 Video Editing Agency / Freelancer</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--primary"
              style={{ width: "100%", justifyContent: "center", padding: "13px", marginTop: 10 }}
            >
              <span>{isSubmitting ? "Registering..." : "🚀 Create Free Creator Account"}</span>
            </button>

            <p style={{ textAlign: "center", fontSize: 11.5, color: "var(--text-dim)", marginTop: 14 }}>
              🔒 100% Privacy guaranteed. Zero spam. Direct VIP developer access on WhatsApp ({STUDIO_CONFIG.whatsappDisplayNumber}).
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

