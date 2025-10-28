import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Trucnate string
 *
 * @export
 * @param {string} str
 * @param {number} maxLength
 * @return {*}  {string}
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;

  return str.slice(0, maxLength) + "...";
}
