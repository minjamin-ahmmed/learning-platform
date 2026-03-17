"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Clock, Users, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import MotionButton from "@/components/ui/motion-button"

const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    students: "245k",
    duration: "65 hours",
    price: "$89.99",
    image: "/coding-bootcamp.png",
    tag: "Bestseller",
    level: "Beginner",
  },
  {
    id: "2",
    title: "UI/UX Design Essentials with Figma",
    instructor: "Gary Simon",
    rating: 4.8,
    students: "120k",
    duration: "25 hours",
    price: "$74.99",
    image: "/ui-ux-design-concept.png",
    tag: "Trending",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Modern React with Redux [2024]",
    instructor: "Stephen Grider",
    rating: 4.7,
    students: "180k",
    duration: "45 hours",
    price: "$94.99",
    image: "/react-course.png",
    tag: "Updated",
    level: "Intermediate",
  },
  {
    id: "4",
    title: "Python for Data Science and AI",
    instructor: "Jose Portilla",
    rating: 4.9,
    students: "95k",
    duration: "42 hours",
    price: "$79.99",
    image: "/python-data-science.jpg",
    tag: "Top Rated",
    level: "Beginner",
  },
  {
    id: "5",
    title: "Digital Marketing Masterclass",
    instructor: "Phil Ebiner",
    rating: 4.6,
    students: "65k",
    duration: "18 hours",
    price: "$49.99",
    image: "/digital-marketing.jpg",
    tag: "New",
    level: "Beginner",
  },
  {
    id: "6",
    title: "Financial Analysis & Modeling",
    instructor: "CFI Academy",
    rating: 4.8,
    students: "42k",
    duration: "30 hours",
    price: "$129.99",
    image: "/finance-growth.png",
    tag: "Bestseller",
    level: "Advanced",
  },
]

const tagStyles: Record<string, string> = {
  Bestseller: "bg-foreground text-background",
  Trending:   "bg-foreground/10 text-foreground",
  Updated:    "bg-foreground/10 text-foreground",
  "Top Rated":"bg-foreground text-background",
  New:        "bg-foreground/10 text-foreground",
}

function CourseCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  )
}

export function CourseList() {
  const [loading, setLoading] = React.useState(true)
  const [view, setView] = React.useState<"grid" | "list">("grid")

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground tabular-nums">
          Showing <span className="text-foreground font-medium">12</span> of{" "}
          <span className="text-foreground font-medium">145</span> courses
        </p>
        <div className="flex items-center gap-1 border rounded-xl p-1 bg-muted/40">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("grid")}
            className={`rounded-lg transition-all ${view === "grid" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <LayoutGrid className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setView("list")}
            className={`rounded-lg transition-all ${view === "list" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Grid / List */}
      <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10" : "flex flex-col divide-y divide-border"}>
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {view === "grid" ? (
              <Link href={`/courses/${course.id}`} className="group block">
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted mb-4">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide uppercase backdrop-blur-sm ${tagStyles[course.tag] ?? "bg-foreground/10 text-foreground"}`}>
                      {course.tag}
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
                  <div className="flex items-center justify-between pt-2 border-t border-border/60">
                    <span className="text-base font-bold tracking-tight">{course.price}</span>
                    <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                      ENROLL →
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <Link href={`/courses/${course.id}`} className="group flex items-center gap-5 py-5">
                {/* Thumbnail */}
                <div className="relative w-32 shrink-0 aspect-4/3 overflow-hidden rounded-xl bg-muted">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase ${tagStyles[course.tag] ?? "bg-foreground/10 text-foreground"}`}>
                      {course.tag}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{course.level}</span>
                  </div>
                  <h3 className="font-semibold text-[15px] leading-snug tracking-tight line-clamp-1 group-hover:text-foreground/80 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">{course.instructor}</p>
                  <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="size-3 fill-foreground text-foreground" />
                      <span className="font-semibold text-foreground tabular-nums">{course.rating}</span>
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
                </div>
                {/* Price + CTA */}
                <div className="shrink-0 text-right space-y-2">
                  <p className="text-base font-bold tracking-tight">{course.price}</p>
                  <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                    ENROLL →
                  </span>
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      <div className="flex justify-center pt-6">
        <MotionButton label="Load More Courses" inverted />
      </div>
    </div>
  )
}
