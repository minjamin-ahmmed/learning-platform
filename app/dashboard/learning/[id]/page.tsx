"use client"
import {
  Play,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  PlayCircle,
  FileText,
  Maximize2,
  Settings,
  Volume2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const curriculum = [
  {
    title: "Introduction",
    lessons: [
      { id: "1", title: "Course Welcome", duration: "05:24", completed: true },
      { id: "2", title: "Getting the most out of the course", duration: "08:12", completed: true },
    ],
  },
  {
    title: "Getting Started with React",
    lessons: [
      { id: "3", title: "Why React?", duration: "12:45", completed: true },
      { id: "4", title: "React Components Deep Dive", duration: "24:10", active: true },
      { id: "5", title: "The power of JSX", duration: "18:22" },
      { id: "6", title: "Props and State", duration: "21:15" },
    ],
  },
  {
    title: "Advanced Hooks",
    lessons: [
      { id: "7", title: "useEffect explained", duration: "15:30" },
      { id: "8", title: "Custom Hooks", duration: "22:10" },
    ],
  },
]

export default function VideoLearningPage() {
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Video Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-black overflow-y-auto lg:overflow-hidden">
        <div className="relative aspect-video w-full bg-black group">
          <img src="/coding-bootcamp.png" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform cursor-pointer">
              <Play className="size-10 fill-current ml-1" />
            </div>
          </div>

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="space-y-4">
              <Progress value={45} className="h-1 bg-white/20" />
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <PlayCircle />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Volume2 />
                  </Button>
                  <span className="text-sm font-medium">12:45 / 24:10</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Settings />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Maximize2 />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-10 space-y-8 bg-background">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">React Components Deep Dive</h1>
              <p className="text-muted-foreground">Module 2 • Lesson 4</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <ChevronLeft className="mr-2 size-4" /> Prev
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                Next <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-transparent border-b rounded-none h-auto p-0 gap-8 mb-6">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none px-0 py-4 font-bold"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none px-0 py-4 font-bold"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none px-0 py-4 font-bold"
              >
                Discussion
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="text-muted-foreground leading-relaxed text-pretty">
              In this lesson, we explore the core of React architecture: Components. We'll learn how to break down
              complex UIs into small, reusable pieces of code. We also touch upon functional vs class components and the
              philosophy behind unidirectional data flow.
            </TabsContent>
            <TabsContent value="resources" className="space-y-2">
              <Button variant="outline" className="w-full justify-start rounded-xl h-12 bg-transparent">
                <FileText className="mr-3 size-4 text-primary" /> Lesson Slides.pdf
              </Button>
              <Button variant="outline" className="w-full justify-start rounded-xl h-12 bg-transparent">
                <FileText className="mr-3 size-4 text-primary" /> Code Samples.zip
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <div className="w-full lg:w-96 border-l bg-secondary/5 flex flex-col shrink-0">
        <div className="p-6 border-b bg-background">
          <h2 className="font-bold mb-4">Course Content</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-muted-foreground">Your Progress</span>
              <span className="font-bold">45%</span>
            </div>
            <Progress value={45} className="h-2" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="divide-y">
            {curriculum.map((section) => (
              <div key={section.title} className="p-0">
                <div className="p-4 bg-secondary/20 font-bold text-xs uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </div>
                <div className="flex flex-col">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`flex items-start gap-4 p-4 text-left hover:bg-secondary/50 transition-colors ${lesson.active ? "bg-background border-l-4 border-primary" : ""}`}
                    >
                      <div className="mt-0.5">
                        {lesson.completed ? (
                          <CheckCircle2 className="size-5 text-primary" />
                        ) : lesson.active ? (
                          <PlayCircle className="size-5 text-primary" />
                        ) : (
                          <div className="size-5 rounded-full border-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate ${lesson.active ? "text-primary" : ""}`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
