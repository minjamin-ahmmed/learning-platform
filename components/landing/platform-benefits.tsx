"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { CheckCircle2, Video, FileText, Award, Smartphone, Zap, ArrowUpRight } from "lucide-react"
import { useRef, MouseEvent } from "react"

const benefits = [
  {
    title: "Recorded + Live Classes",
    description: "Learn at your own pace with recorded videos or join real-time interactive sessions with top instructors.",
    icon: Video,
    size: "large",   // spans 2 cols
    stat: "500+",
    statLabel: "Live sessions/month",
    accent: "from-foreground/8 to-foreground/4",
  },
  {
    title: "Practice Quizzes",
    description: "Chapter-wise quizzes and full-length mock exams that adapt to your skill level.",
    icon: Zap,
    size: "small",
    stat: "10k+",
    statLabel: "Questions",
    accent: "from-foreground/6 to-transparent",
  },
  {
    title: "Industry Certificates",
    description: "Earn recognized certificates upon completion to showcase your skills to employers.",
    icon: Award,
    size: "small",
    stat: "98%",
    statLabel: "Employer recognition",
    accent: "from-foreground/6 to-transparent",
  },
  {
    title: "Downloadable Resources",
    description: "Exclusive PDFs, worksheets, and project source files for every course. Yours forever.",
    icon: FileText,
    size: "small",
    stat: "50k+",
    statLabel: "Resources",
    accent: "from-foreground/6 to-transparent",
  },
  {
    title: "Lifetime Access",
    description: "Enroll once — get permanent access to content and every future update at no extra cost.",
    icon: CheckCircle2,
    size: "large",   // spans 2 cols
    stat: "∞",
    statLabel: "Access forever",
    accent: "from-foreground/8 to-foreground/4",
  },
  {
    title: "Mobile Learning",
    description: "Download lessons and learn offline on any device, anywhere.",
    icon: Smartphone,
    size: "small",
    stat: "iOS + Android",
    statLabel: "Available on",
    accent: "from-foreground/6 to-transparent",
  },
]

/* ── Tilt card wrapper ── */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 })

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Large bento card ── */
function LargeCard({ benefit, index }: { benefit: (typeof benefits)[number]; index: number }) {
  const Icon = benefit.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-1 md:col-span-2"
    >
      <TiltCard className="group relative h-full min-h-55 rounded-3xl border border-border bg-background overflow-hidden cursor-default">
        {/* gradient wash */}
        <div className={`absolute inset-0 bg-linear-to-br ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[32px_32px]" />

        <div className="relative z-10 flex h-full flex-col md:flex-row gap-8 p-8">
          {/* left */}
          <div className="flex flex-col justify-between flex-1 gap-6">
            <div className="flex items-start justify-between">
              <div className="size-12 rounded-2xl bg-foreground/8 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-transparent transition-all duration-300">
                <Icon className="size-5" />
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{benefit.description}</p>
            </div>
          </div>

          {/* right — big stat */}
          <div className="flex flex-col justify-end items-start md:items-end">
            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 select-none">
              {benefit.stat}
            </span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest mt-1">
              {benefit.statLabel}
            </span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

/* ── Small bento card ── */
function SmallCard({ benefit, index }: { benefit: (typeof benefits)[number]; index: number }) {
  const Icon = benefit.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-1"
    >
      <TiltCard className="group relative h-full min-h-50 rounded-3xl border border-border bg-background overflow-hidden cursor-default">
        {/* gradient wash */}
        <div className={`absolute inset-0 bg-linear-to-br ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        {/* dot texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-size-[20px_20px]" />

        <div className="relative z-10 flex flex-col justify-between h-full p-6 gap-4">
          <div className="flex items-start justify-between">
            <div className="size-10 rounded-xl bg-foreground/8 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-transparent transition-all duration-300">
              <Icon className="size-4" />
            </div>
            <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div>
            <h3 className="font-semibold text-[15px] tracking-tight mb-1.5">{benefit.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
          </div>

          <div className="pt-2 border-t border-border/60">
            <span className="text-2xl font-bold tracking-tight text-foreground/15 group-hover:text-foreground/25 transition-colors duration-500 select-none">
              {benefit.stat}
            </span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">{benefit.statLabel}</p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export function PlatformBenefits() {
  const large = benefits.filter((b) => b.size === "large")
  const small = benefits.filter((b) => b.size === "small")

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 size-125 rounded-full bg-foreground/2.5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 size-100 rounded-full bg-foreground/2.5 blur-3xl" />

      <div className="w-11/12 sm:w-10/12 mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Everything you need
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-lg leading-[1.1]">
              Why learners choose{" "}
              <span className="relative inline-block italic font-semibold text-muted-foreground">
                Educore
               
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              A complete ecosystem combining technology and education — built for how you actually learn.
            </p>
          </div>
        </motion.div>

        {/* ── Bento grid ── */}
        {/*
          Row 1: large (2col) | small | small
          Row 2: small | small | large (2col)
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <LargeCard benefit={large[0]} index={0} />
          <SmallCard benefit={small[0]} index={1} />
          <SmallCard benefit={small[1]} index={2} />

          {/* Row 2 */}
          <SmallCard benefit={small[2]} index={3} />
          <SmallCard benefit={small[3]} index={4} />
          <LargeCard benefit={large[1]} index={5} />
        </div>

        {/* ── Bottom pill stat bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl border border-border bg-secondary/40 backdrop-blur-sm p-6 flex flex-wrap gap-8 justify-around"
        >
          {[
            { value: "5M+", label: "Active Learners" },
            { value: "2,400+", label: "Courses Available" },
            { value: "4.8★", label: "Avg. Rating" },
            { value: "150+", label: "Countries" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
