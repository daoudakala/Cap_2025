import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Award, BookOpen } from "lucide-react"


export default function HistoriqueObjectifPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Historique et Objectif</h1>
          <div className="w-20 h-1 bg-ci-orange"></div>
        </div>

        <div className="grid gap-12 mt-12">
          {/* Section Historique */}
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 rounded-full bg-orange-100">
                <BookOpen className="h-6 w-6 text-ci-orange" />
              </div>
              <h2 className="text-2xl font-bold">Notre Histoire</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-ci-orange shadow-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    Née en 1992, dans un contexte de crise économique, la Cellule d'Analyse de Politiques Economiques du
                    Cires (CAPEC) est devenue fonctionnelle en 1993. Initialement financée principalement par la
                    Fondation pour le Renforcement des Capacités en Afrique (ACBF), et l'Etat Ivoirien, la création de
                    la CAPEC se justifiait par la nécessité d'apporter une assistance technique au Gouvernement dans la
                    quête de solutions à une croissance économique soutenue, favorable à la réduction de la pauvreté et
                    à celle de son incidence sur les populations ivoiriennes.
                  </p>
                </div>

                <h3 className="font-bold text-xl text-ci-orange mt-8 mb-4">
                  La mise en œuvre du Projet s'est opérée en trois grandes phases:
                </h3>

                <div className="">
                  {/* Phase 1 */}
                  <div className="relative z-10 flex items-start md:justify-center">
                    <div className="flex flex-col items-center md:w-1/2 md:pr-10 md:text-right">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ci-orange text-white font-bold shadow-md">
                        1
                      </div>
                      <div className="mt-4 bg-white p-5 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-ci-orange mr-4" />
                          <span className="font-bold text-ci-orange">1993 - 2003</span>
                        </div>
                        <h4 className="font-bold mb-2">Première phase</h4>
                        <p className="text-sm text-muted-foreground ">
                          La première phase qui a démarré en juin 1993, a pris fin en mai 2003. Elle a été jugée
                          encourageante et les résultats obtenus ont permis la mise en place d'une 2ème phase à travers
                          la signature d'un second accord de Don entre l'Etat de Côte d'Ivoire et l'ACBF.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative z-10 flex items-start md:justify-end">
                    <div className="flex flex-col items-center md:w-1/2 md:pl-10">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ci-green text-white font-bold shadow-md">
                        2
                      </div>
                      <div className="mt-4 bg-white p-5 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-ci-green mr-2" />
                          <span className="font-bold text-ci-green">2003 - 2007</span>
                        </div>
                        <h4 className="font-bold mb-2">Deuxième phase</h4>
                        <p className="text-sm text-muted-foreground">
                          L'objectif de la seconde phase était de renforcer les acquis de la phase I dans les domaines
                          du renforcement des capacités et de la gestion de la politique macroéconomique. Elle visait
                          aussi le renforcement de l'autonomie financière de la cellule et l'instauration d'un programme
                          de formation en direction du personnel d'appui et des chercheurs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative z-10 flex items-start md:justif-end">
                    <div className="flex flex-col items-center md:w-1/2 md:pr-10 md:text-right">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ci-orange text-white font-bold shadow-md">
                        3
                      </div>
                      <div className="mt-4 bg-white p-5 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-center mb-2 md:justify-end">
                          <Calendar className="h-4 w-4 text-ci-orange mr-2" />
                          <span className="font-bold text-ci-orange">2007 - 2013</span>
                        </div>
                        <h4 className="font-bold mb-2">Troisième phase</h4>
                        <p className="text-sm text-muted-foreground">
                          La troisième phase a débuté en juin 2007 et s'est achevée le 30 novembre 2013. L'évaluation de
                          cette phase réalisée par un Consultant confirme les tendances issues des premières évaluations
                          et met en évidence des impacts positifs non prévus par l'accord de don.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phase actuelle */}
                  <div className="relative z-10 flex items-start md:justify-center">
                    <div className="flex flex-col items-center md:w-1/2 md:pl-10">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-ci-green text-white font-bold shadow-md">
                        4
                      </div>
                      <div className="mt-4 bg-white p-5 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-ci-green mr-2" />
                          <span className="font-bold text-ci-green">2014 - Présent</span>
                        </div>
                        <h4 className="font-bold mb-2">Phase actuelle</h4>
                        <p className="text-sm text-muted-foreground">
                          A partir de Janvier 2014, les interventions de la CAPEC ont été inscrites dans une perspective
                          plus globale de l'appui aux acteurs économiques nationaux à travers le Programme Pays de
                          Renforcement des Capacités en Côte d'Ivoire (PPRC) dont l'accord de don a été signé le
                          mercredi 15 mai 2013.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="sticky top-14">
                  <div className="relative rounded-lg overflow-hidden shadow-xl mb-6">
                    <Image
                      src="/images/historiqueobjectif/equipedecherhcher.jpg"
                      alt="Histoire du CAPEC"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm font-medium">Plus de 30 ans d'expertise en analyse économique</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-ci-green shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-ci-green">Aujourd'hui</h4>
                    <p className="text-sm text-muted-foreground">
                      Après plus de 30 années d'activités ayant visé le renforcement des capacités des cadres de
                      l'administration publique, du secteur privé et de la société civile en élaboration et mise en
                      œuvre des politiques économiques, la Capec connait une mutation institutionnelle.
                    </p>
                    <div className="mt-4 flex items-center">
                      <Award className="h-5 w-5 text-ci-green mr-2" />
                      <p className="text-sm font-medium">
                        Une référence dans le domaine de l'analyse et de gestion des politiques macroéconomiques en Côte
                        d'Ivoire
                      </p>
                    </div>
                  </div>

                  {/* Moved Nos Objectifs Section */}
                  <div className="mt-8 ">
                    <h2 className="text-2xl font-bold mb-6 text-orange-400">Nos Objectifs</h2>
                    <div className="bg-gray-50 p-6 rounded-lg" >
                      <div className="grid gap-8 md:grid-cols-2 w-[630px]">
                        <div>
                          <h3 className="font-bold text-lg mb-4">Objectif Général</h3>
                          <p className="flex items-start">
                            La CAPEC a pour objectif de produire pour le compte de l'administration ivoirienne des travaux 
                            scientifiques destinés à éclairer la politique économique du gouvernement. Elle se veut 
                            également un cadre national de réflexion, de recherche, d'information et de conseil au 
                            service des institutions internationales, des opérateurs économiques et autres organisations 
                            professionnelles.
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-4">Objectifs spécifiques</h3>
                          <div className="space-y-4">
                            <ul className="list-disc pl-4 space-y-2">
                              <li>
                                Faire des études et recherches destinées à éclairer les décideurs et les groupes 
                                socio-économiques ivoiriens, en vue de renforcer les capacités nationales d'analyse 
                                de politique et du développement économique ;
                              </li>
                              <li>
                                Offrir aux agents économiques un cadre national de réflexion et d'animation scientifique 
                                favorisant le dialogue sur les grandes questions économiques d'intérêt pour la Côte d'Ivoire 
                                et pour la sous-région ;
                              </li>
                              <li>
                                Assurer la formation continue des cadres de l'Administration dans le domaine de l'analyse 
                                des politiques macroéconomiques et sectorielles.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}