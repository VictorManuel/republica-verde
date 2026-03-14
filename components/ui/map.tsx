"use client"

import * as React from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { cn } from "@/lib/utils"

interface MapContextValue {
  map: maplibregl.Map | null
  setMap: (map: maplibregl.Map | null) => void
}

const MapContext = React.createContext<MapContextValue | undefined>(undefined)

function useMap() {
  const context = React.useContext(MapContext)
  if (!context) {
    throw new Error("Map components must be used within a Map component")
  }
  return context
}

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: [number, number]
  zoom?: number
  children?: React.ReactNode
}

const Map = React.forwardRef<HTMLDivElement, MapProps>(
  ({ className, center = [-59.1332, -37.3217], zoom = 13, children, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [map, setMap] = React.useState<maplibregl.Map | null>(null)
    const mapInstanceRef = React.useRef<maplibregl.Map | null>(null)

    React.useEffect(() => {
      if (!containerRef.current) {
        return
      }

      const timeoutId = setTimeout(() => {
        if (!containerRef.current) return

        const mapInstance = new maplibregl.Map({
          container: containerRef.current,
          style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
          center: center,
          zoom: zoom,
          attributionControl: false,
        })

        mapInstance.on("load", () => {
          setMap(mapInstance)
        })

        mapInstanceRef.current = mapInstance
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        if (mapInstanceRef.current) {
          // Clear state first to prevent children from trying to use the map
          setMap(null)
          // Then remove the map after a small delay to let children cleanup
          setTimeout(() => {
            if (mapInstanceRef.current) {
              mapInstanceRef.current.remove()
              mapInstanceRef.current = null
            }
          }, 0)
        }
      }
    }, [])

    return (
      <MapContext.Provider value={{ map, setMap }}>
        <div ref={ref} className={cn("relative w-full", className)} style={{ minHeight: "500px" }} {...props}>
          <div ref={containerRef} className="absolute inset-0" style={{ minHeight: "500px" }} />
          {children}
        </div>
      </MapContext.Provider>
    )
  },
)
Map.displayName = "Map"

interface MapMarkerProps {
  longitude: number
  latitude: number
  children?: React.ReactNode
}

function MapMarker({ longitude, latitude, children }: MapMarkerProps) {
  const { map } = useMap()
  const markerRef = React.useRef<maplibregl.Marker | null>(null)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!map || !elementRef.current) return

    const marker = new maplibregl.Marker({
      element: elementRef.current,
      offset: [0, 0],
    })
      .setLngLat([longitude, latitude])
      .addTo(map)

    markerRef.current = marker

    return () => {
      marker.remove()
    }
  }, [map, longitude, latitude])

  return (
    <div ref={elementRef} className="cursor-pointer">
      {children || <DefaultMarker />}
    </div>
  )
}

function DefaultMarker() {
  return <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg" />
}

function MapControls() {
  const { map } = useMap()
  const controlRef = React.useRef<maplibregl.NavigationControl | null>(null)

  React.useEffect(() => {
    if (!map) return

    const nav = new maplibregl.NavigationControl({
      showCompass: true,
      showZoom: true,
    })

    map.addControl(nav, "top-right")
    controlRef.current = nav

    return () => {
      if (controlRef.current && map && map.getContainer()) {
        try {
          map.removeControl(controlRef.current)
        } catch (error) {
          // Ignore errors during cleanup as the map may already be destroyed
        }
        controlRef.current = null
      }
    }
  }, [map])

  return null
}

export { Map, MapMarker, MapControls }
