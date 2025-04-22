import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Printing Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your printing needs and get a free quote.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-8 rounded-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
