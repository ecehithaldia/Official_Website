import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`border rounded-xl p-4 shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-500">{children}</p>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

// ✅ Added CardFooter (non-breaking addition)
export function CardFooter({ children }) {
  return <div className="mt-4 pt-2 border-t">{children}</div>;
}

// ✅ Correct default export
export default Card;

