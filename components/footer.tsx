import { Instagram, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="República Verde" className="h-16 w-auto" />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Fermentos vegetales artesanales. Alimentación consciente desde Tandil.
              </p>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Ubicación</h3>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Tandil</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Contacto</h3>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/republicaverdetandil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@republicaverdetandil</span>
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="w-5 h-5" />
                  <span>hola@republicaverde.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2025 República Verde. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
