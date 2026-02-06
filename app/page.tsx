import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Shows } from "@/components/shows"
import { Music } from "@/components/music"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shows />
      <Music />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
