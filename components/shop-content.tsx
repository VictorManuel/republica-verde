"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, Minus, Plus, X, Package } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const products = [
  {
    id: 1,
    name: "Kimchi",
    description: "Producto vegetal fermentado a base de Hakusai. Picante y lleno de probióticos naturales.",
    price: 3500,
    size: "345g",
    tags: ["Sin Conservantes", "Apto Veganos"],
    image: "/kimchi-in-glass-jar-traditional-korean-fermented-c.jpg",
  },
  {
    id: 2,
    name: "Chucrut",
    description: "Fermentado clásico de repollo con sal marina. Sabor tradicional y versátil.",
    price: 2800,
    size: "345g",
    tags: ["Ingredientes Naturales", "Apto Veganos"],
    image: "/white-sauerkraut-in-jar-fermented-cabbage-natural-.jpg",
  },
  {
    id: 3,
    name: "Kombucha",
    description: "Bebida probiótica elaborada con té verde, azúcar orgánica y SCOBY. Fermentación de 7 a 21 días.",
    price: 3200,
    size: "345ml",
    tags: ["Sin Conservantes", "Probióticos"],
    image: "/kombucha-bottle-fermented-tea-drink-natural-organi.jpg",
  },
  {
    id: 4,
    name: "Pepinos Encurtidos",
    description: "Elaborados con vinagre de manzana orgánico, especias y hierbas aromáticas. Sin aditivos.",
    price: 2900,
    size: "345g",
    tags: ["Ingredientes Naturales", "Apto Veganos"],
    image: "/cucumber-kimchi-fermented-pickles-in-jar-korean-st.jpg",
  },
]

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export function ShopContent() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [
        ...prevCart,
        { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image },
      ]
    })
  }

  const updateQuantity = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header con carrito */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="República Verde" className="h-10 w-auto" />
              <div>
                <h1 className="font-serif text-2xl font-bold">Tienda</h1>
                <p className="text-sm text-primary-foreground/80">Fermentos vegetales artesanales</p>
              </div>
            </div>

            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="relative border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl">Tu pedido</SheetTitle>
                  <SheetDescription>
                    {totalItems === 0
                      ? "Tu carrito está vacío"
                      : `${totalItems} producto${totalItems > 1 ? "s" : ""} en tu carrito`}
                  </SheetDescription>
                </SheetHeader>

                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <Package className="w-16 h-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Aún no agregaste productos a tu carrito</p>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-auto py-6 space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 bg-muted/30 rounded-xl p-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">${item.price.toLocaleString()}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 p-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-4">
                      <div className="flex items-center justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="font-serif text-2xl text-primary">${totalPrice.toLocaleString()}</span>
                      </div>
                      <Button
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                        onClick={() => {
                          setShowCheckout(true)
                          setIsCartOpen(false)
                        }}
                      >
                        Hacer pedido
                      </Button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Productos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Nuestros productos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Todos nuestros fermentos vienen en frascos de vidrio de 345g/ml. Elaborados artesanalmente en Tandil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-border/50 rounded-[2rem] hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.size}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>
                  </div>

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

                  <div className="pt-4 space-y-3">
                    <p className="font-serif text-3xl font-bold text-primary">${product.price.toLocaleString()}</p>
                    <Button
                      size="lg"
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto rounded-3xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-3xl font-bold text-foreground">Completá tu pedido</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowCheckout(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-2xl p-6 space-y-3">
                  <h3 className="font-semibold text-lg">Resumen del pedido</h3>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="Tu teléfono" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección de entrega en Tandil</Label>
                    <Input id="address" placeholder="Calle y número" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                    <Textarea id="notes" placeholder="Horario preferido, indicaciones especiales, etc." rows={3} />
                  </div>

                  <div className="bg-secondary/10 rounded-xl p-4 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-2">Información de entrega:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Entregas en Tandil sin cargo</li>
                      <li>Coordinamos día y horario por WhatsApp</li>
                      <li>Pago en efectivo o transferencia</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                  >
                    Enviar pedido por WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
