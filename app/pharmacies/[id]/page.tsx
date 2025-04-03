import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Calendar, Star, Navigation, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Dans un cas réel, ces données seraient récupérées depuis une API
  const pharmacy = {
    id: params.id,
    name: "Pharmacie Centrale",
    district: "Centre-ville",
    address: "123 Boulevard Mohammed V, Casablanca",
  }

  return {
    title: `${pharmacy.name} | Pharmacie de Garde à ${pharmacy.district}`,
    description: `Informations détaillées sur ${pharmacy.name} située à ${pharmacy.address}. Horaires d'ouverture, services disponibles et itinéraire pour s'y rendre.`,
    alternates: {
      canonical: `https://pharmaciedegardecasablanca.com/pharmacies/${params.id}`,
    },
  }
}

export default function PharmacyDetailPage({ params }: Props) {
  // Dans un cas réel, ces données seraient récupérées depuis une API
  const pharmacy = {
    id: params.id,
    name: "Pharmacie Centrale",
    address: "123 Boulevard Mohammed V, Casablanca",
    phone: "0522123456",
    hours: "24h/24",
    district: "Centre-ville",
    isOpen: true,
    services: [
      "Médicaments sur ordonnance",
      "Médicaments sans ordonnance",
      "Produits parapharmaceutiques",
      "Conseils pharmaceutiques",
      "Prise de tension artérielle",
      "Livraison à domicile",
    ],
    rating: 4.7,
    reviews: 124,
    description:
      "La Pharmacie Centrale est située au cœur de Casablanca et offre un service complet 24h/24 lors de ses jours de garde. Notre équipe de pharmaciens qualifiés est à votre disposition pour vous conseiller et vous fournir les médicaments dont vous avez besoin en urgence.",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/pharmacies" className="text-emerald-600 hover:underline flex items-center">
          ← Retour à la liste des pharmacies
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{pharmacy.name}</h1>
                  <div className="flex items-center mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                      Ouverte
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{pharmacy.rating}</span>
                      <span className="mx-1 text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{pharmacy.reviews} avis</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Partager
                  </Button>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.name + " " + pharmacy.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-1">
                      <Navigation className="h-4 w-4" />
                      Itinéraire
                    </Button>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt={pharmacy.name}
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{pharmacy.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{pharmacy.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{pharmacy.hours}</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Prochains jours de garde: 15/04, 28/04, 12/05</span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">À propos</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="pt-4">
                  <div className="space-y-4">
                    <p>{pharmacy.description}</p>
                    <h3 className="text-lg font-semibold">Localisation</h3>
                    <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.name + " " + pharmacy.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                      >
                        <MapPin className="h-12 w-12 text-emerald-600 mb-2" />
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Voir sur Google Maps</Button>
                      </a>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="services" className="pt-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Services disponibles</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pharmacy.services.map((service, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 font-medium text-lg">{pharmacy.rating}</span>
                      </div>
                      <span className="text-gray-500">{pharmacy.reviews} avis</span>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Mohammed A.",
                          rating: 5,
                          date: "Il y a 2 jours",
                          comment:
                            "Excellent service, pharmacien très professionnel et disponible même en pleine nuit.",
                        },
                        {
                          name: "Fatima L.",
                          rating: 4,
                          date: "Il y a 1 semaine",
                          comment:
                            "Bonne pharmacie de garde, bien approvisionnée. Le personnel est aimable et efficace.",
                        },
                        {
                          name: "Karim B.",
                          rating: 5,
                          date: "Il y a 2 semaines",
                          comment:
                            "J'ai pu trouver tous les médicaments dont j'avais besoin en urgence. Je recommande vivement.",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                          <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contacter la pharmacie</h2>
              <div className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Appeler
                </Button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.name + " " + pharmacy.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Obtenir l'itinéraire
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Pharmacies à proximité</h2>
              <div className="space-y-3">
                {[
                  { name: "Pharmacie El Fath", address: "45 Rue Ibnou Mounir, Maârif", distance: "1.2 km" },
                  { name: "Pharmacie Anfa", address: "156 Boulevard d'Anfa", distance: "1.8 km" },
                  { name: "Pharmacie Mers Sultan", address: "23 Rue Karatchi, Mers Sultan", distance: "2.5 km" },
                ].map((pharmacy, index) => (
                  <div key={index} className="flex items-start pb-3 border-b last:border-b-0 last:pb-0">
                    <div>
                      <h3 className="font-medium">{pharmacy.name}</h3>
                      <p className="text-sm text-gray-500">{pharmacy.address}</p>
                      <p className="text-sm text-gray-500">Distance: {pharmacy.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

