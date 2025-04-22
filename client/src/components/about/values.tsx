import { Award, Users, Lightbulb, HandshakeIcon } from "lucide-react";

// Values data
const values = [
  {
    id: 1,
    icon: <Award className="h-8 w-8 text-gray-800" />,
    title: "Quality",
    description: "We never compromise on quality, ensuring every print meets our high standards."
  },
  {
    id: 2,
    icon: <HandshakeIcon className="h-8 w-8 text-gray-800" />,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical principles."
  },
  {
    id: 3,
    icon: <Lightbulb className="h-8 w-8 text-gray-800" />,
    title: "Innovation",
    description: "We continuously evolve our techniques and services to stay at the forefront of printing technology."
  },
  {
    id: 4,
    icon: <Users className="h-8 w-8 text-gray-800" />,
    title: "Customer Focus",
    description: "We put our customers first, ensuring we understand and meet their unique needs."
  }
];

export default function Values() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-10 text-center">Our Values</h3>
      
      <div className="grid md:grid-cols-4 gap-6">
        {values.map((value) => (
          <div key={value.id} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              {value.icon}
            </div>
            <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
