import { STUDIO_CONFIG } from "../lib/appsData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          Designed &amp; Developed with ❤️ by <strong>{STUDIO_CONFIG.ownerName}</strong> • {STUDIO_CONFIG.portalTitle}
        </p>
        <p className="footer__text" style={{ marginTop: 8, fontSize: 12.5 }}>
          <a href="https://mk-autoeditor-v2.vercel.app/" target="_blank" rel="noopener noreferrer">
            MK AutoEditor Online
          </a>
          {" • "}
          <a href={STUDIO_CONFIG.githubOrg} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" • "}
          <a href={`https://t.me/${STUDIO_CONFIG.telegramUsername}`} target="_blank" rel="noopener noreferrer">
            Telegram (@{STUDIO_CONFIG.telegramUsername})
          </a>
          {" • "}
          <a
            href={`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--whatsapp)" }}
          >
            WhatsApp Support ({STUDIO_CONFIG.whatsappDisplayNumber})
          </a>
        </p>
      </div>
    </footer>
  );
}

