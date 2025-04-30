"use client";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, FileText, Users, BarChart, Search } from "lucide-react";
import { useState } from "react";

export default function RecherchesPage() {
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  const studies = [
    {
      year: 2020,
      title: "Impact potentiel de la pandémie COVID-19 sur l'économie ivoirienne",
      author: "CAPEC",
      pdf: "#",
    },
    {
      year: 2018,
      title:
        "Etude de l'impact des investissements dans les secteurs des hydrocarbures et de l'énergie sur l'économie ivoirienne",
      author: "",
      pdf: "#",
    },
    {
      year: 2017,
      title:
        "Impacts sanitaire et financier du financement de la lutte contre le SIDA en Côte d'Ivoire : Modélisation de Scénarii de financement",
      author: "",
      pdf: "#",
    },
    {
      year: 2016,
      title: "Etude d'impact des radios de proximité en Côte d'Ivoire",
      author: "",
      pdf: "#",
    },
    {
      year: 2015,
      title: " ETUDE D'IMPACT SOCIO-ECONOMIQUE DU RETOUR DE LA BANQUE AFRICAINE DE DEVELOPPEMENT EN COTE D'IVOIRE",
      author: "",
      pdf: "#",
    },
    {
      year: 2015,
      title: " Emergence Développement Humain Durable",
      author: "",
      pdf: "#",
    },
    {
      year: 2014,
      title: "ANALYSE DE L'IMPACT DES CRISES RECENTES SUR LE DEVELOPPEMENT DU CAPITAL HUMAIN EN COTE D'IVOIRE",
      author: "",
      pdf: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto mt-16 mb-24 flex-grow">
        {/* Title */}
        <h1 className="text-2xl font-bold text-black border-b-1 border-orange-500 pb-2 mb-6">
          Études commanditées
        </h1>
        <div className="h-1 w-12 bg-orange-500 mb-6"></div>

        {/* Search and Filters */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
         
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Analyse d'impact économique">Analyse d'impact économique</option>
              <option value="Institution et gouvernance">Institution et gouvernance</option>
              <option value="Transformation structurelle, croissance,développement et financement de l'économie">Transformation structurelle, croissance,développement et financement de l'économie</option>
              <option value="Finance publique et convergence économique">Finance publique et convergence économique</option>
              <option value="Commerce international, intégration régionale et compétitivité">Commerce international, intégration régionale et compétitivité</option>
              <option value="Economie du crime et de la violence">Economie du crime et de la violence</option>
              <option value="Entreprenariat et modèles d'affaire inclusifs">Entreprenariat et modèles d'affaire inclusifs</option>
              <option value="Pauvrété, inégalité et rédistribution<">Pauvrété, inégalité et rédistribution</option>
              <option value="Agriculture, Nutrition et Sécurité alimentaire,Changement Climatique et ressources Naturelles">Agriculture, Nutrition et Sécurité alimentaire,Changement Climatique et ressources Naturelles</option>
              <option value="Suivi et évaluation de projet">Suivi et évaluation de projet</option>
              <option value="Modèlisation économique">Modèlisation économique</option>
           
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full md:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Sélectionner l'année</option>
              <option value="2020">2025</option>
              <option value="2018">2024</option>
              <option value="2017">2023</option>
              <option value="2016">2022</option>
              <option value="2016">2021</option>
              <option value="2016">2020</option>
              <option value="2016">2019</option>
              <option value="2016">2018</option>
              <option value="2016">2017</option>
              <option value="2016">2016</option>
              <option value="2016">2015</option>
              <option value="2016">2014</option>
              <option value="2016">2013</option>
              <option value="2016">2012</option>
              <option value="2016">2011</option>
              <option value="2016">2010</option>
              <option value="2016">2009</option>
              <option value="2016">2008</option>
              <option value="2016">2007</option>
              <option value="2016">2006</option>
              <option value="2016">2005</option>
              <option value="2016">2004</option>
              <option value="2016">2003</option>
              <option value="2016">2002</option>
              <option value="2016">2001</option>
              <option value="2016">2000</option>
              <option value="2016">1999</option>
              <option value="2016">1998</option>
              <option value="2016">1997</option>
              <option value="2016">1996</option>
              <option value="2016">1995</option>
            </select>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Afficher
            </button>
          </div>
        </div>

        {/* Studies Section */}
        <h2 className="text-xl font-semibold text-orange-500 mb-4">
          Analyse d'impacts économiques et sociaux
        </h2>

        <div className="space-y-4">
          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border-l-8 border-blue-600 flex justify-between items-center"
            >
              <div className="flex-1">
                <p className="text-ci-orange font-semibold">{study.year}</p>
                <p className="text-gray-800 font-medium">{study.title}</p>
                {study.author && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Auteur :</span>{" "}
                    {study.author}
                  </p>
                )}
              </div>
              <a
                href={study.pdf}
                className="text-red-500 font-semibold hover:underline whitespace-nowrap"
              >
                Télécharger le pdf
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}