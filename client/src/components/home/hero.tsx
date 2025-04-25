import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional Printing & Design Services
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
                  className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Digital printing machine"
              className="rounded-lg shadow-xl max-h-96 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
