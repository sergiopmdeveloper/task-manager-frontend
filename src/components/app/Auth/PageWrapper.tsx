/**
 * Wraps the content of an auth page with a centered container.
 *
 * @param {React.ReactNode} children - The content to be wrapped.
 *
 * @returns The wrapped content.
 */
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
