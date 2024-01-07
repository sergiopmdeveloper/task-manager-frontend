import { SignInForm } from '@/components/app/SignInPage/SignInForm'
import { PageWrapper } from '@/components/app/Auth/PageWrapper'

/**
 * Renders the sign-in page.
 *
 * @returns The sign-in page component.
 */
export function SignInPage() {
  return (
    <PageWrapper>
      <SignInForm />
    </PageWrapper>
  )
}
