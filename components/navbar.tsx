"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Shows", href: "#shows" },
  { label: "Music", href: "#music" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "SoundCloud", href: "#" },
  { label: "X", href: "#" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16 bg-background/80 backdrop-blur-md border-b border-border/50">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-widest text-foreground uppercase"
        >
          COSMOLIGHT
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-3xl uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-12">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
