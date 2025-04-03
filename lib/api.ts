// Types pour les données de l'API
export interface Pharmacy {
  pharmacyNameArabic: string
  pharmacyNameLatin: string
  latitude: string
  longitude: string
  openTillTimestamp: string
  addressArabic: string
  addressLatin: string
  city: string
  district: string
  pharmacyPhone: string
}

// Fonction pour récupérer les pharmacies de garde
export async function getPharmacies(): Promise<Pharmacy[]> {
  try {
    const response = await fetch("https://pharmacie.omnidoc.ma/error/map?city=CASABLANCA", {
      headers: {
        "x-proxy-api-key": "1CGjwfwakGjNVqvZe47ccboBGx1Z4W",
      },
      next: { revalidate: 3600 }, // Revalider les données toutes les heures
    })

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`)
    }

    const data = await response.json()
    return data as Pharmacy[]
  } catch (error) {
    console.error("Erreur lors de la récupération des pharmacies:", error)
    return []
  }
}

// Fonction pour récupérer les pharmacies par quartier
export async function getPharmaciesByDistrict(district: string): Promise<Pharmacy[]> {
  const pharmacies = await getPharmacies()

  // Normaliser le district pour la comparaison
  const normalizedDistrict = district.toUpperCase().replace(/-/g, " ")

  return pharmacies.filter((pharmacy) => {
    // Normaliser le district de la pharmacie pour la comparaison
    const pharmacyDistrict = pharmacy.district.toUpperCase().replace(/-/g, " ")
    return pharmacyDistrict === normalizedDistrict
  })
}

// Fonction pour récupérer tous les quartiers uniques
export async function getAllDistricts(): Promise<string[]> {
  const pharmacies = await getPharmacies()

  // Extraire tous les districts uniques
  const districts = [...new Set(pharmacies.map((pharmacy) => pharmacy.district))]

  return districts
}

// Fonction pour formater la date d'ouverture
export function formatOpenTill(timestamp: string): string {
  const date = new Date(Number.parseInt(timestamp) * 1000)
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Fonction pour vérifier si une pharmacie est ouverte
export function isPharmacyOpen(timestamp: string): boolean {
  const now = new Date().getTime() / 1000
  return Number.parseInt(timestamp) > now
}

