import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function BusinessStationery() {
  useEffect(() => {
    document.title =
      "Business Stationery Printing in Jalandhar | N-Tek Computers";
    const metaTags = [
      {
        name: "description",
        content:
          "Premium business stationery printing in Jalandhar and Punjab. Custom stationery design, letterhead printing, envelopes, and professional office stationery solutions for businesses. Affordable packages available.",
      },
      {
        name: "keywords",
        content:
          "business stationery printing Jalandhar, custom stationery design Punjab, corporate stationery services Jalandhar, letterhead printing Jalandhar, envelope design services Punjab, personalized office stationery Jalandhar, premium business stationery packages in Jalandhar, affordable custom stationery printing Punjab, professional office stationery solutions Jalandhar",
      },
      {
        property: "og:title",
        content: "Business Stationery Printing in Jalandhar | N-Tek Computers",
      },
      {
        property: "og:description",
        content:
          "Premium business stationery printing in Jalandhar and Punjab. Custom stationery design, letterhead printing, envelopes, and professional office stationery solutions for businesses. Affordable packages available.",
      },
      {
        property: "og:url",
        content: "https://ntekcomputers.com/business-stationery-jalandhar.html",
      },
      {
        name: "twitter:title",
        content: "Business Stationery Printing in Jalandhar | N-Tek Computers",
      },
      {
        name: "twitter:description",
        content:
          "Premium business stationery printing in Jalandhar and Punjab. Custom stationery design, letterhead printing, envelopes, and professional office stationery solutions for businesses. Affordable packages available.",
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
    name: "Business Stationery Printing in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/business-stationery-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Enhance your corporate image with our custom business stationery printing services in Jalandhar. Letterheads, envelopes, and more.",
    serviceType: "Business Stationery",
    keywords: [
      "business stationery printing Jalandhar",
      "custom stationery design Punjab",
      "corporate stationery services Jalandhar",
      "letterhead printing Jalandhar",
      "envelope design services Punjab",
      "personalized office stationery Jalandhar",
      "premium business stationery packages in Jalandhar",
      "affordable custom stationery printing Punjab",
      "professional office stationery solutions Jalandhar",
    ],
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Professional Business Stationery Printing in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Letterhead and Envelope Design
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/letterhead-design.jpg"
                alt="Custom letterhead printing Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Create a professional image with our custom letterhead and
                envelope printing services. We offer premium paper stocks and
                finishes to make your business communications stand out.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Premium paper options
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom designs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Matching envelopes
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Customized Office Stationery Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Complete your office stationery set with our comprehensive
                printing services. From business cards to notepads, we ensure
                consistency across all your branded materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Business cards
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Notepads and memo pads
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Presentation folders
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/office-stationery.jpg"
                alt="Personalized envelopes Punjab"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Elevate Your Business Image
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create a cohesive and professional stationery set
            for your business.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get a Quote
          </Button>
        </section>
      </main>
    </>
  );
}
