import type React from "react"
import type { Metadata } from "next"
import { getCanonicalUrl } from "@/lib/metadata-utils"

export const metadata: Metadata = {
  title: "Blog | Conseils et Informations sur les Pharmacies de Garde",
  description:
    "Découvrez nos articles sur les pharmacies de garde à Casablanca, les médicaments essentiels et les conseils santé pour les urgences médicales.",
  alternates: {
    canonical: getCanonicalUrl("blog"),
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

