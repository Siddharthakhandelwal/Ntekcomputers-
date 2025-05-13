import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function BrandingServices() {
  useEffect(() => {
    document.title = "Branding Services in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "Professional branding services in Jalandhar and Punjab. Brand identity development, logo design, and comprehensive brand strategy for startups and businesses. Affordable packages and expert solutions.",
      },
      {
        name: "keywords",
        content:
          "branding services in Jalandhar, brand identity development Punjab, logo design company Jalandhar, corporate branding solutions Punjab, brand strategy services Jalandhar, visual identity design Punjab, affordable branding packages for startups in Jalandhar, comprehensive brand development services Punjab, expert logo design and branding Jalandhar",
      },
      {
        property: "og:title",
        content: "Branding Services in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "Professional branding services in Jalandhar and Punjab. Brand identity development, logo design, and comprehensive brand strategy for startups and businesses. Affordable packages and expert solutions.",
      },
      {
        property: "og:url",
        content: "https://ntekcomputers.com/branding-services-jalandhar.html",
      },
      {
        name: "twitter:title",
        content: "Branding Services in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "Professional branding services in Jalandhar and Punjab. Brand identity development, logo design, and comprehensive brand strategy for startups and businesses. Affordable packages and expert solutions.",
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
    name: "Branding Services in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/branding-services-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Build a strong brand identity with our expert branding services in Jalandhar. Logo design, brand strategy, and more.",
    serviceType: "Branding Services",
    keywords: [
      "branding services in Jalandhar",
      "brand identity development Punjab",
      "logo design company Jalandhar",
      "corporate branding solutions Punjab",
      "brand strategy services Jalandhar",
      "visual identity design Punjab",
      "affordable branding packages for startups in Jalandhar",
      "comprehensive brand development services Punjab",
      "expert logo design and branding Jalandhar",
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Comprehensive Branding Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Logo Design and Brand Identity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/logo-design.jpg"
                alt="Logo design services Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Create a memorable brand identity with our expert logo design
                services. We combine creativity with strategic thinking to
                develop logos that perfectly represent your business values and
                goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom logo design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Brand color palette
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Typography selection
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Strategic Brand Development
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Develop a comprehensive brand strategy that sets you apart from
                competitors. Our team helps you define your brand's voice,
                values, and positioning in the market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Brand positioning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Market research
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Brand guidelines
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/brand-strategy.jpg"
                alt="Brand identity development Punjab"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Transform Your Brand Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create a powerful brand identity that resonates with
            your audience.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </section>
      </main>
    </>
  );
}
