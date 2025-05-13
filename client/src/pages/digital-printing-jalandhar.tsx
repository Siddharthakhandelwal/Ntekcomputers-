import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function DigitalPrinting() {
  useEffect(() => {
    document.title = "Digital Printing Services in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "Get high-quality, affordable digital printing services in Jalandhar and Punjab. Brochures, flyers, business cards, and custom digital prints for small businesses. Same-day and eco-friendly solutions available.",
      },
      {
        name: "keywords",
        content:
          "digital printing services in Jalandhar, digital printing company Punjab, custom digital prints Jalandhar, brochure printing Jalandhar, flyer printing services Punjab, business card printing Jalandhar, high-quality digital prints Punjab, affordable digital printing for small businesses in Jalandhar, same-day digital printing services in Punjab, eco-friendly digital printing solutions Jalandhar",
      },
      {
        property: "og:title",
        content: "Digital Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "Get high-quality, affordable digital printing services in Jalandhar and Punjab. Brochures, flyers, business cards, and custom digital prints for small businesses. Same-day and eco-friendly solutions available.",
      },
      {
        property: "og:url",
        content: "https://ntekcomputers.com/digital-printing-jalandhar.html",
      },
      {
        name: "twitter:title",
        content: "Digital Printing Services in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "Get high-quality, affordable digital printing services in Jalandhar and Punjab. Brochures, flyers, business cards, and custom digital prints for small businesses. Same-day and eco-friendly solutions available.",
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
    name: "Digital Printing Services in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/digital-printing-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Offering high-quality digital printing services in Jalandhar. Brochures, flyers, business cards, and more. Fast turnaround and competitive pricing.",
    serviceType: "Digital Printing",
    keywords: [
      "digital printing services in Jalandhar",
      "digital printing company Punjab",
      "custom digital prints Jalandhar",
      "brochure printing Jalandhar",
      "flyer printing services Punjab",
      "business card printing Jalandhar",
      "high-quality digital prints Punjab",
      "affordable digital printing for small businesses in Jalandhar",
      "same-day digital printing services in Punjab",
      "eco-friendly digital printing solutions Jalandhar",
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Top-Quality Digital Printing Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Brochure and Flyer Printing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/brochure-printing.jpg"
                alt="Brochure printing services in Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Our state-of-the-art digital printing services deliver
                exceptional quality for all your marketing materials. From
                brochures to flyers, we ensure vibrant colors and crisp text
                that make your message stand out.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  High-resolution printing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Fast turnaround time
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Competitive pricing
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Business Card Printing Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Make a lasting impression with our premium business card
                printing services. Choose from a variety of paper stocks,
                finishes, and designs to create cards that reflect your brand's
                professionalism.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Premium paper options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom finishes available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Same-day printing available
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/business-cards.jpg"
                alt="Custom business cards Punjab"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free quote on your digital printing needs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Request a Quote
          </Button>
        </section>
      </main>
    </>
  );
}
