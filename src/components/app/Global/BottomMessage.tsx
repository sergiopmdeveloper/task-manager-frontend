/**
 * Renders a bottom message component.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the component.
 *
 * @returns The rendered bottom message component.
 */
export function BottomMessage({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute text-xs bottom-4 right-4 px-2 py-1 rounded bg-red-300 text-red-600">
      {children}
    </span>
  )
}
