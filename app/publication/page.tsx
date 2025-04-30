import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Search } from "lucide-react";

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto mt-24 mb-52 p-6 bg-white rounded-lg ">
          {/* Titre principal */}
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Publications</h2>
          <div className="h-1 w-12 bg-orange-500 mb-6"></div>

          {/* Section PED */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Politique Économique et Développement (PED)
            </h3>
            <p className="text-gray-600">
              Le PED rend compte des résultats des études et recherches dans leur intégralité sans aucune restriction, avec toute la technicité et la rigueur nécessaires. Sa distribution se fait sur demande expresse quand les lecteurs ne le consultent pas sur place.
            </p>
          </section>

          {/* Section BUPED */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Bulletin de Politique Économique et Développement (BUPED)
            </h3>
            <p className="text-gray-600">
              Le BUPED, à la différence du PED, résume en une vingtaine de pages au plus et sans détail technique, les conclusions et recommandations des études.
            </p>
          </section>

          {/* Section LPE */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Lettre de Politique Économique (LPE)
            </h3>
            <p className="text-gray-600">
              La LPE rend compte de l’essentiel des résultats des recherches et des recommandations de politiques économiques qui en découlent. Elle est aussi utilisée comme support pour les chroniques économiques. Elle ne comporte que quatre pages et reste spécialement destinée aux décideurs.
            </p>
          </section>

          {/* Section PRS */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Publications dans les Revues Spécialisées (PRS)
            </h3>
          </section>

          {/* Section Recherche */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recherche</h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Dropdown 1 */}
                  <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Politique Économique et Développement (PED)</option>
                    <option>Bulletin de Politique Économique et Développement (BUPED)</option>
                    <option>Lettre de Politique Économique (LPE)</option>
                    <option>Publications dans les revues spécialisées (PRS)</option>
                  </select>

                  {/* Dropdown 2 */}
                  <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Sélectionnez l’année</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>

                  {/* Bouton Afficher */}
                  <Button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                    Afficher
                    <Search className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}