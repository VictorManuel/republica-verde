import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Benefits } from "@/components/benefits"
import { SalesPoints } from "@/components/sales-points"
import { Contact } from "@/components/contact"
import { Commitment } from "@/components/commitment"
import { Footer } from "@/components/footer"
import { HomeNavbar } from "@/components/home-navbar"
import { ArticlesHighlight } from "@/components/articles-highlight"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeNavbar revealOnHeroScroll />
      <Hero />
      <About />
      <ArticlesHighlight />
      <Products />
      <Benefits />
      <SalesPoints />
      <Contact />
      <Commitment />
      <Footer />
    </main>
  )
}
