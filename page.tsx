import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TechnicalExpertise />
        <FeaturedProjects />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
