// Types

type AuthFormContainerProps = {
  formTitle: string
  children: React.ReactNode
}

/**
 * Form container component of an authentication page.
 * @param {Object} props - The component props.
 * @param {string} props.formTitle - The title of the form.
 * @param {ReactNode} props.children - The content of the form.
 * @returns The component.
 */
export function AuthFormContainer({
  formTitle,
  children,
}: AuthFormContainerProps) {
  return (
    <div className="w-[30rem] bg-secondary p-5 mx-5 relative">
      <h1 className="text-3xl font-semibold mb-8">{formTitle}</h1>
      {children}
    </div>
  )
}
