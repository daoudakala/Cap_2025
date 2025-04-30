import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Actualités</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Restez informé des derniers événements, annonces et activités du CAPEC.
          </p>
        </div>

        {/* Featured News */}
        <div className="mt-12">
          <Card className="overflow-hidden border-l-4 border-l-ci-orange">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src="/placeholder.svg"
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold">{featuredNews.title}</h2>
                  <p className="text-muted-foreground">{featuredNews.excerpt}</p>
                  <Link href={`/actualites/${featuredNews.id}`}>
                    <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                      Lire l'article complet
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* News List */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Toutes les actualités</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span className="sr-only">Page précédente</span>
            </Button>
            <Button variant="outline" size="sm" className="font-medium bg-ci-orange text-white border-ci-orange">
              1
            </Button>
            <Button variant="outline" size="sm" className="text-muted-foreground">
              2
            </Button>
            <Button variant="outline" size="sm" className="text-muted-foreground">
              3
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Page suivante</span>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function NewsCard({ news } : { news: { id: string; title: string; excerpt: string; date: string; image?: string } }) {
  return (
    <Card className="overflow-hidden">
      {news.image && (
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            width={600}
            height={340}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{news.date}</span>
          </div>
          <h3 className="font-bold">{news.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{news.excerpt}</p>
          <div className="pt-2">
            <Link href={`/actualites/${news.id}`}>
              <Button variant="link" className="p-0 h-auto">
                Lire plus
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with updated image placeholders
const featuredNews = {
  id: "1",
  title: "Conférence internationale sur les politiques économiques post-pandémie",
  excerpt:
    "Le CAPEC organise une conférence internationale réunissant des experts de renommée mondiale pour discuter des stratégies économiques dans l'ère post-pandémie. L'événement se tiendra les 15 et 16 mars 2023 et accueillera des intervenants de plus de 15 pays.",
  date: "20 février 2023",
}

const newsList = [
  {
    id: "2",
    title: "Nouveau partenariat avec l'Université de Paris-Saclay",
    excerpt:
      "Le CAPEC est fier d'annoncer un nouveau partenariat de recherche avec l'Université de Paris-Saclay pour étudier les impacts économiques du changement climatique.",
    date: "5 février 2023",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Publication du rapport annuel sur l'état de l'économie",
    excerpt:
      "Le CAPEC vient de publier son rapport annuel analysant les tendances économiques de l'année écoulée et présentant des perspectives pour l'année à venir.",
    date: "20 janvier 2023",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Séminaire de formation sur l'analyse des données économiques",
    excerpt:
      "Le CAPEC organise un séminaire de formation de trois jours sur les méthodes avancées d'analyse des données économiques à destination des chercheurs et analystes.",
    date: "10 janvier 2023",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Recrutement de nouveaux chercheurs",
    excerpt:
      "Dans le cadre de son expansion, le CAPEC lance une campagne de recrutement pour intégrer de nouveaux chercheurs spécialisés en économie du développement et en économie environnementale.",
    date: "15 décembre 2022",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Participation au Forum Économique Mondial",
    excerpt:
      "Une délégation du CAPEC a participé au Forum Économique Mondial où elle a présenté ses travaux sur les stratégies de développement inclusif.",
    date: "5 décembre 2022",
    image: "/placeholder.svg",
  },
  {
    id: "7",
    title: "Lancement d'un nouveau programme de recherche sur l'économie verte",
    excerpt:
      "Le CAPEC lance un ambitieux programme de recherche sur l'économie verte et la transition écologique, financé par une subvention internationale.",
    date: "20 novembre 2022",
    image: "/placeholder.svg",
  },
  {
    id: "8",
    title: "Atelier sur les politiques d'inclusion financière",
    excerpt:
      "Le CAPEC a organisé un atelier réunissant des acteurs du secteur financier et des décideurs politiques pour discuter des stratégies d'inclusion financière.",
    date: "10 novembre 2022",
    image: "/placeholder.svg",
  },
  {
    id: "9",
    title: "Visite d'une délégation de la Banque Mondiale",
    excerpt:
      "Une délégation de la Banque Mondiale a visité le CAPEC pour discuter de collaborations potentielles sur des projets de développement économique.",
    date: "25 octobre 2022",
    image: "/placeholder.svg",
  },
]

