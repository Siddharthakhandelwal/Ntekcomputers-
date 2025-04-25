import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Layers, MessageSquare, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Check if current route is active
  const isActive = (path: string) => {
    return location === path;
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">
                N<span className="text-blue-500"> Tek</span> Computers
              </span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/">
              <a
                className={`font-medium transition-all hover:-translate-y-1 px-2 py-1 rounded ${
                  isActive("/")
                    ? "text-blue-500 font-semibold"
                    : "text-gray-800 hover:text-blue-500 hover:bg-blue-50"
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`font-medium transition-all hover:-translate-y-1 px-3 py-1 rounded-md flex items-center ${
                  isActive("/services")
                    ? "text-blue-600 bg-blue-50 font-semibold shadow-sm"
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Layers className="mr-1 h-4 w-4" />
                Services
                {isActive("/services") && (
                  <span className="w-1 h-1 bg-blue-500 rounded-full ml-1 animate-pulse"></span>
                )}
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`font-medium transition-all hover:-translate-y-1 px-3 py-1 rounded-md flex items-center ${
                  isActive("/about")
                    ? "text-blue-600 bg-blue-50 font-semibold shadow-sm"
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Info className="mr-1 h-4 w-4" />
                About
                {isActive("/about") && (
                  <span className="w-1 h-1 bg-blue-500 rounded-full ml-1 animate-pulse"></span>
                )}
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`font-medium transition-all hover:-translate-y-1 px-3 py-1 rounded-md flex items-center ${
                  isActive("/contact")
                    ? "text-blue-600 bg-blue-50 font-semibold shadow-sm"
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <MessageSquare className="mr-1 h-4 w-4" />
                Contact
                {isActive("/contact") && (
                  <span className="w-1 h-1 bg-blue-500 rounded-full ml-1 animate-pulse"></span>
                )}
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link href="/">
              <a
                className={`font-medium py-2 border-b border-gray-100 flex items-center ${
                  isActive("/")
                    ? "text-blue-500 font-semibold"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`font-medium py-2 border-b border-gray-100 flex items-center ${
                  isActive("/services")
                    ? "text-blue-500 font-semibold"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Layers className="mr-2 h-5 w-5" /> Services
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`font-medium py-2 border-b border-gray-100 flex items-center ${
                  isActive("/about")
                    ? "text-blue-500 font-semibold"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="mr-2 h-5 w-5" /> About
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`font-medium py-2 flex items-center ${
                  isActive("/contact")
                    ? "text-blue-500 font-semibold"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="mr-2 h-5 w-5" /> Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
