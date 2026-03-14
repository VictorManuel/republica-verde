import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Updated fonts for artisanal feel
import { Inter, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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
    icon: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
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
