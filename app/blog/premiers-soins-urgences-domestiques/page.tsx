import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Premiers Soins pour les Urgences Domestiques | Guide Pratique",
  description:
    "Guide pratique des premiers soins pour les urgences domestiques courantes. Apprenez les gestes essentiels pour réagir efficacement en cas de brûlure, coupure, étouffement ou autres accidents domestiques.",
  keywords: [
    "premiers soins",
    "urgences domestiques",
    "brûlures traitement",
    "coupures premiers soins",
    "étouffement que faire",
    "trousse secours maison",
    "accidents domestiques",
    "gestes urgence",
    "pharmacie Casablanca",
    "secourisme maison",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/premiers-soins-urgences-domestiques",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "20 juillet 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Premiers Soins pour les Urgences Domestiques",
    description:
      "Guide pratique des premiers soins pour les urgences domestiques courantes. Apprenez les gestes essentiels pour réagir efficacement en cas de brûlure, coupure, étouffement ou autres accidents domestiques.",
    image: "/placeholder.svg?height=400&width=800&text=Premiers+Soins",
    date: "2023-07-20T09:00:00+01:00",
    slug: "premiers-soins-urgences-domestiques",
  }

  // Articles similaires
  const relatedArticles = [
    {
      id: 1,
      title: "Les médicaments essentiels à avoir chez soi",
      slug: "medicaments-essentiels-maison",
      excerpt:
        "Liste des médicaments de base que chaque foyer devrait avoir pour les situations d'urgence et les petits maux du quotidien.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15 mars 2023",
    },
    {
      id: 2,
      title: "Guide complet des médicaments sans ordonnance",
      slug: "guide-complet-medicaments-sans-ordonnance",
      excerpt: "Découvrez notre guide complet des médicaments sans ordonnance disponibles en pharmacie à Casablanca.",
      image: "/placeholder.svg?height=200&width=300",
      date: "30 mars 2023",
    },
    {
      id: 3,
      title: "Comment gérer le diabète pendant les périodes de chaleur",
      slug: "gerer-diabete-periodes-chaleur",
      excerpt: "Conseils pratiques pour les personnes diabétiques durant les périodes de forte chaleur à Casablanca.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15 juin 2023",
    },
  ]

  const content = `
    <p>Les accidents domestiques peuvent survenir à tout moment et nécessitent souvent une réaction rapide et appropriée. Connaître les gestes de premiers soins peut faire une différence significative dans l'évolution d'une situation d'urgence, en attendant l'arrivée des secours professionnels si nécessaire. Ce guide vous présente les premiers soins essentiels pour les urgences domestiques les plus courantes.</p>
    
    <h2>La trousse de premiers soins : un indispensable dans chaque foyer</h2>
    
    <p>Avant d'aborder les gestes de premiers soins, assurez-vous de disposer d'une trousse de secours complète et accessible à la maison. Elle devrait contenir :</p>
    
    <ul>
      <li>Des gants jetables</li>
      <li>Des compresses stériles de différentes tailles</li>
      <li>Des pansements adhésifs de différentes tailles</li>
      <li>Du sparadrap hypoallergénique</li>
      <li>Des bandes de gaze et élastiques</li>
      <li>Des ciseaux à bouts ronds</li>
      <li>Une pince à épiler</li>
      <li>Un antiseptique cutané (chlorhexidine, povidone iodée)</li>
      <li>Une solution de lavage oculaire</li>
      <li>Un thermomètre</li>
      <li>Une couverture de survie</li>
      <li>Des analgésiques (paracétamol, ibuprofène)</li>
      <li>Une crème pour les brûlures</li>
      <li>Une liste des numéros d'urgence</li>
    </ul>
    
    <p>Vérifiez régulièrement les dates de péremption et remplacez les produits utilisés ou périmés.</p>
    
    <h2>Les numéros d'urgence à connaître au Maroc</h2>
    
    <p>Avant toute chose, mémorisez ces numéros essentiels :</p>
    
    <ul>
      <li><strong>15</strong> : SAMU (Service d'Aide Médicale Urgente)</li>
      <li><strong>19</strong> : Police</li>
      <li><strong>177</strong> : Protection Civile</li>
      <li><strong>0522-45-45-45</strong> : SOS Médecins Casablanca</li>
    </ul>
    
    <h2>Premiers soins pour les brûlures</h2>
    
    <h3>Brûlures légères (1er degré)</h3>
    
    <p>Caractéristiques : rougeur, douleur, légère enflure, sans cloques.</p>
    
    <ol>
      <li>Refroidissez immédiatement la zone brûlée sous l'eau froide (pas glacée) pendant 10 à 15 minutes</li>
      <li>N'appliquez pas de glace directement sur la brûlure</li>
      <li>Retirez les bijoux ou vêtements serrés de la zone avant qu'elle ne gonfle</li>
      <li>Après refroidissement, appliquez une crème hydratante ou un gel d'aloe vera</li>
      <li>Protégez la zone avec un pansement non adhérent si nécessaire</li>
      <li>Prenez un analgésique (paracétamol) si la douleur persiste</li>
    </ol>
    
    <h3>Brûlures modérées (2ème degré)</h3>
    
    <p>Caractéristiques : cloques, douleur intense, rougeur, enflure.</p>
    
    <ol>
      <li>Refroidissez la zone sous l'eau froide pendant 15 à 20 minutes</li>
      <li>Ne percez pas les cloques</li>
      <li>Après refroidissement, couvrez avec une compresse stérile non adhérente</li>
      <li>N'appliquez pas de crèmes, lotions, beurre ou remèdes maison</li>
      <li>Consultez un médecin ou rendez-vous aux urgences</li>
    </ol>
    
    <h3>Brûlures graves (3ème degré)</h3>
    
    <p>Caractéristiques : peau blanchâtre, brune ou noire, aspect cireux, absence de douleur si les nerfs sont atteints.</p>
    
    <ol>
      <li>Appelez immédiatement les secours (15)</li>
      <li>Ne retirez pas les vêtements collés à la brûlure</li>
      <li>Couvrez la zone avec un linge propre et sec ou une compresse stérile</li>
      <li>Surélever la partie brûlée si possible</li>
      <li>Surveillez les signes vitaux (respiration, conscience) en attendant les secours</li>
    </ol>
    
    <h2>Premiers soins pour les coupures et plaies</h2>
    
    <h3>Coupures légères</h3>
    
    <ol>
      <li>Lavez-vous les mains avant de traiter la plaie</li>
      <li>Nettoyez la plaie sous l'eau courante avec du savon doux</li>
      <li>Appliquez une légère pression avec une compresse propre pour arrêter le saignement</li>
      <li>Appliquez un antiseptique</li>
      <li>Couvrez avec un pansement adhésif ou une compresse stérile</li>
      <li>Changez le pansement quotidiennement ou s'il devient mouillé ou sale</li>
    </ol>
    
    <h3>Coupures profondes ou étendues</h3>
    
    <ol>
      <li>Appliquez une pression directe sur la plaie avec une compresse stérile ou un linge propre</li>
      <li>Si possible, surélevez la partie blessée au-dessus du niveau du cœur</li>
      <li>Maintenez la pression jusqu'à l'arrêt du saignement</li>
      <li>Ne retirez pas la compresse si elle est imbibée de sang, ajoutez-en une autre par-dessus</li>
      <li>Une fois le saignement contrôlé, nettoyez délicatement le pourtour de la plaie</li>
      <li>Consultez un médecin ou rendez-vous aux urgences pour une éventuelle suture</li>
    </ol>
    `

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup type="article" data={schemaData} />

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
                src="/placeholder.svg?height=400&width=800&text=Premiers+Soins"
                alt="Premiers soins pour les urgences domestiques"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Conseils Santé</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">Premiers Soins pour les Urgences Domestiques</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {["premiers soins", "urgences", "brûlures", "coupures", "secourisme"].map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
              </div>

              <div className="prose prose-emerald max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
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
                  "premiers soins",
                  "urgences domestiques",
                  "brûlures",
                  "coupures",
                  "étouffement",
                  "trousse secours",
                  "accidents domestiques",
                  "gestes urgence",
                  "secourisme",
                  "pharmacie",
                ].map((tag, index) => (
                  <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
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

