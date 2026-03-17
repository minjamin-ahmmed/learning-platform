"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const testimonials = [
  {
    text: "EduLearn completely changed how I approach learning. The structured courses and live sessions kept me accountable every week.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Briana Patton",
    role: "Frontend Developer",
  },
  {
    text: "I earned my certificate in 6 weeks and landed a new job within a month. The project-based curriculum made all the difference.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Bilal Ahmed",
    role: "Software Engineer",
  },
  {
    text: "The downloadable resources and offline access are a game changer. I study during my commute every single day.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Saman Malik",
    role: "UX Designer",
  },
  {
    text: "Practice quizzes after every module helped me retain information so much better than reading alone ever could.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Omar Raza",
    role: "Product Manager",
  },
  {
    text: "I've tried four other platforms. EduLearn is the only one where I actually finished a course. The UI just gets out of the way.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Zainab Hussain",
    role: "Data Analyst",
  },
  {
    text: "The instructor quality here is unmatched. Real practitioners teaching real skills — not recycled YouTube content.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Lifetime access means I can revisit lessons whenever I need a refresher. That alone is worth the price of the course.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Farhan Siddiqui",
    role: "Marketing Lead",
  },
  {
    text: "I went from zero to building full-stack apps in 10 weeks. The structured path made it feel achievable, not overwhelming.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Sana Sheikh",
    role: "Full Stack Developer",
  },
  {
    text: "Customer support actually responds within hours. When I hit a blocker in a project, someone was there to help immediately.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&auto=format&fit=crop&q=80",
    name: "Hassan Ali",
    role: "Startup Founder",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    /* ── Testimonials scrolling columns ── */
      <section className="bg-background py-20 relative overflow-hidden">
        <div className="w-10/12 mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="border py-1 px-4 rounded-lg text-sm font-medium">
                Testimonials
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              Loved by learners worldwide
            </h2>
            <p className="text-center mt-4 text-muted-foreground">
              Join thousands of students who have already transformed their careers with EduLearn.
            </p>
          </motion.div>

          {/* Scrolling columns */}
          <div className="flex gap-6 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-185 overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} className="flex-1" />
            <TestimonialsColumn testimonials={secondColumn} className="flex-1 hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="flex-1 hidden lg:block" duration={17} />
          </div>

        </div>
      </section>
  )
}
