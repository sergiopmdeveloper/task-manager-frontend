import { SignInForm } from '@/components/app/SignInPage/SignInForm'

/**
 * Renders the sign-in page.
 *
 * @returns The sign-in page component.
 */
export function SignInPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignInForm />
    </div>
  )
}
