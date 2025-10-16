import * as React from "react";
import { cn } from "@/lib/utils"; // make sure you have this helper (common in ShadCN projects)

/**
 * A minimal, accessible Label component styled for ShadCN + Tailwind projects.
 * It automatically forwards refs and allows custom styling via className.
 */
const Label = React.forwardRef(({ className, htmlFor, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
});
Label.displayName = "Label";

export { Label };
