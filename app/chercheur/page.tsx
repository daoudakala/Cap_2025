import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MailIcon, Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaFacebook as FacebookIcon, FaTwitter as TwitterIcon, FaLinkedin as LinkedInIcon, FaGoogle as GoogleIcon } from 'react-icons/fa';

export default function ChercheurPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Chercheurs</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez l'équipe de chercheurs de la CAPEC, leurs domaines d'expertise et leurs publications.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="senior" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorResearchers.map((researcher) => (
                <ResearcherCard key={researcher.id} researcher={researcher} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="associes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ajoutez ici les chercheurs associés si nécessaire */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function ResearcherCard({ researcher }: { researcher: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white rounded-lg border border-gray-200 group">
      {/* Photo en haut */}
      <div className="relative w-full h-48">
        <Image
          src={researcher.photo || "/placeholder.svg"}
          alt={researcher.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Bloc inférieur avec effet au survol */}
      <div className="p-4 group-hover:bg-ci-orange/10 transition-colors duration-200">
        {/* Nom - Changement de couleur au survol */}
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-ci-orange transition-colors">
          {researcher.name}
        </h3>
        
        {/* Profession */}
        <p className="text-gray-600 text-sm mt-1 group-hover:text-ci-orange transition-colors">
          {researcher.title}
        </p>
        
        {/* trait de séparation */}
        <div className="w-full h-px bg-gray-200 my-3"></div>

        {/* Icônes  */}
       {/* <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-ci-orange transition-colors">
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-ci-orange transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-ci-orange transition-colors">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-ci-orange transition-colors">
            <MailIcon className="w-5 h-5" />
          </a>
        </div>*/}
        
        {/* Icônes expertise - Version corrigée */}
        {researcher.expertise && researcher.expertise.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {researcher.expertise.map((exp: string, index: number) => (
              <div key={`${researcher.id}-expertise-${index}`} className="flex flex-col items-center" title={exp}>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-ci-orange/20 flex items-center justify-center transition-colors">
                  <span className="text-xs text-gray-500 group-hover:text-ci-orange transition-colors">
                    {exp[0].toUpperCase()}
                  </span>
                </div>
                <span className="text-xs mt-1 text-gray-500 group-hover:text-ci-orange">
                  {exp.length > 8 ? `${exp.substring(0, 6)}...` : exp}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {/* Tags expertise */}
        {researcher.expertise && researcher.expertise.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {researcher.expertise.map((exp: string, index: number) => (
              <span 
                key={`${researcher.id}-tag-${index}`} 
                className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700 group-hover:bg-ci-orange/20 group-hover:text-ci-orange transition-colors"
              >
                {exp}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

// Sample data
const seniorResearchers = [
  {
    id: "1",
    name: "Prof AHOURE ALBAN ALPHONSE EMMANUEL",
    title: "Directeur de la CAPEC",
    photo: "/images/profahourealbanalphonseemmanueldirecteurdelacapec.jpg",
    expertise: ["Économie", "Gestion", "Politiques publiques"]
  },
  {
    id: "2",
    name: "Prof KIMOU ASSI JOSE CARLOS",
    title: "Directeur Adjoint de la CAPEC",
    photo: "/images/directeuradjointdelacapec.jpg",
    expertise: ["Macroéconomie", "Développement", "Analyse économique"]
  },
  {
    id: "3",
    name: "Dr KRAMO GERMAIN",
    title: "Chercheur- Responsable de la Gestion administrative",
    photo: "/images/chercheurresponsabledelagestionadministrative.jpg",
    expertise: ["Administration", "Gestion", "Organisation"]
  }
]

const allResearchers = [...seniorResearchers]