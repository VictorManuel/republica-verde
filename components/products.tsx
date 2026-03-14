import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Kimchi",
    description: "Producto vegetal fermentado a base de Hakusai. Picante y lleno de probióticos naturales.",
    tags: ["Sin Conservantes", "Apto Veganos"],
    image: "/kimchi-in-glass-jar-traditional-korean-fermented-c.jpg",
  },
  {
    name: "Chucrut",
    description: "Fermentado clásico de repollo con sal marina. Sabor tradicional y versátil.",
    tags: ["Ingredientes Naturales", "Apto Veganos"],
    image: "/white-sauerkraut-in-jar-fermented-cabbage-natural-.jpg",
  },
  {
    name: "Kombucha",
    description: "Bebida probiótica elaborada con té verde, azúcar orgánica y SCOBY. Fermentación de 7 a 21 días.",
    tags: ["Sin Conservantes", "Probióticos"],
    image: "/kombucha-bottle-fermented-tea-drink-natural-organi.jpg",
  },
  {
    name: "Pepinos Encurtidos",
    description: "Elaborados con vinagre de manzana orgánico, especias y hierbas aromáticas. Sin aditivos.",
    tags: ["Ingredientes Naturales", "Apto Veganos"],
    image: "/cucumber-kimchi-fermented-pickles-in-jar-korean-st.jpg",
  },
]

export function Products() {
  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestros fermentos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Cada producto es único, elaborado con ingredientes naturales y sin conservantes químicos. Alimentos vivos
            para nutrir tu cuerpo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground border-secondary/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
            asChild
          >
            <Link href="/tienda">Comprar productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
