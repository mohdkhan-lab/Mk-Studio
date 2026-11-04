"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import TutorialWalkthrough from "../../../components/TutorialWalkthrough";
import DownloadModal from "../../../components/DownloadModal";
import PaymentModal from "../../../components/PaymentModal";
import AuthModal from "../../../components/AuthModal";
import { APPS_DATA, getAppById, STUDIO_CONFIG } from "../../../lib/appsData";

export default function AppPage({ params }) {
  const { id } = params;
  const app = getAppById(id);

  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mk_creator_user");
      if (saved) setUser(JSON.parse(saved));
    } catch (_) {}
  }, []);

  if (!app) {
    notFound();
  }

  return (
    <>
      <Navbar
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => {
          try {
            localStorage.removeItem("mk_creator_user");
          } catch (_) {}
          setUser(null);
        }}
      />

      <main style={{ paddingBottom: 80 }}>
        {/* BREADCRUMB & BACK LINK */}
        <div className="container" style={{ paddingTop: 24 }}>
          <Link href="/#apps" className="back-link">
            ← Back to All Software
          </Link>
        </div>

        {/* APP HERO */}
        <section className="app-detail-hero">
          <div className="container">
            <div className="app-detail-header">
              <div className="app-detail-icon-wrap">
                <span>{app.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                  <h1 className="app-detail-title">{app.name}</h1>
                  <span className={`badge ${app.isFree ? "badge--free" : "badge--pro"}`}>
                    {app.tier}
                  </span>
                  <span className="badge badge--ver">{app.version}</span>
                </div>
                <p className="app-detail-tagline">{app.tagline}</p>
                <div className="app-detail-platforms">
                  {app.platforms.map((plat, idx) => (
                    <span key={idx} className="platform-pill">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Primary CTA Card */}
              <div className="app-detail-cta-box">
                <div style={{ fontSize: 12, color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                  Pricing &amp; License:
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: app.isFree ? "var(--emerald)" : "var(--gold)", margin: "4px 0 16px" }}>
                  {app.price}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {app.liveUrl && (
                    <a
                      href={app.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      style={{ justifyContent: "center" }}
                    >
                      <span>🚀 Launch Online Web Studio ↗</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsDownloadOpen(true)}
                    className="btn btn--secondary"
                    style={{ justifyContent: "center" }}
                  >
                    <span>📥 Download Desktop Software</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPaymentOpen(true)}
                    className="btn btn--pro"
                    style={{ justifyContent: "center" }}
                  >
                    <span>💎 Buy PRO License (₹{app.numericPrice})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW & DESCRIPTION */}
        <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="container">
            <div className="two-col-grid" style={{ alignItems: "start" }}>
              <div>
                <h3 className="section__title" style={{ fontSize: 22, textAlign: "left", marginBottom: 12 }}>
                  About {app.name}
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 24 }}>
                  {app.description}
                </p>

                <h4 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 14 }}>
                  Core Capabilities:
                </h4>
                <ul className="app-card__features" style={{ marginBottom: 28 }}>
                  {app.features.map((f, idx) => (
                    <li key={idx} className="app-card__feature">
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Formats Supported */}
                {app.supportedFormats && (
                  <div style={{ padding: "16px 20px", background: "rgba(0,0,0,0.3)", border: "1px solid var(--border)", borderRadius: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", marginBottom: 8 }}>
                      Supported Media &amp; File Formats:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {app.supportedFormats.map((fmt, idx) => (
                        <span key={idx} style={{ fontFamily: "var(--font-mono)", fontSize: 12, padding: "4px 8px", background: "rgba(255,255,255,0.06)", borderRadius: 6, color: "var(--gold)" }}>
                          .{fmt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* PRO Comparison Box */}
              <div>
                <div className="panel-card" style={{ border: "1px solid rgba(245, 158, 11, 0.35)", background: "rgba(22, 25, 36, 0.9)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ fontSize: 24 }}>💎</span>
                    <div>
                      <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--gold)" }}>
                        PRO Lifetime Features
                      </h4>
                      <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
                        Unlock enterprise speed, zero watermarks &amp; priority WhatsApp assistance.
                      </p>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, margin: "18px 0 24px" }}>
                    {app.proFeatures.map((pf, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "#fff" }}>
                        <span style={{ color: "var(--emerald)", fontWeight: 800 }}>✓</span>
                        <span>{pf}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setIsPaymentOpen(true)}
                    className="btn btn--pro"
                    style={{ width: "100%", justifyContent: "center", padding: "13px" }}
                  >
                    <span>💎 Get PRO License — {app.price}</span>
                  </button>

                  <div style={{ textAlign: "center", marginTop: 12 }}>
                    <a
                      href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Mohd Khan, I want to inquire about ${app.name} (${app.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 12, color: "var(--whatsapp)", textDecoration: "none", fontWeight: 700 }}
                    >
                      💬 Ask Questions on WhatsApp ({STUDIO_CONFIG.whatsappDisplayNumber})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP INTERACTIVE TUTORIAL */}
        <section className="section" style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <TutorialWalkthrough app={app} />
          </div>
        </section>

        {/* CHANGELOG & RELEASES */}
        {app.updates && (
          <section className="section" style={{ paddingBottom: 40 }}>
            <div className="container" style={{ maxWidth: 800 }}>
              <h3 className="section__title" style={{ fontSize: 22, textAlign: "left", marginBottom: 20 }}>
                Version History &amp; Release Notes
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {app.updates.map((upd, idx) => (
                  <div key={idx} style={{ padding: "16px 20px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span className="pill pill--active">{upd.version}</span>
                      <span style={{ fontSize: 12, color: "var(--text-dim)" }}>{upd.date}</span>
                    </div>
                    <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {upd.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onUserRegistered={(u) => setUser(u)}
      />

      <DownloadModal
        app={app}
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        user={user}
        onRequireAuth={() => {
          setIsDownloadOpen(false);
          setIsAuthOpen(true);
        }}
      />

      <PaymentModal
        app={app}
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        user={user}
      />
    </>
  );
}

