"use client"

import { motion } from "framer-motion"
import { Code, Palette, BarChart3, Languages, Microscope, Music } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  { name: "Programming", icon: Code, courses: "1.2k+ courses" },
  { name: "Design", icon: Palette, courses: "800+ courses" },
  { name: "Business", icon: BarChart3, courses: "600+ courses" },
  { name: "Language", icon: Languages, courses: "400+ courses" },
  { name: "Science", icon: Microscope, courses: "300+ courses" },
  { name: "Music", icon: Music, courses: "200+ courses" },
]

export function CategorySection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Categories</h2>
            <p className="text-muted-foreground">Find the right path for your learning journey.</p>
          </div>
          <button className="text-sm font-semibold hover:underline">View all categories →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 flex flex-col items-center text-center hover:bg-background transition-colors cursor-pointer group border-none bg-secondary/50">
                <div className="size-12 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="size-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.courses}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
