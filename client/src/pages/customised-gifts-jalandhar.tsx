import SEO from "@/components/shared/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomisedGifts() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Customized Gift Printing in Jalandhar",
    provider: {
      "@type": "Organization",
      name: "N-Tek Computers",
      url: "https://ntekcomputers.com/customised-gifts-jalandhar.html",
    },
    areaServed: {
      "@type": "City",
      name: "Jalandhar",
    },
    description:
      "Create personalized gifts with our custom printing services in Jalandhar. Mugs, t-shirts, photo frames, and more.",
    serviceType: "Customized Gifts",
    keywords: [
      "customized gift printing Jalandhar",
      "personalized gift items Punjab",
      "photo printing on gifts Jalandhar",
      "custom mug printing services Punjab",
      "personalized t-shirt printing Jalandhar",
      "photo frame printing services Punjab",
      "affordable gift customization Jalandhar",
      "bulk gift printing services Punjab",
      "corporate gift printing solutions Jalandhar",
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
        name: "What types of gifts can be customized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer customization for various items including mugs, t-shirts, photo frames, keychains, and more. Each item can be personalized with photos, text, or logos.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to print customized gifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard orders are completed within 2-3 business days. Rush orders are available for same-day or next-day delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer bulk discounts for corporate gifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer special pricing for bulk orders. Contact us for a custom quote based on your quantity and requirements.",
        },
      },
    ],
  };

  return (
    <>
      <SEO
        title="Customized Gift Printing Services in Jalandhar | N-Tek Computers"
        description="Create personalized gifts with our custom printing services in Jalandhar. Mugs, t-shirts, photo frames, and more."
        keywords="customized gift printing Jalandhar, personalized gift items Punjab, photo printing on gifts Jalandhar, custom mug printing services Punjab, personalized t-shirt printing Jalandhar, photo frame printing services Punjab, affordable gift customization Jalandhar, bulk gift printing services Punjab, corporate gift printing solutions Jalandhar"
        structuredData={[structuredData, faqStructuredData]}
        ogUrl="https://ntekcomputers.com/customised-gifts-jalandhar.html"
      />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Customized Gift Printing Services in Jalandhar
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Personalized Gift Items
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/custom-mugs.jpg"
                alt="Custom mug printing services in Jalandhar"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Transform ordinary items into meaningful gifts with our custom
                printing services. Perfect for corporate gifts, special
                occasions, or personal keepsakes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom mug printing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Personalized t-shirts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Photo frame printing
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">
            Corporate Gift Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Strengthen your brand presence with our corporate gift printing
                services. We offer bulk printing solutions for promotional items
                and corporate gifts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Bulk order discounts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Branded merchandise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Custom packaging
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/corporate-gifts.jpg"
                alt="Corporate gift printing services Punjab"
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
                What types of gifts can be customized?
              </h3>
              <p className="text-gray-700">
                We offer customization for various items including mugs,
                t-shirts, photo frames, keychains, and more. Each item can be
                personalized with photos, text, or logos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How long does it take to print customized gifts?
              </h3>
              <p className="text-gray-700">
                Standard orders are completed within 2-3 business days. Rush
                orders are available for same-day or next-day delivery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Do you offer bulk discounts for corporate gifts?
              </h3>
              <p className="text-gray-700">
                Yes, we offer special pricing for bulk orders. Contact us for a
                custom quote based on your quantity and requirements.
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
            <Link to="/business-stationery-jalandhar" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Business Stationery
                  </h3>
                  <p className="text-gray-700">
                    Professional stationery printing for your business needs.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Create Memorable Gifts
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us help you create unique and personalized gifts that will be
            cherished.
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
