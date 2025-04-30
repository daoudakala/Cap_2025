"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function PhotothequePage() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  interface Photo {
    id: string
    title: string
    date: string
    description: string
    src: string
  }

  const openLightbox = (image: Photo, index: number): void => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length
    setSelectedImage(allPhotos[newIndex])
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % allPhotos.length
    setSelectedImage(allPhotos[newIndex])
    setCurrentIndex(newIndex)
  }

  const allPhotos = [...conferencesPhotos, ...seminairesPhotos, ...formationsPhotos, ...equipesPhotos]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Photothèque</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez les moments forts des activités du CAPEC à travers notre galerie de photos.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="all">Toutes les photos</TabsTrigger>
            <TabsTrigger value="conferences">Conférences</TabsTrigger>
            <TabsTrigger value="seminaires">Séminaires</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
            <TabsTrigger value="equipes">Équipes</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, index)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="conferences" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {conferencesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, conferencesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="seminaires" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {seminairesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, seminairesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="formations" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {formationsPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, formationsPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="equipes" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {equipesPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  onClick={() => openLightbox(photo, equipesPhotos.indexOf(photo))}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-white/80">{photo.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
              <h3 className="font-bold">{selectedImage.title}</h3>
              <p className="text-sm text-white/80">{selectedImage.date}</p>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}

// Sample data
const conferencesPhotos = [
  {
    id: "conf1",
    title: "Conférence annuelle du CAPEC 2023",
    date: "15 mars 2023",
    description: "Conférence internationale sur les politiques économiques post-pandémie organisée par le CAPEC.",
    src: "/images/estherubo.jpg",
  },
  {
    id: "conf2",
    title: "Forum économique régional",
    date: "10 novembre 2022",
    description: "Forum sur l'intégration économique régionale avec la participation de plusieurs pays africains.",
    src: "/images/leçoninaugurale8octobre.jpg",
  },
  {
    id: "conf3",
    title: "Conférence sur le développement durable",
    date: "5 juin 2022",
    description: "Conférence sur les politiques économiques favorisant un développement durable en Afrique de l'Ouest.",
    src: "/images/paneldehautniveau.jpg",
  },
  {
    id: "conf4",
    title: "Symposium sur l'économie numérique",
    date: "20 avril 2022",
    description:
      "Symposium international sur les défis et opportunités de l'économie numérique pour les pays en développement.",
    src: "/images/panelhautniveau6.jpg",
  },
]

const seminairesPhotos = [
  {
    id: "sem1",
    title: "Séminaire sur les politiques fiscales",
    date: "25 février 2023",
    description:
      "Séminaire d'experts sur l'optimisation des politiques fiscales pour stimuler la croissance économique.",
    src: "/images/paneldehautniveau5.jpg",
  },
  {
    id: "sem2",
    title: "Atelier sur l'analyse des données économiques",
    date: "12 janvier 2023",
    description: "Atelier de formation sur les méthodes avancées d'analyse des données économiques.",
    src: "/images/paneldehautniveau4.jpg",
  },
  {
    id: "sem3",
    title: "Séminaire sur l'économie verte",
    date: "8 décembre 2022",
    description: "Séminaire sur les stratégies économiques pour une transition écologique réussie.",
    src: "/images/paneldehautiveau3.jpg",
  },
  {
    id: "sem4",
    title: "Table ronde sur l'inclusion financière",
    date: "15 octobre 2022",
    description:
      "Table ronde réunissant des acteurs du secteur financier pour discuter des stratégies d'inclusion financière.",
    src: "/images/paneldehautniveau2.jpg",
  },
]

const formationsPhotos = [
  {
    id: "form1",
    title: "Formation en modélisation économétrique",
    date: "5 mars 2023",
    description: "Formation avancée sur les techniques de modélisation économétrique pour les chercheurs.",
    src: "/images/paneldeauniveaus2.jpg",
  },
  {
    id: "form2",
    title: "Atelier sur l'évaluation des politiques publiques",
    date: "18 janvier 2023",
    description: "Atelier pratique sur les méthodes d'évaluation d'impact des politiques publiques.",
    src: "/images/10esommetdesthinkstankdafriquev1.jpg",
  },
  {
    id: "form3",
    title: "Formation en analyse macroéconomique",
    date: "10 novembre 2022",
    description: "Formation destinée aux analystes économiques sur les outils de prévision macroéconomique.",
    src: "/images/paneldehautniveau2.jpg",
  },
  {
    id: "form4",
    title: "Séminaire doctoral",
    date: "5 septembre 2022",
    description: "Séminaire de formation pour les doctorants en économie sur les méthodologies de recherche.",
    src: "/images/leçoninaugurale8octobre20242.jpg",
  },
]

const equipesPhotos = [
  {
    id: "eq1",
    title: "Équipe de direction du CAPEC",
    date: "15 janvier 2023",
    description: "Photo officielle de l'équipe de direction du CAPEC lors de la cérémonie des vœux.",
    src: "/images/introduction.jpg",
  },
  {
    id: "eq2",
    title: "Équipe de recherche en économie du développement",
    date: "10 décembre 2022",
    description: "L'équipe de chercheurs spécialisés en économie du développement lors d'une réunion de travail.",
    src: "/images/dgcapec.jpg",
  },
  {
    id: "eq3",
    title: "Personnel administratif",
    date: "5 novembre 2022",
    description: "L'équipe administrative du CAPEC qui assure le bon fonctionnement quotidien du centre.",
    src: "/images/dinerdes30eanniversairedelacapec9octobre20242.jpg",
  },
  {
    id: "eq4",
    title: "Chercheurs et doctorants",
    date: "20 octobre 2022",
    description: "Groupe de chercheurs permanents et doctorants associés au CAPEC.", 
    src: "/images/leçoninauguraledu30eanniversairedelacapecfaiteparmahoutouemmanuelkoffi1.jpg",
  },
]

