// Types

type FormContainerProps = {
  formTitle: string
  children: React.ReactNode
}

/**
 * Renders a container for a form with a specified title.
 *
 * @param {Object} props - The component props.
 * @param {string} props.formTitle - The title of the form.
 * @param {ReactNode} props.children - The content of the form.
 *
 * @returns The rendered form container.
 */
export function FormContainer({ formTitle, children }: FormContainerProps) {
  return (
    <div className="w-[30rem] bg-secondary p-5 mx-5 relative">
      <h1 className="text-3xl font-semibold mb-8">{formTitle}</h1>
      {children}
    </div>
  )
}
