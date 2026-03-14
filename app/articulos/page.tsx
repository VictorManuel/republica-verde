import Link from "next/link"
import { HomeNavbar } from "@/components/home-navbar"
import { Footer } from "@/components/footer"
import { withBasePath } from "@/lib/with-base-path"

type Article = {
  id: string
  title: string
  image: string
  videoUrl: string
  body: string[]
}

const articles: Article[] = [
  {
    id: "fermentacion-casera",
    title: "Guia breve para comenzar con la fermentacion casera",
    image: "/kimchi-in-glass-jar-traditional-korean-fermented-c.jpg",
    videoUrl: "https://www.youtube.com/embed/4N4GzQ3xSg8",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et vehicula sapien. Mauris sodales hendrerit enim, a tincidunt sem molestie a. Vestibulum vitae iaculis lacus. Integer feugiat ac nunc in efficitur.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id pulvinar metus. Maecenas lacinia suscipit massa, vitae fermentum turpis porttitor nec. Cras euismod felis in velit sodales gravida.",
    ],
  },
  {
    id: "beneficios-fermentos",
    title: "Beneficios de incorporar fermentos en tu alimentacion",
    image: "/mixed-fermented-vegetables-carrots-beets-cabbage-i.jpg",
    videoUrl: "https://www.youtube.com/embed/6mM5s4tPG5A",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi in risus maximus vulputate. Etiam pharetra tellus non ipsum bibendum, at consequat turpis faucibus. Phasellus quis luctus urna, ut vulputate lacus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nunc feugiat venenatis quam, ac fringilla augue tempus non. Donec ut sem in ligula consequat suscipit at vitae urna.",
    ],
  },
]

export default function ArticulosPage() {
  return (
    <main className="min-h-screen bg-background">
      <HomeNavbar />

      <section className="border-b border-border/50 bg-muted/20 py-14 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">Blog</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">Articulos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Contenido breve con ideas practicas sobre fermentacion, alimentacion consciente y cocina natural.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto space-y-10 px-4">
          {articles.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-3xl border border-border/60 bg-card">
              <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
                <div className="space-y-5">
                  <img
                    src={withBasePath(article.image)}
                    alt={article.title}
                    className="h-72 w-full rounded-2xl object-cover"
                  />
                  <div className="aspect-video overflow-hidden rounded-2xl border border-border/50">
                    <iframe
                      src={article.videoUrl}
                      title={`Video del articulo ${article.title}`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-3xl font-semibold text-foreground">{article.title}</h2>
                  {article.body.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                  <Link href="/#contacto" className="inline-block pt-3 text-sm font-semibold text-primary hover:underline">
                    Contactanos para mas informacion
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
