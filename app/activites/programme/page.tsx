import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function ProgrammeActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Programme d'Activités</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les activités à venir du CAPEC, incluant conférences, séminaires, ateliers et autres événements.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Programmes annuels</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {annualPrograms.map((program) => (
              <Card key={program.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-ci-orange mr-2" />
                      <span>Période: {program.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-ci-orange mr-2" />
                      <span>Lieu: {program.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Calendrier des activités 2023-2024</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg text-ci-orange mb-4">Premier trimestre (Janvier - Mars 2023)</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Janvier</div>
                    <div>
                      <p>Séminaire de recherche sur les politiques fiscales</p>
                      <p>Atelier de formation en analyse de données</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Février</div>
                    <div>
                      <p>Conférence sur l'économie numérique</p>
                      <p>Réunion du comité scientifique</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Mars</div>
                    <div>
                      <p>Conférence annuelle du CAPEC</p>
                      <p>Lancement du programme de mentorat pour doctorants</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ci-green mb-4">Deuxième trimestre (Avril - Juin 2023)</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Avril</div>
                    <div>
                      <p>Séminaire sur l'économie agricole</p>
                      <p>Atelier de formation en évaluation d'impact</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Mai</div>
                    <div>
                      <p>Forum sur l'inclusion financière</p>
                      <p>Séminaire doctoral</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Juin</div>
                    <div>
                      <p>Conférence sur le développement durable</p>
                      <p>Atelier de formation en modélisation économique</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ci-orange mb-4">
                  Troisième trimestre (Juillet - Septembre 2023)
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Juillet</div>
                    <div>
                      <p>École d'été pour jeunes chercheurs</p>
                      <p>Atelier sur les méthodes de recherche qualitative</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Août</div>
                    <div>
                      <p>Séminaire sur l'économie de l'éducation</p>
                      <p>Retraite de recherche pour l'équipe du CAPEC</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Septembre</div>
                    <div>
                      <p>Forum sur l'intégration économique régionale</p>
                      <p>Atelier de formation en rédaction scientifique</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ci-green mb-4">Quatrième trimestre (Octobre - Décembre 2023)</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Octobre</div>
                    <div>
                      <p>Conférence sur les politiques sociales</p>
                      <p>Séminaire sur l'économie du genre</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Novembre</div>
                    <div>
                      <p>Atelier sur les politiques d'inclusion financière</p>
                      <p>Séminaire de recherche sur l'économie informelle</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 font-medium">Décembre</div>
                    <div>
                      <p>Conférence de fin d'année</p>
                      <p>Réunion de planification stratégique pour 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function EventCard({ event }  : { event: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3">
        <div className="relative aspect-video md:aspect-square">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center text-sm text-ci-orange mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{event.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-ci-green mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-ci-green mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

// Sample data
const upcomingEvents = [
  {
    id: "event1",
    title: "Conférence internationale sur les politiques économiques post-pandémie",
    description:
      "Le CAPEC organise une conférence internationale réunissant des experts de renommée mondiale pour discuter des stratégies économiques dans l'ère post-pandémie.",
    date: "15-16 mars 2023",
    time: "9h00 - 17h00",
    location: "Hôtel Ivoire, Abidjan",
    image: "/placeholder.svg",
  },
  {
    id: "event2",
    title: "Séminaire de formation en économétrie appliquée",
    description:
      "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants, avec un focus sur les applications pratiques.",
    date: "5-7 juin 2023",
    time: "9h00 - 16h00",
    location: "Campus UFHB, Cocody",
    image: "/placeholder.svg",
  },
  {
    id: "event3",
    title: "Forum sur l'intégration économique régionale en Afrique de l'Ouest",
    description:
      "Forum réunissant des acteurs économiques et politiques pour discuter des enjeux et opportunités de l'intégration régionale.",
    date: "12-13 septembre 2023",
    time: "10h00 - 18h00",
    location: "Centre de Conférences, Plateau",
    image: "/placeholder.svg?text=Forum+Intégration+Régionale&height=300&width=500",
  },
]

const annualPrograms = [
  {
    id: "program1",
    title: "Programme de mentorat pour doctorants",
    description:
      "Programme annuel de mentorat destiné aux doctorants en économie, offrant un accompagnement personnalisé par des chercheurs expérimentés.",
    period: "Mars - Décembre 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
  },
  {
    id: "program2",
    title: "École d'été pour jeunes chercheurs",
    description:
      "Formation intensive de deux semaines sur les méthodes de recherche avancées en économie pour les jeunes chercheurs.",
    period: "Juillet 2023",
    location: "Campus UFHB, Cocody",
  },
  {
    id: "program3",
    title: "Séminaires de recherche mensuels",
    description:
      "Série de séminaires mensuels où les chercheurs du CAPEC et des invités présentent leurs travaux de recherche en cours.",
    period: "Janvier - Décembre 2023",
    location: "CAPEC, Université Félix Houphouët-Boigny",
  },
  {
    id: "program4",
    title: "Programme de visites de recherche",
    description:
      "Programme d'échange permettant aux chercheurs du CAPEC de séjourner dans des institutions partenaires à l'étranger.",
    period: "Toute l'année 2023",
    location: "Institutions partenaires internationales",
  },
  {
    id: "program5",
    title: "Ateliers de formation en analyse de données",
    description:
      "Série d'ateliers pratiques sur les techniques d'analyse de données économiques et les logiciels spécialisés.",
    period: "Trimestriel (2023)",
    location: "Laboratoire informatique, CAPEC",
  },
  {
    id: "program6",
    title: "Programme de recherche collaborative",
    description:
      "Initiative visant à encourager les projets de recherche collaboratifs entre le CAPEC et d'autres institutions.",
    period: "Appel à projets en avril 2023",
    location: "CAPEC et institutions partenaires",
  },
]

