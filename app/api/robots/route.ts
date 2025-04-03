import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Lire le fichier robots.txt statique
    const filePath = path.join(process.cwd(), "public", "robots.txt")
    const robotsTxt = fs.readFileSync(filePath, "utf8")

    // Retourner le contenu avec le type MIME approprié
    return new NextResponse(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    })
  } catch (error) {
    console.error("Erreur lors de la lecture du robots.txt:", error)
    return NextResponse.json({ error: "Erreur lors de la génération du robots.txt" }, { status: 500 })
  }
}

