import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Les Interactions Médicamenteuses à Connaître | Pharmacie de Garde Casablanca",
  description:
    "Découvrez les interactions médicamenteuses les plus courantes et comment les éviter. Guide essentiel pour comprendre les risques liés à la prise simultanée de certains médicaments, aliments et compléments alimentaires.",
  keywords: [
    "interactions médicamenteuses",
    "médicaments incompatibles",
    "risques médicamenteux",
    "anticoagulants interactions",
    "antibiotiques interactions",
    "médicaments aliments",
    "pamplemousse médicaments",
    "pharmacie Casablanca",
    "sécurité médicaments",
    "conseils pharmacien",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/interactions-medicamenteuses-connaitre",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "5 mai 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Les Interactions Médicamenteuses à Connaître",
    description:
      "Découvrez les interactions médicamenteuses les plus courantes et comment les éviter. Guide essentiel pour comprendre les risques liés à la prise simultanée de certains médicaments, aliments et compléments alimentaires.",
    image: "/placeholder.svg?height=400&width=800&text=Interactions+Médicamenteuses",
    date: "2023-05-05T09:00:00+01:00",
    slug: "interactions-medicamenteuses-connaitre",
  }

  // Articles similaires
  const relatedArticles = [
    {
      id: 1,
      title: "Comment lire correctement une notice de médicament",
      slug: "comment-lire-notice-medicament",
      excerpt:
        "Guide pratique pour comprendre les informations essentielles contenues dans les notices de médicaments.",
      image: "/placeholder.svg?height=200&width=300",
      date: "10 avril 2023",
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
      title: "Les médicaments essentiels à avoir chez soi",
      slug: "medicaments-essentiels-maison",
      excerpt:
        "Liste des médicaments de base que chaque foyer devrait avoir pour les situations d'urgence et les petits maux du quotidien.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15 mars 2023",
    },
  ]

  const content = `
    <p>Les interactions médicamenteuses se produisent lorsque l'effet d'un médicament est modifié par la présence d'un autre médicament, d'un aliment, d'une boisson ou d'un complément alimentaire. Ces interactions peuvent diminuer l'efficacité d'un traitement, augmenter le risque d'effets indésirables ou parfois créer de nouveaux effets toxiques. Comprendre ces interactions est essentiel pour garantir la sécurité et l'efficacité de vos traitements.</p>
    
    <h2>Types d'interactions médicamenteuses</h2>
    
    <p>Les interactions peuvent être classées en plusieurs catégories :</p>
    
    <h3>Interactions pharmacocinétiques</h3>
    
    <p>Elles affectent la manière dont l'organisme traite le médicament :</p>
    
    <ul>
      <li><strong>Absorption</strong> : Un médicament peut modifier l'absorption d'un autre dans le tube digestif</li>
      <li><strong>Distribution</strong> : Compétition pour la liaison aux protéines plasmatiques</li>
      <li><strong>Métabolisme</strong> : Modification de la dégradation du médicament, souvent au niveau du foie</li>
      <li><strong>Élimination</strong> : Altération de l'excrétion, généralement par les reins</li>
    </ul>
    
    <h3>Interactions pharmacodynamiques</h3>
    
    <p>Elles concernent les effets des médicaments sur l'organisme :</p>
    
    <ul>
      <li><strong>Synergie</strong> : L'effet combiné est supérieur à la somme des effets individuels</li>
      <li><strong>Addition</strong> : Les effets s'additionnent simplement</li>
      <li><strong>Antagonisme</strong> : Un médicament réduit ou annule l'effet de l'autre</li>
    </ul>
    
    <h2>Interactions médicamenteuses courantes à connaître</h2>
    
    <h3>Anticoagulants oraux (Sintrom, Coumadine, Xarelto, Eliquis, etc.)</h3>
    
    <p>Ces médicaments qui fluidifient le sang présentent de nombreuses interactions :</p>
    
    <ul>
      <li><strong>Anti-inflammatoires non stéroïdiens (AINS)</strong> : L'aspirine, l'ibuprofène et autres AINS augmentent le risque hémorragique</li>
      <li><strong>Certains antibiotiques</strong> : Peuvent augmenter l'effet anticoagulant</li>
      <li><strong>Millepertuis</strong> : Cette plante diminue l'effet des anticoagulants</li>
      <li><strong>Aliments riches en vitamine K</strong> : Les légumes verts (épinards, brocoli, chou) peuvent réduire l'efficacité des antivitamines K (Sintrom, Coumadine)</li>
    </ul>
    
    <h3>Antibiotiques</h3>
    
    <p>Les antibiotiques sont impliqués dans diverses interactions :</p>
    
    <ul>
      <li><strong>Tétracyclines et quinolones</strong> : Leur absorption est réduite par les produits laitiers, les antiacides et les suppléments contenant du calcium, du magnésium, du fer ou du zinc</li>
      <li><strong>Macrolides (érythromycine, clarithromycine)</strong> : Peuvent augmenter les concentrations de nombreux médicaments comme la digoxine, certains antihistaminiques, et les statines</li>
      <li><strong>Rifampicine</strong> : Diminue l'efficacité de nombreux médicaments, dont les contraceptifs oraux</li>
    </ul>
    
    <h3>Antidépresseurs</h3>
    
    <p>Les inhibiteurs sélectifs de la recapture de la sérotonine (ISRS) et les inhibiteurs de la monoamine oxydase (IMAO) présentent des interactions importantes :</p>
    
    <ul>
      <li><strong>ISRS + IMAO</strong> : Association contre-indiquée pouvant provoquer un syndrome sérotoninergique potentiellement fatal</li>
      <li><strong>ISRS + tramadol ou triptans</strong> : Risque accru de syndrome sérotoninergique</li>
      <li><strong>IMAO + aliments riches en tyramine</strong> : Fromages fermentés, charcuterie, vin rouge peuvent provoquer des crises hypertensives</li>
    </ul>
    
    <h3>Médicaments cardiovasculaires</h3>
    
    <ul>
      <li><strong>Statines (simvastatine, atorvastatine)</strong> : Risque accru d'effets indésirables musculaires avec certains antibiotiques, antifongiques et le jus de pamplemousse</li>
      <li><strong>Digoxine</strong> : Nombreuses interactions avec les diurétiques, les antiarythmiques et certains antibiotiques</li>
      <li><strong>Antihypertenseurs</strong> : Effet diminué par les AINS</li>
    </ul>
    
    <h3>Médicaments neurologiques et psychiatriques</h3>
    
    <ul>
      <li><strong>Benzodiazépines</strong> : Effet sédatif augmenté par l'alcool et d'autres dépresseurs du système nerveux central</li>
      <li><strong>Antiépileptiques</strong> : Nombreuses interactions avec d'autres médicaments et entre eux</li>
      <li><strong>Lithium</strong> : Toxicité augmentée par les diurétiques et les AINS</li>
    </ul>
    
    <h2>Interactions avec les aliments et boissons</h2>
    
    <h3>Le pamplemousse : un cas particulier</h3>
    
    <p>Le pamplemousse et son jus contiennent des substances qui inhibent une enzyme intestinale (CYP3A4) impliquée dans le métabolisme de nombreux médicaments. Cela peut augmenter considérablement les concentrations sanguines de ces médicaments et donc leurs effets indésirables.</p>
    
    <p>Médicaments concernés par l'interaction avec le pamplemousse :</p>
    
    <ul>
      <li>Certaines statines (simvastatine, atorvastatine)</li>
      <li>Certains immunosuppresseurs (ciclosporine, tacrolimus)</li>
      <li>Certains antihistaminiques</li>
      <li>Certains antiarythmiques</li>
      <li>Certains antihypertenseurs (inhibiteurs calciques)</li>
    </ul>
    
    <h3>Autres interactions alimentaires notables</h3>
    
    <ul>
      <li><strong>Alcool</strong> : Interagit avec de nombreux médicaments, notamment les sédatifs, analgésiques, antidiabétiques et antibiotiques</li>
      <li><strong>Aliments riches en vitamine K</strong> : Réduisent l'efficacité des anticoagulants antivitamine K</li>
      <li><strong>Aliments riches en tyramine</strong> : Peuvent provoquer des crises hypertensives avec les IMAO</li>
      <li><strong>Produits laitiers</strong> : Réduisent l'absorption de certains antibiotiques</li>
      <li><strong>Café et thé</strong> : Peuvent réduire l'absorption du fer et interagir avec certains psychotropes</li>
    </ul>
    
    <h2>Interactions avec les plantes médicinales et compléments alimentaires</h2>
    
    <p>Les produits "naturels" ne sont pas dénués de risques d'interactions :</p>
    
    <ul>
      <li><strong>Millepertuis</strong> : Diminue l'efficacité de nombreux médicaments dont les contraceptifs oraux, les immunosuppresseurs, certains antiviraux et anticoagulants</li>
      <li><strong>Ginkgo biloba</strong> : Peut augmenter le risque de saignement avec les anticoagulants et antiagrégants plaquettaires</li>
      <li><strong>Ail</strong> : À forte dose, peut potentialiser l'effet des anticoagulants</li>
      <li><strong>Échinacée</strong> : Peut interférer avec certains médicaments immunosuppresseurs</li>
      <li><strong>Réglisse</strong> : Peut diminuer l'effet de certains antihypertenseurs et augmenter le risque d'hypokaliémie avec les diurétiques</li>
    </ul>
    
    <h2>Comment prévenir les interactions médicamenteuses ?</h2>
    
    <h3>Conseils pratiques</h3>
    
    <ol>
      <li><strong>Informez tous vos professionnels de santé</strong> : Médecins et pharmaciens doivent connaître l'ensemble de vos traitements, y compris ceux sans ordonnance, les compléments alimentaires et les plantes médicinales</li>
      <li><strong>Utilisez toujours la même pharmacie</strong> : Cela permet au pharmacien de tenir à jour votre dossier pharmaceutique et de détecter les interactions potentielles</li>
      <li><strong>Lisez attentivement les notices</strong> : La section "Interactions médicamenteuses" contient des informations précieuses</li>
      <li><strong>Respectez les conseils de prise</strong> : Certains médicaments doivent être pris à distance des repas ou d'autres médicaments</li>
      <li><strong>Soyez vigilant avec l'automédication</strong> : Demandez toujours conseil à votre pharmacien avant d'acheter un médicament sans ordonnance</li>
      <li><strong>Méfiez-vous des "produits naturels"</strong> : Ils peuvent aussi interagir avec vos médicaments</li>
      <li><strong>Évitez l'alcool</strong> : En cas de doute, abstenez-vous de consommer de l'alcool pendant votre traitement</li>
    </ol>
    
    <h3>Outils d'aide à la détection des interactions</h3>
    
    <p>Plusieurs ressources peuvent vous aider à identifier les interactions potentielles :</p>
    
    <ul>
      <li>Votre pharmacien, qui dispose d'outils professionnels pour détecter les interactions</li>
      <li>Votre médecin, qui peut adapter vos traitements en conséquence</li>
      <li>Les applications mobiles de santé (à utiliser avec précaution et toujours vérifier l'information auprès d'un professionnel)</li>
      <li>Le dossier pharmaceutique, qui recense tous les médicaments délivrés au cours des 4 derniers mois</li>
    </ul>
    
    <h2>Que faire en cas de suspicion d'interaction médicamenteuse ?</h2>
    
    <p>Si vous suspectez une interaction médicamenteuse (apparition d'effets indésirables inhabituels ou perte d'efficacité d'un traitement) :</p>
    
    <ol>
      <li>Ne jamais arrêter brutalement un traitement sans avis médical</li>
      <li>Consulter rapidement votre médecin ou pharmacien</li>
      <li>Décrire précisément les symptômes ressentis et leur chronologie</li>
      <li>Apporter tous vos médicaments, y compris ceux pris en automédication</li>
    </ol>
    
    <h2>Le rôle du pharmacien dans la prévention des interactions</h2>
    
    <p>À Casablanca, comme ailleurs, le pharmacien joue un rôle crucial dans la détection et la prévention des interactions médicamenteuses :</p>
    
    <ul>
      <li>Il analyse l'ensemble de vos ordonnances et peut contacter votre médecin en cas de problème détecté</li>
      <li>Il vous conseille sur les horaires de prise pour éviter certaines interactions</li>
      <li>Il vous alerte sur les aliments ou boissons à éviter pendant votre traitement</li>
      <li>Il vous guide dans le choix des médicaments sans ordonnance compatibles avec vos traitements</li>
    </ul>
    
    <p>Les pharmacies de garde à Casablanca sont disponibles 24h/24 pour répondre à vos questions sur les interactions médicamenteuses, même en dehors des heures d'ouverture habituelles.</p>
    
    <h2>Populations à risque accru d'interactions médicamenteuses</h2>
    
    <p>Certaines personnes doivent être particulièrement vigilantes :</p>
    
    <ul>
      <li><strong>Personnes âgées</strong> : Souvent sous polymédication et avec des fonctions hépatiques et rénales diminuées</li>
      <li><strong>Patients atteints de maladies chroniques multiples</strong> : Diabète, hypertension, problèmes cardiaques, etc.</li>
      <li><strong>Patients sous traitements à marge thérapeutique étroite</strong> : Anticoagulants, antiépileptiques, lithium, etc.</li>
      <li><strong>Femmes enceintes ou allaitantes</strong> : Risques particuliers pour le fœtus ou le nourrisson</li>
      <li><strong>Patients avec insuffisance hépatique ou rénale</strong> : Élimination des médicaments altérée</li>
    </ul>
    
    <p>En conclusion, les interactions médicamenteuses représentent un enjeu majeur de sécurité dans l'utilisation des médicaments. Une bonne communication avec vos professionnels de santé, une vigilance particulière avec l'automédication et une connaissance des principales interactions peuvent vous aider à éviter des problèmes potentiellement graves. N'hésitez pas à consulter votre pharmacien à Casablanca, y compris dans les pharmacies de garde, pour toute question concernant vos traitements et leurs interactions possibles.</p>
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
                src="/placeholder.svg?height=400&width=800&text=Interactions+Médicamenteuses"
                alt="Les interactions médicamenteuses à connaître"
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

              <h1 className="text-3xl font-bold text-gray-900 mb-6">Les Interactions Médicamenteuses à Connaître</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "interactions médicamenteuses",
                    "médicaments",
                    "anticoagulants",
                    "antibiotiques",
                    "pamplemousse",
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
                  "interactions médicamenteuses",
                  "médicaments incompatibles",
                  "anticoagulants",
                  "antibiotiques",
                  "pamplemousse",
                  "plantes médicinales",
                  "pharmacie",
                  "sécurité médicaments",
                  "conseils santé",
                  "automédication",
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

