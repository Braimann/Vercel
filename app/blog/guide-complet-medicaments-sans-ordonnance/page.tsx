import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Guide Complet des Médicaments Sans Ordonnance | Pharmacie de Garde Casablanca",
  description:
    "Découvrez notre guide complet des médicaments sans ordonnance disponibles en pharmacie à Casablanca. Conseils d'utilisation, précautions et alternatives pour l'automédication responsable.",
  keywords: [
    "médicaments sans ordonnance",
    "automédication Casablanca",
    "paracétamol",
    "ibuprofène",
    "antiacides",
    "antihistaminiques",
    "pharmacie Casablanca",
    "médicaments OTC",
    "guide médicaments",
    "conseils pharmacien",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/guide-complet-medicaments-sans-ordonnance",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "30 mars 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Guide Complet des Médicaments Sans Ordonnance",
    description:
      "Découvrez notre guide complet des médicaments sans ordonnance disponibles en pharmacie à Casablanca. Conseils d'utilisation, précautions et alternatives pour l'automédication responsable.",
    image: "/placeholder.svg?height=400&width=800&text=Médicaments+Sans+Ordonnance",
    date: "2023-03-30T09:00:00+01:00",
    slug: "guide-complet-medicaments-sans-ordonnance",
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
      title: "Comment lire correctement une notice de médicament",
      slug: "comment-lire-notice-medicament",
      excerpt:
        "Guide pratique pour comprendre les informations essentielles contenues dans les notices de médicaments.",
      image: "/placeholder.svg?height=200&width=300",
      date: "10 avril 2023",
    },
    {
      id: 3,
      title: "Les interactions médicamenteuses à connaître",
      slug: "interactions-medicamenteuses-connaitre",
      excerpt: "Informations importantes sur les interactions entre médicaments courants et comment les éviter.",
      image: "/placeholder.svg?height=200&width=300",
      date: "5 mai 2023",
    },
  ]

  const content = `
    <p>L'automédication est une pratique courante pour traiter les symptômes mineurs sans consulter un médecin. Cependant, il est essentiel de connaître les médicaments sans ordonnance disponibles, leurs usages appropriés et leurs limites. Ce guide vous présente les principales catégories de médicaments disponibles sans prescription dans les pharmacies de Casablanca.</p>
    
    <h2>Les analgésiques et antipyrétiques</h2>
    
    <p>Ces médicaments sont utilisés pour soulager la douleur et réduire la fièvre. Les plus courants sont :</p>
    
    <ul>
      <li><strong>Paracétamol (Doliprane, Dafalgan)</strong> : Efficace contre les douleurs légères à modérées et la fièvre. Dosage adulte standard : 500 mg à 1g, jusqu'à 3g par jour maximum. À éviter en cas de problèmes hépatiques.</li>
      <li><strong>Ibuprofène (Advil, Nurofen)</strong> : Anti-inflammatoire non stéroïdien (AINS) qui soulage la douleur, réduit l'inflammation et la fièvre. Dosage adulte standard : 200 à 400 mg toutes les 4 à 6 heures, sans dépasser 1200 mg par jour. À prendre pendant les repas et à éviter en cas de grossesse (surtout après 24 semaines), d'ulcères gastriques ou de problèmes rénaux.</li>
      <li><strong>Aspirine (Aspégic, Aspro)</strong> : Analgésique, antipyrétique et anti-inflammatoire. Dosage adulte standard : 500 mg à 1g toutes les 4 à 6 heures, sans dépasser 3g par jour. À éviter chez les enfants de moins de 16 ans (risque de syndrome de Reye), en cas de grossesse, d'ulcères gastriques ou de troubles de la coagulation.</li>
    </ul>
    
    <h2>Les médicaments contre les troubles digestifs</h2>
    
    <p>Pour les problèmes digestifs courants, plusieurs options sont disponibles :</p>
    
    <ul>
      <li><strong>Antiacides (Maalox, Gaviscon)</strong> : Neutralisent l'acidité gastrique pour soulager les brûlures d'estomac et les remontées acides. À prendre après les repas et au coucher, en respectant un intervalle de 2 heures avec d'autres médicaments.</li>
      <li><strong>Antispasmodiques (Spasfon)</strong> : Réduisent les spasmes et les douleurs abdominales. À prendre au moment des crises.</li>
      <li><strong>Anti-diarrhéiques (Imodium, Tiorfan)</strong> : Ralentissent le transit intestinal en cas de diarrhée. À utiliser sur une courte durée et à éviter en cas de fièvre ou de présence de sang dans les selles.</li>
      <li><strong>Laxatifs (Dulcolax, Microlax)</strong> : Facilitent l'évacuation des selles en cas de constipation. À utiliser ponctuellement et non comme traitement régulier.</li>
    </ul>
    
    <h2>Les médicaments contre le rhume et les allergies</h2>
    
    <p>Pour soulager les symptômes du rhume, de la grippe ou des allergies saisonnières :</p>
    
    <ul>
      <li><strong>Antihistaminiques (Zyrtecset, Aerius)</strong> : Réduisent les symptômes allergiques comme les éternuements, le nez qui coule et les démangeaisons. Certains peuvent provoquer de la somnolence.</li>
      <li><strong>Décongestionnants nasaux (Humex, Actifed)</strong> : Réduisent la congestion nasale. À utiliser sur une courte durée (maximum 5 jours) pour éviter l'effet rebond.</li>
      <li><strong>Sirops contre la toux</strong> : Les antitussifs (Drill, Tussidane) pour les toux sèches et les expectorants (Mucomyst, Fluimucil) pour les toux grasses. Ne pas combiner les deux types.</li>
    </ul>
    
    <h2>Les antiseptiques et produits pour soins de plaies</h2>
    
    <p>Pour le traitement des petites blessures :</p>
    
    <ul>
      <li><strong>Antiseptiques (Bétadine, Hexomédine)</strong> : Préviennent l'infection des plaies mineures.</li>
      <li><strong>Crèmes cicatrisantes (Cicaplast, Homeoplasmine)</strong> : Favorisent la cicatrisation des petites plaies et brûlures.</li>
    </ul>
    
    <h2>Précautions importantes pour l'automédication</h2>
    
    <p>Même pour les médicaments sans ordonnance, certaines précautions sont essentielles :</p>
    
    <ol>
      <li><strong>Respectez les dosages</strong> : Ne dépassez jamais les doses recommandées, même si les symptômes persistent.</li>
      <li><strong>Limitez la durée</strong> : L'automédication doit être de courte durée (généralement 3 à 5 jours). Si les symptômes persistent, consultez un médecin.</li>
      <li><strong>Vérifiez les contre-indications</strong> : Certains médicaments sont déconseillés en cas de grossesse, d'allaitement ou de pathologies chroniques.</li>
      <li><strong>Attention aux interactions</strong> : Les médicaments sans ordonnance peuvent interagir avec d'autres traitements. Signalez toujours à votre pharmacien les médicaments que vous prenez déjà.</li>
      <li><strong>Lisez la notice</strong> : Prenez le temps de lire attentivement la notice pour connaître les effets indésirables possibles.</li>
    </ol>
    
    <h2>Quand consulter un médecin ?</h2>
    
    <p>L'automédication a ses limites. Consultez un médecin dans les cas suivants :</p>
    
    <ul>
      <li>Symptômes persistant plus de 3 à 5 jours malgré l'automédication</li>
      <li>Fièvre élevée (supérieure à 38,5°C) persistant plus de 3 jours</li>
      <li>Douleurs intenses ou inhabituelles</li>
      <li>Symptômes s'aggravant malgré le traitement</li>
      <li>Présence de sang dans les vomissements, les selles ou les urines</li>
      <li>Difficultés respiratoires</li>
      <li>Enfants de moins de 6 ans, femmes enceintes ou personnes âgées</li>
      <li>Personnes souffrant de maladies chroniques (diabète, hypertension, asthme, etc.)</li>
    </ul>
    
    <h2>Le rôle du pharmacien dans l'automédication</h2>
    
    <p>À Casablanca, comme ailleurs, le pharmacien est un professionnel de santé accessible qui peut :</p>
    
    <ul>
      <li>Vous conseiller sur le choix du médicament adapté à vos symptômes</li>
      <li>Vous informer sur les précautions d'emploi et les effets indésirables</li>
      <li>Vérifier les interactions potentielles avec vos autres traitements</li>
      <li>Vous orienter vers un médecin si nécessaire</li>
    </ul>
    
    <p>N'hésitez pas à demander conseil à votre pharmacien avant d'acheter un médicament sans ordonnance. Dans les pharmacies de garde de Casablanca, des professionnels sont disponibles 24h/24 pour vous guider dans vos choix d'automédication.</p>
    
    <h2>Alternatives aux médicaments</h2>
    
    <p>Pour certains maux courants, des alternatives non médicamenteuses peuvent être efficaces :</p>
    
    <ul>
      <li><strong>Pour le mal de gorge</strong> : Tisanes au miel et au citron, gargarismes à l'eau salée</li>
      <li><strong>Pour la congestion nasale</strong> : Inhalations de vapeur d'eau, lavages de nez à l'eau salée</li>
      <li><strong>Pour les troubles digestifs légers</strong> : Tisanes à la menthe ou au fenouil, probiotiques</li>
      <li><strong>Pour les douleurs musculaires</strong> : Applications de chaud ou de froid, massages</li>
      <li><strong>Pour le stress et l'anxiété légère</strong> : Tisanes à la camomille ou à la valériane, techniques de relaxation</li>
    </ul>
    
    <p>En conclusion, les médicaments sans ordonnance sont des outils précieux pour soulager de nombreux symptômes courants, mais ils doivent être utilisés avec discernement. Une automédication responsable implique de s'informer, de respecter les dosages et les durées de traitement, et de savoir reconnaître quand une consultation médicale devient nécessaire. Les pharmaciens de garde à Casablanca sont des alliés précieux pour vous guider dans cette démarche, à toute heure du jour et de la nuit.</p>
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
                src="/placeholder.svg?height=400&width=800&text=Médicaments+Sans+Ordonnance"
                alt="Guide complet des médicaments sans ordonnance"
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

              <h1 className="text-3xl font-bold text-gray-900 mb-6">Guide Complet des Médicaments Sans Ordonnance</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "médicaments sans ordonnance",
                    "automédication",
                    "paracétamol",
                    "ibuprofène",
                    "conseils pharmacien",
                  ].map((tag, index) => (
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
                  "médicaments sans ordonnance",
                  "automédication",
                  "paracétamol",
                  "ibuprofène",
                  "antiacides",
                  "antihistaminiques",
                  "pharmacie Casablanca",
                  "conseils santé",
                  "médicaments OTC",
                  "premiers soins",
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

