import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  Calendar,
  BookOpen,
  Globe,
  BarChart,
} from "lucide-react";

export default function NosActivitesPage() {
  // Data for activity cards
  const activities = [
    {
      icon: <FileText className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Recherche",
      description:
        "Conduire des recherches de haute qualité sur les questions économiques pertinentes pour la Côte d'Ivoire et l'Afrique de l'Ouest.",
      imageSrc:
        "/images/nosactivite/lienactivite.jpg",
      alt: "Recherche économique",
    },
    {
      icon: <Users className="h-6 w-6 text-ci-green" />,
      bgColor: "bg-green-100",
      title: "Formation",
      description:
        "Former la prochaine génération d'analystes et de chercheurs en économie à travers divers programmes éducatifs.",
      imageSrc: "/images/nosactivite/formationdgi.jpg",
      alt: "Formation académique",
    },
    {
      icon: <Calendar className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Étude",
      description:
        "Fournir des conseils stratégiques aux décideurs politiques et aux parties prenantes sur les questions économiques.",
      imageSrc: "/images/nosactivite/elaboration.jpg",
      alt: "Conseil stratégique",
    },
    {
      icon: <Globe className="h-6 w-6 text-ci-orange" />,
      bgColor: "bg-orange-100",
      title: "Conférences",
      description:
        "Organiser et participer à des conférences nationales et internationales sur les enjeux économiques.",
      imageSrc:
        "/images/nosactivite/conferencejica.jpg",
      alt: "Conférences économiques",
    },
  ];

  // Data for calendar events
  const calendarEvents = [
    {
      title: "Conférence annuelle de la CAPEC",
      date: "Mars 2025",
      description:
        "Conférence internationale sur les politiques économiques post-pandémie, réunissant des experts de renommée mondiale.",
    },
    {
      title: "Séminaire de formation en économétrie",
      date: "Juin 2025",
      description:
        "Formation avancée sur les techniques économétriques pour les chercheurs et doctorants.",
    },
    {
      title: "Forum sur l'intégration économique régionale",
      date: "Septembre 2025",
      description:
        "Forum réunissant des acteurs économiques et politiques pour discuter des enjeux de l'intégration régionale.",
    },
    {
      title: "Atelier sur les politiques d'inclusion financière",
      date: "Novembre 2025",
      description:
        "Atelier réunissant des acteurs du secteur financier et des décideurs politiques pour discuter des stratégies d'inclusion financière.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
            Nos Activités
          </h1>
          <div className="w-24 h-1 bg-ci-orange mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:text-xl">
            Découvrez les principales activités du CAPEC, de la recherche à la
            formation en passant par le conseil et la diffusion des connaissances.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid gap-8 mt-16 space-x-4sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                <div
                  className={`p-3 rounded-full ${activity.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
                <div className="relative w-full h-56 mt-auto">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.alt}
                    fill
                    className="rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Calendrier des Activités
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid gap-8 md:grid-cols-2">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-ci-orange" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="text-ci-orange font-medium text-sm">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}