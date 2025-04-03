"use client"

import { useEffect, useState } from "react"
import type { Pharmacy } from "@/lib/api"
import LeafletMap from "@/components/leaflet-map"

interface PharmacyMapProps {
  singlePharmacy?: string | number
  district?: string
}

export default function PharmacyMap({ singlePharmacy, district }: PharmacyMapProps) {
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
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Chargement de la carte...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-100">
        <p className="text-red-500">Erreur: {error}</p>
      </div>
    )
  }

  if (pharmacies.length === 0) {
    return (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Aucune pharmacie trouvée</p>
      </div>
    )
  }

  return <LeafletMap pharmacies={pharmacies} />
}

