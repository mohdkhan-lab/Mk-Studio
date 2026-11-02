"use client";
import { useState } from "react";
import { STUDIO_CONFIG } from "../lib/appsData";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What makes MK AutoEditor V2 different from regular editors?",
      a: "MK AutoEditor V2 is specifically engineered for timeline voiceover automation. Instead of spending hours manually aligning images or B-roll to your audio narration, the engine automatically detects timestamp peaks in your voiceover and snaps clips frame-accurately. Plus, it renders directly in your browser using 5x GPU-accelerated WebCodecs without cloud uploads."
    },
    {
      q: "Do I need a high-end graphics card (GPU) or PC?",
      a: "Not at all! MK AutoEditor runs inside any modern Chrome or Edge browser on basic laptops, Mac, and even Android phones via Termux. OmniGrab Pro and Flow MK Studio are lightweight Windows desktop applications optimized to run on standard Windows 10/11 64-bit PCs without slowing down your system."
    },
    {
      q: "Are the Free tools really free forever?",
      a: "Yes! MK AutoEditor V2 web studio is completely free to use online with standard 1080p export. If you want the offline standalone desktop edition without any watermark, 4K 60fps rendering, and VIP WhatsApp support, you can get the one-time PRO Lifetime License."
    },
    {
      q: "How do I purchase a PRO License and how fast is delivery?",
      a: "License delivery is instant! You can click 'Get PRO License' on any tool or message Mohd Khan on WhatsApp (+91 8198966902). Once payment (UPI / Card) is verified, your unique License Key and offline package link are sent immediately to your WhatsApp."
    },
    {
      q: "Can I request custom automation tools for my YouTube channel?",
      a: "Absolutely! Mohd Khan develops custom Python, Electron, and Next.js tools for YouTube creators, including auto-upload schedulers, thumbnail generators, and batch video rendering scripts. Reach out via the Custom Tools form below or WhatsApp."
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section__head">
          <span className="section__badge">Knowledge &amp; Support</span>
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__subtitle">
            Everything you need to know about our creator tools, licensing, and video automation.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIdx === idx ? "is-open" : ""}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-toggle">{openIdx === idx ? "−" : "＋"}</span>
              </div>
              {openIdx === idx && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

