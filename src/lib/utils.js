/**
 * clsx utility function for conditional class names
 * @param  {...string} classes - CSS class names to conditionally include
 * @returns {string} - Combined class string
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
