import React from "react";
import { cn } from "@/lib/utils";

export function Button({ children, className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 px-4 py-2";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-700",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}


export default Button;


