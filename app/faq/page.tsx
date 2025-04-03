import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes sur les Pharmacies de Garde",
  description:
    "Trouvez des réponses à vos questions sur les pharmacies de garde à Casablanca. Comment les trouver, leurs horaires, et que faire en cas d'urgence médicale.",
  alternates: {
    canonical: "https://pharmaciedegardecasablanca.com/faq",
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Comment trouver une pharmacie de garde à Casablanca ?",
      answer:
        "Vous pouvez trouver une pharmacie de garde à Casablanca de plusieurs façons : en utilisant notre site web ou application mobile qui vous géolocalise et vous indique les pharmacies ouvertes les plus proches, en consultant les journaux locaux qui publient la liste des pharmacies de garde, en regardant les affiches sur les devantures des pharmacies, ou en appelant le numéro d'urgence 19.",
    },
    {
      question: "Quels sont les horaires des pharmacies de garde ?",
      answer:
        "Les pharmacies de garde à Casablanca assurent généralement un service continu 24h/24 pendant leur période de garde. Le changement de garde s'effectue habituellement à 8h30 du matin. Il existe deux types de garde : la garde de jour (dimanches et jours fériés, de 9h à 21h) et la garde de nuit (tous les jours, de 21h jusqu'au lendemain matin).",
    },
    {
      question: "Les prix des médicaments sont-ils plus élevés dans les pharmacies de garde ?",
      answer:
        "Non, les prix des médicaments sont réglementés au Maroc et restent les mêmes, que vous les achetiez dans une pharmacie normale ou dans une pharmacie de garde. Cependant, certaines pharmacies de garde peuvent appliquer un supplément pour le service de garde, qui est généralement modique et réglementé.",
    },
    {
      question: "Que faire si la pharmacie de garde n'a pas le médicament dont j'ai besoin ?",
      answer:
        "Si la pharmacie de garde ne dispose pas du médicament dont vous avez besoin, le pharmacien peut vous orienter vers une autre pharmacie de garde qui pourrait l'avoir en stock. Dans certains cas, il peut également vous proposer un médicament équivalent ou générique, après consultation de votre ordonnance.",
    },
    {
      question: "Puis-je me rendre dans une pharmacie de garde sans ordonnance ?",
      answer:
        "Oui, vous pouvez vous rendre dans une pharmacie de garde même sans ordonnance. Les pharmaciens de garde peuvent vous conseiller pour des médicaments en vente libre adaptés à vos symptômes. Cependant, pour les médicaments qui nécessitent une prescription, une ordonnance sera toujours exigée.",
    },
    {
      question: "Comment sont organisées les gardes des pharmacies à Casablanca ?",
      answer:
        "À Casablanca, les pharmacies fonctionnent selon un système de rotation pour assurer les services de garde. Ce système est géré par le Conseil de l'Ordre des Pharmaciens et les autorités sanitaires locales. Chaque pharmacie participe à un planning de garde établi à l'avance, et les gardes sont généralement réparties de manière équitable entre toutes les pharmacies d'un même secteur.",
    },
    {
      question: "Que faire en cas d'urgence médicale grave la nuit ?",
      answer:
        "En cas d'urgence médicale grave la nuit, il est recommandé d'appeler les services d'urgence au 15 ou de se rendre directement aux urgences de l'hôpital le plus proche. Les pharmacies de garde peuvent fournir des médicaments et des conseils, mais ne remplacent pas une consultation médicale en cas d'urgence grave.",
    },
    {
      question: "Les pharmacies de garde acceptent-elles les cartes bancaires ?",
      answer:
        "La plupart des pharmacies de garde à Casablanca acceptent les paiements par carte bancaire. Cependant, il est toujours prudent d'avoir un peu d'argent liquide sur soi, car certaines petites pharmacies pourraient ne pas disposer de terminal de paiement électronique ou pourraient rencontrer des problèmes techniques.",
    },
    {
      question: "Puis-je faire livrer des médicaments par une pharmacie de garde ?",
      answer:
        "Certaines pharmacies de garde à Casablanca proposent un service de livraison à domicile, particulièrement utile pour les personnes à mobilité réduite ou en cas d'urgence. Ce service peut être payant et sa disponibilité varie selon les pharmacies. Vous pouvez vous renseigner par téléphone auprès de la pharmacie de garde pour savoir si ce service est disponible.",
    },
    {
      question: "Comment savoir si une pharmacie est réellement de garde ?",
      answer:
        "Les pharmacies de garde sont identifiables par un panneau lumineux vert en forme de croix qui reste allumé pendant toute la durée de la garde. De plus, elles affichent généralement une pancarte 'Pharmacie de Garde' visible de l'extérieur. Notre site web et application mobile vous permettent également de vérifier en temps réel quelles pharmacies sont officiellement de garde.",
    },
    {
      question: "Que faire si je ne trouve pas de pharmacie de garde près de chez moi ?",
      answer:
        "Si vous ne trouvez pas de pharmacie de garde à proximité immédiate, vous pouvez élargir votre recherche à d'autres quartiers de Casablanca. Notre application vous permet de visualiser toutes les pharmacies de garde sur une carte et de calculer l'itinéraire vers la plus accessible. En cas de difficulté, vous pouvez également appeler le 19 pour obtenir des informations sur les pharmacies de garde les plus proches.",
    },
  ]

  const categories = [
    {
      title: "Trouver une pharmacie",
      faqs: [0, 5, 9, 10],
    },
    {
      title: "Horaires et services",
      faqs: [1, 3, 7, 8],
    },
    {
      title: "Médicaments et tarifs",
      faqs: [2, 4],
    },
    {
      title: "Urgences médicales",
      faqs: [6],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">Foire Aux Questions (FAQ)</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Trouvez des réponses à vos questions sur les pharmacies de garde à Casablanca, leur fonctionnement et les
          services disponibles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Catégories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-600 hover:underline block py-1"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t">
              <p className="text-gray-600 mb-4">Vous ne trouvez pas de réponse à votre question ?</p>
              <Link href="/contact">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, "-")} className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-800 border-b pb-2">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${faqIndex}`} className="border rounded-lg p-2">
                    <AccordionTrigger className="text-left font-medium px-2">
                      {faqs[faqIndex].question}
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pt-2 text-gray-600">{faqs[faqIndex].answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="bg-emerald-50 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Vous avez encore des questions ?</h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour répondre à toutes vos questions concernant les pharmacies de garde à
              Casablanca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">Nous contacter</Button>
              </Link>
              <Link href="/pharmacies">
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto"
                >
                  Trouver une pharmacie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

