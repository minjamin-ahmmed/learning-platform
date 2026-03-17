"use client"

import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import MotionButton from "@/components/ui/motion-button"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-6">
      <div className="w-11/12 sm:w-10/12 mx-auto relative z-10">
        <Card className="w-full min-h-[500px] bg-foreground/[0.96] dark:bg-card border-border/20 dark:border-border/40 relative overflow-hidden py-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row h-full min-h-175">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center self-start rounded-full border border-primary-foreground/20 dark:border-border bg-primary-foreground/10 dark:bg-secondary/50 px-3 py-1 text-sm font-medium mb-6 text-primary-foreground dark:text-foreground"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary-foreground dark:bg-primary mr-2 animate-pulse" />
                New: Live Coding Bootcamps starting Jan 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-primary-foreground dark:text-foreground"
              >
                Master any skill with{" "}
                <span className="italic font-semibold text-primary-foreground/60 dark:text-muted-foreground">world-class experts.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-primary-foreground/70 dark:text-muted-foreground max-w-lg text-base md:text-lg"
              >
                Access over 5,000+ courses in design, development, business, and more.
                Learn at your own pace with industry-leading instructors and a community of millions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <MotionButton label="Start Learning" inverted/>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base bg-transparent text-primary-foreground dark:text-foreground border-primary-foreground/30 dark:border-border hover:bg-primary-foreground/10 dark:hover:bg-secondary"
                >
                  <PlayCircle className="mr-2 size-4" /> View Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40"
              >
                {["Google", "Microsoft", "Meta", "Amazon"].map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center font-bold text-lg tracking-tighter text-primary-foreground/60 dark:text-muted-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="relative h-80 sm:h-96 lg:h-auto lg:flex-1">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
