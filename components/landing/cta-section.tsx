"use client"

import { motion } from "framer-motion"
import { Smartphone, Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import MotionButton from "@/components/ui/motion-button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="w-11/12 sm:w-10/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[3rem] bg-primary text-primary-foreground p-8 md:p-16 lg:p-24 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                Ready to start your learning journey?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-md">
                Join 5 million+ learners and start mastering the skills you need for your future.
              </p>
              <div className="flex flex-wrap gap-4">
                <MotionButton label="Get Started Free" />
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-12 rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Apple className="size-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="size-12 rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
                  >
                    <Play className="size-6 fill-current" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-24 -right-24 size-[30rem] bg-white/10 rounded-full blur-3xl" />
              <motion.div
                initial={{ rotate: 10, y: 50 }}
                whileInView={{ rotate: 5, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="bg-background rounded-[2.5rem] border-[8px] border-primary-foreground/10 shadow-2xl p-4 w-[300px] mx-auto"
              >
                <div className="h-[500px] w-full bg-secondary/50 rounded-[1.5rem] overflow-hidden flex flex-col items-center justify-center gap-4 text-center p-8">
                  <Smartphone className="size-16 text-muted-foreground opacity-20" />
                  <p className="text-muted-foreground font-medium">Download the app for offline learning</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
