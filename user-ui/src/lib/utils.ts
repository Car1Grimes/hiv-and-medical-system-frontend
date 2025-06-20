import { clsx, type ClassValue } from "clsx";
import { format, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatISO = (raw: string) =>
  format(parseISO(raw), "MMM d, yyyy, h:mm a");

export const formatMDY = (raw: string) => format(parseISO(raw), "MMM d, yyyy");

export const formatDMY = (raw: string) => format(parseISO(raw), "d/MM/yyyy");
