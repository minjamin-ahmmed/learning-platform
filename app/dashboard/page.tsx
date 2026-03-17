import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, Clock, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const activeCourses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    nextLesson: "Lesson 24: React Hooks Deep Dive",
    image: "/coding-bootcamp.png",
  },
  {
    title: "UI/UX Design Essentials with Figma",
    instructor: "Gary Simon",
    progress: 32,
    nextLesson: "Lesson 8: Auto Layout Basics",
    image: "/ui-ux-design-concept.png",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 py-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">You've completed 4 lessons this week. Keep it up!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Completed Courses", value: "12", icon: Award, color: "text-blue-500" },
          { label: "Study Hours", value: "124h", icon: Clock, color: "text-orange-500" },
          { label: "Current Streak", value: "5 Days", icon: TrendingUp, color: "text-green-500" },
          { label: "Certificates", value: "8", icon: Award, color: "text-purple-500" },
        ].map((stat) => (
          <Card key={stat.label} className="border-none bg-secondary/30 p-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className={`size-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Continue Learning</h2>
            <Link href="/dashboard/courses" className="text-sm font-medium hover:underline text-primary">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {activeCourses.map((course) => (
              <Card key={course.title} className="group overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 aspect-video sm:aspect-square relative overflow-hidden shrink-0">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="size-10 text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-1 flex-col justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-bold hover:text-primary transition-colors cursor-pointer">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">{course.progress}% complete</span>
                        <span className="text-muted-foreground">8 / 24 lessons</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Recommended for you</h2>
          <Card className="p-6 space-y-4 border-dashed bg-transparent">
            <div className="aspect-video rounded-xl bg-secondary/50 flex items-center justify-center">
              <TrendingUp className="size-8 text-muted-foreground opacity-20" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">Advanced Machine Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on your interest in Python and Data Science.
              </p>
            </div>
            <Button className="w-full rounded-xl font-bold">Explore Now</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
