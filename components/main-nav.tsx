"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import type { NavItem } from "./navItems"
import { navItems } from "./navItems"

export function MainNav() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <header className="w-full bg-green-700">
      <div className="flex items-center justify-between min-h-16 px-6 w-full">
        <Logo />
        <DesktopNav 
          pathname={pathname} 
          hoveredItem={hoveredItem} 
          setHoveredItem={setHoveredItem} 
        />
        <ContactInfo />
        <MobileNavWrapper />
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="flex items-center shrink-0">
      <Link href="/" className="flex items-center" aria-label="Accueil">
        <div className="relative w-14 h-14 bg-white rounded-sm flex items-center justify-center overflow-hidden mr-3">
          <Image
            src="/images/logocapec.png"
            alt=""
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>
        <span className="font-bold text-white text-xl">CAPEC</span>
      </Link>
    </div>
  )
}

function DesktopNav({
  pathname,
  hoveredItem,
  setHoveredItem
}: {
  pathname: string
  hoveredItem: string | null
  setHoveredItem: (item: string | null) => void
}) {
  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <div className="flex space-x-1 w-full justify-evenly">
        {navItems.map((item) => (
          <NavItem 
            key={item.title} 
            item={item} 
            pathname={pathname} 
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </div>
    </nav>
  )
}

function NavItem({
  item,
  pathname,
  hoveredItem,
  setHoveredItem
}: {
  item: NavItem
  pathname: string
  hoveredItem: string | null
  setHoveredItem: (item: string | null) => void
}) {
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setHoveredItem(item.title)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Link
        href={item.href}
        className={cn(
          "px-3 py-1 text-xs font-medium text-white uppercase hover:text-ci-orange transition-colors",
          isActive && "text-ci-orange"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {item.title}
        {item.submenu && <ChevronDown className="ml-1 h-3 w-3 inline" />}
      </Link>

      {item.submenu && (
        <div className={cn(
          "absolute left-0 top-full pt-1 z-50 w-56",
          hoveredItem === item.title ? "block" : "hidden group-hover:block"
        )}>
          <SubMenu submenu={item.submenu} pathname={pathname} />
        </div>
      )}
    </div>
  )
}

function SubMenu({ submenu, pathname }: { submenu: NavItem['submenu'], pathname: string }) {
  if (!submenu) return null

  return (
    <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      {submenu.map((subItem) => (
        <Link
          key={subItem.title}
          href={subItem.href}
          className={cn(
            "block px-4 py-2 text-sm text-gray-700 hover:bg-ci-green hover:text-white transition-colors",
            pathname === subItem.href && "bg-ci-green text-white"
          )}
        >
          {subItem.title}
        </Link>
      ))}
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="hidden md:flex items-center space-x-4 text-sm text-white shrink-0">
      <span className="text-gray-400">|</span>
      <span>Contact: (225) 27 22 44 41 24</span>
    </div>
  )
}

function MobileNavWrapper() {
  return (
    <div className="md:hidden">
      <MobileNav />
    </div>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <div className="relative">
      <MobileMenuButton open={open} setOpen={setOpen} />
      
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-2">
          <div className="border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-900">
            Menu CAPEC
          </div>
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <MobileNavItem 
                key={item.title}
                item={item}
                openSubmenu={openSubmenu}
                setOpenSubmenu={setOpenSubmenu}
                setOpen={setOpen}
                pathname={pathname}
              />
            ))}
            <ContactDetails />
          </nav>
        </div>
      )}
    </div>
  )
}

function MobileMenuButton({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  return (
    <button 
      onClick={() => setOpen(!open)} 
      className="text-white p-2"
      aria-label="Menu"
      aria-expanded={open}
    >
      <div className="w-6 flex flex-col space-y-1">
        <span className={`h-0.5 bg-current transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`h-0.5 bg-current transition ${open ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`h-0.5 bg-current transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </div>
    </button>
  )
}

function MobileNavItem({
  item,
  openSubmenu,
  setOpenSubmenu,
  setOpen,
  pathname
}: {
  item: NavItem
  openSubmenu: string | null
  setOpenSubmenu: (item: string | null) => void
  setOpen: (open: boolean) => void
  pathname: string
}) {
  return (
    <div key={item.title}>
      {item.submenu ? (
        <>
          <button
            onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
            className="flex w-full justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
            aria-expanded={openSubmenu === item.title}
          >
            {item.title}
            <ChevronRight className={`h-4 w-4 transition-transform ${openSubmenu === item.title ? 'rotate-90' : ''}`} />
          </button>
          {openSubmenu === item.title && (
            <div className="pl-4 space-y-1">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded",
                    pathname === subItem.href && "bg-gray-100 font-medium"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className={cn(
            "block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded",
            pathname === item.href && "bg-gray-100 font-medium"
          )}
        >
          {item.title}
        </Link>
      )}
    </div>
  )
}

function ContactDetails() {
  return (
    <div className="pt-2 border-t border-gray-100 px-4 py-3 text-sm text-gray-700">
      <div>Email: infos@capec-ci.org</div>
      <div>Contact: (225) 27 22 44 41 24</div>
    </div>
  )
}