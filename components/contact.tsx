"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form handling logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Organic wave decoration at top */}
      <div className="wave-decoration absolute top-0 left-0 w-full rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background">
          <path d="M0,0 C150,80 350,20 600,40 C850,60 1050,100 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container relative px-4 pt-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">¿Cómo comprar?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Hacer un pedido es muy simple. Podés contactarnos por WhatsApp, Instagram o completando el formulario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-background text-primary hover:bg-background/90 text-lg py-6 rounded-2xl justify-start gap-4"
                asChild
              >
                <Link href="/articulos">
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">Tienda proximamente</div>
                    <div className="text-sm opacity-80">Mientras tanto, mira nuestros articulos</div>
                  </div>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg py-6 rounded-2xl justify-start gap-4 bg-transparent"
              >
                <Instagram className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">@republicaverdetandil</div>
                  <div className="text-sm opacity-80">Seguinos en Instagram</div>
                </div>
              </Button>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20"
            >
              <div>
                <Input
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/90 text-foreground border-border rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/90 text-foreground border-border rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/90 text-foreground border-border rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-background text-primary hover:bg-background/90 rounded-xl"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
