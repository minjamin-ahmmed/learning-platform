import { CourseList } from "@/components/courses/course-list"
import { CourseFilters } from "@/components/courses/course-filters"

export default function CoursesPage() {
  return (
    <div className="w-10/12 mx-auto py-12">
      <div className="flex flex-col gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Explore All Courses</h1>
          <p className="text-muted-foreground text-lg">
            Discover professional courses designed to help you master new skills and advance your career.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 shrink-0">
            <CourseFilters />
          </aside>
          <div className="flex-1">
            <CourseList />
          </div>
        </div>
      </div>
    </div>
  )
}
