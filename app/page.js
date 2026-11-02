"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import AppCard from "../components/AppCard";
import FaqSection from "../components/FaqSection";
import UpdatesTimeline from "../components/UpdatesTimeline";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import DownloadModal from "../components/DownloadModal";
import { APPS_DATA, STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [downloadApp, setDownloadApp] = useState(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("mk_creator_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (_) {}
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("mk_creator_user");
    } catch (_) {}
    setUser(null);
  };

  const handleOpenDownload = (app) => {
    setDownloadApp(app);
    setIsDownloadOpen(true);
  };

  const categories = [
    { id: "all", label: "🌟 All Software" },
    { id: "free", label: "🆓 Free Forever Tools" },
    { id: "pro", label: "💎 PRO & Automation" },
    { id: "video", label: "🎬 Video Creation" },
  ];

  const filteredApps = APPS_DATA.filter((app) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "free") return app.isFree;
    if (activeCategory === "pro") return !app.isFree;
    if (activeCategory === "video") return app.category.toLowerCase().includes("video");
    return true;
  });

  const waFloatUrl = buildWhatsAppChatUrl({
    topic: "Direct Creator Inquiry",
    details: "Hello Mohd Khan, I want to talk about your tools or order custom automation software.",
  });

  return (
    <>
      <Navbar
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
      />

      <main>
        <Hero onOpenAuth={() => setIsAuthOpen(true)} />

        <StatsBanner />

        {/* APPS CATALOG SECTION */}
        <section className="section" id="apps">
          <div className="container">
            <div className="section__head">
              <span className="section__badge">Software &amp; Tools Catalog</span>
              <h2 className="section__title">Creator Tools &amp; Automation Ecosystem</h2>
              <p className="section__subtitle">
                Engineered for YouTube creators, video editors, and automation specialists. Use our web studio free online, or get native Windows PRO suites.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-btn ${activeCategory === cat.id ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="apps-grid">
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onSelectDownload={handleOpenDownload}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FaqSection />

        {/* UPDATES & SUPPORT SECTION */}
        <section className="section section--dark" id="updates">
          <div className="container">
            <div className="two-col-grid">
              <div>
                <div className="section__head" style={{ textAlign: "left", marginBottom: 24 }}>
                  <span className="section__badge">Release Notes</span>
                  <h2 className="section__title" style={{ fontSize: 24 }}>
                    Recent Updates &amp; Changelog
                  </h2>
                  <p className="section__subtitle" style={{ margin: "6px 0 0" }}>
                    Continuous development across all creator tools and automated video pipelines.
                  </p>
                </div>
                <UpdatesTimeline />
              </div>

              <div>
                <SupportSection />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        title={`Chat with ${STUDIO_CONFIG.ownerName} on WhatsApp (${STUDIO_CONFIG.whatsappDisplayNumber})`}
      >
        <span className="floating-wa__dot"></span>
        <span>💬 WhatsApp Support</span>
      </a>

      {/* Auth / Sign Up Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onUserRegistered={(newUser) => setUser(newUser)}
      />

      {/* Direct Download Modal */}
      <DownloadModal
        app={downloadApp}
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        user={user}
        onRequireAuth={() => {
          setIsDownloadOpen(false);
          setIsAuthOpen(true);
        }}
      />
    </>
  );
}
