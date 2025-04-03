import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PharmacyList from "@/components/pharmacy-list"
import { getAllDistricts } from "@/lib/api"

export const metadata: Metadata = {
  title: "Liste des Pharmacies de Garde à Casablanca | Service 24h/24",
  description:
    "Consultez la liste complète des pharmacies de garde à Casablanca ouvertes 24h/24. Trouvez les pharmacies de service dans tous les quartiers: Maârif, Anfa, Ain Diab, Centre-ville, Sidi Moumen et plus.",
  keywords: [
    "liste pharmacies garde Casablanca",
    "pharmacies ouvertes 24h/24 Casablanca",
    "pharmacies nuit Casablanca",
    "pharmacies garde Maârif",
    "pharmacies service Anfa",
    "pharmacies urgence Ain Diab",
    "pharmacies Centre-ville",
    "pharmacies Sidi Moumen",
    "pharmacies Hay Hassani",
    "pharmacies Derb Sultan",
    "pharmacies Bourgogne",
    "pharmacies Mers Sultan",
    "pharmacies Racine",
    "pharmacies Gauthier",
    "pharmacies Beauséjour",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/pharmacies",
  },
}

export default async function PharmaciesPage() {
  // Récupérer tous les districts uniques
  const districts = await getAllDistricts()

  // Trier les districts par ordre alphabétique
  const sortedDistricts = ["Tous les quartiers", ...districts.sort()]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Pharmacies de Garde à Casablanca</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Consultez la liste complète et à jour des pharmacies de garde à Casablanca. Trouvez facilement les pharmacies
          ouvertes 24h/24 près de chez vous dans tous les quartiers de la ville.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Recherche par nom
            </label>
            <Input id="search" type="text" placeholder="Nom de la pharmacie" className="w-full" />
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
              Quartier
            </label>
            <Select>
              <SelectTrigger id="district">
                <SelectValue placeholder="Sélectionnez un quartier" />
              </SelectTrigger>
              <SelectContent>
                {sortedDistricts.map((district, index) => (
                  <SelectItem key={index} value={district.toLowerCase().replace(/\s+/g, "-")}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Rechercher une pharmacie</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Liste des pharmacies de garde à Casablanca</h2>
        <PharmacyList />
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Informations sur les pharmacies de garde à Casablanca</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Les pharmacies de garde à Casablanca assurent un service continu 24h/24 pour répondre aux besoins médicaux
            urgents des habitants. Le système de garde est organisé par rotation entre les différentes pharmacies de la
            ville, couvrant tous les quartiers: Centre-ville, Maârif, Anfa, Ain Diab, Sidi Moumen, Hay Hassani, Derb
            Sultan, Bourgogne, Mers Sultan, Racine, Gauthier et Beauséjour.
          </p>
          <p>
            Pour trouver la pharmacie de garde la plus proche, vous pouvez utiliser notre service de localisation ou
            appeler le numéro d'urgence 19. Les pharmacies de garde changent généralement chaque jour à 8h30 du matin,
            assurant ainsi une couverture pharmaceutique continue dans tous les quartiers de Casablanca.
          </p>
          <p>
            En cas d'urgence médicale grave, il est recommandé de contacter directement les services d'urgence au 15 ou
            de se rendre à l'hôpital le plus proche. Notre service vous aide à trouver rapidement les médicaments dont
            vous avez besoin en situation d'urgence, quelle que soit l'heure du jour ou de la nuit.
          </p>
          <div className="mt-4">
            <Link href="/faq">
              <Button variant="link" className="text-emerald-600 p-0">
                Consultez notre FAQ pour plus d'informations sur les pharmacies de garde à Casablanca →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

