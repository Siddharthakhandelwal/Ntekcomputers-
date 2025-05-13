import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function LargeFormatPrinting() {
  useEffect(() => {
    document.title =
      "Large Format Printing Services in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "High-resolution large format printing services in Jalandhar and Punjab. Banners, posters, outdoor signage, and exhibition displays. Durable, custom, and affordable solutions for all your wide format needs.",
      },
      {
        name: "keywords",
        content:
          "large format printing services Jalandhar, wide format printing Punjab, banner and poster printing Jalandhar, vinyl printing services Jalandhar, outdoor signage printing Punjab, exhibition display printing Jalandhar, high-resolution large format prints in Jalandhar, durable outdoor banners and posters Punjab, custom exhibition display printing services Jalandhar",
      },
      {
        property: "og:title",
        content:
          "Large Format Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "High-resolution large format printing services in Jalandhar and Punjab. Banners, posters, outdoor signage, and exhibition displays. Durable, custom, and affordable solutions for all your wide format needs.",
      },
      {
        property: "og:url",
        content:
          "https://ntekcomputers.com/large-format-printing-jalandhar.html",
      },
      {
        name: "twitter:title",
        content:
          "Large Format Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "High-resolution large format printing services in Jalandhar and Punjab. Banners, posters, outdoor signage, and exhibition displays. Durable, custom, and affordable solutions for all your wide format needs.",
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
    name: "Large Format Printing in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/large-format-printing-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Professional large format printing services in Jalandhar. Banners, posters, vehicle wraps, and more.",
    serviceType: "Large Format Printing",
    keywords: [
      "large format printing Jalandhar",
      "banner printing services Punjab",
      "vehicle wrap printing Jalandhar",
      "poster printing services Punjab",
      "outdoor advertising prints Jalandhar",
      "indoor display printing Punjab",
      "high-quality large format prints Jalandhar",
      "custom banner printing services Punjab",
      "professional large format solutions Jalandhar",
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
        name: "What types of large format printing do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a wide range of large format printing services including vinyl banners, posters, vehicle wraps, building wraps, and exhibition displays. All prints are high-resolution and weather-resistant for outdoor use.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to complete a large format printing project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard orders are completed within 2-3 business days. Rush orders are available for same-day or next-day delivery, depending on the size and complexity of the project.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer installation services for large format prints?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide professional installation services for all our large format prints, including vehicle wraps, building wraps, and exhibition displays. Our experienced team ensures proper installation and longevity.",
        },
      },
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Large Format Printing Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Banner and Poster Printing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/banner-printing.jpg"
                alt="Banner printing services in Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Make a big impact with our high-quality large format printing
                services. Perfect for outdoor advertising, events, and indoor
                displays.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Vinyl banners
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Event posters
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Indoor displays
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Vehicle Wrap and Outdoor Advertising
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Transform your vehicle into a mobile advertisement with our
                professional vehicle wrap printing services. We also offer
                outdoor advertising solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Vehicle wraps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Outdoor signage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Building wraps
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/vehicle-wrap.jpg"
                alt="Vehicle wrap printing services Punjab"
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
                What types of large format printing do you offer?
              </h3>
              <p className="text-gray-700">
                We offer a wide range of large format printing services
                including vinyl banners, posters, vehicle wraps, building wraps,
                and exhibition displays. All prints are high-resolution and
                weather-resistant for outdoor use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How long does it take to complete a large format printing
                project?
              </h3>
              <p className="text-gray-700">
                Standard orders are completed within 2-3 business days. Rush
                orders are available for same-day or next-day delivery,
                depending on the size and complexity of the project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer installation services for large format prints?
              </h3>
              <p className="text-gray-700">
                Yes, we provide professional installation services for all our
                large format prints, including vehicle wraps, building wraps,
                and exhibition displays. Our experienced team ensures proper
                installation and longevity.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/marketing-materials-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Marketing Materials
                  </h3>
                  <p className="text-gray-700">
                    Professional printing for brochures, flyers, and promotional
                    materials.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/design-services-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Design Services
                  </h3>
                  <p className="text-gray-700">
                    Custom design solutions for your branding and marketing
                    needs.
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
                    High-quality digital printing services for all your business
                    needs.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Make Your Message Stand Out
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create impactful large format prints that get
            noticed.
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
