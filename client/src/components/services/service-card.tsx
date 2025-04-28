import { ChevronRight } from "lucide-react";

type ServiceCardProps = {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {service.title}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a
          href="/contact"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Request a Quote <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
