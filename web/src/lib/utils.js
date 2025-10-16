// utils.js
// Combines class names intelligently using clsx + tailwind-merge

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn(...inputs)
 * - Accepts any number of class name strings or conditional expressions.
 * - clsx handles conditional logic.
 * - twMerge merges Tailwind classes and removes duplicates/conflicts.
 *
 * Example:
 * cn("px-4 py-2", isActive && "bg-blue-500", "rounded")
 * → "px-4 py-2 bg-blue-500 rounded"
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
