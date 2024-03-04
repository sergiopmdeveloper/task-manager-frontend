import { Link } from 'react-router-dom'

// Types

type SuggestionProps = {
  page: 'sign-up' | 'sign-in'
}

/**
 * Form suggestion component of an authentication page.
 * @param {SuggestionProps} props - The component props.
 * @param {string} props.page - The current page.
 * @returns The component.
 */
export function AuthFormSuggestion({ page }: SuggestionProps) {
  const message =
    page === 'sign-up' ? 'Already have an account?' : "Don't have an account?"
  const link = page === 'sign-up' ? 'Sign in' : 'Sign up'
  const href = page === 'sign-up' ? '/sign-in' : '/sign-up'

  return (
    <div className="flex gap-2 text-xs">
      <span>{message}</span>
      <Link className="text-blue-500 underline font-semibold" to={href}>
        {link}
      </Link>
    </div>
  )
}
