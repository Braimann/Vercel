import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Conseils Santé pour le Ramadan à Casablanca | Pharmacie de Garde",
  description:
    "Découvrez nos conseils santé pour bien vivre le Ramadan à Casablanca. Alimentation équilibrée, hydratation, gestion des médicaments et recommandations pour les personnes atteintes de maladies chroniques.",
  keywords: [
    "Ramadan santé Casablanca",
    "jeûne conseils médicaux",
    "médicaments Ramadan",
    "diabète Ramadan",
    "hypertension jeûne",
    "alimentation Ramadan",
    "hydratation jeûne",
    "pharmacie Ramadan Casablanca",
    "ftour sehour équilibré",
    "maladies chroniques Ramadan",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/conseils-sante-ramadan-casablanca",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "20 mars 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Conseils Santé pour le Ramadan à Casablanca",
    description:
      "Découvrez nos conseils santé pour bien vivre le Ramadan à Casablanca. Alimentation équilibrée, hydratation, gestion des médicaments et recommandations pour les personnes atteintes de maladies chroniques.",
    image: "/placeholder.svg?height=400&width=800&text=Santé+Ramadan",
    date: "2023-03-20T09:00:00+01:00",
    slug: "conseils-sante-ramadan-casablanca",
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
    <p>Le mois sacré du Ramadan est une période importante pour les musulmans du monde entier, y compris à Casablanca. Ce mois de jeûne, de prière et de réflexion spirituelle apporte également des changements significatifs dans les habitudes alimentaires et le rythme de vie. Pour que cette période se déroule dans les meilleures conditions de santé, voici des conseils adaptés au contexte casablancais.</p>
    
    <h2>Préparer son corps au jeûne</h2>
    
    <p>Une bonne préparation avant le début du Ramadan peut faciliter l'adaptation de l'organisme au jeûne :</p>
    
    <ul>
      <li><strong>Consultation médicale préalable</strong> : Si vous souffrez d'une maladie chronique (diabète, hypertension, problèmes rénaux, etc.), consultez votre médecin avant le début du Ramadan pour adapter votre traitement et déterminer si vous pouvez jeûner sans risque.</li>
      <li><strong>Réduction progressive de la caféine</strong> : Diminuez progressivement votre consommation de café, thé et autres boissons contenant de la caféine dans les semaines précédant le Ramadan pour éviter les symptômes de sevrage (maux de tête, irritabilité).</li>
      <li><strong>Adaptation des habitudes alimentaires</strong> : Commencez à réduire la taille de vos repas et à espacer les prises alimentaires pour habituer votre corps à de nouvelles habitudes.</li>
    </ul>
    
    <h2>Alimentation équilibrée pendant le Ramadan</h2>
    
    <p>À Casablanca, où les journées de Ramadan peuvent être chaudes, une alimentation équilibrée est essentielle :</p>
    
    <h3>Le ftour (rupture du jeûne)</h3>
    
    <p>Traditionnellement, le ftour commence par des dattes et du lait ou de l'eau, suivis de la harira (soupe traditionnelle marocaine). Pour un ftour équilibré :</p>
    
    <ul>
      <li>Commencez par 2-3 dattes et un verre d'eau ou de lait pour un apport rapide en sucres et une réhydratation immédiate</li>
      <li>Attendez quelques minutes avant de passer au plat principal pour laisser à votre estomac le temps de s'adapter</li>
      <li>Privilégiez une harira légère, riche en légumes et légumineuses, mais modérée en huile</li>
      <li>Incluez des protéines (œuf, viande maigre, poisson) pour la satiété</li>
      <li>Ajoutez une portion de légumes frais ou une salade</li>
      <li>Limitez les chebakia, briouates et autres pâtisseries traditionnelles riches en sucre et en matières grasses</li>
    </ul>
    
    <h3>Le sehour (repas avant l'aube)</h3>
    
    <p>Ce repas est crucial pour tenir toute la journée sans sensation de faim excessive ou de déshydratation :</p>
    
    <ul>
      <li>Privilégiez les aliments à index glycémique bas qui libèrent l'énergie lentement : céréales complètes, légumineuses, yaourt</li>
      <li>Consommez des protéines (œufs, fromage blanc, labneh) pour prolonger la sensation de satiété</li>
      <li>Incluez des fruits frais pour leurs vitamines et leur teneur en eau</li>
      <li>Évitez les aliments trop salés qui augmentent la sensation de soif pendant la journée</li>
      <li>Buvez suffisamment d'eau (au moins 1 litre) de manière fractionnée entre le ftour et le sehour</li>
    </ul>
    
    <h2>Hydratation : un enjeu majeur à Casablanca</h2>
    
    <p>À Casablanca, où le climat peut être chaud et sec pendant le Ramadan, l'hydratation est particulièrement importante :</p>
    
    <ul>
      <li>Visez une consommation de 2 à 2,5 litres d'eau entre le ftour et le sehour</li>
      <li>Buvez régulièrement par petites quantités plutôt qu'en grande quantité d'un coup</li>
      <li>Limitez les boissons sucrées et les sodas qui peuvent augmenter la sensation de soif</li>
      <li>Réduisez la consommation de café et de thé fort qui ont un effet diurétique</li>
      <li>Consommez des aliments riches en eau : concombre, pastèque, soupe, yaourt</li>
      <li>Évitez de passer trop de temps au soleil pour limiter la transpiration et la perte d'eau</li>
    </ul>
    
    <h2>Gestion des médicaments pendant le Ramadan</h2>
    
    <p>La prise de médicaments pendant le Ramadan nécessite souvent des ajustements :</p>
    
    <h3>Qui peut être dispensé de jeûne pour raisons médicales ?</h3>
    
    <p>L'Islam prévoit des dispenses de jeûne pour certaines personnes :</p>
    
    <ul>
      <li>Les personnes atteintes de maladies chroniques pour lesquelles le jeûne présente un risque</li>
      <li>Les femmes enceintes ou allaitantes si le jeûne peut nuire à leur santé ou à celle de l'enfant</li>
      <li>Les personnes âgées fragiles</li>
      <li>Les personnes souffrant de maladies aiguës nécessitant un traitement régulier</li>
    </ul>
    
    <h3>Adaptation des traitements médicamenteux</h3>
    
    <p>Pour ceux qui peuvent jeûner tout en suivant un traitement :</p>
    
    <ul>
      <li><strong>Médicaments pris habituellement 1 fois par jour</strong> : Peuvent généralement être pris au moment du ftour</li>
      <li><strong>Médicaments pris habituellement 2 fois par jour</strong> : Peuvent souvent être adaptés pour être pris au ftour et au sehour</li>
      <li><strong>Médicaments pris habituellement 3 fois par jour ou plus</strong> : Nécessitent généralement une consultation médicale pour adapter le traitement</li>
      <li><strong>Médicaments à libération prolongée</strong> : Peuvent être particulièrement utiles pendant le Ramadan</li>
    </ul>
    
    <p>Consultez toujours votre médecin ou votre pharmacien avant de modifier votre traitement. Les pharmacies de garde à Casablanca peuvent vous conseiller même pendant les heures de jeûne.</p>
    
    <h2>Recommandations spécifiques pour les maladies chroniques</h2>
    
    <h3>Diabète</h3>

    <p>Les personnes diabétiques doivent être particulièrement vigilantes pendant le Ramadan :</p>
    
    <ul>
      <li>Les diabétiques de type 1 et les diabétiques de type 2 avec complications ou mal équilibrés ne devraient généralement pas jeûner</li>
      <li>Pour les diabétiques de type 2 bien équilibrés qui souhaitent jeûner :</li>
      <ul>
        <li>Consultez votre médecin avant le Ramadan pour adapter votre traitement</li>
        <li>Surveillez votre glycémie plus fréquemment, surtout en début et fin de journée</li>
        <li>Ayez toujours sur vous des sucres rapides en cas d'hypoglycémie</li>
        <li>Rompez immédiatement le jeûne en cas de symptômes d'hypoglycémie (< 70 mg/dl) ou d'hyperglycémie sévère (> 300 mg/dl)</li>
        <li>Privilégiez les aliments à index glycémique bas lors du ftour et du sehour</li>
      </ul>
    </ul>
    
    <h3>Hypertension artérielle</h3>
    
    <p>Pour les personnes souffrant d'hypertension :</p>
    
    <ul>
      <li>Consultez votre médecin pour adapter votre traitement antihypertenseur</li>
      <li>Privilégiez les médicaments à action prolongée qui peuvent être pris en une seule fois</li>
      <li>Limitez la consommation de sel lors des repas</li>
      <li>Évitez les aliments très salés comme les olives, les fromages salés, les conserves</li>
      <li>Maintenez une activité physique modérée, de préférence après le ftour</li>
    </ul>
    
    <h3>Maladies cardiovasculaires</h3>
    
    <p>Les personnes souffrant de problèmes cardiaques doivent :</p>
    
    <ul>
      <li>Consulter leur cardiologue avant de décider de jeûner</li>
      <li>Éviter les repas trop copieux qui peuvent augmenter la charge de travail du cœur</li>
      <li>Limiter les aliments riches en graisses saturées</li>
      <li>Maintenir une bonne hydratation</li>
      <li>Éviter les efforts physiques intenses pendant les heures de jeûne</li>
    </ul>
    
    <h2>Activité physique pendant le Ramadan</h2>
    
    <p>À Casablanca, où les températures peuvent être élevées, adaptez votre activité physique :</p>
    
    <ul>
      <li>Privilégiez l'exercice léger à modéré après le ftour, quand vous êtes hydraté</li>
      <li>Évitez l'activité physique intense pendant les heures de jeûne, surtout en fin de journée</li>
      <li>La marche légère 1 à 2 heures après le ftour est idéale</li>
      <li>Les prières de Tarawih constituent également une forme d'activité physique bénéfique</li>
      <li>Hydratez-vous bien avant et après l'exercice</li>
    </ul>
    
    <h2>Gestion des troubles courants pendant le Ramadan</h2>
    
    <h3>Maux de tête et migraines</h3>
    
    <p>Souvent causés par la déshydratation, le manque de caféine ou l'hypoglycémie :</p>
    
    <ul>
      <li>Assurez une hydratation suffisante entre le ftour et le sehour</li>
      <li>Réduisez progressivement votre consommation de caféine avant le Ramadan</li>
      <li>Essayez de maintenir un rythme de sommeil régulier</li>
      <li>En cas de migraine sévère, des médicaments peuvent être pris au moment du ftour</li>
    </ul>
    
    <h3>Troubles digestifs</h3>
    
    <p>Les indigestions, brûlures d'estomac et constipation sont fréquentes pendant le Ramadan :</p>
    
    <ul>
      <li>Évitez de trop manger lors du ftour</li>
      <li>Mangez lentement et mastiquez bien</li>
      <li>Limitez les aliments frits, épicés et gras</li>
      <li>Consommez suffisamment de fibres (fruits, légumes, céréales complètes)</li>
      <li>Buvez beaucoup d'eau entre les repas</li>
    </ul>
    
    <h3>Fatigue et baisse d'énergie</h3>
    
    <p>Pour maintenir votre niveau d'énergie :</p>
    
    <ul>
      <li>Assurez-vous de dormir suffisamment, quitte à faire une sieste dans la journée</li>
      <li>Consommez des aliments énergétiques mais à libération lente lors du sehour</li>
      <li>Évitez les tâches nécessitant une concentration intense en fin de journée de jeûne</li>
      <li>Organisez votre journée pour réserver les activités exigeantes aux heures où vous êtes le plus alerte</li>
    </ul>
    
    <h2>Conseils pour les personnes travaillant pendant le Ramadan</h2>
    
    <p>À Casablanca, bien que les horaires de travail soient souvent aménagés pendant le Ramadan, beaucoup continuent à travailler normalement :</p>
    
    <ul>
      <li>Planifiez vos tâches les plus exigeantes en début de journée quand vous êtes plus alerte</li>
      <li>Évitez l'exposition prolongée au soleil et à la chaleur</li>
      <li>Prenez des pauses régulières pour vous reposer</li>
      <li>Informez vos collègues que vous jeûnez pour qu'ils comprennent d'éventuelles baissses d'énergie</li>
      <li>Si possible, adaptez vos horaires pour finir plus tôt</li>
    </ul>
    
    <h2>Pharmacies de garde pendant le Ramadan à Casablanca</h2>
    
    <p>Pendant le Ramadan, les pharmacies de garde à Casablanca continuent d'assurer un service 24h/24 :</p>
    
    <ul>
      <li>Consultez notre site pour trouver la pharmacie de garde la plus proche de chez vous</li>
      <li>N'hésitez pas à demander conseil au pharmacien pour les médicaments à prendre pendant le jeûne</li>
      <li>Les pharmaciens peuvent vous orienter en cas de malaise ou de symptômes inquiétants</li>
      <li>Certaines pharmacies proposent des services supplémentaires comme la mesure de la glycémie ou de la tension artérielle</li>
    </ul>
    
    <p>En conclusion, le Ramadan est un mois de spiritualité qui peut être vécu pleinement tout en préservant sa santé. Une bonne préparation, une alimentation équilibrée, une hydratation suffisante et l'adaptation des traitements médicaux sont essentiels pour passer ce mois dans les meilleures conditions. N'hésitez pas à consulter votre médecin ou votre pharmacien pour des conseils personnalisés, particulièrement si vous souffrez d'une maladie chronique. Les pharmacies de garde à Casablanca restent à votre disposition 24h/24 pour vous accompagner pendant cette période.</p>
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
                src="/placeholder.svg?height=400&width=800&text=Santé+Ramadan"
                alt="Conseils santé pour le Ramadan à Casablanca"
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

              <h1 className="text-3xl font-bold text-gray-900 mb-6">Conseils Santé pour le Ramadan à Casablanca</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {["Ramadan", "jeûne", "santé", "diabète", "hydratation"].map((tag, index) => (
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
                  "Ramadan",
                  "jeûne",
                  "santé",
                  "diabète",
                  "hydratation",
                  "médicaments",
                  "alimentation",
                  "ftour",
                  "sehour",
                  "Casablanca",
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

