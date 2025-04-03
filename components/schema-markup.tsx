import Script from "next/script"

interface SchemaMarkupProps {
  type: "website" | "article" | "pharmacy" | "localBusiness"
  data: any
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema = {}

  if (type === "website") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Pharmacie de Garde Casablanca",
      url: "https://pharmaciedegardecasablanca.com",
      description: "Service de localisation des pharmacies de garde à Casablanca ouvertes 24h/24",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://pharmaciedegardecasablanca.com/pharmacies?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }
  } else if (type === "article") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.description,
      image: data.image,
      datePublished: data.date,
      author: {
        "@type": "Organization",
        name: "Pharmacie de Garde Casablanca",
      },
      publisher: {
        "@type": "Organization",
        name: "Pharmacie de Garde Casablanca",
        logo: {
          "@type": "ImageObject",
          url: "https://pharmaciedegardecasablanca.com/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://pharmaciedegardecasablanca.com/blog/${data.slug}`,
      },
    }
  } else if (type === "pharmacy" || type === "localBusiness") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      name: data.name,
      description: `Pharmacie de garde à ${data.district}, Casablanca`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
        streetAddress: data.address,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.latitude,
        longitude: data.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek:
          "http://schema.org/Sunday http://schema.org/Monday http://schema.org/Tuesday http://schema.org/Wednesday http://schema.org/Thursday http://schema.org/Friday http://schema.org/Saturday",
        opens: "00:00",
        closes: "23:59",
      },
    }
  }

  return (
    <Script id={`schema-${type}`} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

