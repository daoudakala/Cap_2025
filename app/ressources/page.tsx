import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, FileText, Search, GraduationCap, BarChart } from "lucide-react"

export default function RessourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ressources</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez l'ensemble des ressources du CAPEC, incluant nos recherches, publications et programmes de
            formation.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?text=Ressources+du+CAPEC&height=300&width=1200"
            alt="Ressources du CAPEC"
            width={1200}
            height={300}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Centre de ressources</h2>
              <p>
                Accédez à l'ensemble de nos ressources en matière de recherche, publications et formations pour
                approfondir vos connaissances.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ResourceCard
            icon={<BarChart className="h-12 w-12 text-ci-orange" />}
            title="Recherches"
            description="Découvrez nos axes de recherche, projets en cours et principales réalisations dans le domaine de l'analyse économique."
            href="/recherches"
            color="orange"
            image="/placeholder.svg?text=Recherche+Économique&height=200&width=400"
          />

          <ResourceCard
            icon={<FileText className="h-12 w-12 text-ci-green" />}
            title="Publications"
            description="Consultez nos travaux de recherche, rapports, notes de politique et autres publications académiques."
            href="/publications"
            color="green"
            image="/placeholder.svg?text=Publications+Académiques&height=200&width=400"
          />

          <ResourceCard
            icon={<GraduationCap className="h-12 w-12 text-ci-orange" />}
            title="Formations"
            description="Découvrez nos programmes de formation pour renforcer vos capacités en analyse économique et recherche appliquée."
            href="/formations"
            color="orange"
            image="/placeholder.svg?text=Formation+Académique&height=200&width=400"
          />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Recherche de ressources</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="search"
                  placeholder="Rechercher par mot-clé, auteur, thème..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ci-orange focus:border-transparent"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-orange-100 text-ci-orange px-3 py-1 rounded-full">Macroéconomie</span>
                <span className="text-sm bg-green-100 text-ci-green px-3 py-1 rounded-full">Développement durable</span>
                <span className="text-sm bg-orange-100 text-ci-orange px-3 py-1 rounded-full">
                  Politiques publiques
                </span>
                <span className="text-sm bg-green-100 text-ci-green px-3 py-1 rounded-full">Inclusion financière</span>
                <span className="text-sm bg-orange-100 text-ci-orange px-3 py-1 rounded-full">Économie agricole</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Ressources populaires</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{resource.date}</span>
                      <span className="text-xs bg-orange-100 text-ci-orange px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="font-bold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{resource.excerpt}</p>
                    <div className="pt-2">
                      <Link href={resource.href}>
                        <Button variant="link" className="p-0 h-auto text-ci-green hover:text-green-700">
                          Consulter
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
  image: string;
}

function ResourceCard({ icon, title, description, href, color, image }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="relative aspect-video w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col h-full">
        <div className={`p-3 rounded-full bg-${color}-100 self-start mb-4`}>{icon}</div>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <Link href={href} className="mt-auto">
          <Button className={`bg-ci-${color} hover:bg-${color}-600 text-white w-full`}>
            Explorer
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
//</Link>

// Sample data
const popularResources = [
  {
    id: "1",
    title: "Impact des politiques fiscales sur la croissance économique",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme.",
    date: "15 février 2023",
    type: "Publication",
    href: "/publications/1",
    image: "/placeholder.svg?text=Politiques+Fiscales&height=340&width=600",
  },
  {
    id: "2",
    title: "Évaluation d'impact des politiques d'inclusion financière",
    excerpt:
      "Ce projet vise à évaluer l'impact des différentes politiques d'inclusion financière sur l'accès aux services financiers.",
    date: "10 janvier 2023",
    type: "Recherche",
    href: "/recherches/projets/p1",
    image: "/placeholder.svg?text=Inclusion+Financière&height=340&width=600",
  },
  {
    id: "3",
    title: "Formation en économétrie appliquée",
    excerpt: "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants.",
    date: "5 juin 2023",
    type: "Formation",
    href: "/formations/econometrie",
    image: "/placeholder.svg?text=Économétrie+Appliquée&height=340&width=600",
  },
]

