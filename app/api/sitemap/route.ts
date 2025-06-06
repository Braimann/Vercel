import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Lire le fichier sitemap.xml statique
    const filePath = path.join(process.cwd(), "public", "sitemap.xml")
    const sitemapXml = fs.readFileSync(filePath, "utf8")

    // Retourner le contenu avec le type MIME approprié
    return new NextResponse(sitemapXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    })
  } catch (error) {
    console.error("Erreur lors de la lecture du sitemap:", error)
    return NextResponse.json({ error: "Erreur lors de la génération du sitemap" }, { status: 500 })
  }
}

