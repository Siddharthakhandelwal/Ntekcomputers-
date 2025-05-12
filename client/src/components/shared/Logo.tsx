import React from "react";
import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <img
      src={logoImage}
      alt="Ntek Printing Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
