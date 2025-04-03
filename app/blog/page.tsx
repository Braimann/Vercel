"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Nous utilisons le client component, donc nous définissons les métadonnées ailleurs
// Les métadonnées sont maintenant dans app/blog/layout.tsx

export default function BlogPage() {
  // Cette liste serait normalement chargée depuis une API ou une base de données
  const allArticles = [
    {
      id: 1,
      title: "Comment fonctionnent les pharmacies de garde à Casablanca ?",
      slug: "fonctionnement-pharmacies-garde-casablanca",
      excerpt:
        "Découvrez le système de rotation des pharmacies de garde et comment il assure un accès continu aux médicaments essentiels à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "10 avril 2023",
      category: "Informations",
      district: "Tous",
      tags: ["pharmacie de garde", "Casablanca", "système de garde"],
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
      district: "Tous",
      tags: ["urgence médicale", "nuit", "premiers secours"],
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
      district: "Tous",
      tags: ["médicaments", "trousse de secours", "premiers soins"],
    },
    {
      id: 4,
      title: "Les services spéciaux proposés par les pharmacies de garde",
      slug: "services-speciaux-pharmacies-garde",
      excerpt:
        "Découvrez les services additionnels que proposent certaines pharmacies de garde à Casablanca au-delà de la simple délivrance de médicaments.",
      image: "/placeholder.svg?height=300&width=600",
      date: "5 mars 2023",
      category: "Informations",
      district: "Tous",
      tags: ["services", "pharmacie", "soins"],
    },
    {
      id: 5,
      title: "Comment se préparer à une consultation médicale d'urgence",
      slug: "preparation-consultation-medicale-urgence",
      excerpt:
        "Les informations essentielles à préparer avant de consulter un médecin en urgence pour faciliter le diagnostic et le traitement.",
      image: "/placeholder.svg?height=300&width=600",
      date: "20 février 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["consultation", "urgence", "préparation"],
    },
    {
      id: 6,
      title: "Les numéros d'urgence à connaître à Casablanca",
      slug: "numeros-urgence-casablanca",
      excerpt:
        "Liste complète des numéros d'urgence à Casablanca pour les situations médicales, les accidents et autres urgences.",
      image: "/placeholder.svg?height=300&width=600",
      date: "10 février 2023",
      category: "Informations",
      district: "Tous",
      tags: ["numéros d'urgence", "Casablanca", "secours"],
    },
    {
      id: 7,
      title: "Guide complet des médicaments sans ordonnance",
      slug: "guide-complet-medicaments-sans-ordonnance",
      excerpt:
        "Tout ce que vous devez savoir sur les médicaments disponibles sans ordonnance, leurs usages et précautions.",
      image: "/placeholder.svg?height=300&width=600",
      date: "30 mars 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["médicaments", "sans ordonnance", "automédication"],
    },
    {
      id: 8,
      title: "Conseils santé pendant le Ramadan à Casablanca",
      slug: "conseils-sante-ramadan-casablanca",
      excerpt:
        "Recommandations pour maintenir une bonne santé pendant le mois de Ramadan, gestion des médicaments et de l'hydratation.",
      image: "/placeholder.svg?height=300&width=600",
      date: "20 mars 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["Ramadan", "jeûne", "médicaments"],
    },
    {
      id: 9,
      title: "Comment lire correctement une notice de médicament",
      slug: "comment-lire-notice-medicament",
      excerpt:
        "Guide pratique pour comprendre les informations essentielles contenues dans les notices de médicaments.",
      image: "/placeholder.svg?height=300&width=600",
      date: "5 avril 2023",
      category: "Informations",
      district: "Tous",
      tags: ["notice", "médicaments", "posologie"],
    },
    {
      id: 10,
      title: "Les interactions médicamenteuses à connaître",
      slug: "interactions-medicamenteuses-connaitre",
      excerpt: "Informations sur les interactions dangereuses entre médicaments et avec certains aliments à éviter.",
      image: "/placeholder.svg?height=300&width=600",
      date: "12 avril 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["interactions", "médicaments", "précautions"],
    },
    {
      id: 11,
      title: "Comment gérer le diabète pendant les périodes de chaleur",
      slug: "gerer-diabete-periodes-chaleur",
      excerpt: "Conseils pratiques pour les personnes diabétiques durant les vagues de chaleur à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "18 avril 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["diabète", "chaleur", "hydratation"],
    },
    {
      id: 12,
      title: "Premiers soins pour les urgences domestiques",
      slug: "premiers-soins-urgences-domestiques",
      excerpt:
        "Guide des gestes de premiers secours pour les accidents domestiques courants avant de consulter un professionnel.",
      image: "/placeholder.svg?height=300&width=600",
      date: "22 avril 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["premiers soins", "urgence", "accidents domestiques"],
    },
    {
      id: 13,
      title: "Pharmacies de garde à Maârif - Guide pratique",
      slug: "pharmacies-garde-maarif-guide-pratique",
      excerpt: "Tout ce que vous devez savoir sur les pharmacies de garde dans le quartier Maârif à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "25 avril 2023",
      category: "Informations",
      district: "Maârif",
      tags: ["pharmacie de garde", "Maârif", "Casablanca"],
    },
    {
      id: 14,
      title: "Services médicaux d'urgence à Anfa",
      slug: "services-medicaux-urgence-anfa",
      excerpt: "Guide complet des services médicaux d'urgence disponibles dans le quartier Anfa à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "28 avril 2023",
      category: "Informations",
      district: "Anfa",
      tags: ["urgence médicale", "Anfa", "services médicaux"],
    },
    {
      id: 15,
      title: "Pharmacies ouvertes 24h/24 au Centre-ville",
      slug: "pharmacies-ouvertes-24h-centre-ville",
      excerpt: "Liste des pharmacies assurant un service continu 24h/24 dans le Centre-ville de Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "1 mai 2023",
      category: "Informations",
      district: "Centre-ville",
      tags: ["pharmacie 24h/24", "Centre-ville", "service continu"],
    },
    {
      id: 16,
      title: "Ressources médicales à Ain Diab",
      slug: "ressources-medicales-ain-diab",
      excerpt: "Découvrez les ressources médicales disponibles dans le quartier Ain Diab à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "5 mai 2023",
      category: "Informations",
      district: "Ain Diab",
      tags: ["ressources médicales", "Ain Diab", "santé"],
    },
    {
      id: 17,
      title: "Pharmacies de garde à Sidi Moumen - Horaires et services",
      slug: "pharmacies-garde-sidi-moumen-horaires-services",
      excerpt:
        "Informations détaillées sur les pharmacies de garde à Sidi Moumen, leurs horaires et services spécifiques.",
      image: "/placeholder.svg?height=300&width=600",
      date: "8 mai 2023",
      category: "Informations",
      district: "Sidi Moumen",
      tags: ["pharmacie de garde", "Sidi Moumen", "horaires"],
    },
    {
      id: 18,
      title: "Guide des urgences médicales à Hay Hassani",
      slug: "guide-urgences-medicales-hay-hassani",
      excerpt: "Comment gérer les urgences médicales dans le quartier Hay Hassani à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "12 mai 2023",
      category: "Conseils Santé",
      district: "Hay Hassani",
      tags: ["urgence médicale", "Hay Hassani", "guide"],
    },
    {
      id: 19,
      title: "Pharmacies et cliniques à Derb Sultan",
      slug: "pharmacies-cliniques-derb-sultan",
      excerpt: "Répertoire des pharmacies et cliniques disponibles dans le quartier Derb Sultan à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "15 mai 2023",
      category: "Informations",
      district: "Derb Sultan",
      tags: ["pharmacies", "cliniques", "Derb Sultan"],
    },
    {
      id: 20,
      title: "Services pharmaceutiques spécialisés à Bourgogne",
      slug: "services-pharmaceutiques-specialises-bourgogne",
      excerpt: "Les services pharmaceutiques spécialisés disponibles dans les pharmacies du quartier Bourgogne.",
      image: "/placeholder.svg?height=300&width=600",
      date: "18 mai 2023",
      category: "Informations",
      district: "Bourgogne",
      tags: ["services pharmaceutiques", "Bourgogne", "spécialités"],
    },
    {
      id: 21,
      title: "Urgences pédiatriques à Mers Sultan",
      slug: "urgences-pediatriques-mers-sultan",
      excerpt: "Guide pour les parents sur la gestion des urgences pédiatriques dans le quartier Mers Sultan.",
      image: "/placeholder.svg?height=300&width=600",
      date: "22 mai 2023",
      category: "Conseils Santé",
      district: "Mers Sultan",
      tags: ["urgences pédiatriques", "Mers Sultan", "enfants"],
    },
    {
      id: 22,
      title: "Pharmacies de garde à Racine - Accessibilité et services",
      slug: "pharmacies-garde-racine-accessibilite-services",
      excerpt: "Informations sur l'accessibilité et les services des pharmacies de garde dans le quartier Racine.",
      image: "/placeholder.svg?height=300&width=600",
      date: "25 mai 2023",
      category: "Informations",
      district: "Racine",
      tags: ["pharmacie de garde", "Racine", "accessibilité"],
    },
    {
      id: 23,
      title: "Soins d'urgence disponibles à Gauthier",
      slug: "soins-urgence-disponibles-gauthier",
      excerpt: "Panorama des soins d'urgence disponibles dans le quartier Gauthier à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "28 mai 2023",
      category: "Informations",
      district: "Gauthier",
      tags: ["soins d'urgence", "Gauthier", "services médicaux"],
    },
    {
      id: 24,
      title: "Pharmacies et services de santé à Beauséjour",
      slug: "pharmacies-services-sante-beausejour",
      excerpt: "Guide complet des pharmacies et services de santé disponibles dans le quartier Beauséjour.",
      image: "/placeholder.svg?height=300&width=600",
      date: "1 juin 2023",
      category: "Informations",
      district: "Beauséjour",
      tags: ["pharmacies", "services de santé", "Beauséjour"],
    },
    {
      id: 25,
      title: "Médicaments et traitements pour les allergies saisonnières",
      slug: "medicaments-traitements-allergies-saisonnieres",
      excerpt:
        "Guide des médicaments et traitements disponibles pour soulager les allergies saisonnières à Casablanca.",
      image: "/placeholder.svg?height=300&width=600",
      date: "5 juin 2023",
      category: "Conseils Santé",
      district: "Tous",
      tags: ["allergies", "médicaments", "traitements"],
    },
  ]

  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("toutes-les-categories")
  const [selectedDistrict, setSelectedDistrict] = useState("tous")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredArticles, setFilteredArticles] = useState(allArticles)
  const [displayedArticles, setDisplayedArticles] = useState([])

  // Constantes pour la pagination
  const articlesPerPage = 9
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  // Catégories et quartiers disponibles
  const categories = ["Toutes les catégories", "Informations", "Conseils Santé", "Actualités", "Témoignages"]
  const districts = [
    "Tous",
    "Centre-ville",
    "Maârif",
    "Anfa",
    "Ain Diab",
    "Sidi Moumen",
    "Hay Hassani",
    "Derb Sultan",
    "Bourgogne",
    "Mers Sultan",
    "Racine",
    "Gauthier",
    "Beauséjour",
  ]

  // Fonction pour filtrer les articles
  useEffect(() => {
    let results = allArticles

    // Filtrer par terme de recherche
    if (searchTerm) {
      results = results.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filtrer par catégorie
    if (selectedCategory !== "toutes-les-categories") {
      const categoryName = categories.find((cat) => cat.toLowerCase().replace(/\s+/g, "-") === selectedCategory)
      if (categoryName && categoryName !== "Toutes les catégories") {
        results = results.filter((article) => article.category === categoryName)
      }
    }

    // Filtrer par quartier
    if (selectedDistrict !== "tous") {
      const districtName = districts.find((dist) => dist.toLowerCase().replace(/\s+/g, "-") === selectedDistrict)
      if (districtName && districtName !== "Tous") {
        results = results.filter((article) => article.district === districtName)
      }
    }

    setFilteredArticles(results)
    setCurrentPage(1) // Réinitialiser à la première page après un filtrage
  }, [searchTerm, selectedCategory, selectedDistrict])

  // Mettre à jour les articles affichés en fonction de la pagination
  useEffect(() => {
    const startIndex = (currentPage - 1) * articlesPerPage
    const endIndex = startIndex + articlesPerPage
    setDisplayedArticles(filteredArticles.slice(startIndex, endIndex))
  }, [filteredArticles, currentPage])

  // Fonction pour changer de page
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Fonction pour effectuer la recherche
  const handleSearch = () => {
    // La recherche est déjà gérée par l'effet useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Blog - Pharmacie de Garde Casablanca</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez nos articles sur les pharmacies de garde, les médicaments essentiels et les conseils santé pour les
          urgences médicales.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Recherche par mot-clé
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="search"
                type="text"
                placeholder="Rechercher un article"
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie
            </label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Sélectionnez une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category.toLowerCase().replace(/\s+/g, "-")}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
              Quartier
            </label>
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger id="district">
                <SelectValue placeholder="Sélectionnez un quartier" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((district, index) => (
                  <SelectItem key={index} value={district.toLowerCase().replace(/\s+/g, "-")}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleSearch}>
              Rechercher
            </Button>
          </div>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Aucun article trouvé</h2>
          <p className="text-gray-600 mb-4">
            Aucun article ne correspond à vos critères de recherche. Veuillez essayer avec d'autres termes ou filtres.
          </p>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("toutes-les-categories")
              setSelectedDistrict("tous")
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{article.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    <Link href={`/blog/${article.slug}`} className="hover:text-emerald-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{article.category}</span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-emerald-600 font-medium hover:underline flex items-center"
                    >
                      Lire plus
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Précédent
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium ${
                      currentPage === page ? "text-emerald-600 bg-emerald-50" : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Suivant
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  )
}

