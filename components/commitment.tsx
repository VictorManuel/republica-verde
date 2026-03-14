export function Commitment() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-[3rem] p-12 md:p-16 shadow-sm border border-border/50 relative overflow-hidden text-center">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>

            <div className="relative">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
                Nuestro compromiso
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  En <span className="font-semibold text-foreground">República Verde</span>, nos comprometemos con la
                  transparencia y la calidad en cada paso del proceso.
                </p>

                <p>
                  Trabajamos solo con <span className="font-semibold text-foreground">ingredientes naturales</span> de
                  origen conocido, respetando los tiempos de fermentación natural que hacen de nuestros productos algo
                  único.
                </p>

                <p>
                  Creemos en la <span className="font-semibold text-foreground">producción local y artesanal</span> como
                  una forma de conectar con nuestra comunidad y ofrecer alimentos verdaderamente conscientes.
                </p>

                <p>
                  Cada frasco que sale de nuestro taller lleva el cuidado, la paciencia y el amor por lo que hacemos.
                  Eso es lo que nos diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
