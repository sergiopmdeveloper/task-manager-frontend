/**
 * Renders a field component.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the field component.
 *
 * @returns The rendered field component.
 */
export function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3 relative">{children}</div>
}
