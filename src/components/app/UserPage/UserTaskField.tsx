/**
 * Task field component of the user page.
 * @param {React.ReactNode} children - The content to be rendered inside the field component.
 * @returns The component.
 */
export function UserTaskField({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3 relative">{children}</div>
}
