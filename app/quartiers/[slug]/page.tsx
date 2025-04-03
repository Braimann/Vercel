import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PharmacyList from "@/components/pharmacy-list"
import { getPharmaciesByDistrict, isPharmacyOpen, getAllDistricts } from "@/lib/api"
import SchemaMarkup from "@/components/schema-markup"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Convertir le slug en nom de district
  const districtName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `Pharmacies de Garde à ${districtName} Casablanca | Service 24/24`,
    description: `Trouvez les pharmacies de garde ouvertes 24h/24 dans le quartier ${districtName} à Casablanca. Liste complète avec adresses, horaires et contacts. Service mis à jour quotidiennement.`,
    keywords: [
      `pharmacie de garde ${districtName}`,
      "Casablanca",
      `${districtName} pharmacie 24/24`,
      "médicaments urgence",
      `pharmacie ouverte ${districtName}`,
      `pharmacie nuit ${districtName}`,
      `pharmacie service ${districtName} Casablanca`,
    ],
    alternates: {
      canonical: `https://pharmaciedegardecasablanca.com/quartiers/${params.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const districts = await getAllDistricts()

  return districts.map((district) => ({
    slug: district.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default async function DistrictPage({ params }: Props) {
  // Convertir le slug en nom de district pour l'affichage
  const districtName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Récupérer les pharmacies pour ce district
  const pharmacies = await getPharmaciesByDistrict(params.slug.replace(/-/g, " "))

  // Compter les pharmacies ouvertes
  const openPharmacies = pharmacies.filter((pharmacy) => isPharmacyOpen(pharmacy.openTillTimestamp))

  // Données pour le schéma
  const schemaData = {
    name: `Pharmacies de garde à ${districtName}`,
    district: districtName,
    address: `${districtName}, Casablanca, Maroc`,
    latitude: pharmacies[0]?.latitude || "33.5731",
    longitude: pharmacies[0]?.longitude || "-7.5898",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup type="localBusiness" data={schemaData} />

      <div className="mb-6">
        <Link href="/quartiers" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour à la liste des quartiers
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Pharmacies de Garde à {districtName}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Trouvez les pharmacies ouvertes 24h/24 dans le quartier {districtName} à Casablanca. Liste mise à jour
          quotidiennement pour vous assurer un accès rapide aux médicaments d'urgence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Liste des pharmacies de garde à {districtName}</h2>
              {pharmacies.length > 0 ? (
                <PharmacyList district={params.slug.replace(/-/g, " ")} />
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Aucune pharmacie de garde trouvée dans ce quartier actuellement.</p>
                  <p className="text-gray-500 mt-2">Veuillez consulter les quartiers voisins ou réessayer plus tard.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Articles sur les pharmacies à {districtName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Guide des pharmacies de garde</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    Découvrez toutes les pharmacies de garde à {districtName}, leurs horaires et services disponibles.
                  </p>
                  <Link href={`/quartiers/${params.slug}/blog/pharmacies-garde-${params.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-emerald-600 border-emerald-600 hover:bg-emerald-50 flex items-center justify-center"
                    >
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Urgences médicales à {districtName}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    Guide pratique pour gérer les urgences médicales à {districtName} et trouver rapidement de l'aide.
                  </p>
                  <Link href={`/quartiers/${params.slug}/blog/urgences-medicales-${params.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-emerald-600 border-emerald-600 hover:bg-emerald-50 flex items-center justify-center"
                    >
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Services spéciaux des pharmacies</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    Découvrez les services additionnels proposés par les pharmacies de garde à {districtName}.
                  </p>
                  <Link href={`/quartiers/${params.slug}/blog/services-pharmacies-${params.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-emerald-600 border-emerald-600 hover:bg-emerald-50 flex items-center justify-center"
                    >
                      Lire l'article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations sur {districtName}</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pharmacies de garde:</span>
                  <span className="font-medium">{pharmacies.length} pharmacies</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Actuellement ouvertes:</span>
                  <span className="font-medium">{openPharmacies.length} pharmacies</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Mise à jour:</span>
                  <span className="font-medium">Aujourd'hui</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Les pharmacies de garde à {districtName} assurent un service 24h/24 pour répondre aux besoins
                    médicaux urgents des habitants du quartier.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quartiers voisins</h2>
              <div className="space-y-2">
                {["Centre-ville", "Maârif", "Anfa", "Ain Diab", "Racine", "Gauthier"]
                  .filter((q) => q.toLowerCase() !== districtName.toLowerCase())
                  .slice(0, 5)
                  .map((district, index) => (
                    <Link
                      key={index}
                      href={`/quartiers/${district
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="block p-2 hover:bg-gray-50 rounded-md text-emerald-600 hover:text-emerald-700"
                    >
                      Pharmacies de garde à {district}
                    </Link>
                  ))}
                <Link href="/quartiers" className="block p-2 text-sm text-emerald-600 hover:underline">
                  Voir tous les quartiers →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Besoin d'aide ?</h2>
              <p className="text-gray-600 mb-4">
                Vous ne trouvez pas la pharmacie que vous cherchez ? Contactez-nous pour obtenir de l'aide.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Nous contacter</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

