import { useEffect } from "react";
import Values from "@/components/about/values";
import CTASection from "@/components/shared/cta-section";

export default function About() {
  // Set document title on mount
  useEffect(() => {
    document.title = "About Us - Ntekcomputers";
  }, []);

  return (
    <section className="pt-24 bg-pattern">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-6">About Ntekcomputers</h1>
            <p className="text-gray-600 mb-4">
              At Ntekcomputers, we combine cutting-edge technology with exceptional craftsmanship to deliver printing solutions that exceed expectations. Our journey began with a simple mission: to provide high-quality printing services that help businesses and individuals communicate their message effectively.
            </p>
            
            <p className="text-gray-600 mb-4">
              With years of experience in the printing industry, our team of skilled professionals is dedicated to bringing your vision to life. We understand that each project is unique, which is why we offer personalized service and attention to detail from start to finish.
            </p>
            
            <p className="text-gray-600 mb-6">
              Located in Jalandhar, Punjab, we serve clients throughout the region with prompt, reliable, and professional printing services. Whether you need business cards, banners, brochures, or custom packaging, we have the expertise and equipment to deliver outstanding results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/services" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <img 
              src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Printing shop interior" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <Values />
      </div>
      <CTASection />
    </section>
  );
}
