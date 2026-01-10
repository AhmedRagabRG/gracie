import { useData } from "@/contexts/DataContext";

/**
 * Hook to access contact information from DataContext
 * Data is loaded once at app startup
 */
export function useContactInfo() {
  return useData();
}
