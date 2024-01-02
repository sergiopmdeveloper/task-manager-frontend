/**
 * Wraps the form content with a container element.
 *
 * @param {React.ReactNode} children - The content to be wrapped.
 *
 * @returns The form element with the wrapped content.
 */
export function FormWrapper({ children }: { children: React.ReactNode }) {
  return <form className="flex flex-col gap-6">{children}</form>
}
