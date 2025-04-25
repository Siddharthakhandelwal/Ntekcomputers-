import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageSquare, SendHorizonal, Printer } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      {/* Decorative printing elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-40 w-40 h-40 rounded-full border-8 border-blue-500 border-dashed"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full border-8 border-yellow-500 border-dashed"></div>

        {/* Print registration marks */}
        <div className="absolute top-10 left-10 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute top-0 left-0 w-4 h-1 bg-white"></div>
            <div className="absolute top-0 left-0 h-4 w-1 bg-white"></div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex items-center justify-center">
          <div className="w-12 h-12">
            <div className="absolute bottom-0 right-0 w-4 h-1 bg-white"></div>
            <div className="absolute bottom-0 right-0 h-4 w-1 bg-white"></div>
          </div>
        </div>

        {/* CMYK color squares */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-500 opacity-30"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-magenta-500 opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-500 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gray-900 opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-full">
            <Printer className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Printing and Designing Project?
            <span className="block mt-2 h-1 w-24 bg-amber-400 rounded-full mx-auto"></span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your printing needs and get a free
            quote.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-amber-500/20 transition-all duration-300 flex items-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </Link>

            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-white/10 transition-all duration-300 flex items-center"
              >
                <SendHorizonal className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CMYK color strip at bottom */}
      <div className="flex h-2 w-full">
        <div className="w-1/4 bg-cyan-500"></div>
        <div className="w-1/4 bg-magenta-500"></div>
        <div className="w-1/4 bg-yellow-400"></div>
        <div className="w-1/4 bg-gray-900"></div>
      </div>
    </section>
  );
}
