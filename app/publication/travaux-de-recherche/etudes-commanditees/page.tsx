import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Search, Calendar, User, Download } from "lucide-react"

export default function EtudesCommanditeesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/nouvelle" className="hover:text-ci-orange">
              Nouvelle
            </Link>
            <span>/</span>
            <Link href="/nouvelle/travaux-recherche" className="hover:text-ci-orange">
              Travaux de Recherche
            </Link>
            <span>/</span>
            <span>Études Commanditées</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Études Commanditées</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les études réalisées par le CAPEC à la demande d'organisations nationales et internationales, de
            ministères et d'autres institutions.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Études Commanditées CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Expertise reconnue</h2>
              <p>
                Le CAPEC met son expertise au service des organisations nationales et internationales pour réaliser des
                études de haute qualité.
              </p>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Filtrer les études</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher une étude..." className="pl-8" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Commanditaire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les commanditaires</SelectItem>
                <SelectItem value="banque-mondiale">Banque Mondiale</SelectItem>
                <SelectItem value="pnud">PNUD</SelectItem>
                <SelectItem value="ministeres">Ministères</SelectItem>
                <SelectItem value="union-europeenne">Union Européenne</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Domaine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les domaines</SelectItem>
                <SelectItem value="macroeconomie">Macroéconomie</SelectItem>
                <SelectItem value="developpement">Développement</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[150px] border-ci-green focus:ring-ci-orange">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les années</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Liste des études */}
        <div className="mt-8 grid grid-cols-1 gap-6">
          {etudesCommanditees.map((etude) => (
            <Card key={etude.id} className="overflow-hidden">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1 relative aspect-video md:aspect-square">
                  <Image src={etude.image || "/placeholder.svg"} alt={etude.title} fill className="object-cover" />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">{etude.date}</span>
                    <span className="text-xs bg-orange-100 text-ci-orange px-2 py-1 rounded-full">{etude.domaine}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{etude.title}</h3>
                  <p className="text-muted-foreground mb-4">{etude.description}</p>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <User className="h-4 w-4 text-ci-green mr-2" />
                        <span>
                          <span className="font-medium">Commanditaire:</span> {etude.commanditaire}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-ci-green mr-2" />
                        <span>
                          <span className="font-medium">Période:</span> {etude.periode}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                      <Link href={`/nouvelle/travaux-recherche/etudes-commanditees/${etude.id}`}>
                        <Button className="bg-ci-green hover:bg-green-700 text-white">
                          Voir les détails
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partenaires */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Nos partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-2">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <p className="text-sm font-medium text-center">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Témoignages de nos partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Jean Dupont"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Le CAPEC a fourni une analyse économique rigoureuse qui a été essentielle pour la formulation de
                      notre politique agricole. Leur expertise et leur professionnalisme sont remarquables."
                    </p>
                    <p className="font-bold">Jean Dupont</p>
                    <p className="text-sm text-muted-foreground">Directeur, Ministère de l'Agriculture</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Sarah Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-muted-foreground mb-4">
                      "Notre collaboration avec le CAPEC sur l'évaluation d'impact de nos programmes a été extrêmement
                      fructueuse. Leur approche méthodologique rigoureuse a permis d'obtenir des résultats fiables."
                    </p>
                    <p className="font-bold">Sarah Konaté</p>
                    <p className="text-sm text-muted-foreground">Coordinatrice de programmes, PNUD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// Données d'exemple
const etudesCommanditees = [
  {
    id: "1",
    title: "Évaluation d'impact des politiques d'inclusion financière en zones rurales",
    description:
      "Cette étude commanditée par la Banque Mondiale vise à évaluer l'impact des différentes politiques d'inclusion financière sur l'accès aux services financiers et le bien-être économique des populations rurales en Côte d'Ivoire.",
    date: "Décembre 2022",
    commanditaire: "Banque Mondiale",
    periode: "2021-2022",
    domaine: "Finance",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Analyse des chaînes de valeur agricoles et leur contribution à la croissance économique",
    description:
      "Cette étude commanditée par la FAO examine les chaînes de valeur des principales cultures d'exportation et vivrières en Côte d'Ivoire, identifiant les contraintes et opportunités pour améliorer leur contribution à la croissance économique.",
    date: "Octobre 2022",
    commanditaire: "FAO",
    periode: "2020-2022",
    domaine: "Agriculture",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Impact économique de la digitalisation des services publics",
    description:
      "Cette étude commanditée par le PNUD évalue l'impact économique et social de la digitalisation des services publics en Côte d'Ivoire, mesurant les gains d'efficacité, la réduction des coûts et l'amélioration de l'accès aux services.",
    date: "Juillet 2022",
    commanditaire: "PNUD",
    periode: "2021-2022",
    domaine: "Numérique",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Évaluation comparative des systèmes de protection sociale en Afrique",
    description:
      "Cette étude commanditée par l'OIT et l'UNICEF compare l'efficacité des différents modèles de protection sociale en Afrique et leur adaptabilité aux contextes socio-économiques variés, avec des études de cas dans plusieurs pays.",
    date: "Mai 2022",
    commanditaire: "OIT, UNICEF",
    periode: "2020-2022",
    domaine: "Protection sociale",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Analyse de l'impact des politiques commerciales sur l'intégration régionale",
    description:
      "Cette étude commanditée par l'Union Européenne analyse l'impact des politiques commerciales sur l'intégration économique régionale en Afrique de l'Ouest et formule des recommandations pour renforcer les échanges intra-régionaux.",
    date: "Mars 2022",
    commanditaire: "Union Européenne",
    periode: "2020-2022",
    domaine: "Commerce",
    image: "/placeholder.svg",
  },
]

const partners = [
  {
    name: "Banque Mondiale",
    logo: "/placeholder.svg",
  },
  {
    name: "PNUD",
    logo: "/placeholder.svg",
  },
  {
    name: "FAO",
    logo: "/placeholder.svg",
  },
  {
    name: "Union Européenne",
    logo: "/placeholder.svg",
  },
  {
    name: "Ministère de l'Économie",
    logo: "/placeholder.svg",
  },
  {
    name: "BCEAO",
    logo: "/placeholder.svg",
  },
]

