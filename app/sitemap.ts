import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pharmaciedegardecasablanca.com"
  const currentDate = new Date()

  // Liste des quartiers de Casablanca
  const districts = [
    "Centre-ville",
    "Maârif",
    "Ain Diab",
    "Anfa",
    "Sidi Moumen",
    "Hay Hassani",
    "Derb Sultan",
    "Bourgogne",
    "Mers Sultan",
    "Racine",
    "Gauthier",
    "Beauséjour",
    "Palmier",
    "CIL",
    "Oasis",
    "Californie",
    "Bernoussi",
    "Sbata",
    "Ben M'Sick",
    "Sidi Othmane",
  ]

  // Pages principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pharmacies`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quartiers`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/conditions-utilisation`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ]

  // Pages de quartiers
  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/quartiers/${district
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Articles de blog
  const blogArticles = [
    {
      slug: "fonctionnement-pharmacies-garde-casablanca",
      lastModified: new Date("2023-04-10"),
    },
    {
      slug: "urgence-medicale-nocturne-casablanca",
      lastModified: new Date("2023-03-25"),
    },
    {
      slug: "medicaments-essentiels-maison",
      lastModified: new Date("2023-03-15"),
    },
    {
      slug: "services-speciaux-pharmacies-garde",
      lastModified: new Date("2023-03-05"),
    },
    {
      slug: "preparation-consultation-medicale-urgence",
      lastModified: new Date("2023-02-20"),
    },
    {
      slug: "numeros-urgence-casablanca",
      lastModified: new Date("2023-02-10"),
    },
    {
      slug: "guide-complet-medicaments-sans-ordonnance",
      lastModified: new Date("2023-03-30"),
    },
    {
      slug: "conseils-sante-ramadan-casablanca",
      lastModified: new Date("2023-03-20"),
    },
    {
      slug: "comment-lire-notice-medicament",
      lastModified: new Date("2023-04-10"),
    },
    {
      slug: "interactions-medicamenteuses-connaitre",
      lastModified: new Date("2023-05-05"),
    },
    {
      slug: "gerer-diabete-periodes-chaleur",
      lastModified: new Date("2023-06-15"),
    },
    {
      slug: "premiers-soins-urgences-domestiques",
      lastModified: new Date("2023-07-20"),
    },
    {
      slug: "vaccination-adultes-importance-rappels",
      lastModified: new Date("2023-08-05"),
    },
    {
      slug: "hypertension-arterielle-prevention-traitement",
      lastModified: new Date("2023-08-15"),
    },
    {
      slug: "allergies-saisonnieres-solutions-naturelles-medicamenteuses",
      lastModified: new Date("2023-09-01"),
    },
    {
      slug: "sommeil-troubles-solutions-pharmacie",
      lastModified: new Date("2023-09-10"),
    },
    {
      slug: "antibiotiques-usage-raisonnable-resistance",
      lastModified: new Date("2023-09-20"),
    },
    {
      slug: "sante-cardiaque-prevention-facteurs-risque",
      lastModified: new Date("2023-09-29"),
    },
    {
      slug: "sante-digestive-probiotiques-alimentation",
      lastModified: new Date("2023-10-05"),
    },
    {
      slug: "sante-mentale-ressources-casablanca",
      lastModified: new Date("2023-10-10"),
    },
    {
      slug: "douleurs-chroniques-gestion-traitements",
      lastModified: new Date("2023-10-15"),
    },
    {
      slug: "sante-femmes-examens-preventifs-essentiels",
      lastModified: new Date("2023-10-20"),
    },
    {
      slug: "sante-hommes-depistages-recommandes",
      lastModified: new Date("2023-10-25"),
    },
    {
      slug: "sante-enfants-medicaments-posologie",
      lastModified: new Date("2023-11-01"),
    },
    {
      slug: "sante-seniors-medicaments-precautions",
      lastModified: new Date("2023-11-05"),
    },
    {
      slug: "voyages-trousse-medicale-vaccinations",
      lastModified: new Date("2023-11-10"),
    },
    {
      slug: "medicaments-generiques-equivalence-economie",
      lastModified: new Date("2023-11-15"),
    },
    {
      slug: "phytotherapie-plantes-medicinales-efficacite",
      lastModified: new Date("2023-11-20"),
    },
    {
      slug: "nutrition-complements-alimentaires-conseils",
      lastModified: new Date("2023-11-25"),
    },
    {
      slug: "dermatologie-affections-cutanees-traitements",
      lastModified: new Date("2023-11-30"),
    },
  ].map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Pharmacies (dans un cas réel, ces données seraient récupérées depuis une API ou une base de données)
  const pharmacies = Array.from({ length: 30 }, (_, i) => i + 1).map((id) => ({
    url: `${baseUrl}/pharmacies/${id}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...mainPages, ...districtPages, ...blogArticles, ...pharmacies]
}

