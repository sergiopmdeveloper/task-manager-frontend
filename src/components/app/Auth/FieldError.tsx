/**
 * Renders an error message for a form field.
 *
 * @param {React.ReactNode} children - The error message to display.
 *
 * @returns The rendered error message component.
 */
export function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-red-500 bg-red-300 text-xs px-1 py-0.5 rounded-sm absolute -top-1 right-0">
      {children}
    </span>
  )
}
