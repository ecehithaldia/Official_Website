import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}


export default Input;

