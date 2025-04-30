"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Search } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")

  // Filter publications based on search query and filters
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || pub.category === categoryFilter

    const pubYear = new Date(pub.date).getFullYear().toString()
    const matchesYear = yearFilter === "all" || pubYear === yearFilter

    return matchesSearch && matchesCategory && matchesYear
  })

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Études & Publications</h1>
        <p className="text-muted-foreground md:text-xl max-w-[800px]">
          Découvrez nos travaux de recherche, rapports, notes de politique et autres publications.
        </p>
      </div>

      {/* Banner Image */}
      <div className="mt-8 relative rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="Centre de documentation du CAPEC"
          width={1200}
          height={300}
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="p-8 text-white max-w-md">
            <h2 className="text-2xl font-bold mb-2">Centre de documentation</h2>
            <p>Accédez à notre bibliothèque complète d'études et de publications sur les politiques économiques.</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher une publication..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[200px] border-ci-green focus:ring-ci-orange">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les catégories</SelectItem>
              <SelectItem value="rapport">Rapports</SelectItem>
              <SelectItem value="etude">Études</SelectItem>
              <SelectItem value="policy-brief">Notes de politique</SelectItem>
              <SelectItem value="article">Articles académiques</SelectItem>
            </SelectContent>
          </Select>
          <Select value={yearFilter} onValueChange={setYearFilter}>
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

      {/* Publications Grid */}
      <div className="mt-8">
        {filteredPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucune publication ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

function PublicationCard({ publication }: { publication: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={publication.coverImage || "/placeholder.svg"}
          alt={publication.title}
          width={600}
          height={340}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{publication.date}</span>
            <span className="text-xs bg-orange-100 text-ci-orange px-2 py-1 rounded-full">
              {getCategoryLabel(publication.category)}
            </span>
          </div>
          <h3 className="font-bold">{publication.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{publication.excerpt}</p>
          <div className="pt-2">
            <Link href={`/etudes-publications/${publication.id}`}>
              <Button variant="link" className="p-0 h-auto text-ci-green hover:text-green-700">
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

interface CategoryLabels {
  [key: string]: string;
}

function getCategoryLabel(category: string): string {
  const categories: CategoryLabels = {
    rapport: "Rapport",
    etude: "Étude",
    "policy-brief": "Note de politique",
    article: "Article académique",
  };
  return categories[category] || category;
}

// Sample data with updated image placeholders
const publications = [
  {
    id: "1",
    title: "Impact des politiques fiscales sur la croissance économique",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme et propose des recommandations pour optimiser le système fiscal.",
    date: "15 février 2023",
    category: "etude",
    coverImage: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Analyse du marché du travail et des inégalités salariales",
    excerpt:
      "Une étude approfondie des dynamiques du marché du travail et des facteurs contribuant aux inégalités salariales dans différents secteurs économiques.",
    date: "10 janvier 2023",
    category: "rapport",
    coverImage: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Évaluation des politiques de développement durable",
    excerpt:
      "Cette publication examine l'efficacité des politiques de développement durable et propose des recommandations pour améliorer leur mise en œuvre et leur impact environnemental et social.",
    date: "5 décembre 2022",
    category: "policy-brief",
    coverImage: "/placeholder.svg",
  },
  {
    id: "4",
    title: "L'impact économique de la digitalisation des services publics",
    excerpt:
      "Ce rapport analyse les bénéfices économiques et sociaux de la transformation numérique des services publics et identifie les obstacles à surmonter.",
    date: "20 octobre 2022",
    category: "rapport",
    coverImage: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Politiques monétaires et stabilité macroéconomique",
    excerpt:
      "Une analyse des effets des politiques monétaires sur la stabilité des prix et la croissance économique dans un contexte d'incertitude globale.",
    date: "15 septembre 2022",
    category: "article",
    coverImage: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Stratégies d'inclusion financière pour les zones rurales",
    excerpt:
      "Cette étude examine les différentes approches pour améliorer l'accès aux services financiers dans les zones rurales et leur impact sur le développement local.",
    date: "5 août 2022",
    category: "etude",
    coverImage: "/placeholder.svg",
  },
  {
    id: "7",
    title: "Analyse comparative des systèmes de protection sociale",
    excerpt:
      "Ce rapport compare l'efficacité des différents modèles de protection sociale et leur adaptabilité aux contextes socio-économiques variés.",
    date: "10 juillet 2022",
    category: "rapport",
    coverImage: "/placeholder.svg",
  },
  {
    id: "8",
    title: "Impact du changement climatique sur les économies agricoles",
    excerpt:
      "Cette note de politique analyse les conséquences économiques du changement climatique sur le secteur agricole et propose des mesures d'adaptation.",
    date: "15 juin 2022",
    category: "policy-brief",
    coverImage: "/placeholder.svg",
  },
  {
    id: "9",
    title: "Éducation et développement des compétences pour l'économie du futur",
    excerpt:
      "Une étude sur l'adéquation entre les systèmes éducatifs actuels et les besoins en compétences des économies en transformation rapide.",
    date: "20 mai 2022",
    category: "etude",
    coverImage: "/placeholder.svg",
  },
  {
    id: "10",
    title: "Analyse des flux commerciaux régionaux et opportunités d'intégration",
    excerpt:
      "Ce rapport examine les tendances des échanges commerciaux régionaux et identifie les opportunités pour renforcer l'intégration économique.",
    date: "10 avril 2022",
    category: "article",
    coverImage: "/placeholder.svg",
  },
  {
    id: "11",
    title: "Évaluation de l'impact des investissements directs étrangers",
    excerpt:
      "Cette étude analyse les effets des investissements directs étrangers sur la croissance économique, l'emploi et le transfert de technologies.",
    date: "15 mars 2022",
    category: "etude",
    coverImage: "/placeholder.svg",
  },
  {
    id: "12",
    title: "Politiques d'innovation et compétitivité économique",
    excerpt:
      "Un examen des politiques d'innovation et leur rôle dans le renforcement de la compétitivité économique nationale et internationale.",
    date: "20 février 2022",
    category: "policy-brief",
    coverImage: "/placeholder.svg",
  },
]

