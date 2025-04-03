import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { getAllDistricts, getPharmaciesByDistrict } from "@/lib/api"

export const metadata: Metadata = {
  title: "Pharmacies de Garde par Quartier à Casablanca | Service 24h/24",
  description:
    "Trouvez les pharmacies de garde dans tous les quartiers de Casablanca: Maârif, Anfa, Ain Diab, Centre-ville, Sidi Moumen, Hay Hassani et plus. Service de localisation des pharmacies ouvertes 24h/24 par quartier.",
  keywords: [
    "pharmacie garde quartier Casablanca",
    "pharmacie Maârif",
    "pharmacie Anfa",
    "pharmacie Ain Diab",
    "pharmacie Centre-ville Casablanca",
    "pharmacie Sidi Moumen",
    "pharmacie Hay Hassani",
    "pharmacie Derb Sultan",
    "pharmacie Bourgogne",
    "pharmacie Mers Sultan",
    "pharmacie Racine",
    "pharmacie Gauthier",
    "pharmacie Beauséjour",
    "pharmacie 24h/24 quartier Casablanca",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/quartiers",
  },
}

export default async function QuartiersPage() {
  // Récupérer tous les districts uniques
  const districtNames = await getAllDistricts()

  // Créer un tableau de districts avec leurs informations
  const districts = await Promise.all(
    districtNames.map(async (district) => {
      const pharmacies = await getPharmaciesByDistrict(district)

      // Formater le nom du district pour l'affichage
      const formattedName = district
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")

      // Créer le slug pour les URLs
      const slug = district.toLowerCase().replace(/\s+/g, "-")

      return {
        name: formattedName,
        slug,
        description: `Le quartier ${formattedName} est l'un des secteurs importants de Casablanca, disposant de plusieurs pharmacies qui assurent un service de garde 24h/24 pour répondre aux besoins médicaux urgents des résidents.`,
        pharmacyCount: pharmacies.length,
        image: `/placeholder.svg?height=200&width=300&text=${formattedName}+Casablanca`,
      }
    }),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Pharmacies de Garde par Quartier à Casablanca</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Trouvez facilement les pharmacies de garde dans tous les quartiers de Casablanca. Sélectionnez votre quartier
          pour voir les pharmacies ouvertes 24h/24 près de chez vous, que vous soyez à Maârif, Anfa, Ain Diab,
          Centre-ville ou ailleurs.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="Rechercher un quartier de Casablanca..." className="pl-10 w-full" />
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Rechercher des pharmacies</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {districts.map((district) => (
          <Card key={district.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={district.image || "/placeholder.svg"}
                alt={`Pharmacies de garde quartier ${district.name} à Casablanca`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">{district.name}</h2>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{district.pharmacyCount} pharmacies de garde 24h/24</span>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 mb-4 line-clamp-2">{district.description}</p>
              <div className="flex justify-between items-center">
                <Link href={`/quartiers/${district.slug}`}>
                  <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                    Voir les pharmacies
                  </Button>
                </Link>
                <Link
                  href={`/blog/pharmacies-garde-${district.slug}-casablanca`}
                  className="text-emerald-600 hover:underline text-sm"
                >
                  Guide du quartier
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Trouver une pharmacie de garde par quartier à Casablanca</h2>
            <p className="text-gray-600 mb-4">
              Notre service vous permet de localiser facilement les pharmacies de garde dans chaque quartier de
              Casablanca. Nous mettons à jour quotidiennement les informations pour vous assurer de trouver une
              pharmacie ouverte 24h/24 près de chez vous, que vous soyez à Maârif, Centre-ville, Anfa ou dans n'importe
              quel autre secteur.
            </p>
            <p className="text-gray-600 mb-4">
              Chaque quartier dispose d'un système de rotation des pharmacies de garde pour assurer un service continu
              aux habitants. Consultez notre guide détaillé pour comprendre comment fonctionne ce système et trouver
              rapidement les médicaments dont vous avez besoin en urgence.
            </p>
            <Link href="/blog/fonctionnement-pharmacies-garde-casablanca">
              <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                En savoir plus sur le système de garde
              </Button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quartiers populaires de Casablanca</h3>
            <ul className="space-y-3">
              {districts.slice(0, 6).map((district) => (
                <li key={district.slug}>
                  <Link
                    href={`/quartiers/${district.slug}`}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                  >
                    <span className="font-medium">Pharmacies {district.name}</span>
                    <span className="text-sm text-gray-500">{district.pharmacyCount} pharmacies 24h/24</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="#" className="text-emerald-600 hover:underline text-sm">
                  Voir tous les quartiers de Casablanca
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="prose prose-emerald max-w-none mb-12">
        <h2>Les pharmacies de garde à Casablanca par quartier - Service 24h/24</h2>
        <p>
          Casablanca, la plus grande ville du Maroc, est divisée en plusieurs quartiers, chacun disposant de son propre
          système de pharmacies de garde. Ce service essentiel permet aux habitants d'accéder aux médicaments et aux
          conseils pharmaceutiques à tout moment, même en dehors des heures d'ouverture habituelles.
        </p>
        <p>
          Dans chaque quartier de Casablanca, les pharmacies participent à un système de rotation pour assurer les
          services de garde. Ce système est géré par le Conseil de l'Ordre des Pharmaciens et les autorités sanitaires
          locales, garantissant qu'au moins une pharmacie reste ouverte 24h/24 dans chaque secteur de la ville.
        </p>
        <h3>Comment trouver une pharmacie de garde dans votre quartier à Casablanca ?</h3>
        <p>
          Notre site web vous permet de localiser facilement les pharmacies de garde dans votre quartier. Il vous suffit
          de sélectionner votre quartier dans la liste ci-dessus pour voir toutes les pharmacies actuellement en service
          de garde. Vous pouvez également utiliser notre fonction de recherche pour trouver rapidement votre quartier.
        </p>
        <p>
          Pour chaque quartier, nous fournissons une liste complète des pharmacies de garde avec leurs adresses, numéros
          de téléphone et horaires d'ouverture. Vous pouvez également consulter une carte interactive pour visualiser
          l'emplacement exact de chaque pharmacie et obtenir des itinéraires pour vous y rendre.
        </p>
        <h3>Les quartiers principaux de Casablanca et leurs pharmacies de garde</h3>
        <p>
          Casablanca compte de nombreux quartiers, chacun avec ses propres caractéristiques et services pharmaceutiques.
          Parmi les quartiers les plus importants, on trouve :
        </p>
        <ul>
          {districts.slice(0, 5).map((district) => (
            <li key={district.slug}>
              <strong>
                <Link href={`/quartiers/${district.slug}`} className="text-emerald-600 hover:underline">
                  {district.name}
                </Link>
              </strong>{" "}
              : Quartier disposant de {district.pharmacyCount} pharmacies assurant un service de garde 24h/24 pour les
              résidents.
            </li>
          ))}
        </ul>
        <p>
          Pour obtenir des informations détaillées sur les pharmacies de garde dans chaque quartier, cliquez sur le nom
          du quartier qui vous intéresse dans la liste ci-dessus. Notre service est mis à jour quotidiennement pour vous
          garantir des informations fiables sur les pharmacies ouvertes 24h/24.
        </p>
      </div>
    </div>
  )
}

