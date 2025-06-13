import Hero from "@/components/landing-page/Hero"
import Vp from "@/components/landing-page/Vp"
import ClassList from "@/components/landing-page/ClassList"
import Consultation from "@/components/landing-page/Consultation"
import SocialProof from "@/components/landing-page/SocialProof"
import Testimonial from "@/components/landing-page/Testimonial"
import FinalCta from "@/components/landing-page/FinalCta"
import Footer from "@/components/landing-page/Footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <SocialProof />
      <Vp />
      <ClassList />
      <Consultation />
      <Testimonial />
      <FinalCta />
      <Footer />
    </main>
  );
}
