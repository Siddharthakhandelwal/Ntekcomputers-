import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Printer, PenTool, Layers } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Printing-themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-8 border-blue-500 border-dashed animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-amber-500 border-dashed animate-spin-slow-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 transform rotate-45 bg-cyan-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 transform -rotate-12 bg-purple-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4 text-amber-400">
              <Printer className="h-6 w-6 mr-2" />
              <span className="uppercase tracking-wider text-sm font-semibold">
                Professional Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Printing & Design Services
              <span className="block mt-2 h-1 w-24 bg-amber-400 rounded-full"></span>
            </h1>
            <p className="text-lg mb-8 text-gray-200 max-w-lg">
              From digital printing to large format displays, we bring your
              ideas to life with precision and quality. Serving clients
              worldwide with excellence in printing and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Layers className="mr-2 h-5 w-5" />
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <PenTool className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-400 rounded-lg opacity-50 -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-lg opacity-50 -z-10 animate-pulse-slow"></div>
            <img
              src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Digital printing machine"
              className="rounded-lg shadow-xl max-h-96 w-full object-cover z-10 border-4 border-white/20"
            />
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
    </div>
  );
}
