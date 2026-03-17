"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, Bell, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Skills", href: "/skill-development" },
  { label: "School", href: "/school" },
  { label: "Language", href: "/language" },
]

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => setMounted(true), [])

  // Close mobile menu on route change
  React.useEffect(() => { setIsMobileOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="w-11/12 sm:w-10/12 mx-auto flex h-16 items-center justify-between">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              E
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline-block">EduLearn</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: search + actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-3 size-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              className="pl-9 w-[200px] lg:w-[300px] h-9 rounded-full bg-secondary/50 border-none focus-visible:ring-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="size-[1.2rem]" />
              ) : (
                <Moon className="size-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
              <Bell className="size-5" />
            </Button>

            <Link href="/login" className="hidden sm:inline-block">
              <Button variant="ghost" className="rounded-full font-medium">
                Log in
              </Button>
            </Link>

            <Link href="/register" className="hidden sm:inline-block">
              <Button className="rounded-full px-6 font-medium">Get Started</Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t bg-background"
          >
            <div className="w-11/12 sm:w-10/12 mx-auto py-4 flex flex-col gap-1">
              {/* Search on mobile */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  className="pl-9 h-9 rounded-full bg-secondary/50 border-none focus-visible:ring-1 w-full"
                />
              </div>

              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors"
                >
                  {label}
                </Link>
              ))}

              <div className="flex gap-2 mt-3 pt-3 border-t">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" className="w-full rounded-full font-medium">
                    Log in
                  </Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button className="w-full rounded-full font-medium">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
