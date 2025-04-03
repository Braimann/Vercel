import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, Share2, ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/schema-markup"
import { getAllDistricts } from "@/lib/api"

type Props = {
  params: { slug: string; blogSlug: string }
}

// Générer les chemins statiques pour tous les quartiers et blogs
export async function generateStaticParams() {
  const districts = await getAllDistricts()

  // Pour chaque district, nous créons 3 articles de blog
  const paths = []

  for (const district of districts) {
    const districtSlug = district.toLowerCase().replace(/\s+/g, "-")

    const blogSlugs = [
      `pharmacies-garde-${districtSlug}`,
      `urgences-medicales-${districtSlug}`,
      `services-pharmacies-${districtSlug}`,
    ]

    for (const blogSlug of blogSlugs) {
      paths.push({
        slug: districtSlug,
        blogSlug,
      })
    }
  }

  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, blogSlug } = params

  // Formater le nom du district pour l'affichage
  const districtName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  let title = ""
  let description = ""

  if (blogSlug.startsWith("pharmacies-garde")) {
    title = `Pharmacies de Garde à ${districtName} - Guide Complet 2023`
    description = `Découvrez toutes les pharmacies de garde à ${districtName}, Casablanca. Horaires, adresses et services des pharmacies ouvertes 24h/24 dans le quartier ${districtName}.`
  } else if (blogSlug.startsWith("urgences-medicales")) {
    title = `Urgences Médicales à ${districtName} - Que Faire et Où Aller`
    description = `Guide complet des urgences médicales à ${districtName}, Casablanca. Pharmacies de garde, centres médicaux et conseils pratiques pour les situations d'urgence.`
  } else if (blogSlug.startsWith("services-pharmacies")) {
    title = `Services Spéciaux des Pharmacies de Garde à ${districtName}`
    description = `Découvrez les services spéciaux proposés par les pharmacies de garde à ${districtName}, Casablanca. Livraison, conseils pharmaceutiques et services d'urgence.`
  }

  return {
    title,
    description,
    keywords: [
      `pharmacie garde ${districtName}`,
      `pharmacie nuit ${districtName}`,
      `pharmacie 24h/24 ${districtName}`,
      `médicaments urgence ${districtName}`,
      `urgence médicale ${districtName}`,
      `services pharmacie ${districtName}`,
      "Casablanca",
      "pharmacie ouverte",
      "médicaments nuit",
    ],
    alternates: {
      canonical: `https://pharmaciedegardecasablanca.com/quartiers/${slug}/blog/${blogSlug}`,
    },
  }
}

export default function DistrictBlogPage({ params }: Props) {
  const { slug, blogSlug } = params

  // Formater le nom du district pour l'affichage
  const districtName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Déterminer le type d'article en fonction du slug
  let articleType = ""
  let articleTitle = ""
  let articleContent = ""
  let articleImage = ""

  if (blogSlug.startsWith("pharmacies-garde")) {
    articleType = "Pharmacies de Garde"
    articleTitle = `Guide Complet des Pharmacies de Garde à ${districtName} (2023)`
    articleImage = `/placeholder.svg?height=400&width=800&text=Pharmacies+${districtName}`
    articleContent = `
      <p>Le quartier ${districtName} à Casablanca dispose de plusieurs pharmacies qui assurent un service de garde 24h/24, permettant aux résidents d'accéder aux médicaments et aux conseils pharmaceutiques à tout moment, même en pleine nuit ou pendant les jours fériés.</p>
      
      <h2>Système de garde des pharmacies à ${districtName}</h2>
      
      <p>À ${districtName}, comme dans les autres quartiers de Casablanca, les pharmacies fonctionnent selon un système de rotation pour assurer les services de garde. Ce système est organisé par le Conseil de l'Ordre des Pharmaciens et les autorités sanitaires locales, garantissant qu'au moins une pharmacie reste ouverte 24h/24 dans le quartier.</p>
      
      <p>Les pharmacies de garde changent généralement chaque jour à 8h30 du matin. Pendant leur période de garde, elles restent ouvertes sans interruption, offrant ainsi un accès continu aux médicaments d'urgence pour les habitants de ${districtName} et des environs.</p>
      
      <h2>Comment trouver une pharmacie de garde à ${districtName} ?</h2>
      
      <p>Plusieurs moyens sont à votre disposition pour trouver rapidement une pharmacie de garde à ${districtName} :</p>
      
      <ul>
        <li><strong>Notre service en ligne</strong> : Utilisez notre site web ou application mobile qui vous géolocalise et vous indique les pharmacies de garde les plus proches dans le quartier ${districtName}.</li>
        <li><strong>Les journaux locaux</strong> : Les quotidiens comme "Le Matin" ou "L'Économiste" publient régulièrement la liste des pharmacies de garde par quartier.</li>
        <li><strong>Les affiches en pharmacie</strong> : Chaque pharmacie affiche obligatoirement sur sa devanture la liste des pharmacies de garde du secteur.</li>
        <li><strong>Le numéro d'urgence</strong> : En composant le 19, vous pouvez obtenir des informations sur les pharmacies de garde à ${districtName}.</li>
      </ul>
      
      <h2>Les principales pharmacies de ${districtName}</h2>
      
      <p>Le quartier ${districtName} compte plusieurs pharmacies qui participent au système de garde. Ces établissements sont équipés pour répondre aux besoins médicaux urgents et disposent d'un stock complet de médicaments essentiels.</p>
      
      <p>Lorsqu'une pharmacie est de garde à ${districtName}, elle propose généralement les services suivants :</p>
      
      <ul>
        <li>Délivrance de médicaments sur ordonnance</li>
        <li>Vente de médicaments sans ordonnance pour les petits maux</li>
        <li>Conseils pharmaceutiques pour les situations d'urgence</li>
        <li>Premiers soins pour les blessures mineures</li>
        <li>Orientation vers les services d'urgence appropriés si nécessaire</li>
      </ul>
      
      <h2>Conseils pratiques pour les urgences médicales à ${districtName}</h2>
      
      <p>Si vous avez besoin de médicaments en urgence à ${districtName}, voici quelques conseils pratiques :</p>
      
      <ol>
        <li><strong>Vérifiez à l'avance</strong> : Avant de vous déplacer, vérifiez sur notre site ou par téléphone si la pharmacie est bien ouverte.</li>
        <li><strong>Apportez votre ordonnance</strong> : Pour les médicaments qui nécessitent une prescription, n'oubliez pas d'apporter votre ordonnance, même en situation d'urgence.</li>
        <li><strong>Préparez vos informations médicales</strong> : En cas d'allergie ou de traitement en cours, ayez ces informations à portée de main pour les communiquer au pharmacien.</li>
        <li><strong>Envisagez la livraison</strong> : Certaines pharmacies de garde à ${districtName} proposent un service de livraison à domicile, particulièrement utile pour les personnes à mobilité réduite.</li>
      </ol>
      
      <p>En conclusion, le système des pharmacies de garde à ${districtName} assure un accès continu aux médicaments et aux conseils pharmaceutiques, contribuant ainsi à la sécurité sanitaire des habitants du quartier. Notre service en ligne vous permet de localiser facilement la pharmacie de garde la plus proche dans le quartier ${districtName}, vous évitant ainsi de perdre un temps précieux en cas d'urgence médicale.</p>
    `
  } else if (blogSlug.startsWith("urgences-medicales")) {
    articleType = "Urgences Médicales"
    articleTitle = `Que Faire en Cas d'Urgence Médicale à ${districtName}`
    articleImage = `/placeholder.svg?height=400&width=800&text=Urgences+${districtName}`
    articleContent = `
      <p>Les situations d'urgence médicale peuvent survenir à tout moment, et il est essentiel de savoir comment réagir rapidement, surtout la nuit ou pendant les jours fériés. Ce guide vous aidera à naviguer dans les options disponibles à ${districtName}, Casablanca, en cas d'urgence médicale.</p>
      
      <h2>Types d'urgences médicales et comment y répondre</h2>
      
      <p>Les urgences médicales peuvent varier en gravité, de légères à potentiellement mortelles. Voici comment réagir selon la situation :</p>
      
      <h3>Urgences légères à modérées</h3>
      
      <p>Pour les situations comme une fièvre soudaine, une douleur modérée, une réaction allergique légère ou un besoin urgent de médicaments, les pharmacies de garde à ${districtName} sont votre première ressource. Elles peuvent :</p>
      
      <ul>
        <li>Fournir des médicaments sans ordonnance pour soulager les symptômes</li>
        <li>Délivrer des médicaments sur ordonnance en cas d'urgence</li>
        <li>Offrir des conseils pharmaceutiques pour les situations non critiques</li>
        <li>Orienter vers un service médical approprié si nécessaire</li>
      </ul>
      
      <h3>Urgences graves</h3>
      
      <p>Pour les situations potentiellement mortelles comme une douleur thoracique intense, des difficultés respiratoires sévères, une perte de conscience ou des saignements importants, contactez immédiatement les services d'urgence en composant le 15 ou rendez-vous directement aux urgences de l'hôpital le plus proche de ${districtName}.</p>
      
      <h2>Services d'urgence disponibles à ${districtName}</h2>
      
      <p>Le quartier ${districtName} et ses environs disposent de plusieurs options pour les soins d'urgence :</p>
      
      <h3>Pharmacies de garde</h3>
      
      <p>Les pharmacies de garde à ${districtName} sont ouvertes 24h/24 pendant leur période de service. Elles constituent souvent le premier point de contact pour les urgences mineures ou pour obtenir des médicaments en dehors des heures d'ouverture habituelles.</p>
      
      <h3>Cliniques et centres médicaux</h3>
      
      <p>Plusieurs cliniques à proximité de ${districtName} offrent des services d'urgence avec des médecins de garde. Ces établissements peuvent traiter une variété de conditions médicales urgentes mais non critiques.</p>
      
      <h3>Hôpitaux avec service d'urgence</h3>
      
      <p>Pour les urgences graves, les hôpitaux équipés de services d'urgence complets sont disponibles à proximité de ${districtName}. Ces services sont opérationnels 24h/24 et disposent d'équipements spécialisés pour traiter les cas critiques.</p>
      
      <h2>Numéros d'urgence essentiels à connaître</h2>
      
      <p>Gardez ces numéros à portée de main en cas d'urgence médicale à ${districtName} :</p>
      
      <ul>
        <li><strong>15</strong> : SAMU (Service d'Aide Médicale Urgente)</li>
        <li><strong>19</strong> : Police</li>
        <li><strong>177</strong> : Protection Civile</li>
        <li><strong>0522-45-45-45</strong> : SOS Médecins Casablanca</li>
      </ul>
      
      <h2>Préparer une trousse de premiers secours</h2>
      
      <p>Pour être prêt à faire face aux urgences mineures à domicile, il est recommandé de disposer d'une trousse de premiers secours contenant :</p>
      
      <ul>
        <li>Antiseptiques et désinfectants</li>
        <li>Pansements, bandages et compresses stériles</li>
        <li>Analgésiques et antipyrétiques (paracétamol, ibuprofène)</li>
        <li>Antihistaminiques pour les réactions allergiques légères</li>
        <li>Thermomètre</li>
        <li>Ciseaux et pince à épiler</li>
        <li>Gants jetables</li>
      </ul>
      
      <p>En conclusion, savoir comment réagir en cas d'urgence médicale à ${districtName} peut faire une différence significative dans l'issue d'une situation critique. Les pharmacies de garde jouent un rôle essentiel dans ce système, offrant un accès aux médicaments et aux conseils pharmaceutiques à tout moment. Notre service en ligne vous permet de localiser rapidement la pharmacie de garde la plus proche dans le quartier ${districtName}, vous aidant ainsi à gagner un temps précieux en cas d'urgence.</p>
    `
  } else if (blogSlug.startsWith("services-pharmacies")) {
    articleType = "Services Spéciaux"
    articleTitle = `Services Spéciaux Proposés par les Pharmacies de Garde à ${districtName}`
    articleImage = `/placeholder.svg?height=400&width=800&text=Services+${districtName}`
    articleContent = `
      <p>Les pharmacies de garde à ${districtName} ne se limitent pas à la simple délivrance de médicaments en dehors des heures d'ouverture habituelles. Elles offrent une gamme de services spécialisés pour répondre aux besoins variés des patients, particulièrement en situation d'urgence.</p>
      
      <h2>Services pharmaceutiques essentiels</h2>
      
      <p>Toutes les pharmacies de garde à ${districtName} proposent ces services de base :</p>
      
      <ul>
        <li><strong>Délivrance de médicaments sur ordonnance</strong> : Service principal permettant d'obtenir des traitements prescrits même en pleine nuit</li>
        <li><strong>Vente de médicaments sans ordonnance</strong> : Pour soulager rapidement les symptômes des affections mineures</li>
        <li><strong>Conseils pharmaceutiques</strong> : Guidance professionnelle sur l'utilisation appropriée des médicaments et la gestion des symptômes</li>
      </ul>
      
      <h2>Services spécialisés disponibles dans certaines pharmacies</h2>
      
      <p>Au-delà des services standard, plusieurs pharmacies de garde à ${districtName} offrent des prestations supplémentaires :</p>
      
      <h3>Services de santé et de diagnostic</h3>
      
      <ul>
        <li><strong>Mesure de la tension artérielle</strong> : Service gratuit ou à faible coût pour surveiller la pression sanguine</li>
        <li><strong>Test de glycémie</strong> : Vérification rapide du taux de sucre dans le sang, particulièrement utile pour les diabétiques</li>
        <li><strong>Premiers soins pour blessures mineures</strong> : Nettoyage et pansement des petites plaies ou brûlures</li>
        <li><strong>Conseils nutritionnels</strong> : Recommandations sur les compléments alimentaires et régimes spécifiques</li>
      </ul>
      
      <h3>Services de commodité</h3>
      
      <ul>
        <li><strong>Livraison à domicile</strong> : Particulièrement précieux pour les personnes à mobilité réduite ou les cas où le déplacement est difficile</li>
        <li><strong>Préparation de médicaments personnalisés</strong> : Formulations spéciales selon les besoins spécifiques des patients</li>
        <li><strong>Service de garde d'ordonnances</strong> : Conservation sécurisée des prescriptions pour des renouvellements ultérieurs</li>
        <li><strong>Paiement électronique</strong> : Facilité de paiement par carte bancaire, même pendant les gardes de nuit</li>
      </ul>
      
      <h2>Services d'information et d'orientation</h2>
      
      <p>Les pharmaciens de garde à ${districtName} jouent également un rôle crucial dans l'orientation des patients :</p>
      
      <ul>
        <li><strong>Information sur les services médicaux d'urgence</strong> : Renseignements sur les cliniques et hôpitaux ouverts à proximité</li>
        <li><strong>Conseils sur les situations nécessitant une consultation médicale</strong> : Évaluation préliminaire pour déterminer si une visite aux urgences est nécessaire</li>
        <li><strong>Orientation vers des spécialistes</strong> : Recommandations pour des consultations spécialisées selon les symptômes</li>
      </ul>
      
      <h2>Services pour populations spécifiques</h2>
      
      <p>Certaines pharmacies de garde à ${districtName} proposent des services adaptés à des groupes particuliers :</p>
      
      <ul>
        <li><strong>Services pédiatriques</strong> : Conseils spécifiques pour les médicaments destinés aux enfants et les dosages appropriés</li>
        <li><strong>Services gériatriques</strong> : Assistance pour les personnes âgées, notamment concernant les interactions médicamenteuses</li>
        <li><strong>Services pour maladies chroniques</strong> : Suivi et conseils pour les patients atteints de diabète, d'hypertension ou d'asthme</li>
      </ul>
      
      <h2>Comment accéder à ces services spéciaux</h2>
      
      <p>Pour bénéficier de ces services spéciaux dans les pharmacies de garde à ${districtName} :</p>
      
      <ol>
        <li><strong>Vérifiez à l'avance</strong> : Utilisez notre service en ligne pour identifier les pharmacies de garde à ${districtName} et leurs services spécifiques</li>
        <li><strong>Appelez avant de vous déplacer</strong> : Contactez la pharmacie pour confirmer la disponibilité du service dont vous avez besoin</li>
        <li><strong>Préparez vos documents</strong> : Ayez votre ordonnance, carte d'assurance et autres documents pertinents à portée de main</li>
        <li><strong>Expliquez clairement vos besoins</strong> : Communiquez précisément votre situation au pharmacien pour recevoir le service le plus adapté</li>
      </ol>
      
      <p>En conclusion, les pharmacies de garde à ${districtName} offrent bien plus que la simple délivrance de médicaments. Elles constituent un maillon essentiel du système de santé, proposant une variété de services spécialisés accessibles 24h/24. Notre service en ligne vous permet d'identifier facilement les pharmacies de garde à ${districtName} et les services spécifiques qu'elles proposent, vous aidant ainsi à obtenir les soins dont vous avez besoin, quand vous en avez besoin.</p>
    `
  }

  // Date de publication (pour le schéma)
  const publicationDate = new Date().toISOString()

  // Données pour le schéma
  const schemaData = {
    title: articleTitle,
    description: `Guide complet sur ${articleType.toLowerCase()} à ${districtName}, Casablanca.`,
    image: articleImage,
    date: publicationDate,
    slug: blogSlug,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SchemaMarkup type="article" data={schemaData} />

      <div className="mb-6">
        <Link href={`/quartiers/${slug}`} className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour au quartier {districtName}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[400px]">
              <Image
                src={articleImage || "/placeholder.svg"}
                alt={articleTitle}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{districtName}, Casablanca</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{articleType}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6">{articleTitle}</h1>

              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-wrap gap-2">
                  {[`pharmacie ${districtName}`, "garde 24h/24", "urgence médicale", "Casablanca"].map((tag, index) => (
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

              <div className="prose prose-emerald max-w-none" dangerouslySetInnerHTML={{ __html: articleContent }} />
            </div>
          </article>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Articles sur {districtName}</h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Pharmacies de Garde à ${districtName} - Guide Complet`,
                    slug: `pharmacies-garde-${slug}`,
                    excerpt: `Découvrez toutes les pharmacies de garde à ${districtName}, leurs horaires et services.`,
                  },
                  {
                    title: `Urgences Médicales à ${districtName} - Que Faire`,
                    slug: `urgences-medicales-${slug}`,
                    excerpt: `Guide pratique pour gérer les urgences médicales à ${districtName}, Casablanca.`,
                  },
                  {
                    title: `Services Spéciaux des Pharmacies à ${districtName}`,
                    slug: `services-pharmacies-${slug}`,
                    excerpt: `Les services additionnels proposés par les pharmacies de garde à ${districtName}.`,
                  },
                ]
                  .filter((article) => article.slug !== blogSlug)
                  .map((article, index) => (
                    <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <h3 className="font-medium line-clamp-2">
                        <Link
                          href={`/quartiers/${slug}/blog/${article.slug}`}
                          className="hover:text-emerald-600 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{article.excerpt}</p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quartiers voisins</h2>
              <div className="space-y-3">
                {["Centre-ville", "Maârif", "Anfa", "Racine", "Gauthier"]
                  .filter((q) => q.toLowerCase() !== districtName.toLowerCase())
                  .slice(0, 4)
                  .map((district, index) => (
                    <div key={index} className="border-b pb-2 last:border-b-0 last:pb-0">
                      <Link
                        href={`/quartiers/${district
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/\s+/g, "-")}`}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        Pharmacies de garde à {district}
                      </Link>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Besoin d'une pharmacie maintenant ?</h2>
              <p className="text-gray-600 mb-4">
                Trouvez rapidement la pharmacie de garde la plus proche à {districtName}.
              </p>
              <Link href={`/quartiers/${slug}`}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Voir les pharmacies</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

