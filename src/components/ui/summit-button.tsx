"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SummitButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "lg";
  className?: string;
}

export function SummitButton({ 
  href, 
  children, 
  variant = "primary", 
  size = "lg", 
  className = "" 
}: SummitButtonProps) {
  const baseStyles = "font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variantStyles = {
    primary: "rounded-full px-8 py-4 text-slate-900 hover:text-white",
    outline: "hover:text-slate-900"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg"
  };

  const primaryStyle = {
    backgroundColor: '#D4AF37',
    color: '#0C1D36'
  };

  const outlineStyle = {
    borderColor: '#D4AF37',
    color: '#D4AF37',
    backgroundColor: 'transparent'
  };

  const primaryHoverStyle = {
    backgroundColor: '#0C1D36',
    color: 'white'
  };

  const outlineHoverStyle = {
    backgroundColor: '#D4AF37',
    color: '#0C1D36'
  };

  return (
    <Button asChild 
      size={size} 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={variant === "primary" ? primaryStyle : outlineStyle}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          Object.assign(e.currentTarget.style, primaryHoverStyle);
        } else {
          Object.assign(e.currentTarget.style, outlineHoverStyle);
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          Object.assign(e.currentTarget.style, primaryStyle);
        } else {
          Object.assign(e.currentTarget.style, outlineStyle);
        }
      }}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}
