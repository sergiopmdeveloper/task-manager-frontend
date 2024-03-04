import { HTMLProps } from 'react'

/**
 * Form wrapper component of an authentication page.
 * @param {React.PropsWithChildren<HTMLProps<HTMLFormElement>>} props - The props for the form element and its children.
 * @returns The component.
 */
export function AuthFormWrapper(
  props: React.PropsWithChildren<HTMLProps<HTMLFormElement>>
) {
  return (
    <form {...props} className="flex flex-col gap-6">
      {props.children}
    </form>
  )
}
