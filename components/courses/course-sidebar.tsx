"use client"

import { Play, Download, Smartphone, Layout, Award, Infinity, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CourseSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden rounded-2xl border bg-background shadow-sm"
    >
      {/* Preview thumbnail */}
      <div className="relative aspect-video group cursor-pointer overflow-hidden">
        <img
          src="/coding-bootcamp.png"
          alt="Course Preview"
          className="object-cover w-full h-full brightness-75 group-hover:brightness-50 transition-all duration-500"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <div className="size-14 rounded-full bg-background flex items-center justify-center text-foreground shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Play className="size-6 fill-current ml-0.5" />
          </div>
          <span className="text-background text-xs font-semibold tracking-wide">Preview this course</span>
        </div>
      </div>

      <div className="p-6 space-y-7">
        {/* Pricing */}
        <div className="space-y-1.5">
          <div className="flex items-baseline gap-2.5">
            <span className="text-3xl font-bold tracking-tight">$89.99</span>
            <span className="text-base text-muted-foreground line-through">$129.99</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-foreground text-background text-[11px] font-bold tracking-wide">
              85% OFF
            </span>
            <span className="text-xs text-muted-foreground">· 5 hours left at this price</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5">
          <Button size="lg" className="w-full h-11 rounded-xl text-sm font-bold tracking-tight">
            Add to Cart
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full h-11 rounded-xl text-sm font-bold tracking-tight bg-transparent"
          >
            Buy Now
          </Button>
          <p className="text-[11px] text-center text-muted-foreground pt-0.5">
            30-Day Money-Back Guarantee
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border/60" />

        {/* Includes */}
        <div className="space-y-3.5">
          <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            This course includes
          </h4>
          <ul className="space-y-2.5">
            {[
              { icon: Layout,     text: "65 hours on-demand video" },
              { icon: Download,   text: "125 downloadable resources" },
              { icon: Smartphone, text: "Access on mobile and TV" },
              { icon: Infinity,   text: "Full lifetime access" },
              { icon: Award,      text: "Certificate of completion" },
            ].map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon className="size-3.5 text-foreground shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-border/60" />

        {/* Share / Wishlist */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="flex-1 gap-2 text-xs font-semibold rounded-xl h-9 hover:bg-muted"
          >
            <Share2 className="size-3.5" /> Share
          </Button>
          <Button
            variant="ghost"
            className="flex-1 gap-2 text-xs font-semibold rounded-xl h-9 hover:bg-muted"
          >
            <Heart className="size-3.5" /> Wishlist
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
