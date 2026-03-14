import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Updated fonts for artisanal feel
import { Inter, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const crimson = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

// <CHANGE> Updated metadata for República Verde
export const metadata: Metadata = {
  title: "República Verde · Fermentos Vegetales Artesanales en Tandil",
  description:
    "Alimentación consciente · Apto vegano · Fermentos vegetales artesanales en Tandil. Kimchi, chucrut y más productos naturales hechos a mano.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${crimson.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
