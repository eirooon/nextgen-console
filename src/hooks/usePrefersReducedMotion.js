import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", callback);
      return () => mediaQueryList.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false, // Default for SSR
  );
}
