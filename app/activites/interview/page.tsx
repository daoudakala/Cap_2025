import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Video, Mic, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InterviewPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interviews & Questions</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les interviews et interventions médiatiques des chercheurs du CAPEC sur les questions économiques
            d'actualité.
          </p>
        </div>

        <Tabs defaultValue="interviews" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="debats">Débats & Tables rondes</TabsTrigger>
            <TabsTrigger value="questions">Questions fréquentes</TabsTrigger>
          </TabsList>
          <TabsContent value="interviews" className="mt-6">
            <div className="space-y-6">
              {interviews.map((interview) => (
                <InterviewCard key={interview.id} interview={interview} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="debats" className="mt-6">
            <div className="space-y-6">
              {debats.map((debat) => (
                <DebatCard key={debat.id} debat={debat} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="questions" className="mt-6">
            <div className="space-y-8">
              {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Demande d'interview</h2>
              <p className="text-muted-foreground">
                Vous êtes journaliste ou représentant d'une organisation et souhaitez interviewer un chercheur du CAPEC
                ?
              </p>
            </div>
            <Button className="bg-ci-orange hover:bg-orange-600 text-white">
              Contactez-nous
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function InterviewCard({ interview }: { interview: any })  {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 relative aspect-video">
          <Image src={interview.image || "/placeholder.svg"} alt={interview.title} fill className="object-cover" />
          {interview.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-ci-orange/80 flex items-center justify-center">
                <Video className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
          {interview.type === "audio" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-ci-green/80 flex items-center justify-center">
                <Mic className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex items-center text-sm text-ci-orange mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{interview.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{interview.title}</h3>
          <p className="text-muted-foreground mb-4">{interview.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 text-ci-green mr-2" />
              <span>
                <span className="font-medium">Intervenant:</span> {interview.speaker}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Média:</span> {interview.media}
            </div>
          </div>
          <div className="mt-4">
            <Button className="bg-ci-green hover:bg-green-700 text-white">
              {interview.type === "video" ? "Regarder la vidéo" : "Écouter l'audio"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function DebatCard({ debat }  : { debat: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 relative aspect-video">
          <Image src={debat.image || "/placeholder.svg"} alt={debat.title} fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-ci-orange/80 flex items-center justify-center">
              <Video className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-6">
          <div className="flex items-center text-sm text-ci-orange mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{debat.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{debat.title}</h3>
          <p className="text-muted-foreground mb-4">{debat.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 text-ci-green mr-2" />
              <span>
                <span className="font-medium">Participants:</span> {debat.participants}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Organisateur:</span> {debat.organizer}
            </div>
          </div>
          <div className="mt-4">
            <Button className="bg-ci-green hover:bg-green-700 text-white">Regarder le débat</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function QuestionCard({ question }  : { question: any }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{question.question}</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={question.expert.photo || "/placeholder.svg"}
                alt={question.expert.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center">
                <p className="font-bold">{question.expert.name}</p>
                <span className="text-sm text-muted-foreground ml-2">{question.expert.title}</span>
              </div>
              <p className="mt-2 text-muted-foreground">{question.answer}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const interviews = [
  {
    id: "int1",
    title: "Les défis économiques post-COVID en Côte d'Ivoire",
    description:
      "Interview du Dr. Amadou Diallo sur les défis économiques auxquels fait face la Côte d'Ivoire après la pandémie de COVID-19 et les stratégies de relance.",
    date: "15 mars 2023",
    speaker: "Dr. Amadou Diallo, Directeur du CAPEC",
    media: "RTI (Radio Télévision Ivoirienne)",
    type: "video",
    image: "/placeholder.svg",
  },
  {
    id: "int2",
    title: "L'impact de l'inflation sur les ménages ivoiriens",
    description:
      "Dr. Marie Koné analyse l'impact de la hausse des prix sur le pouvoir d'achat des ménages ivoiriens et propose des mesures pour atténuer ses effets.",
    date: "10 février 2023",
    speaker: "Dr. Marie Koné, Directrice Adjointe du CAPEC",
    media: "Radio France Internationale (RFI)",
    type: "audio",
    image: "/placeholder.svg",
  },
  {
    id: "int3",
    title: "Les enjeux de l'intégration économique régionale",
    description:
      "Interview de Dr. Jean Touré sur les opportunités et défis de l'intégration économique en Afrique de l'Ouest et son impact sur l'économie ivoirienne.",
    date: "5 janvier 2023",
    speaker: "Dr. Jean Touré, Chercheur Senior au CAPEC",
    media: "Jeune Afrique",
    type: "video",
    image: "/placeholder.svg",
  },
]

const debats = [
  {
    id: "deb1",
    title: "Débat sur les politiques fiscales et la croissance économique",
    description:
      "Table ronde sur l'impact des différentes politiques fiscales sur la croissance économique à long terme en Côte d'Ivoire.",
    date: "20 avril 2023",
    participants:
      "Dr. Amadou Diallo (CAPEC), Prof. Konan Kouassi (Université FHB), M. Traoré Bakary (Ministère des Finances)",
    organizer: "RTI",
    image: "/placeholder.svg",
  },
  {
    id: "deb2",
    title: "L'avenir de l'agriculture ivoirienne face au changement climatique",
    description:
      "Débat sur les défis et opportunités pour l'agriculture ivoirienne dans un contexte de changement climatique et les stratégies d'adaptation.",
    date: "15 mars 2023",
    participants: "Dr. Fatou Sow (CAPEC), Dr. Ouattara Ibrahim (CNRA), Mme Bamba Aminata (Ministère de l'Agriculture)",
    organizer: "Africa 24",
    image: "/placeholder.svg",
  },
  {
    id: "deb3",
    title: "Table ronde sur l'inclusion financière et la réduction de la pauvreté",
    description:
      "Discussion sur le rôle de l'inclusion financière dans la réduction de la pauvreté et les politiques à mettre en œuvre pour favoriser l'accès aux services financiers.",
    date: "10 février 2023",
    participants: "Dr. Paul Mensah (CAPEC), M. Koné Seydou (BCEAO), Mme Diallo Fatoumata (Microfinance)",
    organizer: "Business 24",
    image: "/placeholder.svg",
  },
]

const questions = [
  {
    id: "q1",
    question: "Quelles sont les perspectives économiques pour la Côte d'Ivoire en 2023 ?",
    answer:
      "Les perspectives économiques pour la Côte d'Ivoire en 2023 restent globalement positives malgré un contexte international incertain. Nous prévoyons une croissance du PIB d'environ 6,5%, soutenue par les investissements dans les infrastructures, la bonne tenue du secteur agricole et le dynamisme du secteur tertiaire. Toutefois, des défis persistent, notamment l'inflation importée, les tensions sur les chaînes d'approvisionnement et la nécessité d'une croissance plus inclusive. Les politiques de diversification économique et de transformation structurelle seront cruciales pour maintenir cette dynamique positive.",
    expert: {
      name: "Dr. Amadou Diallo",
      title: "Directeur du CAPEC",
      photo: "/placeholder.svg",
    },
  },
  {
    id: "q2",
    question: "Quel est l'impact de la hausse des taux d'intérêt sur l'économie ivoirienne ?",
    answer:
      "La hausse des taux d'intérêt a plusieurs implications pour l'économie ivoirienne. D'une part, elle renchérit le coût du crédit, ce qui peut freiner les investissements privés et la consommation des ménages. D'autre part, elle augmente le service de la dette publique, réduisant ainsi la marge de manœuvre budgétaire de l'État. Cependant, cette hausse peut aussi contribuer à contenir l'inflation et à stabiliser la monnaie. Pour minimiser les effets négatifs, il est important de mettre en œuvre des politiques ciblées pour soutenir les secteurs prioritaires et les populations vulnérables, tout en maintenant une gestion prudente des finances publiques.",
    expert: {
      name: "Dr. Marie Koné",
      title: "Directrice Adjointe du CAPEC",
      photo: "/placeholder.svg",
    },
  },
  {
    id: "q3",
    question: "Comment améliorer l'inclusion financière en zones rurales ?",
    answer:
      "L'amélioration de l'inclusion financière en zones rurales nécessite une approche multidimensionnelle. Premièrement, il faut développer les infrastructures financières de proximité, comme les points de service mobiles et les agents bancaires. Deuxièmement, les solutions de finance digitale, notamment le mobile money, offrent un potentiel considérable pour atteindre les populations rurales. Troisièmement, l'éducation financière est essentielle pour permettre aux populations rurales de comprendre et d'utiliser efficacement les services financiers. Enfin, des produits financiers adaptés aux besoins spécifiques des agriculteurs et des micro-entrepreneurs ruraux doivent être développés, comme les crédits saisonniers, l'assurance agricole et les produits d'épargne flexibles.",
    expert: {
      name: "Dr. Jean Touré",
      title: "Chercheur Senior au CAPEC",
      photo: "/placeholder.svg",
    },
  },
]

