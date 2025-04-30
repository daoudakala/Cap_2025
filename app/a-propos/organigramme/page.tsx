import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function OrganigrammePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Organigramme</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez la structure organisationnelle du CAPEC et les différentes équipes qui composent notre centre de
            recherche.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8 text-center">Structure organisationnelle du CAPEC</h2>

            {/* Organigramme visuel */}
            <div className="relative w-full h-[600px] mb-8 hidden md:block">
              <Image
                src="/images/organigramme_CAPEC.png"
                alt="Organigramme du CAPEC"
                fill
                className="object-contain"
              />
            </div>

            {/* Version mobile de l'organigramme */}
            <div className="space-y-6 md:hidden">
              <div className="bg-ci-orange text-white p-4 rounded-lg text-center">
                <h3 className="font-bold">Direction</h3>
                <p>Dr. Amadou aminata - Directeur</p>
                <p>Dr. Marie Koné - Directrice Adjointe</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ci-green text-white p-4 rounded-lg text-center">
                  <h3 className="font-bold">Administration</h3>
                  <p>Gestion administrative</p>
                  <p>Finances</p>
                </div>
                <div className="bg-ci-green text-white p-4 rounded-lg text-center">
                  <h3 className="font-bold">Communication</h3>
                  <p>Relations publiques</p>
                  <p>Publications</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Macroéconomie</h3>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Développement</h3>
                </div>
                <div className="bg-gray-200 p-3 rounded-lg text-center text-sm">
                  <h3 className="font-bold">Équipe Politiques Sociales</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-orange">Direction</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Amadou Diallo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr. YEO Nahoua</p>
                    <p className="text-sm text-muted-foreground">Directeur de Cabinet du Ministère du Plan</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Marie Koné"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. ADOPO Fiacre</p>
                    <p className="text-sm text-muted-foreground"> Directeur des Politiques et Synthèses Budgétaires (DGBF)</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/22.jpg?text=MK&height=50&width=50"
                      alt="Dr. Marie Koné"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr DIARRA Ibrahim</p>
                    <p className="text-sm text-muted-foreground">Directeur du CIRES</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-green">Administration</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=AB&height=50&width=50"
                      alt="Aïcha Bamba"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Dr ABOUA Gustave</p>
                    <p className="text-sm text-muted-foreground">
                      Conseiller Economique, Social, Environnemental et Culturel
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=SK&height=50&width=50"
                      alt="Souleymane Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Prof. BAMBA N’Galadjo</p>
                    <p className="text-sm text-muted-foreground"> 
                    Conseiller Ministère de l’Economie et des Finances (MEF)
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=SK&height=50&width=50"
                      alt="Souleymane Konaté"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. NIANGO Guy</p>
                    <p className="text-sm text-muted-foreground"> 
                    Secrétaire du BNETD Représentant le Dg du BNETD
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-ci-orange">Communication</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=KA&height=50&width=50"
                      alt="Kofi Addo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Honorable DIABAGATE MAmah</p>
                    <p className="text-sm text-muted-foreground">
                    Commission des Affaires Economiques et Financières de l'Assemblée Nationale
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=FT&height=50&width=50"
                      alt="Fatou Traoré"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">M. TRA BI EMMANUEL</p>
                    <p className="text-sm text-muted-foreground">
                    Membre de la Commission des Affaires Economiques et Financières (Assemblée Nationale);
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?text=FT&height=50&width=50"
                      alt="Fatou Traoré"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Prof. BALLO ZIE</p>
                    <p className="text-sm text-muted-foreground">
                    Président de l'UFHB de Cocody
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div> */}
        <div className="mt-8 grid gap-8 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">ÉQUIPE DE DIRECTION</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. AHOURE Alban A.E.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. KIMOU Assi José Carlos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KRAMO Kouakou Germain</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">COMITÉ DE PILOTAGE</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr YEO Nahoua, Directeur de Cabinet du Ministère du Plan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Honorable DIABAGATÉ Mamah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr ABOUA Gustave</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. TRA BI Emmanuel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BALLO ZIE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BAMBA N’Galadjo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. ADOPO Fiacre</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. NIANGO Guy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr DIARRA Ibrahim</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">ÉQUIPE DES CHERCHEURS</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Prof. BEKE EHUITCHE TITE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr TRAORE NOHOUA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr BECHO ISABELLE EPSE N’DRI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KACOU KACOU YVES THIERRY</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr KOUADIO BONIFACE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr TOURE TALNAN</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Dr ASSOUM FEISSAL</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">PERSONNEL D'APPUI</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. NEZIT Denis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. MEL Trihji Juste S</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>KEI Taud Miguel Emmanuella</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>KADJO Balémy Tatiana</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>Mme NEUBA Augusta épse GOUEDAN</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. LAMOUA KOUAKOU KOUADIO AIME</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>M. BAYALA ALEXANDRE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-ci-orange"></div>
                  <span>YAOUA Antoinette</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
