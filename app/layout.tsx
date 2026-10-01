import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Aithocine | Ingénieur IT — Systèmes, Réseaux & Cybersécurité",
  description: "Portfolio professionnel d'Ali Aithocine — systèmes, réseaux, cybersécurité et gestion de projets IT.",
  metadataBase: new URL("https://ali-aithocine.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
