import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageSquare, SendHorizonal, Printer } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Decorative printing elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-40 w-40 h-40 rounded-full border-4 border-blue-500 border-dashed animate-spin-slow"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full border-4 border-yellow-500 border-dashed animate-spin-slow-reverse"></div>

        {/* Print registration marks */}
        <div className="absolute top-10 left-10 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute top-0 left-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute top-0 left-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute bottom-0 right-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute bottom-0 right-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        {/* CMYK color squares */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-500 opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-magenta-500 opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-500 opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-500 opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started with Design and Printing?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us today to discuss your project requirements, or visit our
            services page to learn more about what we offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Link>
            <Link href="/services">
              <a className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                <Printer className="mr-2 h-5 w-5" />
                Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* CMYK color strip at bottom */}
      <div className="flex h-2 w-full mt-16">
        <div className="w-1/4 bg-cyan-500"></div>
        <div className="w-1/4 bg-magenta-500"></div>
        <div className="w-1/4 bg-yellow-400"></div>
        <div className="w-1/4 bg-blue-600"></div>
      </div>
    </section>
  );
}
