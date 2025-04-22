import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/services/service-card";
import CTASection from "@/components/shared/cta-section";

// Service data
const services = [
  {
    id: 1,
    title: "Digital Printing",
    description: "High-quality digital printing for all your business needs. Perfect for brochures, flyers, business cards and more.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: 2,
    title: "Large Format Printing",
    description: "Make a big impact with our large format printing services. Ideal for banners, posters, signage and exhibition displays.",
    image: "https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: 3,
    title: "Business Stationery",
    description: "Complete business stationery services including letterheads, business cards, envelopes, and presentation folders.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: 4,
    title: "Marketing Materials",
    description: "Comprehensive printing solutions for all your marketing needs including brochures, flyers, catalogs and direct mail.",
    image: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: 5,
    title: "Custom Packaging",
    description: "Stand out with custom printed packaging solutions for your products, including boxes, bags, labels and wraps.",
    image: "https://images.unsplash.com/photo-1607703703326-6755b9e5a71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: 6,
    title: "Design Services",
    description: "Professional graphic design services to help you create eye-catching materials that communicate your message effectively.",
    image: "https://images.unsplash.com/photo-1611505908502-5b67e53e3067?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  }
];

export default function Services() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Services - Ntekcomputers";
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-3xl font-bold mb-4 font-sans">Our Services</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of printing services to meet all your business and personal needs. Explore our services below.
        </p>
        
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
