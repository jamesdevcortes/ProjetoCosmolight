import Link from "next/link"

const upcomingShows = [
  {
    date: "Mar 14",
    year: "2026",
    venue: "Toledo",
    city: "Parana",
    country: "BR",
    ticketLink: "#",
    soldOut: false,
  },
]

export function Shows() {
  return (
    <section id="shows" className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
              On Tour
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
              Shows
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-1"
          >
            View All Dates
          </Link>
        </div>

        <div className="divide-y divide-border">
          {upcomingShows.map((show) => (
            <div
              key={`${show.venue}-${show.date}`}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-5 gap-4 md:gap-0 hover:bg-secondary/30 transition-colors px-4 -mx-4"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <div className="w-20 md:w-24">
                  <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {show.date}
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {show.venue}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {show.city}, {show.country}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {show.year}
                </span>
                {show.soldOut ? (
                  <span className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-4 py-2">
                    Sold Out
                  </span>
                ) : (
                  <Link
                    href={show.ticketLink}
                    className="text-xs uppercase tracking-wider text-accent-foreground bg-accent px-6 py-2 hover:opacity-90 transition-opacity"
                  >
                    Tickets
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="#"
            className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-1"
          >
            View All Dates
          </Link>
        </div>
      </div>
    </section>
  )
}
