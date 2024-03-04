/**
 * Page wrapper component of an authentication page.
 * @param {React.ReactNode} children - The content to be wrapped.
 * @returns The component.
 */
export function AuthPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
