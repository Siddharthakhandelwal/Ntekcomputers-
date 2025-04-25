import {
  Building,
  Tractor,
  Hammer,
  Car,
  Pizza,
  Store,
  School,
  Church,
  Hospital,
  Factory,
} from "lucide-react";

export default function ClientShowcase() {
  // Client data organized by industry with icons
  const clientCategories = [
    {
      category: "Food & Beverage",
      icon: <Pizza className="h-6 w-6 text-amber-500" />,
      clients: [
        "Domino's Pizza",
        "Chick Chick",
        "Didar Restaurant (Montreal)",
        "Namaste India (Austria)",
        "La Cantina (Germany)",
        "Naan N Oven (USA)",
        "Kanta Chhuri",
        "Vanakkam",
        "Grill Affairs",
      ],
      bgColor: "bg-amber-50",
    },
    {
      category: "Education",
      icon: <School className="h-6 w-6 text-emerald-500" />,
      clients: [
        "Army Schools",
        "Delhi Public School",
        "Pine Grove School",
        "Glory International School",
      ],
      bgColor: "bg-emerald-50",
    },
    {
      category: "Manufacturing & Automotive",
      icon: <Factory className="h-6 w-6 text-indigo-500" />,
      clients: ["Ambika Overseas", "Everest Tools", "Royal Enfield"],
      bgColor: "bg-indigo-50",
    },
    {
      category: "Healthcare",
      icon: <Hospital className="h-6 w-6 text-rose-500" />,
      clients: ["Johal Hospital (Jalandhar)", "Life Space Labs (USA)"],
      bgColor: "bg-rose-50",
    },
    {
      category: "Agriculture",
      icon: <Tractor className="h-6 w-6 text-green-500" />,
      clients: ["Eicher Tractors"],
      bgColor: "bg-green-50",
    },
    {
      category: "Religious Organizations",
      icon: <Church className="h-6 w-6 text-purple-500" />,
      clients: ["Ek Niwas Darbar (UK & India)"],
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Our Esteemed Clients
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h2>

          <p className="text-gray-600 text-lg mt-8">
            We take pride in serving a wide range of industries and providing
            top-notch printing services to some of the most well-known names
            globally. Here are just a few of our valued clients:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className={`p-5 ${category.bgColor}`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.category}
                  </h3>
                </div>
              </div>

              <ul className="p-5 space-y-3">
                {category.clients.map((client) => (
                  <li key={client} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0 animate-pulse-slow"></span>
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
