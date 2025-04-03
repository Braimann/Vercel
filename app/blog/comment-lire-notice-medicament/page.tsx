import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Comment Lire Correctement une Notice de Médicament | Guide Pratique",
  description:
    "Apprenez à lire et comprendre les notices de médicaments. Guide pratique pour déchiffrer les informations essentielles, les précautions d'emploi et les effets secondaires pour une utilisation sécurisée des médicaments.",
  keywords: [
    "notice médicament",
    "posologie médicament",
    "effets secondaires",
    "contre-indications",
    "précautions d'emploi",
    "interactions médicamenteuses",
    "pharmacie Casablanca",
    "guide médicaments",
    "sécurité médicaments",
    "comprendre notice",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/comment-lire-notice-medicament",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "10 avril 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Comment Lire Correctement une Notice de Médicament",
    description:
      "Apprenez à lire et comprendre les notices de médicaments. Guide pratique pour déchiffrer les informations essentielles, les précautions d'emploi et les effets secondaires pour une utilisation sécurisée des médicaments.",
    image: "/placeholder.svg?height=400&width=800&text=Notice+Médicament",
    date: "2023-04-10T09:00:00+01:00",
    slug: "comment-lire-notice-medicament",
  }

  // Articles similaires
  const relatedArticles = [
    {
      id: 1,
      title: "Guide complet des médicaments sans ordonnance",
      slug: "guide-complet-medicaments-sans-ordonnance",
      excerpt: "Découvrez notre guide complet des médicaments sans ordonnance disponibles en pharmacie à Casablanca.",
      image: "/placeholder.svg?height=200&width=300",
      date: "30 mars 2023",
    },
    {
      id: 2,
      title: "Les interactions médicamenteuses à connaître",
      slug: "interactions-medicamenteuses-connaitre",
      excerpt: "Informations importantes sur les interactions entre médicaments courants et comment les éviter.",
      image: "/placeholder.svg?height=200&width=300",
      date: "5 mai 2023",
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
    <p>Les notices de médicaments contiennent des informations cruciales pour une utilisation sûre et efficace des traitements. Pourtant, beaucoup de personnes les trouvent difficiles à comprendre ou ne les lisent pas du tout. Ce guide vous aidera à déchiffrer ces documents essentiels et à en extraire les informations importantes pour votre santé.</p>
    
    <h2>Pourquoi est-il important de lire la notice ?</h2>
    
    <p>Avant d'aborder la structure d'une notice, rappelons pourquoi sa lecture est essentielle :</p>
    
    <ul>
      <li>Elle vous informe sur la bonne utilisation du médicament (posologie, mode d'administration)</li>
      <li>Elle vous alerte sur les précautions à prendre et les contre-indications</li>
      <li>Elle vous renseigne sur les effets indésirables possibles</li>
      <li>Elle vous indique les interactions avec d'autres médicaments ou aliments</li>
      <li>Elle vous guide sur la conservation du produit</li>
    </ul>
    
    <p>Une mauvaise utilisation des médicaments peut réduire leur efficacité ou, pire, entraîner des risques pour votre santé.</p>
    
    <h2>Structure d'une notice de médicament</h2>
    
    <p>Les notices suivent généralement une structure standardisée, bien que la présentation puisse varier légèrement d'un médicament à l'autre. Voici les principales sections que vous y trouverez :</p>
    
    <h3>1. Identification du médicament</h3>
    
    <p>Cette première partie contient :</p>
    
    <ul>
      <li><strong>Nom commercial</strong> : Le nom de marque sous lequel le médicament est vendu (ex : Doliprane)</li>
      <li><strong>Dénomination commune internationale (DCI)</strong> : Le nom de la substance active (ex : paracétamol)</li>
      <li><strong>Forme pharmaceutique et dosage</strong> : Comprimé, gélule, sirop, etc., et quantité de substance active (ex : comprimé à 1000 mg)</li>
      <li><strong>Classe thérapeutique</strong> : La catégorie de médicaments à laquelle il appartient (ex : antalgique, antipyrétique)</li>
    </ul>
    
    <h3>2. Composition</h3>
    
    <p>Cette section détaille :</p>
    
    <ul>
      <li><strong>Principe(s) actif(s)</strong> : La ou les substances qui exercent l'action thérapeutique</li>
      <li><strong>Excipients</strong> : Les substances inactives qui servent de support au principe actif (conservateurs, colorants, etc.)</li>
    </ul>
    
    <p>Cette information est particulièrement importante si vous avez des allergies connues à certains composants.</p>
    
    <h3>3. Indications thérapeutiques</h3>
    
    <p>Cette partie précise pour quelles maladies ou symptômes le médicament est utilisé. Il est important de vérifier que votre problème de santé correspond bien à ces indications.</p>
    
    <h3>4. Contre-indications</h3>
    
    <p>Cette section cruciale liste les situations dans lesquelles vous ne devez pas prendre le médicament, comme :</p>
    
    <ul>
      <li>Certaines pathologies (insuffisance rénale, hépatique, etc.)</li>
      <li>Allergies à l'un des composants</li>
      <li>Grossesse ou allaitement (dans certains cas)</li>
      <li>Âge (certains médicaments sont contre-indiqués chez les enfants ou les personnes âgées)</li>
    </ul>
    
    <p>Ne négligez jamais cette section, car prendre un médicament contre-indiqué peut avoir des conséquences graves.</p>
    
    <h3>5. Mises en garde et précautions d'emploi</h3>
    
    <p>Cette partie indique les précautions à prendre lors de l'utilisation du médicament, comme :</p>
    
    <ul>
      <li>Surveillance particulière pour certaines populations (personnes âgées, enfants)</li>
      <li>Précautions liées à la conduite de véhicules ou l'utilisation de machines</li>
      <li>Adaptations posologiques dans certaines situations (insuffisance rénale légère, par exemple)</li>
      <li>Tests médicaux recommandés avant ou pendant le traitement</li>
    </ul>
    
    <h3>6. Interactions avec d'autres médicaments</h3>
    
    <p>Cette section liste les médicaments qui peuvent interagir avec celui que vous prenez, pouvant :</p>
    
    <ul>
      <li>Diminuer son efficacité</li>
      <li>Augmenter le risque d'effets indésirables</li>
      <li>Modifier son action</li>
    </ul>
    
    <p>Il est essentiel d'informer votre médecin et votre pharmacien de tous les médicaments que vous prenez, y compris ceux sans ordonnance, les compléments alimentaires et les produits à base de plantes.</p>
    
    <h3>7. Posologie et mode d'administration</h3>
    
    <p>Cette partie détaille :</p>
    
    <ul>
      <li>La dose à prendre (selon l'âge, le poids, la pathologie)</li>
      <li>La fréquence des prises (nombre de fois par jour)</li>
      <li>Le moment de la prise (avant, pendant ou après les repas)</li>
      <li>La durée du traitement</li>
      <li>La méthode d'administration (voie orale, application cutanée, etc.)</li>
    </ul>
    
    <p>Respectez scrupuleusement ces indications pour garantir l'efficacité du traitement et limiter les risques.</p>
    
    <h3>8. Effets indésirables</h3>
    
    <p>Cette section liste les effets secondaires possibles, généralement classés par fréquence :</p>
    
    <ul>
      <li><strong>Très fréquents</strong> : affectent plus d'1 patient sur 10</li>
      <li><strong>Fréquents</strong> : affectent entre 1 patient sur 10 et 1 sur 100</li>
      <li><strong>Peu fréquents</strong> : affectent entre 1 patient sur 100 et 1 sur 1000</li>
      <li><strong>Rares</strong> : affectent entre 1 patient sur 1000 et 1 sur 10 000</li>
      <li><strong>Très rares</strong> : affectent moins d'1 patient sur 10 000</li>
    </ul>
    
    <p>Ne paniquez pas à la lecture de cette liste souvent longue. Tous ces effets ne surviendront pas nécessairement, mais il est important de les connaître pour réagir correctement si l'un d'eux apparaît.</p>
    
    <h3>9. Conservation</h3>
    
    <p>Cette partie indique :</p>
    
    <ul>
      <li>La température de conservation (température ambiante, réfrigérateur)</li>
      <li>La protection contre la lumière ou l'humidité</li>
      <li>La date de péremption</li>
      <li>Les précautions particulières après ouverture (pour les sirops, collyres, etc.)</li>
    </ul>
    
    <p>Une mauvaise conservation peut altérer l'efficacité du médicament ou le rendre dangereux.</p>
    
    <h2>Comment interpréter efficacement une notice</h2>
    
    <p>Voici quelques conseils pour tirer le meilleur parti des notices de médicaments :</p>
    
    <h3>Priorisez l'information</h3>
    
    <p>Si vous n'avez pas le temps de tout lire, concentrez-vous au moins sur :</p>
    
    <ol>
      <li>Les contre-indications</li>
      <li>La posologie et le mode d'administration</li>
      <li>Les précautions d'emploi</li>
      <li>Les effets indésirables graves nécessitant un arrêt du traitement</li>
    </ol>
    
    <h3>Utilisez un dictionnaire médical ou demandez conseil</h3>
    
    <p>Si certains termes vous semblent obscurs, n'hésitez pas à :</p>
    
    <ul>
      <li>Consulter un dictionnaire médical en ligne</li>
      <li>Demander des explications à votre pharmacien</li>
      <li>Poser des questions à votre médecin lors de votre prochaine consultation</li>
    </ul>
    
    <h3>Conservez les notices</h3>
    
    <p>Gardez les notices avec leurs médicaments correspondants. Elles pourront vous être utiles en cas de doute sur la posologie ou si un effet indésirable survient.</p>
    
    <h3>Soyez attentif aux mises à jour</h3>
    
    <p>Les notices peuvent être mises à jour si de nouvelles informations sur le médicament sont disponibles. Si vous prenez un traitement au long cours, vérifiez occasionnellement si la notice a changé.</p>
    
    <h2>Cas particuliers</h2>
    
    <h3>Médicaments génériques</h3>
    
    <p>Les médicaments génériques contiennent le même principe actif que le médicament original, mais peuvent avoir des excipients différents. Si vous êtes allergique à certains excipients, vérifiez attentivement la composition.</p>
    
    <h3>Médicaments sans ordonnance</h3>
    
    <p>Même s'ils sont disponibles sans prescription, ces médicaments ne sont pas anodins. Lisez leur notice avec la même attention que pour un médicament prescrit.</p>
    
    <h3>Notices en ligne</h3>
    
    <p>Si vous avez perdu la notice papier, vous pouvez généralement la retrouver :</p>
    
    <ul>
      <li>Sur le site de l'Agence Nationale de Sécurité du Médicament (pour la France)</li>
      <li>Sur le site du laboratoire pharmaceutique</li>
      <li>En demandant à votre pharmacien</li>
    </ul>
    
    <h2>Le rôle du pharmacien</h2>
    
    <p>N'oubliez pas que votre pharmacien est un professionnel de santé formé pour vous conseiller sur vos médicaments. À Casablanca, les pharmaciens des pharmacies de garde sont disponibles 24h/24 pour répondre à vos questions sur :</p>
    
    <ul>
      <li>La signification des termes médicaux dans la notice</li>
      <li>Les précautions particulières à prendre</li>
      <li>Les interactions possibles avec vos autres traitements</li>
      <li>La conduite à tenir en cas d'effet indésirable</li>
    </ul>
    
    <p>En conclusion, la notice d'un médicament est un document précieux qui vous guide vers une utilisation sûre et efficace de votre traitement. Prenez le temps de la lire, au moins pour les sections les plus importantes, et n'hésitez pas à demander des éclaircissements à votre pharmacien ou votre médecin. Une bonne compréhension de votre traitement est un élément clé pour préserver votre santé.</p>
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
                src="/placeholder.svg?height=400&width=800&text=Notice+Médicament"
                alt="Comment lire correctement une notice de médicament"
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

              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Comment Lire Correctement une Notice de Médicament
              </h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {["notice médicament", "posologie", "effets secondaires", "contre-indications", "pharmacie"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                      >
                        {tag}
                      </span>
                    ),
                  )}
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
                  "notice médicament",
                  "posologie",
                  "effets secondaires",
                  "contre-indications",
                  "précautions d'emploi",
                  "interactions médicamenteuses",
                  "pharmacie",
                  "médicaments",
                  "santé",
                  "sécurité médicaments",
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

