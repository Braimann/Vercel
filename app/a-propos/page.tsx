import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "À Propos | Pharmacie de Garde Casablanca",
  description:
    "Découvrez notre mission et notre engagement à faciliter l'accès aux pharmacies de garde à Casablanca. Service fiable et actualisé 24h/24.",
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/a-propos",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">À Propos de Pharmacie de Garde Casablanca</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Notre mission est de faciliter l'accès aux soins pharmaceutiques d'urgence pour tous les habitants de
          Casablanca.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Notre Service</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Pharmacie de Garde Casablanca a été créé pour répondre à un besoin essentiel : rendre l'accès aux
              médicaments d'urgence plus simple et plus rapide pour tous.
            </p>
            <p>
              Face au constat que de nombreux habitants de Casablanca perdaient un temps précieux à chercher une
              pharmacie ouverte en dehors des heures habituelles, nous avons développé une solution innovante qui répond
              à ce besoin essentiel.
            </p>
            <p>
              Notre plateforme est un outil pratique pour des milliers d'utilisateurs qui comptent sur notre service
              pour trouver rapidement une pharmacie de garde à proximité, à n'importe quelle heure du jour ou de la
              nuit.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Pharmacie+de+Garde"
            alt="Service Pharmacie de Garde Casablanca"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-emerald-50 rounded-lg p-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous nous engageons à fournir un service fiable, précis et accessible à tous pour faciliter l'accès aux
            soins pharmaceutiques d'urgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
            <p className="text-gray-600">
              Nous nous efforçons de rendre notre service accessible à tous, quels que soient l'âge, la langue ou le
              niveau de compétence technologique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
            <p className="text-gray-600">
              Nous mettons à jour nos informations quotidiennement pour garantir que vous trouviez toujours une
              pharmacie ouverte quand vous en avez besoin.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Nous utilisons les dernières technologies pour améliorer constamment notre service et offrir la meilleure
              expérience possible à nos utilisateurs.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center bg-emerald-600 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Notre engagement pour votre santé</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Nous nous engageons à fournir des informations fiables et à jour sur les pharmacies de garde à Casablanca pour
          vous aider à accéder rapidement aux médicaments dont vous avez besoin en cas d'urgence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pharmacies">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100">Trouver une pharmacie</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

