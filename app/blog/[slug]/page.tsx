import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Fonction pour formater un tag pour l'URL
function formatTagForUrl(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dans un cas réel, ces données seraient récupérées depuis une API
  const article = {
    title: "Comment fonctionnent les pharmacies de garde à Casablanca ?",
    description:
      "Découvrez le système de rotation des pharmacies de garde et comment il assure un accès continu aux médicaments essentiels à Casablanca.",
  }

  // Liste complète de mots-clés SEO pertinents
  const keywords = [
    "pharmacie de garde Casablanca",
    "pharmacie 24h/24 Casablanca",
    "pharmacie nuit Casablanca",
    "pharmacie urgence Casablanca",
    "médicaments urgence Casablanca",
    "pharmacie ouverte Casablanca",
    "service pharmaceutique Casablanca",
    "pharmacie weekend Casablanca",
    "pharmacie jour férié Casablanca",
    "pharmacie nocturne Casablanca",
    "trouver pharmacie garde Casablanca",
    "pharmacie proche Casablanca",
    "médicaments nuit Casablanca",
    "pharmacie disponible Casablanca",
    "pharmacie service continu Casablanca",
    "pharmacie permanence Casablanca",
    "pharmacie sans interruption Casablanca",
    "pharmacie horaires étendus Casablanca",
    "pharmacie après fermeture Casablanca",
    "pharmacie tard Casablanca",
    "pharmacie dimanche Casablanca",
    "pharmacie jours fériés Casablanca",
    "pharmacie Maârif",
    "pharmacie Anfa",
    "pharmacie Ain Diab",
    "pharmacie Centre-ville",
    "pharmacie Sidi Moumen",
    "pharmacie Hay Hassani",
    "pharmacie Derb Sultan",
    "pharmacie Bourgogne",
    "pharmacie Mers Sultan",
    "pharmacie Racine",
    "pharmacie Gauthier",
    "pharmacie Beauséjour",
    "système garde pharmacie",
    "rotation pharmacies garde",
    "horaires pharmacies garde",
    "liste pharmacies garde",
    "numéros urgence pharmacie",
    "médicaments essentiels",
    "conseils pharmacien garde",
  ]

  return {
    title: article.title,
    description: article.description,
    keywords: keywords,
    alternates: {
      canonical: `https://pharmaciedegardecasablanca.com/blog/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://pharmaciedegardecasablanca.com/blog/${params.slug}`,
      siteName: "Pharmacie de Garde Casablanca",
      locale: "fr_FR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  // Le reste du code reste inchangé
  // Dans un cas réel, ces données seraient récupérées depuis une API
  const article = {
    title: "Comment fonctionnent les pharmacies de garde à Casablanca ?",
    slug: params.slug,
    content: `
    <p>Les pharmacies de garde à Casablanca jouent un rôle crucial dans le système de santé marocain, assurant un accès continu aux médicaments et aux conseils pharmaceutiques, même en dehors des heures d'ouverture habituelles. Ce système bien organisé permet aux habitants de Casablanca de trouver une pharmacie ouverte à tout moment, que ce soit en pleine nuit, pendant les week-ends ou les jours fériés.</p>
    
    <h2>Le système de rotation des pharmacies de garde</h2>
    
    <p>À Casablanca, comme dans le reste du Maroc, les pharmacies fonctionnent selon un système de rotation pour assurer les services de garde. Ce système est géré par le Conseil de l'Ordre des Pharmaciens et les autorités sanitaires locales. Voici comment il fonctionne :</p>
    
    <ul>
      <li>Chaque pharmacie participe à un planning de garde établi à l'avance</li>
      <li>Les gardes sont généralement réparties de manière équitable entre toutes les pharmacies d'un même secteur</li>
      <li>Le changement de garde s'effectue habituellement à 8h30 du matin</li>
      <li>Les pharmacies de garde restent ouvertes 24h/24 pendant leur période de service</li>
    </ul>
    
    <p>Ce système de rotation permet d'assurer une couverture pharmaceutique complète tout en répartissant équitablement la charge de travail entre les différentes pharmacies.</p>
    
    <h2>Comment trouver une pharmacie de garde à Casablanca ?</h2>
    
    <p>Plusieurs moyens sont à la disposition des habitants de Casablanca pour trouver la pharmacie de garde la plus proche :</p>
    
    <ol>
      <li><strong>Notre site web et application mobile</strong> : Le moyen le plus simple et le plus rapide est d'utiliser notre service en ligne qui vous géolocalise et vous indique les pharmacies de garde les plus proches.</li>
      <li><strong>Les journaux locaux</strong> : Les quotidiens comme "Le Matin" ou "L'Économiste" publient régulièrement la liste des pharmacies de garde.</li>
      <li><strong>Les affiches en pharmacie</strong> : Chaque pharmacie affiche obligatoirement sur sa devanture la liste des pharmacies de garde du secteur.</li>
      <li><strong>Le numéro d'urgence</strong> : En composant le 19, vous pouvez obtenir des informations sur les pharmacies de garde.</li>
    </ol>
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: "10 avril 2023",
    category: "Informations",
    tags: [
      "pharmacie de garde",
      "casablanca",
      "système de garde",
      "médicaments",
      "urgence médicale",
      "nuit",
      "service 24/24",
    ],
  }

  // Articles similaires (dans un cas réel, ils seraient sélectionnés en fonction de tags ou catégories similaires)
  const relatedArticles = [
    {
      id: 2,
      title: "Que faire en cas d'urgence médicale nocturne ?",
      slug: "urgence-medicale-nocturne-casablanca",
      excerpt:
        "Guide pratique pour gérer les urgences médicales la nuit et trouver rapidement les services appropriés.",
      image: "/placeholder.svg?height=200&width=300",
      date: "25 mars 2023",
    },
    {
      id: 4,
      title: "Les services spéciaux proposés par les pharmacies de garde",
      slug: "services-speciaux-pharmacies-garde",
      excerpt: "Découvrez les services additionnels que proposent certaines pharmacies de garde à Casablanca.",
      image: "/placeholder.svg?height=200&width=300",
      date: "5 mars 2023",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/blog" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour au blog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[400px]">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{article.category}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${formatTagForUrl(tag)}`}>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
              </div>

              <div className="prose prose-emerald max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </article>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Articles similaires</h2>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <div key={article.id} className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2">
                        <Link href={`/blog/${article.slug}`} className="hover:text-emerald-600 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Tags populaires</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "pharmacie de garde",
                  "casablanca",
                  "médicaments",
                  "urgence médicale",
                  "santé",
                  "nuit",
                  "service 24/24",
                  "premiers secours",
                  "ordonnance",
                  "consultation",
                ].map((tag, index) => (
                  <Link key={index} href={`/blog/tag/${formatTagForUrl(tag)}`}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 transition-colors">
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Besoin d'une pharmacie maintenant ?</h2>
              <p className="text-gray-600 mb-4">
                Trouvez rapidement la pharmacie de garde la plus proche de chez vous.
              </p>
              <Link href="/pharmacies">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Trouver une pharmacie</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

