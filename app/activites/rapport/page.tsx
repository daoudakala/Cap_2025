import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, ChevronRight } from "lucide-react"

export default function RapportActivitesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rapports d'Activités</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Consultez les rapports d'activités annuels et thématiques du CAPEC, présentant nos réalisations, projets et
            résultats.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Rapports annuels</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {annualReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Rapports thématiques</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {thematicReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Archives des rapports</h2>
              <p className="text-muted-foreground">
                Accédez à notre base de données complète des rapports d'activités depuis la création du CAPEC.
              </p>
            </div>
            <Link href="/activites/rapport/archives">
              <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                Consulter les archives
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Rapports de projets spécifiques</h2>
          <div className="space-y-6">
            {projectReports.map((report) => (
              <Card key={report.id}>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 relative aspect-video md:aspect-square">
                    <Image
                      src={report.image || "/placeholder.svg"}
                      alt={report.title}
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex items-center text-sm text-ci-orange mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{report.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                    <p className="text-muted-foreground mb-4">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Partenaires:</span> {report.partners}
                      </div>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ReportCard({ report }  : { report: any }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] w-full">
        <Image src={report.cover || "/placeholder.svg"} alt={report.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-ci-orange mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{report.year}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{report.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{report.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-ci-green mr-1" />
            <span className="text-sm text-muted-foreground">{report.pages} pages</span>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const annualReports = [
  {
    id: "ar1",
    title: "Rapport d'activités 2022",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2022.",
    year: "2022",
    pages: 48,
    cover: "/placeholder.svg",
  },
  {
    id: "ar2",
    title: "Rapport d'activités 2021",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2021.",
    year: "2021",
    pages: 52,
    cover: "/placeholder.svg",
  },
  {
    id: "ar3",
    title: "Rapport d'activités 2020",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2020.",
    year: "2020",
    pages: 45,
    cover: "/placeholder.svg",
  },
  {
    id: "ar4",
    title: "Rapport d'activités 2019",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2019.",
    year: "2019",
    pages: 50,
    cover: "/placeholder.svg",
  },
  {
    id: "ar5",
    title: "Rapport d'activités 2018",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2018.",
    year: "2018",
    pages: 46,
    cover: "/placeholder.svg",
  },
  {
    id: "ar6",
    title: "Rapport d'activités 2017",
    description: "Synthèse des activités, projets et réalisations du CAPEC pour l'année 2017.",
    year: "2017",
    pages: 42,
    cover: "/placeholder.svg",
  },
]

const thematicReports = [
  {
    id: "tr1",
    title: "Rapport sur les activités de recherche",
    description: "Synthèse des projets de recherche menés par le CAPEC et leurs résultats.",
    year: "2022",
    pages: 36,
    cover: "/placeholder.svg",
  },
  {
    id: "tr2",
    title: "Rapport sur les activités de formation",
    description: "Présentation des programmes de formation et de renforcement des capacités.",
    year: "2022",
    pages: 28,
    cover: "/placeholder.svg",
  },
  {
    id: "tr3",
    title: "Rapport sur les partenariats et collaborations",
    description: "Aperçu des partenariats nationaux et internationaux du CAPEC.",
    year: "2022",
    pages: 32,
    cover: "/placeholder.svg",
  },
]

const projectReports = [
  {
    id: "pr1",
    title: "Évaluation d'impact des politiques d'inclusion financière",
    description:
      "Rapport final du projet d'évaluation des politiques d'inclusion financière en zones rurales, mené en collaboration avec la Banque Mondiale.",
    date: "Décembre 2022",
    partners: "Banque Mondiale, Ministère de l'Économie et des Finances",
    image: "/placeholder.svg",
  },
  {
    id: "pr2",
    title: "Analyse des chaînes de valeur agricoles",
    description:
      "Rapport du projet d'analyse des chaînes de valeur agricoles et leur contribution à la croissance économique en Côte d'Ivoire.",
    date: "Octobre 2022",
    partners: "FAO, Ministère de l'Agriculture",
    image: "/placeholder.svg",
  },
  {
    id: "pr3",
    title: "Impact économique de la digitalisation des services publics",
    description: "Étude sur l'impact économique et social de la digitalisation des services publics en Côte d'Ivoire.",
    date: "Juillet 2022",
    partners: "PNUD, Ministère de la Modernisation de l'Administration",
    image: "/placeholder.svg?text=Digitalisation+Services&height=300&width=400",
  },
]

