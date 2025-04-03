import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import PharmacyList from "@/components/pharmacy-list"
import { getAllDistricts } from "@/lib/api"

export const metadata: Metadata = {
  title: "Pharmacie de Garde Casablanca | Service 24h/24 dans tous les quartiers",
  description:
    "Service de localisation des pharmacies de garde à Casablanca ouvertes 24h/24. Trouvez rapidement la pharmacie la plus proche en service de nuit et de garde dans tous les quartiers: Maârif, Anfa, Ain Diab, Centre-ville et plus.",
  keywords: [
    "pharmacie de garde Casablanca",
    "pharmacie 24h/24 Casablanca",
    "pharmacie de nuit Casablanca",
    "pharmacie ouverte Maârif",
    "pharmacie garde Anfa",
    "pharmacie urgence Ain Diab",
    "médicaments urgence Casablanca",
    "pharmacie Centre-ville Casablanca",
    "pharmacie Sidi Moumen",
    "pharmacie Hay Hassani",
    "pharmacie Derb Sultan",
    "pharmacie Bourgogne",
    "pharmacie Mers Sultan",
    "pharmacie Racine",
    "pharmacie Gauthier",
    "pharmacie Beauséjour",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com",
  },
}

export default async function Home() {
  // Récupérer tous les districts uniques
  const districts = await getAllDistricts()

  // Formater les noms des districts pour l'affichage
  const formattedDistricts = districts.map((district) =>
    district
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-800">
              Trouvez les pharmacies de garde à Casablanca 24h/24
            </h1>
            <p className="text-lg text-gray-600">
              Service rapide et fiable pour localiser les pharmacies ouvertes la nuit et les jours fériés à Casablanca.
              Accédez aux médicaments dont vous avez besoin, quand vous en avez besoin, dans tous les quartiers: Maârif,
              Anfa, Ain Diab, Centre-ville, Sidi Moumen et plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Entrez votre quartier (ex: Maârif, Anfa...)"
                  className="pl-10 h-12 rounded-md"
                />
              </div>
              <Button className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700">Trouver une pharmacie</Button>
            </div>
            <div className="flex items-center gap-2 text-emerald-700">
              <Clock className="h-5 w-5" />
              <span>Mise à jour quotidienne des pharmacies de garde dans tous les quartiers</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600&text=Pharmacie+de+Garde+Casablanca"
              alt="Pharmacie de garde à Casablanca - Service 24h/24"
              width={600}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-xl my-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment trouver une pharmacie de garde à Casablanca ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre service vous permet de localiser rapidement les pharmacies ouvertes près de chez vous, 24h/24 et
              7j/7, dans tous les quartiers de Casablanca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Localisez</h3>
                <p className="text-gray-600">
                  Entrez votre quartier (Maârif, Anfa, Ain Diab, etc.) ou activez la géolocalisation pour trouver les
                  pharmacies les plus proches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultez</h3>
                <p className="text-gray-600">
                  Visualisez les informations détaillées, les horaires et les services des pharmacies de garde
                  disponibles dans votre secteur.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Contactez</h3>
                <p className="text-gray-600">
                  Appelez directement la pharmacie de garde ou obtenez l'itinéraire pour vous y rendre rapidement, même
                  en pleine nuit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pharmacies de garde aujourd'hui à Casablanca</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Consultez la liste mise à jour des pharmacies ouvertes aujourd'hui dans les différents quartiers de
            Casablanca: Maârif, Centre-ville, Anfa, Ain Diab, Sidi Moumen, Hay Hassani et plus.
          </p>
        </div>

        <div className="mb-10">
          <PharmacyList />
        </div>

        <div className="text-center mt-8">
          <Link href="/pharmacies">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Voir toutes les pharmacies de garde à Casablanca
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-emerald-50 rounded-xl my-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pharmacies de garde par quartier à Casablanca</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trouvez les pharmacies de garde dans votre quartier à Casablanca, service disponible 24h/24.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {formattedDistricts.map((district, index) => (
              <Link
                key={index}
                href={`/quartiers/${district
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-")}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-emerald-600 mr-1" />
                  <span>Pharmacies {district}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/quartiers">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Voir tous les quartiers de Casablanca
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-600 text-white rounded-xl my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Service d'urgence 24h/24 pour tout Casablanca</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Notre plateforme vous connecte aux pharmacies de garde dans tous les quartiers de Casablanca. Données mises
            à jour en temps réel pour vous assurer de trouver une pharmacie ouverte à tout moment.
          </p>
          <Link href="/pharmacies">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Trouver une pharmacie de garde maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

