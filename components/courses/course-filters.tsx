"use client"

import * as React from "react"
import { Search, Filter, X, Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const filterCategories = [
  {
    name: "Level",
    options: ["Beginner", "Intermediate", "Advanced", "All Levels"],
  },
  {
    name: "Price",
    options: ["Free", "Paid", "Subscription"],
  },
  {
    name: "Duration",
    options: ["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"],
  },
]

// ── Desktop sidebar ──────────────────────────────────────────────────────────

function DesktopFilters({
  selected,
  toggle,
  reset,
}: {
  selected: Record<string, string[]>
  toggle: (cat: string, opt: string) => void
  reset: () => void
}) {
  const totalActive = Object.values(selected).flat().length

  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-9 h-10 rounded-xl" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2 text-sm">
          <Filter className="size-4" /> Filters
          {totalActive > 0 && (
            <span className="inline-flex items-center justify-center size-5 rounded-full bg-foreground text-background text-[10px] font-bold">
              {totalActive}
            </span>
          )}
        </h3>
        {totalActive > 0 && (
          <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Reset
          </button>
        )}
      </div>

      {/* Filter groups */}
      {filterCategories.map((category, i) => (
        <div key={category.name}>
          {i > 0 && <div className="border-t border-border mb-5" />}
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {category.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.options.map((option) => {
              const active = selected[category.name]?.includes(option)
              return (
                <button
                  key={option}
                  onClick={() => toggle(category.name, option)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {active && <Check className="size-3" />}
                  {option}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Mobile bottom-sheet ───────────────────────────────────────────────────────

function MobileFilters({
  selected,
  toggle,
  reset,
}: {
  selected: Record<string, string[]>
  toggle: (cat: string, opt: string) => void
  reset: () => void
}) {
  const [open, setOpen] = React.useState(false)
  const [expandedCat, setExpandedCat] = React.useState<string | null>("Level")
  const totalActive = Object.values(selected).flat().length

  // Prevent body scroll when sheet is open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Sticky top bar */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search courses..." className="pl-9 h-10 rounded-xl" />
        </div>

        {/* Filter trigger pill */}
        <button
          onClick={() => setOpen(true)}
          className={`shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-xl border text-sm font-medium transition-all ${
            totalActive > 0
              ? "bg-foreground text-background border-foreground"
              : "bg-background text-foreground border-border hover:border-foreground/40"
          }`}
        >
          <Filter className="size-4" />
          Filters
          {totalActive > 0 && (
            <span className="inline-flex items-center justify-center size-5 rounded-full bg-background text-foreground text-[10px] font-bold">
              {totalActive}
            </span>
          )}
        </button>
      </div>

      {/* Active filter chips */}
      {totalActive > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {Object.entries(selected).flatMap(([cat, opts]) =>
            opts.map((opt) => (
              <span
                key={`${cat}-${opt}`}
                className="inline-flex items-center gap-1 bg-secondary text-foreground text-xs font-medium px-3 py-1 rounded-full"
              >
                {opt}
                <button onClick={() => toggle(cat, opt)} className="ml-0.5 hover:text-destructive transition-colors">
                  <X className="size-3" />
                </button>
              </span>
            ))
          )}
          <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground px-2 underline-offset-2 hover:underline transition-colors">
            Clear all
          </button>
        </div>
      )}

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Bottom sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl shadow-2xl max-h-[85dvh] flex flex-col"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            {/* Sheet header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
              <h2 className="font-semibold text-base">
                Filters
                {totalActive > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-foreground text-background text-[10px] font-bold">
                    {totalActive}
                  </span>
                )}
              </h2>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-secondary transition-colors">
                <X className="size-4" />
              </button>
            </div>

            {/* Accordion filter groups */}
            <div className="overflow-y-auto flex-1 px-5 py-3 space-y-1">
              {filterCategories.map((category) => {
                const isOpen = expandedCat === category.name
                const activeCount = selected[category.name]?.length ?? 0
                return (
                  <div key={category.name} className="border border-border rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setExpandedCat(isOpen ? null : category.name)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium hover:bg-secondary/50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        {category.name}
                        {activeCount > 0 && (
                          <span className="inline-flex items-center justify-center size-5 rounded-full bg-foreground text-background text-[10px] font-bold">
                            {activeCount}
                          </span>
                        )}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="size-4 text-muted-foreground" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 flex flex-wrap gap-2 border-t border-border pt-3">
                            {category.options.map((option) => {
                              const active = selected[category.name]?.includes(option)
                              return (
                                <button
                                  key={option}
                                  onClick={() => toggle(category.name, option)}
                                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                                    active
                                      ? "bg-foreground text-background border-foreground"
                                      : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                                  }`}
                                >
                                  {active && <Check className="size-3.5" />}
                                  {option}
                                </button>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Sheet footer */}
            <div className="px-5 py-4 border-t border-border flex gap-3 shrink-0">
              {totalActive > 0 && (
                <Button variant="outline" className="flex-1 rounded-xl h-11" onClick={reset}>
                  Reset all
                </Button>
              )}
              <Button className="flex-1 rounded-xl h-11" onClick={() => setOpen(false)}>
                Show results
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export function CourseFilters() {
  const [selected, setSelected] = React.useState<Record<string, string[]>>({})

  const toggle = (cat: string, opt: string) => {
    setSelected((prev) => {
      const current = prev[cat] ?? []
      const next = current.includes(opt)
        ? current.filter((o) => o !== opt)
        : [...current, opt]
      return { ...prev, [cat]: next }
    })
  }

  const reset = () => setSelected({})

  return (
    <>
      {/* Desktop: sidebar */}
      <div className="hidden lg:block">
        <DesktopFilters selected={selected} toggle={toggle} reset={reset} />
      </div>

      {/* Mobile: search bar + filter button + bottom sheet */}
      <div className="lg:hidden">
        <MobileFilters selected={selected} toggle={toggle} reset={reset} />
      </div>
    </>
  )
}
