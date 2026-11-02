import "./globals.css";
import { STUDIO_CONFIG } from "../lib/appsData";

export const metadata = {
  title: `${STUDIO_CONFIG.portalTitle} — High-Performance Creator Tools & Software`,
  description:
    "Official developer portal and software ecosystem by Mohd Khan. Featuring MK AutoEditor V2, OmniGrab Pro, Flow MK Studio, updates, downloads, and developer support.",
  icons: { icon: "/logo.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

