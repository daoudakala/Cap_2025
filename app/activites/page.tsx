import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, FileText, Users, MessageSquare, Newspaper } from "lucide-react"

export default function ActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Activités</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les différentes activités du CAPEC, incluant nos programmes, rapports, comptes rendus, interviews
            et actualités.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Activités du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Nos activités</h2>
              <p>Explorez les différentes facettes de notre travail et restez informé de nos dernières initiatives.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            icon={<Calendar className="h-8 w-8 text-ci-orange" />}
            title="Programme d'Activités"
            description="Consultez notre calendrier d'événements à venir, incluant conférences, séminaires et ateliers."
            href="/activites/programme"
            color="orange"
          />

          <ActivityCard
            icon={<FileText className="h-8 w-8 text-ci-green" />}
            title="Rapport d'Activités"
            description="Découvrez nos rapports annuels et thématiques présentant nos réalisations et résultats."
            href="/activites/rapport"
            color="green"
          />

          <ActivityCard
            icon={<Users className="h-8 w-8 text-ci-orange" />}
            title="CR d'Activités"
            description="Retrouvez les comptes rendus détaillés de nos événements, conférences et séminaires."
            href="/activites/compte-rendu"
            color="orange"
          />

          <ActivityCard
            icon={<MessageSquare className="h-8 w-8 text-ci-green" />}
            title="Interview / Question"
            description="Consultez les interviews et interventions médiatiques de nos chercheurs sur les questions économiques."
            href="/activites/interview"
            color="green"
          />

          <ActivityCard
            icon={<Newspaper className="h-8 w-8 text-ci-orange" />}
            title="Actualités"
            description="Restez informé des derniers événements, annonces et activités du CAPEC."
            href="/activites/actualites"
            color="orange"
          />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 relative aspect-video md:aspect-square">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex items-center text-sm text-ci-orange mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Lieu:</span> {event.location}
                      </div>
                      <Link href={`/activites/programme#${event.id}`}>
                        <Button className="bg-ci-green hover:bg-green-700 text-white">
                          En savoir plus
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/activites/programme">
              <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                Voir tous les événements
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ActivityCard({ icon, title, description, href, color }: { icon: React.ReactNode; title: string; description: string; href: string; color: string }) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className={`p-3 rounded-full bg-${color}-100 self-start mb-4`}>{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Link href={href} className="mt-auto">
          <Button variant="link" className={`p-0 h-auto text-ci-${color}`}>
            Découvrir
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
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
    location: "Hôtel Ivoire, Abidjan",
    image: "/placeholder.svg",
  },
  {
    id: "event2",
    title: "Séminaire de formation en économétrie appliquée",
    description:
      "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants, avec un focus sur les applications pratiques.",
    date: "5-7 juin 2023",
    location: "Campus UFHB, Cocody",
    image: "/placeholder.svg",
  },
]

