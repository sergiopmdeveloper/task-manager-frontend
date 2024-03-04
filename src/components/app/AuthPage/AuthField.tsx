/**
 * Field component of an authentication page.
 * @param {React.ReactNode} children - The content to be rendered inside the field component.
 * @returns The component.
 */
export function AuthField({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3 relative">{children}</div>
}
