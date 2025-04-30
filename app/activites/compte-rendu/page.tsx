import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Download, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompteRenduActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comptes Rendus d'Activités</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Retrouvez les comptes rendus détaillés des événements, conférences, séminaires et autres activités organisés
            par le CAPEC.
          </p>
        </div>

        <Tabs defaultValue="conferences" className="mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="conferences">Conférences</TabsTrigger>
            <TabsTrigger value="seminaires">Séminaires</TabsTrigger>
            <TabsTrigger value="ateliers">Ateliers</TabsTrigger>
            <TabsTrigger value="reunions">Réunions</TabsTrigger>
          </TabsList>
          <TabsContent value="conferences" className="mt-6">
            <div className="space-y-6">
              {conferences.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="seminaires" className="mt-6">
            <div className="space-y-6">
              {seminaires.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ateliers" className="mt-6">
            <div className="space-y-6">
              {ateliers.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reunions" className="mt-6">
            <div className="space-y-6">
              {reunions.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Archives des comptes rendus</h2>
              <p className="text-muted-foreground">
                Accédez à notre base de données complète des comptes rendus d'activités depuis 2010.
              </p>
            </div>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white">
              Consulter les archives
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 relative aspect-video md:aspect-square">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex items-center text-sm text-ci-orange mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{event.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-muted-foreground mb-4">{event.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-ci-green mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-ci-green mr-2" />
              <span>{event.participants}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium">Organisé par:</span> {event.organizer}
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Télécharger le CR
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Sample data
const conferences = [
  {
    id: "conf1",
    title: "Conférence internationale sur les politiques économiques post-pandémie",
    description:
      "Compte rendu de la conférence internationale qui a réuni des experts de renommée mondiale pour discuter des stratégies économiques dans l'ère post-pandémie.",
    date: "15-16 mars 2023",
    location: "Hôtel Ivoire, Abidjan",
    participants: "150 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "conf2",
    title: "Conférence sur le développement durable en Afrique de l'Ouest",
    description:
      "Synthèse des présentations et discussions de la conférence sur les politiques de développement durable et leur mise en œuvre en Afrique de l'Ouest.",
    date: "5-6 juin 2022",
    location: "Centre de Conférences, Plateau",
    participants: "120 participants",
    organizer: "CAPEC, PNUD",
    image: "/placeholder.svg",
  },
  {
    id: "conf3",
    title: "Conférence annuelle du CAPEC 2022",
    description:
      "Compte rendu de la conférence annuelle du CAPEC qui a présenté les résultats des recherches menées au cours de l'année et les perspectives futures.",
    date: "10 décembre 2022",
    location: "Université Félix Houphouët-Boigny",
    participants: "200 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
]

const seminaires = [
  {
    id: "sem1",
    title: "Séminaire sur les politiques fiscales et la croissance économique",
    description:
      "Compte rendu du séminaire qui a exploré l'impact des différentes politiques fiscales sur la croissance économique à long terme.",
    date: "20 janvier 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "50 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "sem2",
    title: "Séminaire doctoral en économie du développement",
    description:
      "Synthèse des présentations des doctorants en économie du développement et des discussions avec les chercheurs seniors.",
    date: "15 mai 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "30 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "sem3",
    title: "Séminaire sur l'économie agricole et la sécurité alimentaire",
    description:
      "Compte rendu du séminaire qui a abordé les défis et opportunités du secteur agricole en Côte d'Ivoire et ses implications pour la sécurité alimentaire.",
    date: "8 avril 2023",
    location: "Ministère de l'Agriculture, Plateau",
    participants: "45 participants",
    organizer: "CAPEC, Ministère de l'Agriculture",
    image: "/placeholder.svg",
  },
]

const ateliers = [
  {
    id: "at1",
    title: "Atelier de formation en analyse des données économiques",
    description:
      "Compte rendu de l'atelier de formation sur les méthodes avancées d'analyse des données économiques destiné aux chercheurs et analystes.",
    date: "10-12 février 2023",
    location: "Laboratoire informatique, CAPEC",
    participants: "25 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "at2",
    title: "Atelier sur l'évaluation d'impact des politiques publiques",
    description:
      "Synthèse de l'atelier qui a présenté les méthodes d'évaluation d'impact et leur application aux politiques publiques en Côte d'Ivoire.",
    date: "18-20 avril 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "35 participants",
    organizer: "CAPEC, Banque Mondiale",
    image: "/placeholder.svg",
  },
  {
    id: "at3",
    title: "Atelier sur les politiques d'inclusion financière",
    description:
      "Compte rendu de l'atelier qui a réuni des acteurs du secteur financier et des décideurs politiques pour discuter des stratégies d'inclusion financière.",
    date: "15 novembre 2022",
    location: "Hôtel Pullman, Abidjan",
    participants: "40 participants",
    organizer: "CAPEC, BCEAO",
    image: "/placeholder.svg",
  },
]

const reunions = [
  {
    id: "reu1",
    title: "Réunion du comité scientifique du CAPEC",
    description:
      "Compte rendu de la réunion annuelle du comité scientifique qui a évalué les activités de recherche du CAPEC et défini les orientations futures.",
    date: "25 février 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "15 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "reu2",
    title: "Réunion de planification stratégique 2023-2025",
    description:
      "Synthèse de la réunion qui a défini le plan stratégique du CAPEC pour la période 2023-2025, incluant les objectifs et les axes prioritaires.",
    date: "15 décembre 2022",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "20 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
  {
    id: "reu3",
    title: "Réunion de coordination des projets de recherche",
    description: "Compte rendu de la réunion trimestrielle de coordination des projets de recherche en cours au CAPEC.",
    date: "10 mars 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "25 participants",
    organizer: "CAPEC",
    image: "/placeholder.svg",
  },
]

