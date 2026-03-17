"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Video, FileText, Award, Smartphone, Zap } from "lucide-react"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"

const benefits = [
  {
    title: "Recorded + Live Classes",
    description: "Learn at your own pace with recorded videos or join real-time interactive sessions.",
    icon: Video,
  },
  {
    title: "Practice Quizzes",
    description: "Test your knowledge with chapter-wise quizzes and full-length mock exams.",
    icon: Zap,
  },
  {
    title: "Downloadable Resources",
    description: "Get access to exclusive PDFs, worksheets, and project source files for every course.",
    icon: FileText,
  },
  {
    title: "Mobile Learning",
    description: "Download lessons to your phone and learn on the go, even without an internet connection.",
    icon: Smartphone,
  },
  {
    title: "Industry Certificates",
    description: "Earn recognized certificates upon completion to showcase your skills to employers.",
    icon: Award,
  },
  {
    title: "Lifetime Access",
    description: "Once you enroll, you get lifetime access to the course content and all future updates.",
    icon: CheckCircle2,
  },
]



export function PlatformBenefits() {
  return (
    <>
      {/* ── Benefits grid ── */}
      <section className="py-20 bg-secondary/10">
        <div className="w-11/12 sm:w-10/12 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose EduLearn?</h2>
            <p className="text-muted-foreground text-lg">
              We provide a complete ecosystem for your learning needs, combining technology and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-background border hover:border-primary/50 transition-colors group"
              >
                <div className="shrink-0">
                  <div className="size-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <benefit.icon className="size-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  )
}
