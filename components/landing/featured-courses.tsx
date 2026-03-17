"use client"

import { motion } from "framer-motion"
import { Star, Clock, Users, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    reviews: "12.4k",
    students: "245k",
    duration: "65 hours",
    lectures: "320 lectures",
    level: "All Levels",
    price: "$89.99",
    originalPrice: "$199.99",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=80",
    tag: "Bestseller",
    category: "Development",
  },
  {
    title: "UI/UX Design Essentials with Figma",
    instructor: "Gary Simon",
    rating: 4.8,
    reviews: "8.1k",
    students: "120k",
    duration: "25 hours",
    lectures: "180 lectures",
    level: "Beginner",
    price: "$74.99",
    originalPrice: "$159.99",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    tag: "Trending",
    category: "Design",
  },
  {
    title: "Modern React with Redux [2024]",
    instructor: "Stephen Grider",
    rating: 4.7,
    reviews: "9.8k",
    students: "180k",
    duration: "45 hours",
    lectures: "250 lectures",
    level: "Intermediate",
    price: "$94.99",
    originalPrice: "$219.99",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    tag: "Updated",
    category: "Development",
  },
   {
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    reviews: "12.4k",
    students: "245k",
    duration: "65 hours",
    lectures: "320 lectures",
    level: "All Levels",
    price: "$89.99",
    originalPrice: "$199.99",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=80",
    tag: "Bestseller",
    category: "Development",
  },
]

const tagStyles: Record<string, string> = {
  Bestseller: "bg-foreground text-background",
  Trending:   "bg-foreground/10 text-foreground",
  Updated:    "bg-foreground/10 text-foreground",
  "Top Rated":"bg-foreground text-background",
  New:        "bg-foreground/10 text-foreground",
}

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-background">
      <div className="w-11/12 sm:w-10/12 mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-2">
              Top Picks
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Featured Courses</h2>
            <p className="text-muted-foreground mt-1">Hand-picked courses from our top instructors.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All Courses
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Live Now
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide uppercase backdrop-blur-sm ${tagStyles[course.tag] ?? "bg-foreground/10 text-foreground"}`}>
                    {course.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium bg-black/60 text-white backdrop-blur-sm">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-background/95 backdrop-blur-sm text-sm font-bold shadow-lg">
                    {course.price}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-3 px-0.5">
                <div>
                  <h3 className="font-semibold text-[15px] leading-snug tracking-tight line-clamp-2 group-hover:text-foreground/80 transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground font-medium">{course.instructor}</p>
                </div>

                <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="size-3 fill-foreground text-foreground" />
                    <span className="font-semibold text-foreground tabular-nums">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews})</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="size-3" />
                    <span className="tabular-nums">{course.students}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="size-3 shrink-0" />
                    {course.lectures}
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-foreground/10 text-foreground">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/60">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold tracking-tight">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                    ENROLL →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="rounded-full px-8 gap-2">
            Browse All Courses
            <ArrowRight className="size-4" />
          </Button>
        </div>

      </div>
    </section>
  )
}
