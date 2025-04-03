import type React from "react"
import type { Metadata } from "next"

// Fonction pour formater l'affichage du tag
function formatTagForDisplay(tag: string): string {
  return tag
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const displayTag = formatTagForDisplay(params.tag)

  // Liste complète de mots-clés SEO pertinents
  const baseKeywords = [
    "pharmacie de garde",
    "pharmacie 24h/24",
    "pharmacie nuit",
    "pharmacie urgence",
    "médicaments urgence",
    "pharmacie ouverte",
    "service pharmaceutique",
    "pharmacie weekend",
    "pharmacie jour férié",
    "pharmacie nocturne",
    "trouver pharmacie garde",
    "pharmacie proche",
    "médicaments nuit",
    "pharmacie disponible",
    "pharmacie service continu",
    "pharmacie permanence",
    "pharmacie sans interruption",
    "pharmacie horaires étendus",
    "pharmacie après fermeture",
    "pharmacie tard",
    "pharmacie dimanche",
    "pharmacie jours fériés",
  ]

  // Ajouter des mots-clés spécifiques au tag
  const tagKeywords = [
    `${displayTag} pharmacie`,
    `pharmacie de garde ${displayTag}`,
    `${displayTag} médicaments`,
    `${displayTag} urgence`,
    `${displayTag} nuit`,
    `${displayTag} 24h/24`,
    `${displayTag} Casablanca`,
    `trouver ${displayTag}`,
    `${displayTag} disponible`,
    `${displayTag} service`,
  ]

  return {
    title: `Articles sur ${displayTag} | Pharmacie de Garde Casablanca 24h/24`,
    description: `Découvrez tous nos articles liés à ${displayTag} : conseils, informations et guides pratiques pour trouver une pharmacie de garde à Casablanca. Service disponible 24h/24 et 7j/7 dans tous les quartiers.`,
    keywords: [...baseKeywords, ...tagKeywords],
    alternates: {
      canonical: `https://pharmaciedegardecasablanca.com/blog/tag/${params.tag}`,
    },
    openGraph: {
      title: `Articles sur ${displayTag} | Pharmacie de Garde Casablanca`,
      description: `Informations complètes sur ${displayTag} pour trouver facilement une pharmacie de garde à Casablanca 24h/24.`,
      url: `https://pharmaciedegardecasablanca.com/blog/tag/${params.tag}`,
      siteName: "Pharmacie de Garde Casablanca",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${displayTag} | Pharmacie de Garde Casablanca`,
      description: `Informations complètes sur ${displayTag} pour trouver facilement une pharmacie de garde à Casablanca 24h/24.`,
    },
  }
}

export default function TagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

