"use client";
import { useState } from "react";
import { STUDIO_CONFIG } from "../lib/appsData";

export default function PaymentModal({ app, isOpen, onClose, user }) {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [transactionRef, setTransactionRef] = useState("");
  const [payerName, setPayerName] = useState((user && user.name) || "");
  const [payerPhone, setPayerPhone] = useState((user && user.phone) || "");
  const [paymentDone, setPaymentDone] = useState(false);

  if (!isOpen || !app) return null;

  const upiId = STUDIO_CONFIG.upiId || `${STUDIO_CONFIG.whatsappNumber}@upi`;
  const amount = app.numericPrice || 499;

  // Standard UPI URI format supported by all Indian UPI apps (PhonePe, GPay, Paytm)
  const upiUri = `upi://pay?pa=${upiId}&pn=MohdKhanStudio&am=${amount}&cu=INR&tn=${encodeURIComponent(
    `License_${app.name}`
  )}`;

  // Quick QR Image via Google Chart API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    upiUri
  )}&bgcolor=11131c&color=fbbf24`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleConfirmOnWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `🎉 *NEW PAYMENT CONFIRMATION - MK STUDIO*\n\n` +
      `👤 *Customer Name:* ${payerName || "Creator"}\n` +
      `📱 *WhatsApp:* ${payerPhone || "N/A"}\n` +
      `📦 *Software:* ${app.name} (${app.tier})\n` +
      `💰 *Amount Paid:* ₹${amount}\n` +
      `🧾 *Transaction / UTR Reference:* ${transactionRef || "Screenshot Attached"}\n\n` +
      `*Please issue my official PRO License Key and download package!*`
    );
    window.open(`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setPaymentDone(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box payment-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28 }}>💳</span>
            <div>
              <h3 className="modal-title">Complete PRO Purchase</h3>
              <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
                Instant delivery to your WhatsApp within 5 minutes.
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="modal-close-btn">
            ✕
          </button>
        </div>

        {/* Order Summary Card */}
        <div className="order-summary-box">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>{app.icon}</span>
              <div>
                <strong style={{ fontSize: 15, color: "#fff" }}>{app.name}</strong>
                <div style={{ fontSize: 12, color: "var(--gold)" }}>{app.tier}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "var(--emerald)" }}>
                ₹{amount}
              </div>
              <span style={{ fontSize: 11, color: "var(--text-dim)" }}>One-time Lifetime</span>
            </div>
          </div>
        </div>

        {paymentDone ? (
          <div style={{ textAlign: "center", padding: "24px 10px" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🚀</div>
            <h4 style={{ fontSize: 18, fontWeight: 800, color: "var(--gold)" }}>
              Payment Received / In Process!
            </h4>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6, lineHeight: 1.6 }}>
              Thank you {payerName}! We opened WhatsApp with your order details. Mohd Khan will verify your UTR and send your PRO License Key immediately.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn btn--primary"
              style={{ marginTop: 18, width: "100%", justifyContent: "center" }}
            >
              <span>Back to Portal</span>
            </button>
          </div>
        ) : (
          <div>
            {/* UPI QR & Direct App Payment */}
            <div className="payment-qr-wrap">
              <div style={{ textAlign: "center" }}>
                <img
                  src={qrUrl}
                  alt="Scan to Pay UPI"
                  width={150}
                  height={150}
                  style={{ borderRadius: 12, border: "2px solid rgba(245, 158, 11, 0.4)", background: "#11131c" }}
                />
                <div style={{ fontSize: 11.5, color: "var(--text-dim)", marginTop: 6 }}>
                  Scan with GPay / PhonePe / Paytm
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "var(--text-dim)", fontWeight: 700, textTransform: "uppercase" }}>
                  Official UPI ID:
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "6px 0 12px" }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--gold)", background: "rgba(0,0,0,0.4)", padding: "6px 10px", borderRadius: 6 }}>
                    {upiId}
                  </code>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="btn btn--secondary btn--sm"
                  >
                    <span>{copiedUpi ? "✓ Copied" : "Copy"}</span>
                  </button>
                </div>

                <a
                  href={upiUri}
                  className="btn btn--primary btn--sm"
                  style={{ width: "100%", justifyContent: "center", marginBottom: 8 }}
                >
                  <span>⚡ Pay via UPI App (GPay/PhonePe)</span>
                </a>
              </div>
            </div>

            {/* Confirmation Form */}
            <form onSubmit={handleConfirmOnWhatsApp} style={{ marginTop: 18 }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={payerName}
                  onChange={(e) => setPayerName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp Number (For License Key Delivery)</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="e.g. +91 9876543210"
                  value={payerPhone}
                  onChange={(e) => setPayerPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">UPI Reference / UTR Number (From Payment App)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. 4312XXXXXXXX / 12-digit UTR"
                  value={transactionRef}
                  onChange={(e) => setTransactionRef(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn--wa"
                style={{ width: "100%", justifyContent: "center", padding: "13px", marginTop: 8 }}
              >
                <span>💬 Confirm Payment &amp; Get License Key</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 12, fontSize: 11, color: "var(--text-dim)" }}>
                <span>🔒 100% Safe UPI Transfer</span>
                <span>•</span>
                <span>⚡ Instant Key Issuance</span>
                <span>•</span>
                <span>💬 Direct Mohd Khan Support</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

