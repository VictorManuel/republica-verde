import { Ban, Leaf, ShieldCheck, Sprout } from "lucide-react"

const features = [
  {
    icon: Ban,
    title: "Sin conservantes",
    description: "Ningún tipo de conservante o aditivo químico",
  },
  {
    icon: Leaf,
    title: "Ingredientes naturales",
    description: "Solo ingredientes de calidad y origen natural",
  },
  {
    icon: ShieldCheck,
    title: "Apto veganos",
    description: "100% vegetal, sin productos de origen animal",
  },
  {
    icon: Sprout,
    title: "Producción local",
    description: "Elaborados artesanalmente en Tandil, Buenos Aires",
  },
]

export function About() {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233A5A40' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Alimentación consciente
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            En República Verde elaboramos alimentos fermentados con dedicación artesanal. Sin conservantes, solo
            ingredientes naturales y procesos tradicionales que respetan los tiempos de la naturaleza.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors mx-auto">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
