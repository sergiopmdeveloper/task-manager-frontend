import { AuthPageWrapper } from '@/components/app/AuthPage/AuthPageWrapper'
import { SignUpForm } from '@/components/app/SignUpPage/SignUpForm'
import { useAuth } from '@/hooks/useAuth'
import { validateSession } from '@/utils/validateSession'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Sign-up page component.
 * @returns The page component.
 */
export function SignUpPage() {
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
      <AuthPageWrapper>
        <SignUpForm />
      </AuthPageWrapper>
    )
  }
}
