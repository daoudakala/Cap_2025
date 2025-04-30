"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useEffect, useState } from "react"

export function EventCarousel({ events }: { 
  events: {
    title: string 
    description?: string 
    date: string 
    image: string 
    registerLink?: string
    learnMoreLink?: string
  }[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000)
    return () => clearInterval(intervalId)
  }, [events.length])

  return (
    <div className="relative w-full h-[80vh] max-h-[800px] overflow-hidden">
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel content */}
      <div className="relative w-full h-full">
        {events.map((event, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
                <div className="max-w-4xl mx-auto w-full">
                  <span className="text-xl text-white/80 mb-2 block">
                    {event.date}
                  </span>
                  <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">{event.title}</h2>
                  <p className="text-white/90 mb-6 max-w-2xl text-sm md:text-base">{event.description}</p>
                  <div className="flex flex-wrap gap-3">
                      <Link href="/ressources">
                        <Button className="flex flex-col gap-2 min-[400px]:flex-row">
                          Découvrir nos publications
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {event.registerLink && (
                        <Link href="/a-propos">
                          <Button
                            variant="outline"
                            className="border-ci-green text-ci-green hover:bg-green-50"
                          >
                            En savoir plus sur le CAPEC
                          </Button>
                        </Link>
                      )}
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}