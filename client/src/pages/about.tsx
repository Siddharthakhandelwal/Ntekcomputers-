import { useEffect } from "react";
import Values from "@/components/about/values";
import CTASection from "@/components/shared/cta-section";

export default function About() {
  // Set document title on mount
  useEffect(() => {
    document.title = "About Us - N Tek Computers";
  }, []);

  return (
    <section className="relative bg-white pt-20 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full border-8 border-blue-500 border-dashed animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-8 border-amber-500 border-dashed animate-spin-slow-reverse"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 transform rotate-45 bg-cyan-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 transform -rotate-12 bg-magenta-500"></div>

        {/* Print registration marks */}
        <div className="absolute top-40 left-20 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute top-0 left-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute top-0 left-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        <div className="absolute bottom-40 right-20 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute bottom-0 right-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute bottom-0 right-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        {/* CMYK dots */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-magenta-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow"></div>
      </div>

      {/* CMYK color strip at top */}
      <div className="flex h-2 w-full absolute top-0">
        <div className="w-1/4 bg-cyan-500"></div>
        <div className="w-1/4 bg-magenta-500"></div>
        <div className="w-1/4 bg-yellow-400"></div>
        <div className="h-2 w-1/4 bg-black"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-6 relative inline-block">
              About N Tek Computers
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-blue-500 rounded-full"></span>
            </h1>
            <p className="text-gray-600 mb-4">
              At N Tek Computers, we combine cutting-edge technology with
              exceptional craftsmanship to deliver printing solutions that
              exceed expectations. Our journey began with a simple mission: to
              provide high-quality printing services that help businesses and
              individuals communicate their message effectively.
            </p>

            <p className="text-gray-600 mb-4">
              With years of experience in the printing industry, our team of
              skilled professionals is dedicated to bringing your vision to
              life. We understand that each project is unique, which is why we
              offer personalized service and attention to detail from start to
              finish.
            </p>

            <p className="text-gray-600 mb-6">
              Located in Jalandhar, Punjab, we serve clients throughout the
              region with prompt, reliable, and professional printing services.
              Whether you need business cards, banners, brochures, or custom
              packaging, we have the expertise and equipment to deliver
              outstanding results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-blue-500 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400 rounded-lg opacity-50 -z-10 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-400 rounded-lg opacity-50 -z-10 animate-pulse-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Printing shop interior"
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>

        <Values />
      </div>
      <CTASection />
    </section>
  );
}
