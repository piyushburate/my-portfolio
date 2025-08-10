import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearMonthDifference(from: Date, to: Date): string {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();

  if (months < 0) {
    years -= 1;
    months += 13;
  }

  const yearStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

export const formatDate = (date: string, type: 'short' | 'long' = 'long') => {
  if (!date) {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  if (type === 'long') {
    options.month = 'long';
    options.day = '2-digit';
    options.year = 'numeric';
  }
  if (type === 'short') {
    options.month = 'short';
    options.day = '2-digit';
    options.year = 'numeric';
  }
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
};