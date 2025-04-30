import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ReferencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quelques Références</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez nos partenaires et collaborateurs qui nous font confiance pour nos expertises en analyse
            économique et en recherche appliquée.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8">Institutions gouvernementale</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nationalInstitutions.map((institution) => (
              <ReferenceCard key={institution.id} reference={institution} />
            ))}
          </div>
        </div>

      

       
      </div>
      <Footer />
    </div>
  )
}

function ReferenceCard({ reference }: { reference: { id: string; name: string; type: string; logo?: string } }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 mb-4">
        <Image src={reference.logo || "/placeholder.svg"} alt={reference.name} fill className="object-contain" />
      </div>
      <h3 className="font-medium text-sm">{reference.name}</h3>
      <p className="text-xs text-muted-foreground">{reference.type}</p>
    </div>
  )
}

// Sample data
const nationalInstitutions = [
  {
    id: "ni1",
    name: "Bureau national d'études techniques et de développement",
    type: "Institution gouvernementale",
    logo: "/images/partenairecapec/logobent.jpg",
  },
  {
    id: "ni2",
    name: "Université Felix Houphouet Boigny",
    type: "Institution gouvernementale",
    logo: "/images/partenairecapec/logouniv.jpg",
  },
  {
    id: "ni3",
    name: "Centre Ivoirien Recherches Economiques",
    type: "Institution Nationale",
    logo: "/images/partenairecapec/logocires.jpg",
  },
  {
    id: "ni4",
    name: " Fondation pour le renforcement des capacités en Afrique",
    type: "organisation internationale indépendante",
    logo: "/images/partenairecapec/acbflogo.png",
  },


 
]


