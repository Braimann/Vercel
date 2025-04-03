import { NextResponse } from "next/server"
import { getPharmacies } from "@/lib/api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const district = searchParams.get("district")

    const pharmacies = await getPharmacies()

    if (district) {
      const normalizedDistrict = district.toUpperCase().replace(/-/g, " ")
      const filteredPharmacies = pharmacies.filter((pharmacy) => {
        const pharmacyDistrict = pharmacy.district.toUpperCase().replace(/-/g, " ")
        return pharmacyDistrict === normalizedDistrict
      })

      return NextResponse.json(filteredPharmacies)
    }

    return NextResponse.json(pharmacies)
  } catch (error) {
    console.error("Erreur lors de la récupération des pharmacies:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des données" }, { status: 500 })
  }
}

