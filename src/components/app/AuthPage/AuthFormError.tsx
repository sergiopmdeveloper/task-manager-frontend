/**
 * Form error component of an authentication page.
 * @param {React.ReactNode} children - The content of the error message.
 * @returns The component.
 */
export function AuthFormError({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-red-500 bg-red-300 text-xs px-1 py-0.5 rounded-sm absolute -top-7 right-0">
      {children}
    </span>
  )
}
