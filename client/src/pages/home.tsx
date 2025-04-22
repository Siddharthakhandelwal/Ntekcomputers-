import { useEffect } from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/shared/cta-section";

export default function Home() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Ntekcomputers - Professional Printing Services";
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
}
