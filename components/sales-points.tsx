"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { MapPin, Store, Clock, MapIcon, ListIcon, X } from "lucide-react"
import { Map, MapMarker, MapControls } from "@/components/ui/map"
import { Button } from "@/components/ui/button"

const salesPoints = [
  {
    name: "Almacén Natural Tierra Viva",
    address: "Av. Avellaneda 1234",
    hours: "Lun a Sáb 9:00 - 20:00",
    coordinates: { lat: -37.3217, lng: -59.1332 },
  },
  {
    name: "Dietética El Granero",
    address: "Pinto 987",
    hours: "Lun a Vie 8:30 - 19:30, Sáb 9:00 - 13:00",
    coordinates: { lat: -37.3267, lng: -59.1345 },
  },
  {
    name: "Mercado Orgánico Plaza Independencia",
    address: "Plaza Independencia",
    hours: "Sábados 10:00 - 14:00",
    coordinates: { lat: -37.3254, lng: -59.1342 },
  },
  {
    name: "Verdulería Verde Vida",
    address: "San Martín 567",
    hours: "Lun a Dom 8:00 - 21:00",
    coordinates: { lat: -37.3298, lng: -59.1378 },
  },
]

export function SalesPoints() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileView, setMobileView] = useState<"list" | "map">("list")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Dónde encontrarnos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Podés conseguir nuestros fermentos en estos puntos de venta en Tandil
          </p>
        </div>

        <div className="flex gap-2 mb-6 lg:hidden max-w-md mx-auto">
          <Button
            variant={mobileView === "list" ? "default" : "outline"}
            onClick={() => setMobileView("list")}
            className="flex-1 rounded-xl"
          >
            <ListIcon className="w-4 h-4 mr-2" />
            Sucursales
          </Button>
          <Button
            variant={mobileView === "map" ? "default" : "outline"}
            onClick={() => setMobileView("map")}
            className="flex-1 rounded-xl"
          >
            <MapIcon className="w-4 h-4 mr-2" />
            Mapa
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className={cn("order-2 lg:order-1 relative", mobileView === "map" ? "block" : "hidden lg:block")}>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-border h-[500px] lg:h-[650px]">
              <Map center={[-59.1342, -37.3254]} zoom={14}>
                <MapControls />
                {salesPoints.map((point, index) => (
                  <MapMarker key={index} longitude={point.coordinates.lng} latitude={point.coordinates.lat}>
                    <div
                      onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                      className={cn(
                        "rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all duration-300",
                        hoveredIndex === index
                          ? "w-12 h-12 bg-secondary scale-125 shadow-2xl"
                          : selectedIndex === index
                            ? "w-12 h-12 bg-secondary scale-110 shadow-xl"
                            : "w-8 h-8 bg-primary hover:scale-110",
                      )}
                    >
                      <Store
                        className={cn(
                          "text-primary-foreground transition-all",
                          hoveredIndex === index || selectedIndex === index ? "w-6 h-6" : "w-4 h-4",
                        )}
                        strokeWidth={2}
                      />
                    </div>
                  </MapMarker>
                ))}
              </Map>
            </div>

            {selectedIndex !== null && (
              <div className="absolute top-4 left-4 right-4 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-card rounded-2xl p-6 shadow-2xl border-2 border-secondary">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Store className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                            {salesPoints[selectedIndex].name}
                          </h3>
                          <div className="space-y-1.5">
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-sm">{salesPoints[selectedIndex].address}</span>
                            </div>
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                              <span className="text-sm">{salesPoints[selectedIndex].hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedIndex(null)}
                      className="flex-shrink-0 h-8 w-8 rounded-full hover:bg-secondary/20"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={cn("order-1 lg:order-2 space-y-4", mobileView === "list" ? "block" : "hidden lg:block")}>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 max-w-md mx-auto md:max-w-none">
              {salesPoints.map((point, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                  className={cn(
                    "bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border text-center lg:text-left cursor-pointer",
                    hoveredIndex === index || selectedIndex === index
                      ? "border-secondary shadow-lg scale-[1.02]"
                      : "border-border/50",
                  )}
                >
                  <div className="flex items-start gap-4 flex-col lg:flex-row lg:items-start">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0 transition-colors",
                        hoveredIndex === index || selectedIndex === index ? "bg-secondary/20" : "bg-primary/10",
                      )}
                    >
                      <Store
                        className={cn(
                          "w-6 h-6 transition-colors",
                          hoveredIndex === index || selectedIndex === index ? "text-secondary" : "text-primary",
                        )}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{point.name}</h3>
                      <div className="flex items-start gap-2 text-muted-foreground justify-center lg:justify-start">
                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-sm">{point.address}</span>
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground justify-center lg:justify-start">
                        <Clock className="w-4 h-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-sm">{point.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/30 text-center lg:text-left">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">¿Querés vender nuestros productos?</span>
                <br />
                Contactanos para ser punto de venta oficial de República Verde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
