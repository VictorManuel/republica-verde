import { Sparkles, Activity, FlaskConical, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Probióticos naturales",
    description: "Bacterias beneficiosas que apoyan tu microbioma intestinal",
  },
  {
    icon: Activity,
    title: "Salud digestiva",
    description: "Mejoran la digestión y absorción de nutrientes",
  },
  {
    icon: FlaskConical,
    title: "Alimentos vivos",
    description: "Fermentación natural que preserva enzimas y vitaminas",
  },
  {
    icon: ShieldCheck,
    title: "Sin aditivos químicos",
    description: "Solo ingredientes naturales, sin conservantes artificiales",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Beneficios de los fermentos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Los alimentos fermentados son una fuente natural de probióticos y nutrientes esenciales para tu bienestar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 text-center hover:from-secondary/20 hover:to-accent/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-card shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
