import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Calendar, BookOpen, Globe, Award } from "lucide-react"

export default function CapecEnChiffresPage() {
  const tableData = [
    { year: "2002", travaux: 5, etudes: 3, formations: 2, personnes: "-", assistance: 1 },
    { year: "2003", travaux: 21, etudes: 2, formations: 1, personnes: 37, assistance: 2 },
    { year: "2004", travaux: 16, etudes: 1, formations: 1, personnes: 30, assistance: 2 },
    { year: "2005", travaux: 16, etudes: 0, formations: 3, personnes: 64, assistance: 2 },
    { year: "2006", travaux: 11, etudes: 0, formations: 0, personnes: 0, assistance: 1 },
    { year: "2007", travaux: 7, etudes: 2, formations: 2, personnes: 60, assistance: 2 },
    { year: "2008", travaux: 8, etudes: 2, formations: 9, personnes: 295, assistance: 3 },
    { year: "2009", travaux: 9, etudes: 4, formations: 8, personnes: 270, assistance: 2 },
    { year: "2010", travaux: 9, etudes: 8, formations: 6, personnes: 182, assistance: 6 },
    { year: "2011", travaux: 2, etudes: 8, formations: 3, personnes: 101, assistance: 3 },
    { year: "2012", travaux: 5, etudes: 10, formations: 5, personnes: 134, assistance: 2 },
    { year: "2002-2012", travaux: 109, etudes: 40, formations: 40, personnes: 1173, assistance: 26 },
    { year: "2013", travaux: 15, etudes: 4, formations: 7, personnes: 64, assistance: 3 },
    { year: "2014", travaux: 8, etudes: 10, formations: 0, personnes: 0, assistance: 2 },
    { year: "2015", travaux: 6, etudes: 16, formations: 6, personnes: 16, assistance: 4 },
    { year: "2016", travaux: 6, etudes: 25, formations: 6, personnes: 54, assistance: 3 },
    { year: "2017", travaux: 12, etudes: 11, formations: 2, personnes: 41, assistance: 4 },
    { year: "2018", travaux: 4, etudes: 14, formations: 7, personnes: 141, assistance: 1 },
    { year: "2019", travaux: 8, etudes: 12, formations: 1, personnes: 7, assistance: 0 },
    { year: "2002-2019", travaux: 168, etudes: 132, formations: 69, personnes: 1496, assistance: 43 },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">La CAPEC en Chiffres</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les chiffres clés qui illustrent l'impact et les réalisations du CAPEC depuis sa création.
          </p>
        </div>
        <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tableau des Activités (2002-2019)
        </h2>
        <div className="w-24 h-1 bg-ci-orange mx-auto"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Résumé des activités du CAPEC, incluant les travaux de recherche, études, formations et assistance aux institutions.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg ">
        <table className="w-full bg-white rounded-xl">
          {/* Table Header */}
          <thead>
            <tr className="bg-ci-orange/10 text-left text-gray-900">
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Année</th>
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Travaux des chercheurs</th>
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Études</th>
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Nombre de formations</th>
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Nombre de personnes formées</th>
              <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Assistance aux institutions nationales et internationales</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-gray-200 ${
                  row.year.includes("2002-") ? "bg-gray-100 font-semibold" : ""
                } hover:bg-gray-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-gray-900">{row.year}</td>
                <td className="px-6 py-4 text-gray-700">{row.travaux}</td>
                <td className="px-6 py-4 text-gray-700">{row.etudes}</td>
                <td className="px-6 py-4 text-gray-700">{row.formations}</td>
                <td className="px-6 py-4 text-gray-700">{row.personnes}</td>
                <td className="px-6 py-4 text-gray-700">{row.assistance}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div> 
     
       </div>
       <Footer />
    </div>
  )
}

