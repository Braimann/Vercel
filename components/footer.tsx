import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Pharmacie de Garde Casablanca"
                  width={150}
                  height={45}
                  className="invert"
                />
              </Link>
            </div>
            <p className="mb-4">
              Pharmacie de Garde Casablanca est un service en ligne qui vous permet de trouver facilement les pharmacies
              de garde à Casablanca, ouvertes 24h/24.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/pharmacies" className="hover:text-white">
                  Pharmacies de garde
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/fonctionnement-pharmacies-garde-casablanca" className="hover:text-white">
                  Comment fonctionnent les pharmacies de garde
                </Link>
              </li>
              <li>
                <Link href="/blog/urgence-medicale-nocturne-casablanca" className="hover:text-white">
                  Que faire en cas d'urgence médicale nocturne
                </Link>
              </li>
              <li>
                <Link href="/blog/medicaments-essentiels-maison" className="hover:text-white">
                  Les médicaments essentiels à avoir chez soi
                </Link>
              </li>
              <li>
                <Link href="/blog/numeros-urgence-casablanca" className="hover:text-white">
                  Les numéros d'urgence à connaître
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Pharmacie de Garde Casablanca. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Ce site est un service d'information indépendant et ne représente aucune entité officielle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

