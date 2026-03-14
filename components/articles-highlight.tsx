import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ArticlesHighlight() {
  return (
    <section className="py-14 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-muted/30 p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">Novedades</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Lee nuestros articulos</h2>
              <p className="text-muted-foreground">
                Ideas, recetas y contenido sobre fermentacion natural para integrar alimentos vivos a tu dia a dia.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/articulos">Ir a articulos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
