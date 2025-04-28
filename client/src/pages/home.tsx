import { useEffect } from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/shared/cta-section";
import ClientShowcase from "@/components/home/client-showcase";

export default function Home() {
  // Set document title on mount
  useEffect(() => {
    document.title =
      "N-Tek Computers - Professional Printing & Design Services";
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <ClientShowcase />
      <Testimonials />
      <CTASection />
    </div>
  );
}
