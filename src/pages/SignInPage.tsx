import { PageWrapper } from '@/components/app/Auth/PageWrapper'
import { SignInForm } from '@/components/app/SignInPage/SignInForm'
import { useAuth } from '@/hooks/useAuth'
import { validateSession } from '@/utils/validateSession'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the sign-in page.
 *
 * @returns The sign-in page component.
 */
export function SignInPage() {
  const user = useAuth()
  const [userIsLoading, setUserIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setUserIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (!userIsLoading && validateSession(user)) {
      navigate(`/user/${user.name?.toLowerCase()}`)
    }
  }, [userIsLoading, user, navigate])

  if (!userIsLoading && !validateSession(user)) {
    return (
      <PageWrapper>
        <SignInForm />
      </PageWrapper>
    )
  }
}
