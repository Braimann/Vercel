import { NextResponse } from "next/server"
import { getAllDistricts } from "@/lib/api"

export async function GET() {
  try {
    const districts = await getAllDistricts()
    return NextResponse.json(districts)
  } catch (error) {
    console.error("Erreur lors de la récupération des districts:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des données" }, { status: 500 })
  }
}

