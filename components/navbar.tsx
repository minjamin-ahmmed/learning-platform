"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Menu, Bell, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="w-10/12 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              E
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline-block">EduLearn</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/skill-development" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/school" className="text-sm font-medium hover:text-primary transition-colors">
              School
            </Link>
            <Link href="/language" className="text-sm font-medium hover:text-primary transition-colors">
              Language
            </Link>
          </nav>
        </div>

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

            <Link href="/register">
              <Button className="rounded-full px-6 font-medium">Get Started</Button>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden rounded-full">
              <Menu className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
