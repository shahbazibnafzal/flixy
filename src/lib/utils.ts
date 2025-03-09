import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

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