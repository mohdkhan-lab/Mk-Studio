import { STUDIO_CONFIG } from "./appsData";

export function buildWhatsAppChatUrl({ appName, topic, details, userName } = {}) {
  const number = (STUDIO_CONFIG.whatsappNumber || "8198966902").replace(/[^0-9]/g, "");
  const fullNumber = number.length === 10 ? `91${number}` : number;

  let message = `Hello ${STUDIO_CONFIG.ownerName},\nI am visiting *${STUDIO_CONFIG.portalTitle}*.\n\n`;

  if (appName) message += `📱 *Application:* ${appName}\n`;
  if (topic) message += `📌 *Category:* ${topic}\n`;
  if (userName) message += `👤 *My Name:* ${userName}\n`;
  if (details) message += `📝 *Query / Details:* ${details}\n`;

  if (typeof window !== "undefined") {
    message += `💻 *Device / Browser:* ${navigator.userAgent.slice(0, 80)}\n`;
  }

  return `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
}

export function buildTelegramChatUrl() {
  const username = (STUDIO_CONFIG.telegramUsername || "Mohdashraff18").replace(/^@/, "");
  return `https://t.me/${username}`;
}

export function buildEmailMailtoUrl({ appName, topic, details, userName } = {}) {
  const subject = `[${STUDIO_CONFIG.brandName} Support] ${appName ? `[${appName}] ` : ""}${topic || "Query"}`;
  let body = `Hello ${STUDIO_CONFIG.ownerName},\n\n`;
  if (appName) body += `App: ${appName}\n`;
  if (userName) body += `Name: ${userName}\n`;
  if (topic) body += `Topic: ${topic}\n`;
  if (details) body += `Details: ${details}\n\n`;
  return `mailto:${STUDIO_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

