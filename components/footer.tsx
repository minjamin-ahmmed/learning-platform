import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"

const links = {
  Platform: [
    { label: "Courses", href: "/courses" },
    { label: "Live Classes", href: "#" },
    { label: "Practice", href: "#" },
    { label: "Resources", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socials: { label: string; href: string; svg: React.ReactNode }[] = [
  {
    label: "X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative mt-8 rounded-t-[48px] overflow-hidden bg-foreground text-background">

      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-0 right-1/4 w-64 h-64 bg-background/3 rounded-full blur-3xl" />

      <div className="relative w-10/12 mx-auto pt-16 pb-10">

        {/* Top section: brand + newsletter + links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-background/10">

          {/* Brand col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="flex size-9 items-center justify-center rounded-xl bg-background text-foreground font-bold text-lg tracking-tight">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-background">EduLearn</span>
            </Link>

            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Premium online education built for the next generation of learners. Learn from the world's best — on your own terms.
            </p>

            {/* Newsletter */}
            <div className="flex items-center gap-2 bg-background/8 border border-background/10 rounded-2xl p-1.5 max-w-xs">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-3 text-sm text-background placeholder:text-background/30 outline-none min-w-0"
              />
              <button className="shrink-0 flex items-center gap-1.5 bg-background text-foreground text-xs font-semibold px-4 py-2 rounded-xl hover:bg-background/90 transition-colors">
                <Sparkles className="size-3" />
                Join
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ svg, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-xl border border-background/10 text-background/50 hover:text-background hover:border-background/30 hover:bg-background/8 transition-all duration-200"
                >
                  {svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Links cols */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-background/35 mb-5">
                  {category}
                </p>
                <ul className="space-y-3">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group inline-flex items-center gap-1 text-sm text-background/60 hover:text-background transition-colors duration-200"
                      >
                        {label}
                        <ArrowUpRight className="size-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30 tabular-nums">
            © {new Date().getFullYear()} EduLearn Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-background/30">All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
