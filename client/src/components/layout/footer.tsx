import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Printer,
  PenTool,
  Layers,
} from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Printing-themed elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-sm border-2 border-cyan-400 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 rounded-sm border-2 border-magenta-500 rotate-12"></div>
        <div className="absolute top-60 right-40 w-24 h-24 rounded-sm border-2 border-yellow-400 -rotate-12"></div>

        {/* Print registration marks */}
        <div className="absolute top-10 right-10">
          <div className="w-10 h-10">
            <div className="absolute top-0 right-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute top-0 right-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10">
          <div className="w-10 h-10">
            <div className="absolute bottom-0 left-0 w-4 h-1 bg-blue-500"></div>
            <div className="absolute bottom-0 left-0 h-4 w-1 bg-blue-500"></div>
          </div>
        </div>

        {/* Dots pattern */}
        <div className="absolute right-20 top-20 flex space-x-3">
          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
          <div className="w-3 h-3 bg-magenta-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Logo size="sm" className="mr-2" />
              <span>N-Tek Computers</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Professional Designing & Printing services for all your business
              and personal needs.
            </p>
            {/* <p className="text-gray-600 mb-4">
              Google Business Profile Id - 1927539426318025459
              <br />
              Import Export code - ABWPK0088R
              <br />
              GSTIN - 03ABWPK0088R1ZW
            </p> */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Layers className="h-4 w-4 mr-2 text-cyan-500" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Home
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Services
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      About Us
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-cyan-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Contact
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <PenTool className="h-4 w-4 mr-2 text-magenta-500" />
              <span>Services</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Digital Printing
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Large Format Printing
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Business Stationery
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Marketing Materials
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Design Services
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Branding Services
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-600 hover:text-magenta-500 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-magenta-500 rounded-full mr-2 group-hover:animate-pulse"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      Customized Gifts
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-4 h-4 bg-yellow-400 rounded-sm mr-2"></span>
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  35 B Adarsh Nagar, Jalandhar, Punjab 144002
                </span>
              </li>
              <li className="flex items-start group">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  +91-9818156734
                </span>
              </li>
              <li className="flex items-start group">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  +91-9814472234
                </span>
              </li>
              <li className="flex items-start group">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  ntekcomputers@yahoo.co.in
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <div className="mb-4 text-gray-600 space-y-1">
            <p>
              Google Business Profile Id - 1927539426318025459 || Import Export
              code - ABWPK0088R || GSTIN - 03ABWPK0088R1ZW
            </p>
          </div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} N-Tek Computers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
