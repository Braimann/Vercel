import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"

export const metadata: Metadata = {
  title: "Comment Gérer le Diabète Pendant les Périodes de Chaleur | Pharmacie de Garde Casablanca",
  description:
    "Conseils pratiques pour les personnes diabétiques durant les périodes de forte chaleur à Casablanca. Apprenez à adapter votre traitement, votre alimentation et votre mode de vie pour éviter les complications liées à la chaleur.",
  keywords: [
    "diabète chaleur",
    "diabétique été",
    "glycémie température",
    "insuline conservation chaleur",
    "déshydratation diabète",
    "alimentation diabète été",
    "activité physique diabète chaleur",
    "pharmacie diabète Casablanca",
    "complications diabète chaleur",
    "conseils diabétiques été",
  ],
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/blog/gerer-diabete-periodes-chaleur",
  },
}

export default function BlogPost() {
  // Date de publication
  const publishDate = "15 juin 2023"

  // Données pour le schéma
  const schemaData = {
    title: "Comment Gérer le Diabète Pendant les Périodes de Chaleur",
    description:
      "Conseils pratiques pour les personnes diabétiques durant les périodes de forte chaleur à Casablanca. Apprenez à adapter votre traitement, votre alimentation et votre mode de vie pour éviter les complications liées à la chaleur.",
    image: "/placeholder.svg?height=400&width=800&text=Diabète+et+Chaleur",
    date: "2023-06-15T09:00:00+01:00",
    slug: "gerer-diabete-periodes-chaleur",
  }

  // Articles similaires
  const relatedArticles = [
    {
      id: 1,
      title: "Conseils Santé pour le Ramadan à Casablanca",
      slug: "conseils-sante-ramadan-casablanca",
      excerpt:
        "Découvrez nos conseils santé pour bien vivre le Ramadan à Casablanca, notamment pour les personnes atteintes de maladies chroniques.",
      image: "/placeholder.svg?height=200&width=300",
      date: "20 mars 2023",
    },
    {
      id: 2,
      title: "Les médicaments essentiels à avoir chez soi",
      slug: "medicaments-essentiels-maison",
      excerpt:
        "Liste des médicaments de base que chaque foyer devrait avoir pour les situations d'urgence et les petits maux du quotidien.",
      image: "/placeholder.svg?height=200&width=300",
      date: "15 mars 2023",
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
    <p>À Casablanca, les périodes de forte chaleur peuvent représenter un défi particulier pour les personnes diabétiques. La chaleur peut affecter votre glycémie, la conservation de vos médicaments et votre bien-être général. Cet article vous propose des conseils pratiques pour gérer efficacement votre diabète pendant les périodes chaudes.</p>
    
    <h2>Comment la chaleur affecte-t-elle le diabète ?</h2>
    
    <p>La chaleur peut influencer votre diabète de plusieurs façons :</p>
    
    <ul>
      <li><strong>Modification de la glycémie</strong> : La chaleur peut accélérer l'absorption de l'insuline, augmentant le risque d'hypoglycémie</li>
      <li><strong>Déshydratation</strong> : Les personnes diabétiques sont plus susceptibles de se déshydrater, ce qui peut déséquilibrer leur glycémie</li>
      <li><strong>Altération des médicaments</strong> : L'insuline et certains médicaments antidiabétiques sont sensibles à la chaleur</li>
      <li><strong>Changement des habitudes alimentaires et d'activité physique</strong> : La chaleur peut modifier vos routines habituelles</li>
    </ul>
    
    <h2>Surveillance de la glycémie en période de chaleur</h2>
    
    <p>Une surveillance plus fréquente est recommandée pendant les périodes chaudes :</p>
    
    <ul>
      <li>Mesurez votre glycémie plus souvent qu'à l'habitude, particulièrement si vous êtes actif à l'extérieur</li>
      <li>Soyez attentif aux signes d'hypoglycémie, qui peuvent être confondus avec les effets de la chaleur (fatigue, faiblesse, transpiration)</li>
      <li>Gardez à l'esprit que la chaleur peut affecter la précision de certains lecteurs de glycémie et bandelettes</li>
      <li>Conservez votre matériel de mesure à l'abri de la chaleur et du soleil direct</li>
    </ul>
    
    <h2>Conservation des médicaments pendant les périodes chaudes</h2>
    
    <h3>Conservation de l'insuline</h3>
    
    <p>L'insuline est particulièrement sensible à la chaleur :</p>
    
    <ul>
      <li>L'insuline non ouverte doit être conservée au réfrigérateur (entre 2°C et 8°C)</li>
      <li>L'insuline en cours d'utilisation peut être conservée à température ambiante (inférieure à 30°C) pendant 28 jours maximum</li>
      <li>Ne jamais exposer l'insuline au soleil direct ou à des températures supérieures à 30°C</li>
      <li>Ne jamais congeler l'insuline</li>
    </ul>
    
    <h3>Solutions pratiques pour conserver l'insuline en déplacement</h3>
    
    <p>À Casablanca, où les températures estivales peuvent dépasser 30°C, voici quelques astuces :</p>
    
    <ul>
      <li>Utilisez des pochettes isothermes spéciales pour l'insuline</li>
      <li>Transportez l'insuline dans un petit sac isotherme avec un bloc réfrigérant (en évitant le contact direct qui pourrait congeler l'insuline)</li>
      <li>Évitez de laisser votre insuline dans une voiture garée au soleil, où la température peut rapidement dépasser 60°C</li>
      <li>Dans les lieux publics climatisés, gardez votre insuline avec vous plutôt que dans une voiture</li>
    </ul>
    
    <h3>Autres médicaments antidiabétiques</h3>
    
    <p>Les médicaments oraux sont généralement moins sensibles à la chaleur que l'insuline, mais certaines précautions restent nécessaires :</p>
    
    <ul>
      <li>Conservez-les à température ambiante, à l'abri de la lumière et de l'humidité</li>
      <li>Évitez de les laisser dans des endroits où la température peut dépasser 30°C</li>
      <li>Vérifiez l'aspect des médicaments avant de les prendre (changement de couleur, de texture)</li>
      <li>Consultez la notice ou demandez conseil à votre pharmacien pour les conditions spécifiques de conservation</li>
    </ul>
    
    <h2>Hydratation et alimentation</h2>
    
    <h3>Importance de l'hydratation</h3>
    
    <p>La déshydratation peut rapidement déséquilibrer votre glycémie :</p>
    
    <ul>
      <li>Buvez régulièrement, sans attendre d'avoir soif</li>
      <li>Visez au moins 1,5 à 2 litres d'eau par jour, davantage en cas d'activité physique ou de forte chaleur</li>
      <li>Limitez les boissons sucrées et l'alcool qui augmentent le risque de déshydratation</li>
      <li>Surveillez la couleur de vos urines : une couleur foncée indique une déshydratation</li>
    </ul>
    
    <h3>Adaptations alimentaires</h3>
    
    <p>En période de chaleur, votre appétit et vos besoins peuvent changer :</p>
    
    <ul>
      <li>Privilégiez les repas légers et fractionnés plutôt que trois repas copieux</li>
      <li>Consommez des fruits et légumes riches en eau (concombre, pastèque, melon, tomates)</li>
      <li>Maintenez un apport suffisant en glucides pour éviter les hypoglycémies, même si vous avez moins d'appétit</li>
      <li>Évitez les aliments très salés qui augmentent la sensation de soif et le risque de déshydratation</li>
      <li>Consommez des soupes froides et des salades qui contribuent à l'hydratation</li>
    </ul>
    
    <h2>Activité physique par temps chaud</h2>
    
    <p>L'exercice reste important pour les diabétiques, mais nécessite des adaptations par temps chaud :</p>
    
    <ul>
      <li>Privilégiez les activités physiques tôt le matin ou en soirée, quand les températures sont plus fraîches</li>
      <li>Réduisez l'intensité et la durée de l'exercice par forte chaleur</li>
      <li>Hydratez-vous avant, pendant et après l'effort</li>
      <li>Mesurez votre glycémie avant, pendant (pour les efforts prolongés) et après l'activité</li>
      <li>Ayez toujours sur vous une source de sucre rapide en cas d'hypoglycémie</li>
      <li>Portez des vêtements légers, amples et de couleur claire</li>
      <li>Protégez-vous du soleil (chapeau, lunettes, crème solaire)</li>
    </ul>
    
    <h2>Reconnaître et gérer les situations d'urgence</h2>
    
    <h3>Signes d'alerte liés à la chaleur</h3>
    
    <p>Soyez attentif aux symptômes suivants, qui peuvent indiquer un problème lié à la chaleur :</p>
    
    <ul>
      <li>Fatigue inhabituelle, faiblesse</li>
      <li>Maux de tête, vertiges</li>
      <li>Nausées, vomissements</li>
      <li>Crampes musculaires</li>
      <li>Peau chaude, rouge et sèche (ou au contraire, pâle et moite)</li>
      <li>Confusion, somnolence</li>
      <li>Fièvre</li>
    </ul>
    
    <h3>Hypoglycémie vs coup de chaleur</h3>
    
    <p>Certains symptômes de l'hypoglycémie ressemblent à ceux d'un coup de chaleur. En cas de doute :</p>
    
    <ol>
      <li>Mesurez votre glycémie si possible</li>
      <li>Si vous ne pouvez pas mesurer et que vous avez des symptômes, prenez une source de sucre rapide par précaution</li>
      <li>Mettez-vous à l'ombre et hydratez-vous</li>
      <li>Si les symptômes persistent ou s'aggravent, consultez un médecin rapidement</li>
    </ol>
    
    <h3>Quand consulter en urgence</h3>
    
    <p>Rendez-vous aux urgences ou appelez les secours si vous présentez :</p>
    
    <ul>
      <li>Une température corporelle élevée (supérieure à 39°C)</li>
      <li>Une confusion mentale ou une perte de conscience</li>
      <li>Des vomissements répétés empêchant de vous hydrater</li>
      <li>Une glycémie très élevée (supérieure à 250 mg/dl) avec présence de corps cétoniques</li>
      <li>Une hypoglycémie sévère ne répondant pas au traitement habituel</li>
    </ul>
    
    <h2>Conseils pratiques pour le quotidien à Casablanca</h2>
    
    <h3>À la maison</h3>
    
    <ul>
      <li>Maintenez votre logement aussi frais que possible (fermez les volets et fenêtres pendant la journée, ouvrez la nuit)</li>
      <li>Utilisez des ventilateurs ou la climatisation si disponible</li>
      <li>Prenez des douches ou bains tièdes pour vous rafraîchir</li>
      <li>Portez des vêtements légers et amples</li>
      <li>Restez à l'intérieur aux heures les plus chaudes (généralement entre 11h et 16h)</li>
    </ul>
    
    <h3>En déplacement</h3>
    
    <ul>
      <li>Planifiez vos sorties tôt le matin ou en soirée</li>
      <li>Emportez toujours de l'eau, votre matériel de mesure de glycémie et une source de sucre rapide</li>
      <li>Transportez vos médicaments dans des conditions appropriées</li>
      <li>Privilégiez les lieux climatisés (centres commerciaux, bibliothèques) en cas de forte chaleur</li>
      <li>Utilisez une ombrelle ou un chapeau pour vous protéger du soleil</li>
    </ul>
    
    <h3>Préparation aux vagues de chaleur</h3>
    
    <p>À Casablanca, les périodes de forte chaleur peuvent être anticipées :</p>
    
    <ul>
      <li>Suivez les prévisions météorologiques et les alertes canicule</li>
      <li>Assurez-vous d'avoir suffisamment de médicaments et de matériel pour ne pas avoir à sortir en pleine chaleur</li>
      <li>Identifiez les lieux climatisés proches de chez vous</li>
      <li>Préparez des solutions de conservation au frais pour vos médicaments en cas de coupure d'électricité</li>
      <li>Discutez avec votre médecin d'éventuels ajustements de votre traitement avant la saison chaude</li>
    </ul>
    
    <h2>Le rôle des pharmacies de garde à Casablanca</h2>
    
    <p>En cas de besoin urgent lié à votre diabète pendant une période de chaleur, les pharmacies de garde à Casablanca peuvent vous aider :</p>
    
    <ul>
      <li>Fourniture de médicaments et matériel en urgence</li>
      <li>Conseils sur la conservation des médicaments</li>
      <li>Orientation vers des services médicaux si nécessaire</li>
      <li>Information sur les précautions à prendre en cas de forte chaleur</li>
    </ul>
    
    <p>Notre site vous permet de localiser facilement la pharmacie de garde la plus proche de chez vous, 24h/24.</p>
    
    <h2>Conseils spécifiques pour les différents types de diabète</h2>
    
    <h3>Pour les personnes atteintes de diabète de type 1</h3>
    
    <ul>
      <li>Surveillez votre glycémie encore plus fréquemment qu'à l'habitude</li>
      <li>Soyez particulièrement vigilant à la conservation de votre insuline</li>
      <li>Adaptez vos doses d'insuline en concertation avec votre médecin (souvent à la baisse par temps chaud)</li>
      <li>Vérifiez régulièrement la présence de corps cétoniques si votre glycémie dépasse 250 mg/dl</li>
    </ul>
    
    <h3>Pour les personnes atteintes de diabète de type 2</h3>
    
    <ul>
      <li>Certains médicaments comme les diurétiques ou la metformine nécessitent une vigilance particulière concernant l'hydratation</li>
      <li>Si vous prenez des médicaments qui augmentent le risque d'hypoglycémie (sulfamides, glinides, insuline), soyez particulièrement attentif aux signes d'hypoglycémie</li>
      <li>Consultez votre médecin pour d'éventuels ajustements de traitement pendant les périodes très chaudes</li>
    </ul>
    
    <h3>Pour les personnes âgées diabétiques</h3>
    
    <p>Les personnes âgées sont particulièrement vulnérables à la chaleur :</p>
    
    <ul>
      <li>Hydratez-vous régulièrement, même sans sensation de soif</li>
      <li>Maintenez des contacts réguliers avec votre entourage</li>
      <li>Soyez attentif aux signes de déshydratation ou de déséquilibre glycémique</li>
      <li>Adaptez votre domicile pour maintenir une température supportable</li>
    </ul>
    
    <p>En conclusion, gérer son diabète pendant les périodes de forte chaleur à Casablanca nécessite quelques adaptations et une vigilance accrue. Une bonne préparation, une surveillance régulière de votre glycémie, une hydratation adéquate et une conservation appropriée de vos médicaments vous permettront de traverser ces périodes en toute sécurité. N'hésitez pas à consulter votre médecin ou votre pharmacien pour des conseils personnalisés adaptés à votre situation spécifique.</p>
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
                src="/placeholder.svg?height=400&width=800&text=Diabète+et+Chaleur"
                alt="Comment gérer le diabète pendant les périodes de chaleur"
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
                Comment Gérer le Diabète Pendant les Périodes de Chaleur
              </h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {["diabète", "chaleur", "glycémie", "insuline", "hydratation"].map((tag, index) => (
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
                  "diabète",
                  "chaleur",
                  "glycémie",
                  "insuline",
                  "hydratation",
                  "été",
                  "médicaments",
                  "conservation",
                  "alimentation",
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

