import { Printer, Clock, Users, Lightbulb, Globe } from "lucide-react";

// Feature data
const features = [
  {
    id: 1,
    icon: <Printer className="h-8 w-8 text-blue-500" />,
    title: "High-Quality Printing",
    description:
      "We use state-of-the-art technology to ensure your prints are sharp, vibrant and professional.",
    color: "blue",
  },
  {
    id: 2,
    icon: <Clock className="h-8 w-8 text-cyan-500" />,
    title: "Quick Turnaround",
    description:
      "We understand your time constraints and deliver your printing projects promptly without compromising quality.",
    color: "cyan",
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-amber-500" />,
    title: "Personalized Service",
    description:
      "We work closely with you to understand your needs and provide custom printing solutions.",
    color: "amber",
  },
  {
    id: 4,
    icon: <Lightbulb className="h-8 w-8 text-emerald-500" />,
    title: "Creative Design",
    description:
      "Our design experts bring creativity and innovation to every project, ensuring your materials stand out.",
    color: "emerald",
  },
  {
    id: 5,
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    title: "Global Reach",
    description:
      "We serve clients worldwide with multilingual support in English, Hindi, Urdu, Chinese, German, and more.",
    color: "purple",
  },
];

export default function Features() {
  return (
    <div className="py-24 relative overflow-hidden bg-white">
      {/* Decorative printing elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-8 border-gray-100"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-8 border-gray-100"></div>

        {/* CMYK dots pattern */}
        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-cyan-400 opacity-50"></div>
        <div className="absolute top-20 left-30 w-6 h-6 rounded-full bg-purple-400 opacity-50"></div>
        <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-yellow-400 opacity-50"></div>

        <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-cyan-400 opacity-50"></div>
        <div className="absolute bottom-20 right-30 w-6 h-6 rounded-full bg-purple-400 opacity-50"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-yellow-400 opacity-50"></div>

        {/* Print registration marks */}
        <div className="absolute top-60 right-40 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-200 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-60 left-40 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-200 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Why Choose Us?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            At N Tek Computers, we combine cutting-edge printing technology with
            exceptional service to deliver results that exceed your
            expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:border-${feature.color}-200`}
            >
              <div className={`w-full h-2 bg-${feature.color}-500`}></div>
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
