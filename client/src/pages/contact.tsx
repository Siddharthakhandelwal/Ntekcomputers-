import { useEffect } from "react";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import CTASection from "@/components/shared/cta-section";

export default function Contact() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Contact Us - N Tek Computers";
  }, []);

  return (
    <section className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or ready to start your next printing and designing
          project? Reach out to us using any of the methods below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <CTASection />
    </section>
  );
}
