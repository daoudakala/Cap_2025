"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
  department: z.string({
    required_error: "Veuillez sélectionner un département.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      department: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Contactez-nous pour toute question, demande de collaboration ou information supplémentaire.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Contactez le CAPEC"
            width={1200}
            height={250}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <h2 className="text-2xl font-bold mb-2">Nous sommes à votre écoute</h2>
              <p>Notre équipe est disponible pour répondre à toutes vos questions et demandes.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Formulaire de contact</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="votre.email@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Département</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un département" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">Information générale</SelectItem>
                              <SelectItem value="research">Recherche et collaboration</SelectItem>
                              <SelectItem value="media">Presse et médias</SelectItem>
                              <SelectItem value="careers">Carrières et stages</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Sélectionnez le département que vous souhaitez contacter.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet</FormLabel>
                          <FormControl>
                            <Input placeholder="Sujet de votre message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Votre message..." className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-ci-orange hover:bg-orange-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>
                  Vous pouvez également nous contacter directement par téléphone ou email.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-ci-green mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@capec.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-ci-green mt-0.5" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+225 27 22 44 41 24</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-ci-green mt-0.5" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">
                      Université Félix Houphouët-Boigny
                      <br />
                      Cocody, Abidjan
                      <br />
                      Côte d'Ivoire
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-ci-green mt-0.5" />
                  <div>
                    <h3 className="font-medium">Heures d'ouverture</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 8h00 - 17h00
                      <br />
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-md border">
                  {/* Placeholder for map - in a real implementation, you would use a map component */}
                  <Image
                    src="/placeholder.svg"
                    alt="Carte de localisation du CAPEC"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Comment nous trouver</h3>
                  <p className="text-sm text-muted-foreground">
                    Le CAPEC est situé sur le campus de l'Université Félix Houphouët-Boigny à Cocody, Abidjan. Nos
                    bureaux se trouvent dans le bâtiment principal du CIRES, au 2ème étage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

