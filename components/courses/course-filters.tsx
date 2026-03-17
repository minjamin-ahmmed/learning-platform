"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const filterCategories = [
  {
    name: "Level",
    options: ["Beginner", "Intermediate", "Advanced", "All Levels"],
  },
  {
    name: "Price",
    options: ["Free", "Paid", "Subscription"],
  },
  {
    name: "Duration",
    options: ["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"],
  },
]

export function CourseFilters() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-9 h-10 rounded-xl" />
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold flex items-center gap-2">
            <Filter className="size-4" /> Filters
          </h3>
          <Button variant="ghost" size="sm" className="text-xs h-8">
            Reset
          </Button>
        </div>

        {filterCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h4 className="text-sm font-medium">{category.name}</h4>
            <div className="space-y-2">
              {category.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox id={`${category.name}-${option}`} />
                  <Label
                    htmlFor={`${category.name}-${option}`}
                    className="text-sm font-normal text-muted-foreground cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
