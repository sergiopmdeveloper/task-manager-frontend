import { HTMLProps } from 'react'

/**
 * Task form wrapper component of the user page.
 * @param {React.PropsWithChildren<HTMLProps<HTMLFormElement>>} props - The props for the form element and its children.
 * @returns The component.
 */
export function UserTaskFormWrapper(
  props: React.PropsWithChildren<HTMLProps<HTMLFormElement>>
) {
  return (
    <form {...props} className="flex flex-col gap-3">
      {props.children}
    </form>
  )
}
