import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-widest text-foreground uppercase"
        >
          COSMOLIGHT
        </Link>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          &copy; 2026 COSMOLIGHT. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Instagram", "Spotify", "SoundCloud", "X"].map((platform) => (
            <Link
              key={platform}
              href="#"
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
