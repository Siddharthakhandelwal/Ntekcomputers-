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
} from "lucide-react";

export default function ClientShowcase() {
  // Client data organized by industry with icons
  const clientsByIndustry = [
    {
      industry: "Agriculture & Manufacturing",
      clients: [
        {
          name: "Eicher Tractors",
          icon: <Tractor className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Ambika Overseas",
          icon: <Building className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Everest Tools",
          icon: <Hammer className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
    {
      industry: "Automotive",
      clients: [
        {
          name: "Royal Enfield",
          icon: <Car className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
    {
      industry: "Food & Beverage",
      clients: [
        {
          name: "Domino's Pizza",
          icon: <Pizza className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Didar Restaurant",
          icon: <Store className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Namaste India",
          icon: <Store className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
    {
      industry: "Education",
      clients: [
        {
          name: "Army Schools",
          icon: <School className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Delhi Public School",
          icon: <School className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Pine Grove School",
          icon: <School className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
    {
      industry: "Religious Organizations",
      clients: [
        {
          name: "Ek Niwas Darbar",
          icon: <Church className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
    {
      industry: "Healthcare",
      clients: [
        {
          name: "Johal Hospital",
          icon: <Hospital className="h-8 w-8 text-blue-500" />,
        },
        {
          name: "Life Space Labs",
          icon: <Hospital className="h-8 w-8 text-blue-500" />,
        },
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Esteemed Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientsByIndustry.flatMap((category) =>
            category.clients.map((client, index) => (
              <div
                key={`${category.industry}-${index}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {client.icon}
                </div>
                <h3 className="text-md font-medium text-center">
                  {client.name}
                </h3>
                <p className="text-xs text-gray-500 text-center">
                  {category.industry}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
