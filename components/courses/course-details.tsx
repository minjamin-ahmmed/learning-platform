"use client"

import { motion, type Variants } from "framer-motion"
import { CheckCircle2, Star, Globe, ShieldCheck, PlayCircle, Clock, Users, BookOpen } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export function CourseDetails({ id: _id }: { id: string }) {
  return (
    <div className="space-y-10">
      {/* ── Hero block ─────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="space-y-5"
      >
        {/* Breadcrumb-style tags */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-foreground text-background text-[11px] font-semibold tracking-wide uppercase">
            Bestseller
          </span>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-foreground/8 text-foreground text-[11px] font-semibold tracking-wide uppercase">
            Web Development
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-balance"
        >
          Complete Web Development Bootcamp: From Zero to Mastery
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-base text-muted-foreground leading-relaxed max-w-2xl"
        >
          Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and
          DApps.
        </motion.p>

        {/* Stats strip — 2×2 grid on mobile, single row on md+ */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-bold tabular-nums">4.9</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-muted-foreground">(125k)</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="size-3.5 shrink-0" />
            <span>245k students</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="size-3.5 shrink-0" />
            <span>65 hours</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="size-3.5 shrink-0" />
            <span>456 lectures</span>
          </div>
        </motion.div>

        {/* Author + meta row */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Avatar className="size-6 ring-1 ring-border">
              <AvatarImage src="/thoughtful-man-portrait.png" />
              <AvatarFallback className="text-[10px]">AY</AvatarFallback>
            </Avatar>
            <span>
              by{" "}
              <span className="text-foreground font-semibold underline underline-offset-2 cursor-pointer">
                Dr. Angela Yu
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 shrink-0" />
            <span>Updated 12/2025</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="size-3.5 shrink-0" />
            <span>English, Spanish</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Tabs ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Tabs defaultValue="curriculum" className="w-full">
          {/* Scrollable pill tabs on mobile, underline tabs on desktop */}
          <div className="mb-6">
            {/* Mobile: horizontal scroll pill row */}
            <div className="lg:hidden -mx-1 px-1 overflow-x-auto scrollbar-none">
              <TabsList className="inline-flex w-max gap-2 bg-transparent p-0 h-auto">
                {[
                  { label: "Curriculum", value: "curriculum" },
                  { label: "Overview",   value: "overview" },
                  { label: "Instructor", value: "instructor" },
                  { label: "Reviews",    value: "reviews" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="
                      shrink-0 px-4 py-2 rounded-full border border-border text-sm font-medium
                      bg-transparent text-muted-foreground
                      transition-all duration-200
                      data-[state=active]:bg-foreground data-[state=active]:text-background
                      data-[state=active]:border-foreground data-[state=active]:shadow-none
                      hover:text-foreground hover:border-foreground/40
                    "
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Desktop: underline tabs */}
            <TabsList className="hidden lg:flex w-full justify-start bg-transparent rounded-none h-auto p-0 border-b border-border gap-0">
              {[
                { label: "Curriculum",  value: "curriculum",  index: "01" },
                { label: "Overview",    value: "overview",    index: "02" },
                { label: "Instructor",  value: "instructor",  index: "03" },
                { label: "Reviews",     value: "reviews",     index: "04" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="
                    group relative flex items-center gap-2 px-6 py-4 rounded-none bg-transparent border-transparent
                    text-muted-foreground font-medium text-sm tracking-tight
                    transition-colors duration-200
                    data-[state=active]:bg-transparent data-[state=active]:shadow-none
                    data-[state=active]:text-foreground
                    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                    after:bg-foreground after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
                    data-[state=active]:after:scale-x-100
                    hover:text-foreground
                  "
                >
                  <span className="font-mono text-[10px] text-muted-foreground/50 group-data-[state=active]:text-foreground/40 transition-colors tabular-nums">
                    {tab.index}
                  </span>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* ── Curriculum ── */}
          <TabsContent value="curriculum" className="space-y-6 mt-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold tracking-tight">Course Content</h3>
              <span className="text-xs text-muted-foreground tabular-nums">
                32 sections · 456 lectures · 65h 32m
              </span>
            </div>

            <Accordion type="single" collapsible className="w-full rounded-2xl border overflow-hidden divide-y divide-border">
              {[
                { title: "Introduction to Web Development", lectures: 8, time: "45m" },
                { title: "HTML5: Structuring Your Pages", lectures: 15, time: "2h 15m" },
                { title: "CSS3: Styling and Responsive Design", lectures: 24, time: "4h 30m" },
                { title: "Javascript Basics: Variables, Loops, Functions", lectures: 32, time: "6h 12m" },
                { title: "Advanced Javascript and DOM Manipulation", lectures: 18, time: "3h 45m" },
              ].map((section, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="px-5 py-4 hover:bg-muted/40 hover:no-underline transition-colors group">
                    <div className="flex items-center justify-between w-full pr-2 text-left">
                      <span className="font-semibold text-sm tracking-tight">{section.title}</span>
                      <span className="text-[11px] text-muted-foreground tabular-nums ml-4 shrink-0">
                        {section.lectures} lectures · {section.time}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-muted/20 px-5 pb-2 pt-1">
                    <div className="space-y-0.5">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between py-2.5 group/row cursor-pointer rounded-lg px-1 hover:bg-muted/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle className="size-3.5 text-muted-foreground group-hover/row:text-foreground transition-colors shrink-0" />
                            <span className="text-sm text-muted-foreground group-hover/row:text-foreground transition-colors">
                              Lecture {j + 1}: Modern Web Concepts
                            </span>
                          </div>
                          <span className="text-[11px] text-muted-foreground tabular-nums">08:42</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* ── Overview ── */}
          <TabsContent value="overview" className="space-y-10 mt-0">
            {/* What you'll learn */}
            <div className="rounded-2xl border bg-muted/20 p-6 space-y-5">
              <h3 className="text-lg font-bold tracking-tight">What you'll learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Build 16+ web development projects for your portfolio",
                  "Master frontend development with React Hooks",
                  "Build fully functional backend with Node and Express",
                  "Modern Javascript (ES6) from scratch",
                  "Work with databases like MongoDB and PostgreSQL",
                  "Learn professional developer tools and workflows",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight">Description</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become
                  a full-stack web developer. With over 150,000 ratings and a 4.8 average, this is one of the highest
                  rated courses available online.
                </p>
                <p>
                  At 65+ hours, this course is without a doubt the most comprehensive web development course available.
                  Even if you have zero programming experience, this course will take you from beginner to mastery.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* ── Instructor ── */}
          <TabsContent value="instructor" className="mt-0">
            <div className="p-5 sm:p-6 rounded-2xl border bg-muted/20 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-14 sm:size-16 ring-1 ring-border shrink-0">
                  <AvatarImage src="/thoughtful-man-portrait.png" />
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-base font-bold tracking-tight">Dr. Angela Yu</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Lead Instructor — Developer & Bootcamp Director</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <Star className="size-3 fill-foreground text-foreground" />, label: "4.9 Rating" },
                  { icon: <Users className="size-3" />, label: "245k+ Students" },
                  { icon: <BookOpen className="size-3" />, label: "12 Courses" },
                ].map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    {icon}{label}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dr. Angela Yu is a developer and lead instructor at the London App Brewery. She has taught over 1 million
                students to code and helped many transition into tech careers.
              </p>
            </div>
          </TabsContent>

          {/* ── Reviews ── */}
          <TabsContent value="reviews" className="space-y-6 mt-0">
            {/* Summary */}
            <div className="flex items-center gap-8 p-6 rounded-2xl border bg-muted/20">
              <div className="text-center shrink-0">
                <p className="text-5xl font-bold tracking-tight">4.9</p>
                <div className="flex justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Course Rating</p>
              </div>
              <div className="flex-1 space-y-1.5">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full bg-foreground rounded-full"
                        style={{ width: star === 5 ? "78%" : star === 4 ? "15%" : star === 3 ? "4%" : "2%" }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-4 text-right tabular-nums">{star}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            {[
              { name: "James R.", rating: 5, text: "Best web development course I've ever taken. Incredibly thorough and well-paced." },
              { name: "Priya S.", rating: 5, text: "Angela's teaching style is phenomenal. Complex topics broken down perfectly." },
              { name: "Marco L.", rating: 4, text: "Great content and projects. A bit long but every hour is worth it." },
            ].map((review, i) => (
              <div key={i} className="flex gap-4 py-5 border-b border-border/60 last:border-0">
                <Avatar className="size-9 shrink-0 ring-1 ring-border">
                  <AvatarFallback className="text-xs font-semibold">{review.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{review.name}</span>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="size-3 fill-foreground text-foreground" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
