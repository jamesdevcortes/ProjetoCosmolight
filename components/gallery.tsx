import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Performing at a massive outdoor electronic music festival",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Close up of DJ equipment during a live set",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Backstage before a show",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Behind The Decks
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden group aspect-[4/3] ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
