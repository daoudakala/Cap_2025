
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, FileText, Calendar, Users, Camera } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { EventCarousel } from "@/components/carousel"
import { date } from "zod"



// Utilisation du composant
const carouselEvents = [
  { //bon
    title: "10e SOMMET DES THINKS TANK d'Afrique",
   date: "8 au 11 Octobre 2024",
    image: "/images/10esommetdesthinkstankdafriquev1.jpg", 
    learnMoreLink: "/activites/programme#event1",
    registerLink: "/activites/programme/inscription",
  },
  /*{
    title: "Dîner de gala pour le 30ème anniversaire de la CAPEC",
    //date: "9 octobre 2024",
    image: "/images/dinerdes30eanniversairedelacapec9octobre24.jpg",
    learnMoreLink: "/recherches/projets/economie-verte",
    registerLink: "/formations/inscription",
  },*/
  {
    title: "Leçon inaugurale de la CAPEC",
    image: "/images/leçoninaugurale8octobre.jpg",
    date: "8 octobre 2024",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },
  { //bon
    title: "Conference JICA-JAPAN CORNER-CAPEC",
    date: "22 Février 2024",
    image: "/images/conferencejicajapancornercapec22février2024.jpg",
    learnMoreLink: "/formations/econometrie",
    registerLink: "/formations/inscription",
  },
];

export default function Home() {
  // Données pour le carrousel d'événements

 // <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></div>

  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Carousel Section */}
      <section className="w-full">

        <EventCarousel events={carouselEvents} />
        
      </section>


      {/* Mission Section de l'organisation */}
      {/*<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-orange-100">*/}
      <section className="w-full py-8 md:py-16 lg:py-4">  
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-10 bg-orange-400 text-white">
            <div className="space-y-2">
              <h2 className="text-3xl tracking-tighter sm:text-4xl font-bold">Notre Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white font-bold">
               Eclairer la politique économique et renforcer les capacités
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">{/* écart entre les 3 cards */}
            {/*  <Card className="max-w-xs mx-auto h-min">*/}
            <Card className="max-w-xs mx-auto h-min bg-white border-l-4 border-orange-500 shadow-xs rounded-lg">
              <CardContent className="p-3 flex flex-col items-center text-center grap-2">
                <div className="p-2 rounded-full bg-orange-100">
                  <FileText className="h-5 w-5 text-ci-orange" />
                </div> 
                {/*<h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Recherche</h3>*/}
                <h3 className="text-lg font-bold">Recherche</h3>
                <p  className="text-sm text-gray-700 leading-tight mb-4">
                Conduire des recherches de haute qualité <br />
                sur les questions économiques africaines<br />
                à fort impact développemental.
                </p>
                <Image
                  src="/images/actua2.jpg"
                  alt="Recherche économique"
                  width={240}
                  height={150}
                  className="w-full h-auto rounded-md object-cover transition-all duration-300 ease-in-out hover:brightness-110 hover:opacity-90"            
                />
              </CardContent>
            </Card>

            <Card className="max-w-xs mx-auto h-min bg-white border-l-4 border-orange-500 shadow-xs rounded-lg">
              <CardContent className="p-4 flex flex-col items-center text-center grap-2">
                <div className="p-2 rounded-full bg-green-100">
                  <Users className="h-5 w-5 text-ci-green" />
                </div>
                {/*<h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Formation</h3> */}
                <h3 className="text-lg font-bold">Formation</h3>
                <p className="text-sm text-gray-700 leading-tight mb-4">
                Évaluation d'impact de l'insertion<br />
                socio-économique des jeunes vulnérables<br />
                en Côte d'Ivoire.
                </p>
                <Image 
                  src="/images/cloturepep.jpg"
                  alt="Formation académique"
                  width={240}
                  height={150}
                  className="w-full h-auto rounded-md object-cover transition-all duration-300 ease-in-out hover:brightness-110 hover:opacity-90"
                />
              </CardContent>
            </Card>

            <Card className="max-w-xs mx-auto h-min bg-white border-l-4 border-orange-500 shadow-xs rounded-lg">
              <CardContent className="p-4 flex flex-col items-center text-center grap-2">
                <div className="p-2 rounded-full bg-orange-100">
                  <Calendar className="h-5 w-5 text-ci-orange" />
                </div>
                <h3 className="text-lg font-bold">Etude</h3>
                <p className="text-sm text-gray-700 leading-tight mb-4">
                  Fournir des conseils stratégiques aux décideurs politiques et aux parties prenantes.
                </p>
                <Image
                  src="/images/toponymieetude.jpg"
                  alt="Conseil stratégique"
                  width={240}
                  height={150}
                  className="w-full h-auto rounded-md object-cover transition-all duration-300 ease-in-out hover:brightness-110 hover:opacity-90"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Publications récente */} 
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Publications Récentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez nos dernières études et publications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/publication">
              <Button variant="outline" className="border-ci-green text-ci-green hover:bg-green-100">
                Voir toutes les publications
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Actualités</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Restez informé des derniers événements et annonces du CAPEC.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/activites/actualites">
              <Button variant="outline" className="border-ci-orange text-ci-orange hover:bg-orange-100">
                Voir toutes les actualités
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery - Enhanced with zoom effect and better design */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
              <Camera className="h-6 w-6 text-ci-orange" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">La CAPEC en images</h2>
            <div className="w-20 h-1 bg-ci-orange mx-auto my-2"></div>
            <p className="max-w-[700px] text-muted-foreground">
              Découvrez nos activités, nos événements et notre équipe à travers cette galerie d'images.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/dgcapec.jpg"
                    alt="Conférence du CAPEC"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Conférence annuelle</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                  src="/images/capecenimage1.jpg"
                    //src="/placeholder.svg?text=Séminaire+Économique&height=400&width=300"
                    alt="Séminaire économique"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Séminaire économique</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg"
                    alt="Atelier de formation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Atelier de formation</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album1.jpg"
                    alt="Réunion d'experts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Réunion d'experts</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album3.jpg"
                    alt="Présentation de recherche"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Présentation de recherche</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg"
                    alt="Visite officielle"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Visite officielle</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-64 md:h-80 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album4.jpg"
                    alt="Équipe de recherche"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Équipe de recherche</h3>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <div className="relative h-48 md:h-64 w-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <Image
                    src="/images/album6.jpg"
                    alt="Cérémonie de remise de prix"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm">Cérémonie de remise de prix</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/medias/phototheque"> {/*redirige vers l'onglet photothèque*/}
              <Button className="bg-ci-orange hover:bg-orange-600 text-white">
                Voir toutes les photos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

interface Publication {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
        //src="/images/album1.jpg"
         src={publication.coverImage || "/placeholder.svg"}
          alt={publication.title}
          width={600}
          height={340}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">{publication.date}</span>
          <h3 className="font-bold">{publication.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{publication.excerpt}</p>
          {/*<Link href={`/ressources`}>
            <Button variant="link" className="p-0 h-auto">
              Lire plus
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>*/}
        </div>
      </CardContent>
    </Card>
  )
}

interface News {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

function NewsCard({ news }: { news: News }) {
  return (
    <Card>
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
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">{news.date}</span>
          <h3 className="font-bold">{news.title}</h3>
          <p className="text-muted-foreground">{news.excerpt}</p>
          {/*<Link href={`/activites/actualites/${news.id}`}>
            <Button variant="link" className="p-0 h-auto">
              Lire plus
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>*/}
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data with updated image placeholders {/* je suis ici */}
const recentPublications = [
  {
    id: "1",
    title: "Présentation des résultats des deux études financées par le PAGDS",
    excerpt:
      "Cette étude analyse l'impact des différentes politiques fiscales sur la croissance économique à long terme.",
    date: "15 mars 2023",
    coverImage: "/images/presentationdesresultatsdesdeuxétudesfinanceesparlepagds.jpg",
  },
  {
    id: "2",
    title: "Construction d'un indice et sous-indices endogènes de suivi de la gouvernance en Côte d'Ivoire",
    excerpt:
      "Une étude approfondie des dynamiques du marché du travail et des facteurs contribuant aux inégalités salariales.",
    date: "20 avril 2023",
    coverImage: "/images/constructiondunindiceetsousindicesendogènesdesuividelagouvenci.jpg",
  },
  {
    id: "3",
    title: "Évaluation des politiques de développement durable",
    excerpt:
      "Cette publication examine l'efficacité des politiques de développement durable et propose des recommandations.",
    date: "5 décembre 2022",
    coverImage: "/images/pr3.jpg",
  },
]

const recentNews = [
  {
    id: "1",
    title: "Leçon inaugurale du 30e anniversaire de la CAPEC faite par Mahoutou Emmanuel Koffi",
    excerpt:
      "Le CAPEC organise sa conférence annuelle sur les politiques économiques le 15 mars 2023. Inscrivez-vous dès maintenant pour participer à cet événement majeur.",
    date: "8 octobre 2024",
      image: "/images/leçoninauguraledu30eanniversairedelacapecfaiteparmahoutouemmanuelkoffi1.jpg",
  },
  {
    id: "2",
    title: "Diner des 30e anniversaire de la CAPEC",
    excerpt:
      "Le CAPEC est fier d'annoncer un nouveau partenariat de recherche avec l'Université de Paris-Saclay pour étudier les impacts économiques du changement climatique.",
    date: "9 octobre 2024",
    image: "/images/dinerdes30eanniversairedelacapec9octobre24.jpg",
  },
]
