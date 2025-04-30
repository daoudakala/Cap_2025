// types.ts
export type SubMenuItem = {
    title: string
    href: string
  }
  
  export type NavItem = {
    title: string
    href: string
    submenu?: SubMenuItem[]
  }