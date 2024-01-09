import { PageWrapper } from '@/components/app/Auth/PageWrapper'
import { BottomMessage } from '@/components/app/Global/BottomMessage'
import { SignInForm } from '@/components/app/SignInPage/SignInForm'
import { useAuth } from '@/hooks/useAuth'
import { validateSession } from '@/utils/validateSession'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Renders the sign-in page.
 *
 * @returns The sign-in page component.
 */
export function SignInPage() {
  const location = useLocation()
  const expired = location.state?.expired

  const user = useAuth()
  const [userIsLoading, setUserIsLoading] = useState(true)
  const [showExpiredMessage, setShowExpiredMessage] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setUserIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (!userIsLoading && validateSession(user)) {
      navigate(`/user/${user.name?.toLowerCase()}`)
    } else if (!userIsLoading && !validateSession(user) && expired) {
      setShowExpiredMessage(true)
      setTimeout(() => setShowExpiredMessage(false), 5000)
    }
  }, [userIsLoading, user, navigate, expired])

  if (!userIsLoading && !validateSession(user)) {
    return (
      <>
        <PageWrapper>
          <SignInForm />
        </PageWrapper>
        {showExpiredMessage && (
          <BottomMessage type="error">Session expired</BottomMessage>
        )}
      </>
    )
  }
}
