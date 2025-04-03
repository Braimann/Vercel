import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FeaturedPharmacies() {
  // Cette liste serait normalement chargée depuis une API ou une base de données
  const pharmacies = [
    {
      id: 1,
      name: "Pharmacie Centrale",
      address: "123 Boulevard Mohammed V, Casablanca",
      phone: "0522123456",
      hours: "24h/24",
      district: "Centre-ville",
      isOpen: true,
    },
    {
      id: 2,
      name: "Pharmacie El Fath",
      address: "45 Rue Ibnou Mounir, Maârif, Casablanca",
      phone: "0522789012",
      hours: "24h/24",
      district: "Maârif",
      isOpen: true,
    },
    {
      id: 3,
      name: "Pharmacie Ain Diab",
      address: "78 Boulevard de l'Océan Atlantique, Casablanca",
      phone: "0522345678",
      hours: "24h/24",
      district: "Ain Diab",
      isOpen: true,
    },
    {
      id: 4,
      name: "Pharmacie Anfa",
      address: "156 Boulevard d'Anfa, Casablanca",
      phone: "0522901234",
      hours: "24h/24",
      district: "Anfa",
      isOpen: true,
    },
    {
      id: 5,
      name: "Pharmacie Sidi Moumen",
      address: "34 Boulevard Al Qods, Sidi Moumen, Casablanca",
      phone: "0522567890",
      hours: "24h/24",
      district: "Sidi Moumen",
      isOpen: true,
    },
    {
      id: 6,
      name: "Pharmacie Hay Hassani",
      address: "12 Rue 100, Hay Hassani, Casablanca",
      phone: "0522678901",
      hours: "24h/24",
      district: "Hay Hassani",
      isOpen: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pharmacies.map((pharmacy) => (
        <Card key={pharmacy.id} className="border-l-4 border-l-emerald-500">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pharmacy.address}</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pharmacy.phone}</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pharmacy.hours}</span>
                </div>
              </div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Ouverte 24h/24
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link href={`/pharmacies/${pharmacy.id}`}>
                <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50">
                  Détails
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

