"use client";
import { useState } from "react";
import { STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function Navbar({ user, onOpenAuth, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waUrl = buildWhatsAppChatUrl({
    topic: "General Inquiry / Software Order",
    details: "I am visiting MK Studio Hub and want to connect with Mohd Khan.",
  });

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a href="#" className="navbar__brand">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`}
              alt="MK Studio"
              className="navbar__logo"
            />
            <span className="navbar__title">
              <span>MK</span> Studio
            </span>
            <span className="navbar__chip">Creator Hub</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar__links">
            <a href="#apps" className="navbar__link">All Software</a>
            <a
              href="https://mk-autoeditor-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__link"
              style={{ color: "var(--gold)" }}
            >
              🎬 AutoEditor Online ↗
            </a>
            <a href="#faq" className="navbar__link">FAQ</a>
            <a href="#updates" className="navbar__link">Updates</a>
            <a href="#support" className="navbar__link">Support &amp; Custom</a>
          </nav>

          {/* Action Buttons & Auth */}
          <div className="navbar__actions">
            {user ? (
              <div className="user-badge" title="Verified Creator Account">
                <span className="user-badge__dot"></span>
                <span className="user-badge__name">✨ {user.name}</span>
                <button
                  type="button"
                  onClick={onLogout}
                  className="user-badge__logout"
                  title="Sign out from this device"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenAuth}
                className="btn btn--secondary btn--sm"
                title="Create a free creator account"
              >
                <span>👤 Sign Up Free</span>
              </button>
            )}

            <a
              href="https://mk-autoeditor-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm hide-on-mobile"
              title="Launch MK AutoEditor on Vercel"
            >
              <span>🚀 Launch Studio</span>
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--sm"
              title="Chat directly on WhatsApp"
            >
              <span>💬 +91 8198966902</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a
              href="#apps"
              className="mobile-menu__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              📱 All Software &amp; Tools
            </a>
            <a
              href="https://mk-autoeditor-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__link"
              style={{ color: "var(--gold)" }}
            >
              🎬 Open MK AutoEditor Online ↗
            </a>
            <a
              href="#faq"
              className="mobile-menu__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              ❓ FAQ &amp; Guidance
            </a>
            <a
              href="#updates"
              className="mobile-menu__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              📜 Changelog &amp; Updates
            </a>
            <a
              href="#support"
              className="mobile-menu__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              🛠️ Problem &amp; Custom Orders
            </a>

            {!user && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="btn btn--primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
              >
                <span>👤 Join Creator Hub (Free)</span>
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
