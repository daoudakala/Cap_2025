"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X } from "lucide-react"

interface Video {
  id: string
  title: string
  date: string
  description: string
  thumbnail: string
  videoUrl: string
}

export default function VideothequePage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const openVideo = (video: Video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vidéothèque</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez notre vidéo de conférence de la CAPEC.
          </p>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="grid grid-cols-4 w-full">
            {/* <TabsTrigger value="conferences">Conférences</TabsTrigger> */}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div
              className={`${
                allVideos.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-6`}
            >
              {allVideos.map((video) => (
                <div className={allVideos.length === 1 ? "max-w-md w-full" : ""} key={video.id}>
                  <VideoCard video={video} onPlay={() => openVideo(video)} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-10"
            onClick={closeVideo}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative aspect-video bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster={selectedVideo.thumbnail}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
            <div className="bg-black/70 p-4 text-white">
              <h3 className="font-bold text-lg">{selectedVideo.title}</h3>
              <p className="text-sm text-white/80">{selectedVideo.date}</p>
              <p className="mt-2">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-video cursor-pointer group" onClick={onPlay}>
        {!imageError ? (
          <Image
            src={video.thumbnail}
            alt={`Miniature: ${video.title}`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Play className="h-12 w-12 text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-ci-orange/80 flex items-center justify-center">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold line-clamp-1">{video.title}</h3>
        <p className="text-xs text-muted-foreground">{video.date}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{video.description}</p>
      </CardContent>
    </Card>
  )
}

// Sample data
const conferencesVideos = [
  {
    id: "vid1",
    title: "Conférence annuelle du CAPEC 2023 - Session d'ouverture",
    date: "15 mars 2023",
    description: "Discours d'ouverture de la conférence internationale sur les politiques économiques post-pandémie.",
    thumbnail: "/images/japanconferencecapec.jpg",
    videoUrl: "/videos/1ceremoniedouverturepartie4.mp4"
  },
]

const allVideos = [...conferencesVideos]
