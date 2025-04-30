"use client"

// Définissez et exportez le type NavItem dans ce fichier
export type NavItem = {
  title: string
  href: string
  submenu?: NavItem[]  // sous-menu optionnel
}

// Exportez ensuite vos données
export const navItems: NavItem[] = [
  {
    title: "ACCUEIL",
    href: "/",
  },
  {
    title: "A PROPOS",
    href: "/a-propos",
    submenu: [
      {
        title: "Mot du Directeur",
        href: "/a-propos/mot-du-directeur",
      },
      {
        title: "Historique et Objectif",
        href: "/a-propos/historique-objectif",
      },
      {
        title: "Nos Activités",
        href: "/a-propos/nos-activites",
      },
      {
        title: "Organigramme",
        href: "/a-propos/organigramme",
      },
      {
        title: "La CAPEC en Chiffres",
        href: "/a-propos/capec-en-chiffres",
      },
      {
        title: "Quelques Références",
        href: "/a-propos/references",
      },
    ],
  },
  {
    title: "RESSOURCES",
    href: "/ressources",
    submenu: [
      {
        title: "Recherches",
        href: "/ressources/recherches",
      },
      {
        title: "Etudes",
        href: "/ressources/etudes",
      },
    ],
  },
  {
    title: "PUBLICATION",
    href: "/publication",
  },
  {
    title: "NOS REALISATIONS",
    href: "/activites",
    submenu: [
      {
        title: "PROGRAMME D'ACTIVITES",
        href: "/activites/programme",
      },
      {
        title: "RAPPORT D'ACTIVITES",
        href: "/activites/rapport",
      },
      {
        title: "CR d'ACTIVITES",
        href: "/activites/compte-rendu",
      },
      {
        title: "INTERVIEW / QUESTION",
        href: "/activites/interview",
      },
      {
        title: "ACTUALITES",
        href: "/activites/actualites",
      },
    ],
  },
  {
    title: "MEDIAS",
    href: "/medias",
    submenu: [
      {
        title: "Photothèque",
        href: "/medias/phototheque",
      },
      {
        title: "Vidéothèque",
        href: "/medias/videotheque",
      },
    ],
  },
  {
    title: "CHERCHEUR",
    href: "/chercheur",
  },
]