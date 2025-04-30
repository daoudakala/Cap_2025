// pages/description.tsx
"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
 // Assurez-vous que ce chemin est correct

export default function DescriptionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Suite de l'Histoire du CAPEC
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Poursuivez la découverte de l'évolution et des réalisations de la CAPEC.
          </p>
        </div>
        <div className="mt-6">
         
        </div>
      </div>
      <Footer />
    </div>
  );
}