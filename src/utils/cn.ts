/**
 * Simple utility for conditional class names
 * Merges class strings together
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
