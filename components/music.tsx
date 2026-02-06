export function Music() {
  return (
    <section
      id="music"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
            Listen
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
            Music
          </h2>
        </div>

        <div className="w-full">
          <iframe
            title="Spotify Album"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/3qhKcGyAh4wi2MQY93fZ16?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
