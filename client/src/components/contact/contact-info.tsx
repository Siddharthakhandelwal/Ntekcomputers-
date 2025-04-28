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
                <p className="text-gray-600">
                  35 B Adarsh Nagar, Jalandhar, Punjab 144002
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91-9818156734</p>
                <p className="text-gray-600">+91-9814472234</p>
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
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 7:00 PM
                </p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* CMYK Color Strip */}
          <div className="flex mt-6">
            <div className="h-2 w-1/4 bg-cyan-500"></div>
            <div className="h-2 w-1/4 bg-magenta-500"></div>
            <div className="h-2 w-1/4 bg-yellow-400"></div>
            <div className="h-2 w-1/4 bg-black"></div>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-lg overflow-hidden shadow-md h-[500px] mb-4">
        {/* <h4 className="text-lg font-semibold mb-4">
          Find Us Here: N-Tek Computers, 35 B Adarsh Nagar, Jalandhar, Punjab
          144002
        </h4> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d307.0969668269897!2d75.56103443510071!3d31.32726783369345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5aed6b3e2501%3A0xa4531be00ba5451e!2sN-Tek%20Computers!5e0!3m2!1sen!2sin!4v1745863369761!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Bottom CMYK Color Strip */}
      {/* <div className="flex mt-8">
        <div className="h-3 w-1/4 bg-cyan-500"></div>
        <div className="h-3 w-1/4 bg-magenta-500"></div>
        <div className="h-3 w-1/4 bg-yellow-400"></div>
        <div className="h-3 w-1/4 bg-black"></div>
      </div> */}
    </div>
  );
}
