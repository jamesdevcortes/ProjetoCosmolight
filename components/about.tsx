import Image from "next/image"

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/artist.jpg"
              alt="COSMOLIGHT artist portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-card/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              The Artist
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
              About
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Born from the pulsing underground of Berlin&apos;s techno scene,
                COSMOLIGHT has been shaping the electronic music landscape for over a
                decade. Known for dark, driving sets that blend industrial techno
                with melodic undertones.
              </p>
              <p>
                With releases on Drumcode and Afterlife, and residencies at some
                of Europe&apos;s most iconic clubs, COSMOLIGHT continues to push sonic
                boundaries while maintaining the raw, uncompromising energy that
                defines the underground.
              </p>
              <p>
                From warehouse raves to festival main stages, every performance
                is a journey through sound — crafted with precision and delivered
                with intensity.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  200+
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Shows
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  15
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Releases
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  35+
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
