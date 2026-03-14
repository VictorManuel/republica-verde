import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Organic wave decoration at bottom */}
      <div className="wave-decoration absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background">
          <path d="M0,0 C150,80 350,20 600,40 C850,60 1050,100 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center">
              <img src="/logo.png" alt="República Verde" className="h-24 md:h-28 w-auto" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Fermentos vegetales hechos a mano
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto text-pretty">
              Alimentación consciente · Apto vegano · Fermentos vegetales artesanales en Tandil
            </p>

            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Creemos en una alimentación más conectada con la tierra. Cada fermento está hecho con paciencia,
              dedicación y respeto por lo natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-secondary text-black hover:bg-secondary/90 text-lg px-8 py-6 rounded-full"
                asChild
              >
                <Link href="/tienda">Ver productos</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full bg-transparent"
                asChild
              >
                <Link href="/tienda">Hacer un pedido</Link>
              </Button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/artisanal-fermented-vegetables-in-glass-jars-with-.jpg"
                alt="Fermentos vegetales artesanales"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
