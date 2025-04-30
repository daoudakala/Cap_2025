import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const year = new Date().getFullYear()
  
  // Liste des partenaires avec noms réels
  const partners = [
    { name: "BNETD", logo: "/images/logobnet.jpg", url: "https://www.bnetd.ci" },
    { name: "Université Félix Houphouët-Boigny", logo: "/images/logouni.jpg", url: "https://www.univ-fhb.edu.ci" },
    { name: "CIRES", logo: "/images/logocires.jpg", url: "https://www.cires.info" },
    { name: "ACBF", logo: "/images/acbflogo.png", url: "https://www.acbf-pact.org" }
  ]

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Partenaires améliorée */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase mb-6 text-center md:text-left text-ci-orange">
            Nos partenaires institutionnels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <Link 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className="relative h-20 w-40 mb-3"> {/* Taille augmentée */}
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fill
                      className="object-contain group-hover:opacity-90 transition-opacity"
                      sizes="(max-width: 768px) 50vw, 160px"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium group-hover:text-ci-orange transition-colors">
                    {partner.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Le reste du footer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          {/* Bloc logo et description */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logocapec.png"
                alt="Logo du CAPEC"
                width={100}
                height={100}
                priority
              />
              <span className="text-xl font-semibold text-ci-orange">CAPEC</span>
            </Link>
            <p className="text-sm text-gray-400">
              La Cellule d'Analyse de Politiques Économiques du CIRES (CAPEC) produit des analyses pour appuyer la prise de décision en matière de développement en Côte d'Ivoire.
            </p>
          </div>

          {/* Bloc newsletter */}
          <div className="md:w-1/3">
            <h3 className="text-sm font-bold uppercase mb-2">Abonnez-vous à notre infolettre</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-ci-orange w-full"
                required
              />
              <button
                type="submit"
                className="bg-ci-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>

          {/* Bloc liens */}
          <nav aria-label="Navigation secondaire">
            <div className="flex flex-col gap-2 text-sm text-gray-400 md:w-1/3">
              <Link href="/activites/rapport" className="hover:text-white transition-colors">
                Nos réalisations
              </Link>
              <Link href="/ressources/recherches" className="hover:text-white transition-colors">
                Recherche
              </Link>
              <Link href="/medias/videotheque" className="hover:text-white transition-colors">
                Nos vidéos
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {year} CAPEC - CIRES. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}