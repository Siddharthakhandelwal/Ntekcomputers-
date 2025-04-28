import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-mobile";

// Testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "N-Tek Computers delivered my business cards and brochures with exceptional quality. Their attention to detail and customer service is outstanding.",
    author: "Rajiv Sharma",
    role: "Local Business Owner",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The team at N-Tek Computers helped us with our event banners on a tight deadline. The results were impressive and the service was professional from start to finish.",
    author: "Priya Patel",
    role: "Event Coordinator",
    rating: 5,
  },
  {
    id: 3,
    content:
      "I've been using N-Tek Computers for all my corporate printing needs for over 2 years now. Their consistent quality and reliability keep me coming back.",
    author: "Amit Singh",
    role: "Marketing Manager",
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(min-width: 769px) and (max-width: 1023px)");

  const visibleSlides = isMobile ? 1 : isMedium ? 2 : 3;
  const maxSlide = Math.max(0, testimonials.length - visibleSlides);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Render rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="h-4 w-4 fill-amber-500 text-amber-500"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-amber-500" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          </div>
        </div>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-4 border-blue-300 border-dashed"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border-4 border-amber-300 border-dashed"></div>

        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-magenta-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4">
            Hear from our satisfied clients about their experience working with
            N-Tek Computers
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / visibleSlides)
                }%)`,
                width: `${(testimonials.length / visibleSlides) * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-4"
                  style={{
                    width: `${(100 / testimonials.length) * visibleSlides}%`,
                  }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="flex text-amber-500">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4 flex items-center justify-center font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentSlide > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full shadow-md ml-2 z-10 border border-blue-100 hover:border-blue-300"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          {currentSlide < maxSlide && (
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full shadow-md mr-2 z-10 border border-blue-100 hover:border-blue-300"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
