import { HTMLProps } from 'react'

/**
 * Wraps the form content with a container element.
 *
 * @param {React.PropsWithChildren<HTMLProps<HTMLFormElement>>} props - The props for the form element and its children.
 *
 * @returns The form element with the wrapped content.
 */
export function FormWrapper(
  props: React.PropsWithChildren<HTMLProps<HTMLFormElement>>
) {
  return (
    <form {...props} className="flex flex-col gap-6">
      {props.children}
    </form>
  )
}
