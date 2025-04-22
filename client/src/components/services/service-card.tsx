import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 px-6">
        <Link href="/contact">
          <a className="text-blue-500 hover:text-blue-600 font-medium flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Link>
      </CardFooter>
    </Card>
  );
}
