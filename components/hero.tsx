import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      <Image
        src="/images/hero-bg.jpg"
        alt="DJ performing at a dark atmospheric nightclub"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 md:px-12 lg:px-16 md:pb-24">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 animate-fade-up">
            Electronic Music Artist
          </p>
          <h1 className="font-display text-6xl md:text-[8.3rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-foreground uppercase animate-fade-up">
            COSMOLIGHT
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-up">
            Sound architect. Nocturnal storyteller. Pushing the boundaries of
            electronic music from the underground to the main stage.
          </p>
          <div className="flex items-center gap-4 mt-8 animate-fade-up">
            <Link
              href="#shows"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Upcoming Shows
            </Link>
            <Link
              href="#music"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider hover:border-foreground transition-colors"
            >
              Latest Release
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-8 bg-muted-foreground/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}
