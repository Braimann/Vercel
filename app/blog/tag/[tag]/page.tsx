import Link from "next/link"
import Image from "next/image"
import { Calendar, TagIcon, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Fonction pour formater l'affichage du tag
function formatTagForDisplay(tag: string): string {
  return tag
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export default function TagPage({ params }: { params: { tag: string } }) {
  // Récupérer le tag depuis l'URL et le formater pour l'affichage
  const tagSlug = params.tag
  const displayTag = formatTagForDisplay(tagSlug)

  // Dans un cas réel, ces données seraient récupérées depuis une API
  const articles = [
    {
      id: 1,
      title: "Comment fonctionnent les pharmacies de garde à Casablanca ?",
      slug: "fonctionnement-pharmacies-garde-casablanca",
      excerpt:
        "Découvrez le système de rotation des pharmacies de garde et comment il assure un accès continu aux médicaments essentiels à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "10 avril 2023",
      category: "Informations",
      tags: [
        "pharmacie-de-garde",
        "casablanca",
        "systeme-de-garde",
        "medicaments",
        "urgence-medicale",
        "nuit",
        "service-24-24",
      ],
    },
    {
      id: 2,
      title: "Que faire en cas d'urgence médicale nocturne ?",
      slug: "urgence-medicale-nocturne-casablanca",
      excerpt:
        "Guide pratique pour gérer les urgences médicales la nuit et trouver rapidement les services appropriés à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "25 mars 2023",
      category: "Conseils Santé",
      tags: ["urgence-medicale", "nuit", "premiers-secours", "pharmacie-de-garde", "casablanca", "medicaments"],
    },
    {
      id: 3,
      title: "Les médicaments essentiels à avoir chez soi",
      slug: "medicaments-essentiels-maison",
      excerpt:
        "Liste des médicaments de base que chaque foyer devrait avoir pour les situations d'urgence et les petits maux du quotidien.",
      image: "/placeholder.svg?height=300&width=600",
      date: "15 mars 2023",
      category: "Conseils Santé",
      tags: ["medicaments", "trousse-de-secours", "premiers-secours", "urgence-medicale", "sante", "ordonnance"],
    },
  ]

  // Filtrer les articles qui contiennent le tag recherché
  const filteredArticles = articles.filter((article) => article.tags.includes(tagSlug))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/blog" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour au blog
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Articles avec le tag "{displayTag}"</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez tous nos articles liés à "{displayTag}" pour approfondir vos connaissances sur ce sujet.
        </p>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Aucun article trouvé</h2>
          <p className="text-gray-600 mb-4">Aucun article n'est actuellement disponible avec le tag "{displayTag}".</p>
          <Link href="/blog">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Voir tous les articles</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <TagIcon className="h-4 w-4 mr-1" />
                  <span>{article.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-emerald-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className="text-emerald-600 font-medium hover:underline">
                  Lire plus
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

