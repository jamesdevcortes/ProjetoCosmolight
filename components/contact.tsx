'use client';

import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground mb-8">
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              For booking inquiries, press requests, and all other matters.
              Available for club shows, festivals, and private events worldwide.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Booking
                </p>
                <Link
                  href="mailto:booking@cosmolight.live"
                  className="font-display text-xl text-foreground hover:text-accent transition-colors"
                >
                  booking@cosmolight.live
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Management
                </p>
                <Link
                  href="mailto:mgmt@cosmolight.live"
                  className="font-display text-xl text-foreground hover:text-accent transition-colors"
                >
                  mgmt@cosmolight.live
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Press
                </p>
                <Link
                  href="mailto:press@cosmolight.live"
                  className="font-display text-xl text-foreground hover:text-accent transition-colors"
                >
                  press@cosmolight.live
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Connect
            </p>
            <div className="space-y-4">
              {[
                { name: "Instagram", handle: "@cosmolight.official", href: "#" },
                { name: "Spotify", handle: "COSMOLIGHT", href: "#" },
                { name: "SoundCloud", handle: "cosmolight", href: "#" },
                { name: "Resident Advisor", handle: "COSMOLIGHT", href: "#" },
                { name: "Beatport", handle: "COSMOLIGHT", href: "#" },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-accent/30 transition-colors"
                >
                  <span className="font-display text-lg text-foreground group-hover:text-accent transition-colors">
                    {social.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {social.handle}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-16 p-8 bg-secondary/50 border border-border">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Newsletter
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Stay updated with upcoming shows, new releases, and exclusive
                content.
              </p>
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground px-6 py-3 text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
