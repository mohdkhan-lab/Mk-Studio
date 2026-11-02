"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppCard from "../components/AppCard";
import UpdatesTimeline from "../components/UpdatesTimeline";
import SupportSection from "../components/SupportSection";
import Footer from "../components/Footer";
import { APPS_DATA, STUDIO_CONFIG } from "../lib/appsData";
import { buildWhatsAppChatUrl } from "../lib/supportConfig";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "🌟 All Applications" },
    { id: "video", label: "🎬 Video & Creative" },
    { id: "downloaders", label: "📥 Media Downloaders" },
    { id: "automation", label: "⚡ Workflow Automation" },
  ];

  const filteredApps = APPS_DATA.filter((app) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "video") return app.category.toLowerCase().includes("video");
    if (activeCategory === "downloaders") return app.category.toLowerCase().includes("download");
    if (activeCategory === "automation") return app.category.toLowerCase().includes("automation");
    return true;
  });

  const waFloatUrl = buildWhatsAppChatUrl({
    topic: "Portal Quick Contact",
    details: "Hello Mohd Khan, I want to talk about your apps or request support.",
  });

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* APPS CATALOG SECTION */}
        <section className="section" id="apps">
          <div className="container">
            <div className="section__head">
              <span className="section__badge">Product Catalog</span>
              <h2 className="section__title">Software &amp; Tools Ecosystem</h2>
              <p className="section__subtitle">
                Access your applications online or download them for native offline performance on Windows PC and Android.
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

            {/* Apps Cards Grid */}
            <div className="apps-grid">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </section>

        {/* UPDATES & SUPPORT DUAL SECTION */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="updates-wrap">
              <UpdatesTimeline />
              <SupportSection />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={waFloatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        title={`Chat with Mohd Khan on WhatsApp (${STUDIO_CONFIG.whatsappDisplayNumber})`}
      >
        <span className="floating-wa__dot"></span>
        <span>💬 WhatsApp Support</span>
      </a>
    </>
  );
}

