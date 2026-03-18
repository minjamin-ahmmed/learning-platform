"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Search, X, Bell, BookOpen, Zap, School, Languages, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const navLinks = [
  { label: "Courses",  href: "/courses",          icon: BookOpen,  description: "500+ expert-led courses"  },
  { label: "Skills",   href: "/skill-development", icon: Zap,       description: "Job-ready skill tracks"   },
  { label: "School",   href: "/school",            icon: School,    description: "For teams & institutions" },
  { label: "Language", href: "/language",          icon: Languages, description: "Learn any language fast"  },
]

const LOGO = "Educore".split("")

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [searchOpen,   setSearchOpen]   = React.useState(false)
  const [searchQuery,  setSearchQuery]  = React.useState("")
  const [scrolled,     setScrolled]     = React.useState(false)
  const [hoveredLink,  setHoveredLink]  = React.useState<string | null>(null)
  const searchRef  = React.useRef<HTMLInputElement>(null)
  const ctaRef     = React.useRef<HTMLDivElement>(null)
  const pathname   = usePathname()

  // Magnetic CTA spring values
  const ctaX  = useMotionValue(0)
  const ctaY  = useMotionValue(0)
  const ctaSX = useSpring(ctaX, { stiffness: 280, damping: 18 })
  const ctaSY = useSpring(ctaY, { stiffness: 280, damping: 18 })

  React.useEffect(() => { setIsMobileOpen(false) }, [pathname])

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  React.useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  React.useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSearchOpen(false); setSearchQuery("") }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true) }
    }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [])

  const handleCtaMove = (e: React.MouseEvent) => {
    if (!ctaRef.current) return
    const r = ctaRef.current.getBoundingClientRect()
    ctaX.set((e.clientX - (r.left + r.width  / 2)) * 0.35)
    ctaY.set((e.clientY - (r.top  + r.height / 2)) * 0.35)
  }
  const handleCtaLeave = () => { ctaX.set(0); ctaY.set(0) }

  return (
    <>
      {/* Search backdrop */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm"
            onClick={() => { setSearchOpen(false); setSearchQuery("") }}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full flex justify-center px-4 py-3 pointer-events-none"
      >
        <div className="pointer-events-auto w-full max-w-7xl">
          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 8px 32px -4px rgba(0,0,0,0.12), 0 2px 8px -2px rgba(0,0,0,0.08)"
                : "0 2px 8px -2px rgba(0,0,0,0.04)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex h-14 items-center justify-between rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md px-4 dark:bg-background/70"
          >

              {/* LEFT ─────────────────────────────────────────────── */}
              <div className="flex items-center gap-5">

                {/* ── 2. LETTER-BY-LETTER LOGO ───────────────────── */}
                <Link href="/" className="flex items-center gap-2.5">
                  {/* Icon: wobble + radial burst */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 8, -4, 0], scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-base overflow-hidden"
                  >
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-xl bg-white/25"
                      initial={{ scale: 0, opacity: 0.7 }}
                      whileHover={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10" style={{ fontFamily: "var(--font-heading)" }}>E</span>
                  </motion.div>

                  {/* Each letter springs up independently on hover */}
                  <span className="hidden sm:flex" style={{ fontFamily: "var(--font-heading)" }}>
                    {LOGO.map((ch, i) => (
                      <motion.span
                        key={i}
                        className="text-lg font-bold tracking-tight inline-block"
                        whileHover={{ y: -5, color: "var(--color-primary)" }}
                        transition={{ type: "spring", stiffness: 500, damping: 12, delay: i * 0.03 }}
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                </Link>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-0.5">
                  {navLinks.map(({ label, href, icon: Icon, description }) => {
                    const isActive  = pathname === href || pathname.startsWith(href + "/")
                    const isHovered = hoveredLink === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        onMouseEnter={() => setHoveredLink(href)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="relative px-3 py-1.5 rounded-xl"
                      >
                        {isHovered && !isActive && (
                          <motion.div
                            layoutId="nav-hover"
                            className="absolute inset-0 rounded-xl bg-white/10 dark:bg-white/8"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                          />
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-xl bg-primary/15"
                            transition={{ type: "spring", bounce: 0.25, duration: 0.38 }}
                          />
                        )}
                        <span className={`relative z-10 text-sm font-medium flex items-center gap-1.5 transition-colors duration-150 ${
                          isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                        }`}>
                          <Icon className="size-3.5 opacity-60" />
                          {label}
                        </span>

                        {/* Animated glass tooltip */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 6,  scale: 0.94 }}
                              animate={{ opacity: 1, y: 0,  scale: 1    }}
                              exit={{   opacity: 0, y: 6,  scale: 0.94 }}
                              transition={{ duration: 0.14 }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 z-50 pointer-events-none"
                            >
                              <div className="bg-popover border border-border/70 rounded-xl px-3 py-1.5 shadow-xl text-xs text-muted-foreground whitespace-nowrap">
                                {description}
                              </div>
                              <div className="absolute -top-1.25 left-1/2 -translate-x-1/2 size-2.5 rotate-45 rounded-sm bg-popover border-l border-t border-border/70" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* RIGHT ────────────────────────────────────────────── */}
              <div className="flex items-center gap-1.5">

                {/* Expandable search */}
                <AnimatePresence mode="wait">
                  {searchOpen ? (
                    <motion.div
                      key="open"
                      initial={{ width: 36, opacity: 0 }}
                      animate={{ width: 240, opacity: 1 }}
                      exit={{   width: 36, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      className="relative hidden sm:flex items-center z-50"
                    >
                      <Search className="absolute left-3 size-3.5 text-muted-foreground pointer-events-none" />
                      <input
                        ref={searchRef}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search courses, skills…"
                        className="w-full h-9 pl-8 pr-8 rounded-xl bg-secondary/60 border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 placeholder:text-muted-foreground/60"
                      />
                      <button
                        onClick={() => { setSearchOpen(false); setSearchQuery("") }}
                        className="absolute right-2.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="size-3.5" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="closed"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={() => setSearchOpen(true)}
                      className="hidden sm:flex items-center gap-2 h-9 px-3 rounded-xl bg-secondary/50 border border-border/50 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                    >
                      <Search className="size-3.5" />
                      <span>Search</span>
                      <kbd className="hidden lg:flex items-center rounded-md bg-muted px-1.5 py-0.5 text-[10px] border border-border/60 text-muted-foreground/60">
                        ⌘K
                      </kbd>
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Theme toggle */}
                <AnimatedThemeToggler className="flex size-9 items-center justify-center rounded-xl transition-colors hover:bg-secondary [&>svg]:size-[1.1rem]" />

                {/* Bell with pulsing notification dot */}
                <motion.button
                  whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                  className="relative hidden sm:flex size-9 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary"
                >
                  <Bell className="size-4" />
                  <span className="absolute top-2 right-2 flex size-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                </motion.button>

                {/* Log in */}
                <Link href="/login" className="hidden sm:block">
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="h-9 px-4 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary"
                  >
                    Log in
                  </motion.button>
                </Link>

                {/* ── 3. MAGNETIC CTA BUTTON ─────────────────────── */}
                <motion.div
                  ref={ctaRef}
                  onMouseMove={handleCtaMove}
                  onMouseLeave={handleCtaLeave}
                  style={{ x: ctaSX, y: ctaSY }}
                  className="hidden sm:block"
                >
                  <Link href="/register">
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      className="relative h-9 px-5 rounded-xl font-semibold text-sm overflow-hidden flex items-center gap-1.5 text-primary-foreground"
                      style={{ background: "var(--color-primary)" }}
                    >
                      {/* Repeating shimmer sweep */}
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(108deg, transparent 25%, rgba(255,255,255,0.32) 50%, transparent 75%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      />
                      {/* Specular top-edge gloss */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px"
                        style={{ background: "rgba(255,255,255,0.45)" }}
                      />
                      <Sparkles className="size-3.5 relative z-10" />
                      <span className="relative z-10">Get Started</span>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Mobile burger */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden flex size-9 items-center justify-center rounded-xl hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isMobileOpen ? (
                      <motion.div
                        key="x"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0,   opacity: 1 }}
                        exit={{   rotate: 90,  opacity: 0 }}
                        transition={{ duration: 0.16 }}
                      >
                        <X className="size-4" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="burger"
                        initial={{ rotate: 90,  opacity: 0 }}
                        animate={{ rotate: 0,   opacity: 1 }}
                        exit={{   rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.16 }}
                        className="flex flex-col gap-1.25 items-center"
                      >
                        <span className="block w-4   h-px rounded-full bg-foreground" />
                        <span className="block w-2.5 h-px rounded-full bg-foreground" />
                        <span className="block w-4   h-px rounded-full bg-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
          </motion.div>
        </div>

        {/* ── Mobile dropdown ───────────────────────────────────────── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0,   scale: 1    }}
              exit={{   opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full mt-2 w-full max-w-7xl px-4 pointer-events-auto"
            >
              <div className="rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl p-4 flex flex-col gap-1">
                {/* Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    placeholder="Search courses, skills…"
                    className="w-full h-10 pl-9 pr-4 rounded-xl bg-secondary/50 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 placeholder:text-muted-foreground/60"
                  />
                </div>

                {navLinks.map(({ label, href, icon: Icon, description }, i) => {
                  const isActive = pathname === href || pathname.startsWith(href + "/")
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0   }}
                      transition={{ delay: i * 0.055, duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                          isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <div className={`flex size-9 items-center justify-center rounded-xl ${isActive ? "bg-primary/15" : "bg-secondary"}`}>
                          <Icon className="size-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">{label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{description}</div>
                        </div>
                        {isActive && <span className="size-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  )
                })}

                <div className="flex gap-2 mt-3 pt-3 border-t border-border/60">
                  <Link href="/login" className="flex-1">
                    <Button variant="outline" className="w-full rounded-xl h-10 font-medium">Log in</Button>
                  </Link>
                  <Link href="/register" className="flex-1">
                    <Button className="w-full rounded-xl h-10 font-semibold gap-1.5">
                      <Sparkles className="size-3.5" /> Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
