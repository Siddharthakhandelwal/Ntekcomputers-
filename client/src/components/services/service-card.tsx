import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export default function ServiceCard({ service }: ServiceProps) {
  // Split description into two parts if it's long enough
  const splitDescription = () => {
    const words = service.description.split(" ");

    // If description is short, don't split
    if (words.length < 10) return [service.description];

    // Find a good midpoint (around half of the text) to split at punctuation
    const midPoint = Math.floor(words.length / 2);

    // Try to find a period, comma, or other punctuation near the midpoint
    let splitIndex = -1;

    // Look for periods first in the middle section
    for (let i = midPoint - 3; i <= midPoint + 3; i++) {
      if (i >= 0 && i < words.length && words[i].includes(".")) {
        splitIndex = i;
        break;
      }
    }

    // If no period found, try comma
    if (splitIndex === -1) {
      for (let i = midPoint - 3; i <= midPoint + 3; i++) {
        if (i >= 0 && i < words.length && words[i].includes(",")) {
          splitIndex = i;
          break;
        }
      }
    }

    // If still no good split point, just use the midpoint
    if (splitIndex === -1) {
      splitIndex = midPoint;
    }

    const firstPart = words.slice(0, splitIndex + 1).join(" ");
    const secondPart = words.slice(splitIndex + 1).join(" ");

    return [firstPart, secondPart];
  };

  const paragraphs = splitDescription();

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
        {paragraphs.length === 1 ? (
          <p className="text-gray-600 mb-4">{paragraphs[0]}</p>
        ) : (
          <>
            <p className="text-gray-600 mb-2">{paragraphs[0]}</p>
            <p className="text-gray-600 mb-4">{paragraphs[1]}</p>
          </>
        )}
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
