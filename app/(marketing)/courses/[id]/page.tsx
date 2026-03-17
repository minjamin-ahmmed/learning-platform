import { CourseDetails } from "@/components/courses/course-details"
import { CourseSidebar } from "@/components/courses/course-sidebar"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="border-b bg-muted/30">
      <div className="w-10/12 mx-auto py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            <CourseDetails id={params.id} />
          </div>
          <aside className="hidden lg:block w-96 shrink-0 sticky top-28 self-start">
            <CourseSidebar />
          </aside>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden w-10/12 mx-auto py-8">
        <CourseSidebar />
      </div>
    </div>
  )
}
