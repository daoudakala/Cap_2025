import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, BookOpen } from "lucide-react"

export default function TravauxRecherchePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/publication/travaux-des-chercheurs" className="hover:text-ci-orange">
              Nouvelle
            </Link>
            <span>/</span>
            <span>Travaux de Recherche</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Travaux de Recherche</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les travaux de recherche collectifs menés par le CAPEC, incluant des études commanditées et des
            projets de recherche.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Travaux de Recherche du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Excellence en recherche</h2>
              <p>
                Le CAPEC mène des travaux de recherche de haute qualité pour contribuer au développement économique et
                social.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg"
                alt="Études Commanditées"
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">Études Commanditées</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="p-3 rounded-full bg-orange-100 self-start mb-4">
                <FileText className="h-6 w-6 text-ci-orange" />
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Découvrez les études réalisées par le CAPEC à la demande d'organisations nationales et internationales,
                de ministères et d'autres institutions.
              </p>
              <Link href="/nouvelle/travaux-recherche/etudes-commanditees">
                <Button className="w-full bg-ci-orange hover:bg-orange-600 text-white">
                  Voir les études commanditées
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg"
                alt="Projets de Recherche"
                width={600}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-xl">Projets de Recherche</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="p-3 rounded-full bg-green-100 self-start mb-4">
                <BookOpen className="h-6 w-6 text-ci-green" />
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Explorez les projets de recherche initiés par le CAPEC pour contribuer à l'avancement des connaissances
                et au développement de politiques économiques efficaces.
              </p>
              <Link href="/nouvelle/travaux-recherche/projet-recherche">
                <Button className="w-full bg-ci-green hover:bg-green-700 text-white">
                  Voir les projets de recherche
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Nos domaines de recherche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-orange">Macroéconomie et politiques publiques</h3>
              <p className="text-sm text-muted-foreground">
                Analyse des politiques macroéconomiques, fiscales et monétaires et leur impact sur la croissance,
                l'emploi et la stabilité économique.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-green">Économie du développement</h3>
              <p className="text-sm text-muted-foreground">
                Étude des facteurs et politiques favorisant le développement économique durable et inclusif en Côte
                d'Ivoire et en Afrique de l'Ouest.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-orange">Économie agricole et rurale</h3>
              <p className="text-sm text-muted-foreground">
                Analyse des chaînes de valeur agricoles, des politiques de développement rural et de la sécurité
                alimentaire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-green">Politiques sociales et inclusion</h3>
              <p className="text-sm text-muted-foreground">
                Recherche sur les politiques d'éducation, de santé, de protection sociale et leur impact sur la
                réduction des inégalités.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-orange">Intégration régionale et commerce</h3>
              <p className="text-sm text-muted-foreground">
                Étude des dynamiques d'intégration économique régionale, des politiques commerciales et de leurs effets
                sur les économies nationales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-ci-green">Finance et inclusion financière</h3>
              <p className="text-sm text-muted-foreground">
                Analyse du secteur financier, des politiques d'inclusion financière et de leur rôle dans le
                développement économique.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}