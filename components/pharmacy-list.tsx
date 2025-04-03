"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { type Pharmacy, formatOpenTill, isPharmacyOpen } from "@/lib/api"

interface PharmacyListProps {
  singlePharmacy?: string | number
  district?: string
}

export default function PharmacyList({ singlePharmacy, district }: PharmacyListProps) {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPharmacies() {
      try {
        setLoading(true)
        let url = "/api/pharmacies"

        if (district) {
          url += `?district=${encodeURIComponent(district)}`
        }

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()

        // Si singlePharmacy est défini, filtrer pour n'obtenir que cette pharmacie
        if (singlePharmacy) {
          const filteredData = data.filter((pharmacy: Pharmacy) =>
            pharmacy.pharmacyNameLatin.toLowerCase().includes(String(singlePharmacy).toLowerCase()),
          )
          setPharmacies(filteredData)
        } else {
          setPharmacies(data)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Une erreur est survenue")
        console.error("Erreur lors de la récupération des pharmacies:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPharmacies()
  }, [singlePharmacy, district])

  if (loading) {
    return (
      <div className="w-full min-h-[200px] flex items-center justify-center">
        <p className="text-gray-500">Chargement des pharmacies...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full min-h-[200px] flex items-center justify-center">
        <p className="text-red-500">Erreur: {error}</p>
      </div>
    )
  }

  if (pharmacies.length === 0) {
    return (
      <div className="w-full min-h-[200px] flex items-center justify-center">
        <p className="text-gray-500">Aucune pharmacie trouvée</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {pharmacies.map((pharmacy, index) => (
        <Card
          key={index}
          className={`border-l-4 ${isPharmacyOpen(pharmacy.openTillTimestamp) ? "border-l-emerald-500" : "border-l-gray-300"}`}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{pharmacy.pharmacyNameLatin}</h3>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pharmacy.addressLatin}</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <Phone className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pharmacy.pharmacyPhone}</span>
                </div>
                <div className="flex items-center text-gray-500 mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Ouverte jusqu'au {formatOpenTill(pharmacy.openTillTimestamp)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isPharmacyOpen(pharmacy.openTillTimestamp) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                >
                  {isPharmacyOpen(pharmacy.openTillTimestamp) ? "Ouverte" : "Fermée"}
                </span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.latitude},${pharmacy.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 flex items-center gap-1"
                  >
                    <Navigation className="h-4 w-4" />
                    Itinéraire
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

