"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  Code2, Palette, BarChart3, Languages, Microscope, Music,
  Cpu, Camera, Dumbbell, Globe, ArrowRight, TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* ─────────────────────────── data ─────────────────────────── */

const categories = [
  {
    name: "Programming",
    icon: Code2,
    courses: 1240,
    trending: true,
    tag: "Most Popular",
    description: "Web, mobile, AI & more",
    color: "from-foreground/10 to-foreground/5",
    students: "2.1M",
  },
  {
    name: "Design",
    icon: Palette,
    courses: 830,
    trending: true,
    tag: "Trending",
    description: "UI/UX, branding, motion",
    color: "from-foreground/8 to-foreground/3",
    students: "940K",
  },
  {
    name: "Business",
    icon: BarChart3,
    courses: 620,
    trending: false,
    tag: null,
    description: "Finance, marketing, strategy",
    color: "from-foreground/8 to-foreground/3",
    students: "780K",
  },
  {
    name: "Languages",
    icon: Languages,
    courses: 410,
    trending: false,
    tag: null,
    description: "Speak, write, connect",
    color: "from-foreground/8 to-foreground/3",
    students: "620K",
  },
  {
    name: "Science",
    icon: Microscope,
    courses: 305,
    trending: false,
    tag: null,
    description: "Physics, biology, chemistry",
    color: "from-foreground/8 to-foreground/3",
    students: "410K",
  },
  {
    name: "Music",
    icon: Music,
    courses: 210,
    trending: false,
    tag: null,
    description: "Instruments, theory, production",
    color: "from-foreground/8 to-foreground/3",
    students: "290K",
  },
  {
    name: "Technology",
    icon: Cpu,
    courses: 510,
    trending: true,
    tag: "Hot",
    description: "Cloud, DevOps, security",
    color: "from-foreground/8 to-foreground/3",
    students: "1.1M",
  },
  {
    name: "Photography",
    icon: Camera,
    courses: 185,
    trending: false,
    tag: null,
    description: "Capture, edit, publish",
    color: "from-foreground/8 to-foreground/3",
    students: "220K",
  },
  {
    name: "Health",
    icon: Dumbbell,
    courses: 270,
    trending: false,
    tag: null,
    description: "Fitness, nutrition, wellness",
    color: "from-foreground/8 to-foreground/3",
    students: "380K",
  },
  {
    name: "Geography",
    icon: Globe,
    courses: 140,
    trending: false,
    tag: null,
    description: "Maps, cultures, history",
    color: "from-foreground/8 to-foreground/3",
    students: "170K",
  },
]

const FILTERS = ["All", "Trending", "Most Popular", "New"]

/* ─────────────────────── marquee strip ─────────────────────── */

const marqueeItems = [
  "Programming", "Design", "Business", "Languages", "Science",
  "Music", "Technology", "Photography", "Health", "Geography",
  "AI & ML", "Cybersecurity", "Game Dev", "Data Science",
]

function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div className="relative overflow-hidden py-3 border-y border-border/50 mb-12">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-secondary/30 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-secondary/30 to-transparent z-10" />
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-[0.15em]">
            <span className="size-1 rounded-full bg-foreground/20 inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────── filter pills ──────────────────────── */

function FilterPills({
  active,
  onChange,
}: {
  active: string
  onChange: (f: string) => void
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200",
            active === f
              ? "text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {active === f && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-foreground"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{f}</span>
        </button>
      ))}
    </div>
  )
}

/* ─────────────────────── category card ─────────────────────── */

function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof categories)[number]
  index: number
}) {
  const Icon = cat.icon
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl border border-border bg-background overflow-hidden cursor-pointer"
    >
      {/* hover gradient fill */}
      <div className={cn(
        "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        cat.color
      )} />
      {/* dot texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-size-[18px_18px]" />

      <div className="relative z-10 p-5 flex flex-col gap-4 h-full">
        {/* top row */}
        <div className="flex items-start justify-between">
          <div className="size-10 rounded-xl bg-secondary/70 border border-border/80 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-transparent transition-all duration-300">
            <Icon className="size-4.5" />
          </div>
          {cat.tag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-foreground text-background">
              {cat.trending && <TrendingUp className="size-2.5" />}
              {cat.tag}
            </span>
          )}
        </div>

        {/* text */}
        <div className="flex-1">
          <h3 className="font-semibold text-[15px] tracking-tight mb-1">{cat.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/60">
          <div>
            <span className="text-xs font-semibold text-foreground tabular-nums">
              {cat.courses.toLocaleString()}+
            </span>
            <span className="text-xs text-muted-foreground"> courses</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="tabular-nums font-medium text-foreground">{cat.students}</span>
            <span>students</span>
          </div>
        </div>
      </div>

      {/* arrow reveal */}
      <div className="absolute bottom-4 right-4 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <div className="size-6 rounded-full bg-foreground flex items-center justify-center">
          <ArrowRight className="size-3 text-background" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────── mobile drag carousel ──────────────────── */

function MobileCarousel({ items }: { items: typeof categories }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function onPointerDown(e: React.PointerEvent) {
    isDragging.current = true
    startX.current = e.clientX
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0
    trackRef.current?.setPointerCapture(e.pointerId)
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current || !trackRef.current) return
    trackRef.current.scrollLeft = scrollLeft.current - (e.clientX - startX.current)
  }
  function onPointerUp() { isDragging.current = false }

  return (
    <div className="relative -mx-4">
      {/* fade hint right edge */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-secondary/40 to-transparent z-10" />

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   cursor-grab active:cursor-grabbing"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              /* show ~2.5 cards: calc((100% - padding - gaps) / 2.4) */
              className="shrink-0 w-[calc(50%-6px)] min-w-[148px] max-w-[172px]
                         group relative rounded-2xl border border-border bg-background
                         overflow-hidden cursor-pointer active:scale-[0.97] transition-transform"
            >
              <div className={cn(
                "absolute inset-0 bg-linear-to-br opacity-0 group-active:opacity-100 transition-opacity duration-300",
                cat.color
              )} />

              <div className="relative z-10 p-4 flex flex-col gap-3">
                {/* icon + tag */}
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-xl bg-secondary/70 border border-border/80
                                  flex items-center justify-center">
                    <Icon className="size-4" />
                  </div>
                  {cat.tag && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full
                                     text-[9px] font-bold uppercase tracking-wide
                                     bg-foreground text-background">
                      {cat.trending && <TrendingUp className="size-2" />}
                      {cat.tag}
                    </span>
                  )}
                </div>

                {/* name + desc */}
                <div>
                  <h3 className="font-semibold text-sm tracking-tight">{cat.name}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-1">
                    {cat.description}
                  </p>
                </div>

                {/* stat row */}
                <div className="flex items-center justify-between pt-2.5 border-t border-border/60">
                  <span className="text-[11px] font-semibold tabular-nums">
                    {cat.courses.toLocaleString()}+
                    <span className="font-normal text-muted-foreground"> courses</span>
                  </span>
                  <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                    {cat.students}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* trailing spacer so last card isn't flush */}
        <div className="shrink-0 w-4" />
      </div>
    </div>
  )
}

/* ────────────────────────── section ────────────────────────── */

export function CategorySection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All"
      ? categories
      : activeFilter === "Trending"
      ? categories.filter((c) => c.trending)
      : activeFilter === "Most Popular"
      ? [...categories].sort((a, b) => b.courses - a.courses).slice(0, 6)
      : categories.slice(0, 5) // "New" — placeholder

  return (
    <section className="bg-secondary/20 relative overflow-hidden py-12">
      {/* ambient blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-125 rounded-full bg-foreground/2.5 blur-3xl" />

      <div className="w-11/12 sm:w-10/12 mx-auto relative">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Browse by category
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              What do you want<br className="hidden md:block" /> to{" "}
              <span className="italic font-semibold text-muted-foreground">learn?</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors shrink-0">
            View all categories
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* ── Marquee ── */}
        <MarqueeStrip />

        {/* ── Filter pills + count ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <FilterPills active={activeFilter} onChange={setActiveFilter} />
          <span className="text-xs text-muted-foreground tabular-nums">
            Showing{" "}
            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "category" : "categories"}
          </span>
        </motion.div>

        {/* ── Mobile carousel (hidden md+) ── */}
        <div className="md:hidden">
          <AnimatePresence mode="popLayout">
            <MobileCarousel key={activeFilter} items={filtered} />
          </AnimatePresence>
        </div>

        {/* ── Desktop grid (hidden below md) ── */}
        <motion.div layout className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cat, i) => (
              <CategoryCard key={cat.name} cat={cat} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom stat bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 px-6 py-4 rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm"
        >
          <p className="text-sm text-muted-foreground max-w-xs">
            Can't find what you're looking for?{" "}
            <button className="font-semibold text-foreground underline underline-offset-2 hover:no-underline">
              Request a category
            </button>
          </p>
          <div className="flex gap-6">
            {[
              { value: "10+", label: "Categories" },
              { value: "6,500+", label: "Total courses" },
              { value: "7M+", label: "Enrollments" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg font-bold tracking-tight">{s.value}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
