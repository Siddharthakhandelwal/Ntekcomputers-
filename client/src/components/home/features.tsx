import { Printer, Clock, Users } from "lucide-react";

// Feature data
const features = [
  {
    id: 1,
    icon: <Printer className="h-8 w-8 text-blue-500" />,
    title: "High-Quality Printing",
    description: "We use state-of-the-art technology to ensure your prints are sharp, vibrant and professional."
  },
  {
    id: 2,
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: "Quick Turnaround",
    description: "We understand your time constraints and deliver your printing projects promptly without compromising quality."
  },
  {
    id: 3,
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Personalized Service",
    description: "We work closely with you to understand your needs and provide custom printing solutions."
  }
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-bold mb-12">Why Choose Us?</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
