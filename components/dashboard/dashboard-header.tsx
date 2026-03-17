"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 sticky top-0 bg-background/80 backdrop-blur-md z-30">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search courses, lessons..."
            className="pl-9 w-[300px] h-9 rounded-full bg-secondary/50 border-none focus-visible:ring-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background" />
        </Button>
        <Button size="sm" className="rounded-full font-bold px-4">
          Upgrade Pro
        </Button>
      </div>
    </header>
  )
}
