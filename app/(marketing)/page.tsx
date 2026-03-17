import { HeroSection } from "@/components/landing/hero-section"
import { CategorySection } from "@/components/landing/category-section"
import { FeaturedCourses } from "@/components/landing/featured-courses"
import { PlatformBenefits } from "@/components/landing/platform-benefits"
import { Testimonials } from "@/components/landing/testimonials"
import { CTASection } from "@/components/landing/cta-section"

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedCourses />
      <PlatformBenefits />
      <Testimonials />
      <CTASection />
    </>
  )
}
