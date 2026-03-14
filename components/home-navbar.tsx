"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { withBasePath } from "@/lib/with-base-path"

type HomeNavbarProps = {
  revealOnHeroScroll?: boolean
}

export function HomeNavbar({ revealOnHeroScroll = false }: HomeNavbarProps) {
  const [visible, setVisible] = useState(!revealOnHeroScroll)

  useEffect(() => {
    if (!revealOnHeroScroll) return

    const onScroll = () => {
      const hero = document.getElementById("hero")
      if (!hero) return
      const heroBottom = hero.getBoundingClientRect().bottom
      setVisible(heroBottom <= 80)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [revealOnHeroScroll])

  const positioningClass = revealOnHeroScroll ? "fixed inset-x-0 top-0" : "sticky top-0"
  const visibilityClass =
    !revealOnHeroScroll || visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"

  return (
    <header
      className={`${positioningClass} z-50 border-b border-border/50 bg-background/90 backdrop-blur-sm transition-all duration-500 ${visibilityClass}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src={withBasePath("/logo.png")} alt="República Verde" className="h-9 w-auto" />
          <span className="font-serif text-lg font-semibold text-foreground">República Verde</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium">
          <Link href="/" className="text-foreground/80 transition-colors hover:text-foreground">
            Inicio
          </Link>
          <Link href="/#productos" className="text-foreground/80 transition-colors hover:text-foreground">
            Productos
          </Link>
          <Link href="/articulos" className="text-foreground/80 transition-colors hover:text-foreground">
            Articulos
          </Link>
        </div>
      </nav>
    </header>
  )
}
