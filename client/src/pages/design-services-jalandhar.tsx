import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function DesignServices() {
  useEffect(() => {
    document.title =
      "Professional Design Services in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "Elevate your brand with our professional design services in Jalandhar. Logos, brochures, business cards, and more tailored to your needs. Affordable, custom, and high-quality graphic design solutions for businesses in Punjab.",
      },
      {
        name: "keywords",
        content:
          "graphic design services Jalandhar, custom design solutions Punjab, professional design services Jalandhar, logo design Jalandhar, brochure design services Punjab, business card design Jalandhar, affordable graphic design services for small businesses in Jalandhar, custom logo and branding design Punjab, high-quality brochure and flyer design Jalandhar",
      },
      {
        property: "og:title",
        content: "Professional Design Services in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "Elevate your brand with our professional design services in Jalandhar. Logos, brochures, business cards, and more tailored to your needs. Affordable, custom, and high-quality graphic design solutions for businesses in Punjab.",
      },
      {
        property: "og:url",
        content: "https://ntekcomputers.com/design-services-jalandhar.html",
      },
      {
        name: "twitter:title",
        content: "Professional Design Services in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "Elevate your brand with our professional design services in Jalandhar. Logos, brochures, business cards, and more tailored to your needs. Affordable, custom, and high-quality graphic design solutions for businesses in Punjab.",
      },
    ];
    const createdTags: HTMLMetaElement[] = [];
    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.entries(tag).forEach(([key, value]) =>
        meta.setAttribute(key, value)
      );
      document.head.appendChild(meta);
      createdTags.push(meta);
    });
    return () => {
      createdTags.forEach((meta) => meta.remove());
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Design Services in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/design-services-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Professional design services in Jalandhar. Graphic design, logo design, and marketing material design.",
    serviceType: "Design Services",
    keywords: [
      "design services Jalandhar",
      "graphic design company Punjab",
      "logo design services Jalandhar",
      "marketing material design Punjab",
      "brand identity design Jalandhar",
      "print design services Punjab",
      "professional design solutions Jalandhar",
      "custom design services Punjab",
      "creative design agency Jalandhar",
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "Contact for pricing",
      priceCurrency: "INR",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of design services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive design services including logo design, brand identity development, marketing material design, print design, and packaging design. Our team creates custom solutions tailored to your business needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to complete a design project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary based on complexity and scope. A basic logo design typically takes 1-2 weeks, while comprehensive brand identity projects may take 3-4 weeks. We provide detailed timelines during the initial consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer revisions for design projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we include multiple rounds of revisions in our design process to ensure you're completely satisfied with the final result. We work closely with you to refine and perfect the designs until they meet your expectations.",
        },
      },
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Professional Design Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Graphic Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/graphic-design.jpg"
                alt="Graphic design services in Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Create stunning visuals with our professional graphic design
                services. We help you communicate your message effectively
                through compelling designs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Logo design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Brand identity
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Marketing materials
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Print Design Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Design print-ready materials that make an impact. Our team
                ensures your designs are optimized for both digital and print
                media.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Brochure design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Business cards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Packaging design
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/print-design.jpg"
                alt="Print design services Punjab"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What types of design services do you offer?
              </h3>
              <p className="text-gray-700">
                We offer comprehensive design services including logo design,
                brand identity development, marketing material design, print
                design, and packaging design. Our team creates custom solutions
                tailored to your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How long does it take to complete a design project?
              </h3>
              <p className="text-gray-700">
                Project timelines vary based on complexity and scope. A basic
                logo design typically takes 1-2 weeks, while comprehensive brand
                identity projects may take 3-4 weeks. We provide detailed
                timelines during the initial consultation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer revisions for design projects?
              </h3>
              <p className="text-gray-700">
                Yes, we include multiple rounds of revisions in our design
                process to ensure you're completely satisfied with the final
                result. We work closely with you to refine and perfect the
                designs until they meet your expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/branding-services-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Branding Services
                  </h3>
                  <p className="text-gray-700">
                    Build a strong brand identity with our expert services.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/marketing-materials-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Marketing Materials
                  </h3>
                  <p className="text-gray-700">
                    Professional printing for your marketing materials.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/digital-printing-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Digital Printing
                  </h3>
                  <p className="text-gray-700">
                    High-quality printing for your designed materials.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Bring Your Ideas to Life
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create designs that capture attention and drive
            results.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get a Quote
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
