import { useEffect } from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/shared/cta-section";
import ClientShowcase from "@/components/home/client-showcase";

export default function Home() {
  useEffect(() => {
    document.title =
      "N-Tek Computers - Fast & Affordable Digital Printing Services in Jalandhar";

    const metaTags = [
      {
        name: "description",
        content:
          "High-resolution printing for brochures, business cards, and banners. Quick turnaround with affordable prices. Custom prints available. Same-day delivery on select print jobs. Call now for a free quote! Your one-stop solution for all digital printing needs. Trusted by businesses.",
      },
      {
        name: "keywords",
        content:
          "Fast Digital Printing, High-Quality Prints, Affordable Printing Services, Custom Printing Solutions, Print Business Cards Now, Posters, Flyers & More, Bulk Printing Discounts, Same Day Printing, digital printing near me, business card printing service, flyer printing shop in Jalandhar, custom printing services, same-day printing service, cheap printing service, bulk printing for businesses, ID card printing shop, sticker and label printing, high-resolution printing for brochures, business cards, and banners, quick turnaround with affordable prices, custom prints available, same-day delivery on select print jobs, call now for a free quote, flyers, ID cards, professional quality, one-stop solution, trusted by businesses",
      },
      {
        property: "og:title",
        content:
          "N-Tek Computers - Fast & Affordable Digital Printing Services in Jalandhar",
      },
      {
        property: "og:description",
        content:
          "High-resolution printing for brochures, business cards, and banners. Quick turnaround with affordable prices. Custom prints available. Same-day delivery on select print jobs. Call now for a free quote! Your one-stop solution for all digital printing needs. Trusted by businesses.",
      },
      { property: "og:url", content: "https://ntekcomputers.com/" },
      {
        name: "twitter:title",
        content:
          "N-Tek Computers - Fast & Affordable Digital Printing Services in Jalandhar",
      },
      {
        name: "twitter:description",
        content:
          "High-resolution printing for brochures, business cards, and banners. Quick turnaround with affordable prices. Custom prints available. Same-day delivery on select print jobs. Call now for a free quote! Your one-stop solution for all digital printing needs. Trusted by businesses.",
      },
    ];
    const createdTags: HTMLMetaElement[] = [];
    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.entries(tag).forEach(([key, value]) =>
        meta.setAttribute(key, value)
      );
      document.head.appendChild(meta);
      createdTags.push(meta);
    });
    return () => {
      createdTags.forEach((meta) => meta.remove());
    };
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
