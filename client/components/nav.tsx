"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const links = [
  { href: "/projets", label: "Projets" },
  { href: "/parcours", label: "Parcours" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

function Logo() {
  return (
    <Link href="/" className="flex items-baseline gap-2.5">
      <span className="font-display text-3xl font-bold leading-none text-ink">
        Mathys
      </span>
      <span className="font-mono text-[11px] tracking-wide text-brand">
        ui/ux × dev
      </span>
    </Link>
  )
}

function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  // Close the mobile menu whenever the route changes.
  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <nav className="relative flex h-[88px] items-center justify-between px-6 sm:px-11">
      <Logo />

      {/* Desktop links */}
      <div className="hidden items-center gap-8 lg:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-[15px] font-medium transition-colors hover:text-brand",
              isActive(link.href) ? "font-semibold text-brand" : "text-body"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop right actions */}
      <div className="hidden items-center gap-4 lg:flex">
        <Badge variant="outline" dot="var(--success)" className="text-body">
          Disponible
        </Badge>
        <Button asChild size="sm">
          <Link href="/contact">CV ↗</Link>
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="flex size-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-brand-soft lg:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile panel + dismiss backdrop */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-10 cursor-default bg-ink/20 backdrop-blur-sm lg:hidden"
          />
          <div className="absolute left-0 right-0 top-[88px] z-20 mx-4 origin-top animate-in fade-in slide-in-from-top-2 rounded-card border border-line bg-white p-4 shadow-xl duration-200 lg:hidden">
            <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-brand-soft",
                  isActive(link.href) ? "text-brand" : "text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-line px-3 pt-4">
              <Badge variant="outline" dot="var(--success)" className="text-body">
                Disponible
              </Badge>
              <Button asChild size="sm">
                <Link href="/contact">CV ↗</Link>
              </Button>
            </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export { Nav }
