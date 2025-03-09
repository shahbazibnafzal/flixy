import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// A utility function to merge classnames 
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

// A utility function to debounce a function with a certain delay.
// Takes a callback function and a delay as arguments.
export const debounce = <Fn extends (...args: unknown[]) => void>(
    func: Fn,
    delay: number
  ): (...args: Parameters<Fn>) => void => {
    let timer: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<Fn>) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };