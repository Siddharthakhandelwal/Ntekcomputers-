import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketingMaterials() {
  useEffect(() => {
    document.title =
      "Marketing Materials Printing Services in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "Affordable and high-quality marketing materials printing in Jalandhar and Punjab. Brochures, flyers, promotional materials, and custom marketing collateral for small and large businesses.",
      },
      {
        name: "keywords",
        content:
          "marketing materials printing Jalandhar, promotional materials Punjab, custom marketing collateral Jalandhar, brochure printing services Jalandhar, flyer design and printing Punjab, business promotional materials Jalandhar, affordable marketing materials for small and large businesses in Jalandhar, high-quality promotional printing services Punjab, custom-designed marketing collateral Jalandhar",
      },
      {
        property: "og:title",
        content:
          "Marketing Materials Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "Affordable and high-quality marketing materials printing in Jalandhar and Punjab. Brochures, flyers, promotional materials, and custom marketing collateral for small and large businesses.",
      },
      {
        property: "og:url",
        content: "https://ntekcomputers.com/marketing-materials-jalandhar.html",
      },
      {
        name: "twitter:title",
        content:
          "Marketing Materials Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "Affordable and high-quality marketing materials printing in Jalandhar and Punjab. Brochures, flyers, promotional materials, and custom marketing collateral for small and large businesses.",
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
    name: "Marketing Materials Printing in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/marketing-materials-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Professional marketing materials printing in Jalandhar. Brochures, flyers, catalogs, and promotional materials.",
    serviceType: "Marketing Materials",
    keywords: [
      "marketing materials printing Jalandhar",
      "promotional material printing Punjab",
      "brochure printing services Jalandhar",
      "catalog printing Punjab",
      "flyer printing services Jalandhar",
      "marketing collateral printing Punjab",
      "high-quality marketing prints Jalandhar",
      "custom marketing material design Punjab",
      "professional marketing solutions Jalandhar",
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
        name: "What types of marketing materials do you print?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We print a wide range of marketing materials including brochures, flyers, catalogs, business cards, postcards, and promotional materials. All prints are high-quality and professionally finished.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer design services for marketing materials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive design services for all marketing materials. Our team can help create professional designs that align with your brand identity and marketing goals.",
        },
      },
      {
        "@type": "Question",
        name: "What is your turnaround time for marketing material printing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard orders are completed within 2-3 business days. We also offer rush printing services for same-day or next-day delivery, depending on the quantity and complexity of the project.",
        },
      },
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Marketing Materials Printing Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Brochures and Catalogs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/brochure-printing.jpg"
                alt="Brochure printing services in Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Create impactful marketing materials with our professional
                printing services. Perfect for showcasing your products and
                services to potential customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Product catalogs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Company brochures
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Sales materials
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Promotional Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Boost your marketing campaigns with our high-quality promotional
                materials. We offer a wide range of options to suit your needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Flyers and leaflets
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Postcards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Promotional cards
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/promotional-materials.jpg"
                alt="Promotional material printing services Punjab"
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
                What types of marketing materials do you print?
              </h3>
              <p className="text-gray-700">
                We print a wide range of marketing materials including
                brochures, flyers, catalogs, business cards, postcards, and
                promotional materials. All prints are high-quality and
                professionally finished.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer design services for marketing materials?
              </h3>
              <p className="text-gray-700">
                Yes, we provide comprehensive design services for all marketing
                materials. Our team can help create professional designs that
                align with your brand identity and marketing goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What is your turnaround time for marketing material printing?
              </h3>
              <p className="text-gray-700">
                Standard orders are completed within 2-3 business days. We also
                offer rush printing services for same-day or next-day delivery,
                depending on the quantity and complexity of the project.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/design-services-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Design Services
                  </h3>
                  <p className="text-gray-700">
                    Professional design solutions for your marketing materials.
                  </p>
                </CardContent>
              </Card>
            </Link>
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
            <Link to="/large-format-printing-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Large Format Printing
                  </h3>
                  <p className="text-gray-700">
                    High-impact large format printing for outdoor advertising.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Enhance Your Marketing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create effective marketing materials that drive
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
