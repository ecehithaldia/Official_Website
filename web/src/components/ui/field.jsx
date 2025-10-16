import React from "react";

export function Field({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-medium">
      {children}
    </label>
  );
}

export function FieldDescription({ children, className = "" }) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}

export function FieldGroup({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}


export default Field;
