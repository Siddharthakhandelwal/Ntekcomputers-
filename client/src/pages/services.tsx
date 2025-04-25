import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/services/service-card";
import CTASection from "@/components/shared/cta-section";

// Service data
const services = [
  {
    id: 1,
    title: "Digital Printing",
    description:
      "High-quality digital printing for all your business needs. Perfect for brochures, flyers, business cards and more.",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 2,
    title: "Large Format Printing",
    description:
      "Make a big impact with our large format printing services. Ideal for banners, posters, signage and exhibition displays.",
    image:
      "https://images.unsplash.com/photo-1561983362-5d9cb15b5e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 3,
    title: "Business Stationery",
    description:
      "Complete business stationery services including letterheads, business cards, envelopes, and presentation folders.",
    image:
      "https://images.unsplash.com/photo-1546867377-5c9c30acf960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 4,
    title: "Marketing Materials",
    description:
      "Comprehensive printing solutions for all your marketing needs including brochures, flyers, catalogs and direct mail.",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 5,
    title: "Custom Packaging",
    description:
      "Stand out with custom printed packaging solutions for your products, including boxes, bags, labels and wraps.",
    image:
      "https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 6,
    title: "Design Services",
    description:
      "Professional graphic design services to help you create eye-catching materials that communicate your message effectively.",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 7,
    title: "Branding Services",
    description:
      "Comprehensive branding solutions including logo design, brand identity, corporate stationery, and brand guidelines to establish a strong market presence.",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
  },
];

export default function Services() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Services - N Tek Computers";
  }, []);

  return (
    <div className="relative bg-white pt-20 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-8 border-blue-500 border-dashed animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-amber-500 border-dashed animate-spin-slow-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 transform rotate-45 bg-cyan-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 transform -rotate-12 bg-magenta-500"></div>

        {/* Print registration marks */}
        <div className="absolute top-60 right-40 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute top-0 right-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute top-0 right-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        <div className="absolute bottom-60 left-40 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute bottom-0 left-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute bottom-0 left-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>
      </div>

      {/* CMYK color strip at top */}
      <div className="flex h-2 w-full absolute top-0">
        <div className="w-1/4 bg-cyan-500"></div>
        <div className="w-1/4 bg-magenta-500"></div>
        <div className="w-1/4 bg-yellow-400"></div>
        <div className="w-1/4 bg-blue-600"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-center text-4xl font-bold mb-6 relative inline-block mx-auto flex justify-center w-full">
          Our Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </h1>
        <div className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          <p className="mb-4">
            <strong>Comprehensive Printing Services</strong> – We offer a wide
            range of printing solutions for both business and personal needs,
            including brochures, business cards, custom apparel, banners, and
            more.
          </p>
          <p>
            <strong>Global Reach, Multilingual Support</strong> – We serve
            clients worldwide with printing services in English, Hindi, Urdu,
            Chinese, German, and more, ensuring quality and cultural relevance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
