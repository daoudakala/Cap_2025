import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MotDuDirecteurPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mot du Directeur</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/directeurcapec.jpg"
                  alt="Dr. Amadou Diallo - Directeur du CAPEC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Prof. AHOURE Alban A.E.</h3>
                <p className="text-ci-orange">Directeur du CAPEC</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  <p>Docteur en Économie</p>
                  <p>Université Félix Houphouët-Boigny</p>
                  <p>Email: directeur@capec.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-xl font-medium text-foreground">Chers visiteurs, partenaires et collaborateurs,</p>
            <p>
              C'est avec un grand plaisir que je vous souhaite la bienvenue sur le site web de la Cellule d'Analyse de
              Politiques Économiques du CIRES (CAPEC). En tant que directeur, je suis honoré de vous présenter notre
              institution, ses missions et ses réalisations.
            </p>
            <p>
              Depuis sa création en 1998, la CAPEC s'est imposé comme un centre d'excellence en matière d'analyse
              économique et de recherche appliquée. Notre mission principale est de contribuer au développement
              économique et social à travers la recherche, l'analyse et la formulation de politiques économiques fondées
              sur des données probantes.
            </p>
            <p>
              Dans un monde en constante évolution, marqué par des défis économiques, sociaux et environnementaux
              complexes, le rôle des institutions de recherche comme la CAPEC est plus crucial que jamais. Nous nous
              efforçons de produire des analyses rigoureuses et pertinentes pour éclairer les décisions politiques et
              contribuer au débat public sur les enjeux économiques majeurs.
            </p>
            <p>
              Notre équipe, composée de chercheurs et d'analystes hautement qualifiés, travaille sur un large éventail
              de thématiques, notamment la macroéconomie, le développement durable, les politiques sociales, l'économie
              internationale et l'intégration régionale. Nous accordons une importance particulière à la formation de la
              prochaine génération d'économistes et d'analystes, contribuant ainsi au renforcement des capacités
              nationales et régionales.
            </p>
            <p>
              La CAPEC entretient des partenariats fructueux avec de nombreuses institutions nationales et
              internationales, ce qui nous permet d'enrichir nos perspectives et d'élargir notre champ d'action. Ces
              collaborations sont essentielles pour relever les défis économiques actuels et futurs.
            </p>
            <p>
              Je vous invite à explorer notre site web pour découvrir nos publications, nos activités et nos projets en
              cours. N'hésitez pas à nous contacter pour toute question ou proposition de collaboration.
            </p>
            <p className="text-xl font-medium text-foreground">
              Je vous remercie de votre intérêt pour la CAPEC et vous souhaite une excellente visite.
            </p>
            <div className="pt-4">
              <p className="font-medium">Prof. AHOURE Alban A.E.</p>
              <p>Directeur de la CAPEC</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

