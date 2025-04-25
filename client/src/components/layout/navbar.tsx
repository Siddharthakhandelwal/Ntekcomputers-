import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`font-medium transition-colors ${
                  isActive("/services")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                Services
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                Contact
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
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link href="/">
              <a
                className={`font-medium py-2 border-b border-gray-100 ${
                  isActive("/")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a
                className={`font-medium py-2 border-b border-gray-100 ${
                  isActive("/services")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`font-medium py-2 border-b border-gray-100 ${
                  isActive("/about")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={`font-medium py-2 ${
                  isActive("/contact")
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
