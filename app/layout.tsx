import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"
import { Analytics } from "@/components/analytics"
import SchemaMarkup from "@/components/schema-markup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Pharmacie de Garde Casablanca | Service 24h/24",
    template: "%s | Pharmacie de Garde Casablanca",
  },
  description:
    "Trouvez les pharmacies de garde à Casablanca ouvertes 24h/24. Service de localisation rapide des pharmacies les plus proches en service de nuit et de garde dans tous les quartiers.",
  keywords: [
    "pharmacie de garde Casablanca",
    "pharmacie 24h/24 Casablanca",
    "pharmacie de nuit Casablanca",
    "pharmacie ouverte Maârif",
    "pharmacie garde Anfa",
    "pharmacie urgence Ain Diab",
    "médicaments urgence Casablanca",
    "pharmacie Centre-ville",
    "pharmacie Sidi Moumen",
    "pharmacie Hay Hassani",
    "pharmacie Derb Sultan",
    "pharmacie Bourgogne",
    "pharmacie Mers Sultan",
    "pharmacie Racine",
    "pharmacie Gauthier",
    "pharmacie Beauséjour",
  ],
  authors: [{ name: "Pharmacie de Garde Casablanca" }],
  creator: "Pharmacie de Garde Casablanca",
  publisher: "Pharmacie de Garde Casablanca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Remplacez par votre code de vérification Google
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Données pour le schéma du site web
  const websiteSchemaData = {
    name: "Pharmacie de Garde Casablanca",
    url: "https://pharmaciedegardecasablanca.com",
    description: "Service de localisation des pharmacies de garde à Casablanca ouvertes 24h/24",
  }

  return (
    <html lang="fr">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <SchemaMarkup type="website" data={websiteSchemaData} />
        <DisclaimerBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'