import { MainNav } from "@/components/main-nav"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-ci-green bg-white shadow-sm">
      <div className="container flex h-16 items-center">
       <div className="flex flex-col">
   
        <MainNav />
       </div>
      </div>
    </header>
  )
}

