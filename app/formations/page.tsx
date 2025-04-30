import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Calendar, Users, Clock, MapPin, GraduationCap, BookOpen } from "lucide-react"

export default function FormationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formations</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les programmes de formation proposés par le CAPEC pour renforcer les capacités en analyse
            économique et en recherche appliquée.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Formations au CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Excellence en formation</h2>
              <p>
                Le CAPEC s'engage à former la prochaine génération d'analystes et de chercheurs en économie à travers
                des programmes de qualité.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Nos programmes de formation</h2>
          <Tabs defaultValue="academic" className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic">Formation académique</TabsTrigger>
              <TabsTrigger value="professional">Formation professionnelle</TabsTrigger>
              <TabsTrigger value="workshops">Ateliers et séminaires</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {academicPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="professional" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {professionalPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="workshops" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {workshops.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Formations à venir</h2>
          <div className="space-y-6">
            {upcomingTrainings.map((training) => (
              <Card key={training.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 relative aspect-video md:aspect-square">
                    <Image
                      src={training.image || "/placeholder.svg"}
                      alt={training.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center text-sm text-ci-orange mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{training.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{training.title}</h3>
                    <p className="text-muted-foreground mb-4">{training.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-ci-green mr-2" />
                        <span>{training.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-ci-green mr-2" />
                        <span>{training.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-ci-green mr-2" />
                        <span>{training.participants}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 text-ci-green mr-2" />
                        <span>{training.level}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Formateur:</span> {training.trainer}
                      </div>
                      <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                        S'inscrire
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Témoignages</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.photo || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="italic text-muted-foreground mb-4">{testimonial.text}</p>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Ressources pédagogiques</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-orange-100">
                      <BookOpen className="h-5 w-5 text-ci-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold">Manuels et guides</h3>
                      <p className="text-sm text-muted-foreground">
                        Accédez à notre collection de manuels, guides et supports de cours développés par nos experts.
                      </p>
                      <Link href="/formations/ressources">
                        <Button variant="link" className="p-0 h-auto text-ci-orange mt-2">
                          Consulter les ressources
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-green-100">
                      <GraduationCap className="h-5 w-5 text-ci-green" />
                    </div>
                    <div>
                      <h3 className="font-bold">Formations en ligne</h3>
                      <p className="text-sm text-muted-foreground">
                        Découvrez nos modules de formation en ligne sur l'analyse économique et les méthodes de
                        recherche.
                      </p>
                      <Link href="/formations/en-ligne">
                        <Button variant="link" className="p-0 h-auto text-ci-green mt-2">
                          Accéder aux formations
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-orange-100">
                      <Users className="h-5 w-5 text-ci-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold">Communauté d'apprentissage</h3>
                      <p className="text-sm text-muted-foreground">
                        Rejoignez notre communauté d'apprenants pour échanger avec d'autres participants et nos
                        formateurs.
                      </p>
                      <Link href="/formations/communaute">
                        <Button variant="link" className="p-0 h-auto text-ci-orange mt-2">
                          Rejoindre la communauté
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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

function ProgramCard({ program }: { program: { id: string; title: string; description: string; duration: string; audience: string; image?: string } }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video w-full">
        <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2">{program.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{program.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-ci-green mr-2" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-ci-green mr-2" />
            <span>{program.audience}</span>
          </div>
        </div>
        <div className="mt-4">
          <Link href={`/formations/${program.id}`}>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white w-full">
              En savoir plus
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const academicPrograms = [
  {
    id: "doctorat",
    title: "Programme doctoral",
    description:
      "Programme d'encadrement et de mentorat pour les doctorants en économie, offrant un accompagnement personnalisé par des chercheurs expérimentés.",
    duration: "3-4 ans",
    audience: "Doctorants en économie",
    image: "/placeholder.svg",
  },
  {
    id: "master",
    title: "Stage de Master",
    description:
      "Programme de stage pour les étudiants en Master, permettant d'acquérir une expérience pratique en recherche économique appliquée.",
    duration: "3-6 mois",
    audience: "Étudiants en Master",
    image: "/placeholder.svg",
  },
  {
    id: "ecole-ete",
    title: "École d'été pour jeunes chercheurs",
    description:
      "Formation intensive de deux semaines sur les méthodes de recherche avancées en économie pour les jeunes chercheurs.",
    duration: "2 semaines",
    audience: "Jeunes chercheurs",
    image: "/placeholder.svg",
  },
]

const professionalPrograms = [
  {
    id: "analyse-politique",
    title: "Analyse des politiques économiques",
    description:
      "Formation sur les méthodes d'analyse des politiques économiques et leur impact sur le développement économique et social.",
    duration: "5 jours",
    audience: "Professionnels du secteur public",
    image: "/placeholder.svg",
  },
  {
    id: "evaluation-impact",
    title: "Évaluation d'impact des programmes",
    description: "Formation sur les méthodes d'évaluation d'impact des programmes et politiques de développement.",
    duration: "5 jours",
    audience: "Analystes et gestionnaires de projets",
    image: "/placeholder.svg",
  },
  {
    id: "analyse-donnees",
    title: "Analyse des données économiques",
    description: "Formation sur les techniques d'analyse des données économiques et les logiciels spécialisés.",
    duration: "3 jours",
    audience: "Analystes économiques",
    image: "/placeholder.svg",
  },
]

const workshops = [
  {
    id: "econometrie",
    title: "Atelier d'économétrie appliquée",
    description:
      "Atelier pratique sur les techniques économétriques avancées et leur application à l'analyse des politiques économiques.",
    duration: "2 jours",
    audience: "Chercheurs et analystes",
    image: "/placeholder.svg",
  },
  {
    id: "modelisation",
    title: "Séminaire de modélisation économique",
    description: "Séminaire sur les techniques de modélisation économique pour l'analyse des politiques publiques.",
    duration: "3 jours",
    audience: "Économistes et chercheurs",
    image: "/placeholder.svg",
  },
  {
    id: "redaction",
    title: "Atelier de rédaction scientifique",
    description:
      "Atelier sur les techniques de rédaction d'articles scientifiques et de rapports de recherche en économie.",
    duration: "2 jours",
    audience: "Chercheurs et doctorants",
    image: "/placeholder.svg",
  },
]

const upcomingTrainings = [
  {
    id: "t1",
    title: "Séminaire de formation en économétrie appliquée",
    description:
      "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants, avec un focus sur les applications pratiques.",
    date: "5-7 juin 2023",
    duration: "3 jours",
    location: "Campus UFHB, Cocody",
    participants: "25 places",
    level: "Avancé",
    trainer: "Dr. Jean Touré",
    image: "/placeholder.svg",
  },
  {
    id: "t2",
    title: "Atelier sur l'évaluation d'impact des politiques publiques",
    description:
      "Atelier pratique sur les méthodes d'évaluation d'impact et leur application aux politiques publiques en Côte d'Ivoire.",
    date: "18-20 juillet 2023",
    duration: "3 jours",
    location: "CAPEC, Université Félix Houphouët-Boigny",
    participants: "30 places",
    level: "Intermédiaire",
    trainer: "Dr. Marie Koné",
    image: "/placeholder.svg",
  },
]

const testimonials = [
  {
    id: "test1",
    text: "La formation en économétrie appliquée m'a permis d'acquérir des compétences précieuses que j'utilise quotidiennement dans mon travail d'analyste. Les formateurs étaient excellents et le contenu très pertinent.",
    name: "Konan Kouassi",
    position: "Analyste économique, Ministère de l'Économie",
    photo: "/placeholder.svg",
  },
  {
    id: "test2",
    text: "Le programme doctoral du CAPEC a été déterminant dans mon parcours académique. L'encadrement personnalisé et l'accès aux ressources de recherche m'ont permis de mener à bien ma thèse dans les meilleures conditions.",
    name: "Aminata Bamba",
    position: "Doctorante en économie",
    photo: "/placeholder.svg",
  },
]

