import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
  return (
    <div>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <MapPin className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">35 B Adarsh Nagar, Jalandhar, Punjab 144002</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91-9818156734</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">Ntekcomputers@yahoo.co.in</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Business Hours</h4>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="rounded-lg overflow-hidden shadow-md h-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.6732374487326!2d75.5745!3d31.3268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sAdarsh%20Nagar%2C%20Jalandhar%2C%20Punjab%20144002!5e0!3m2!1sen!2sin!4v1656927234455!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
