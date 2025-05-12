import React from "react";
import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
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
