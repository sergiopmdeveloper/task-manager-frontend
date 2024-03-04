import { AuthPageWrapper } from '@/components/app/AuthPage/AuthPageWrapper'
import { SignInForm } from '@/components/app/SignInPage/SignInForm'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { validateSession } from '@/utils/validateSession'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Sign-in page component.
 * @returns The page component.
 */
export function SignInPage() {
  const location = useLocation()
  const expired = location.state?.expired

  const user = useAuth()
  const [userIsLoading, setUserIsLoading] = useState(true)
  const { toast } = useToast()

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
      toast({ title: 'Session Expired', description: 'Sign in again' })
    }
  }, [userIsLoading, user, navigate, expired, toast])

  if (!userIsLoading && !validateSession(user)) {
    return (
      <>
        <AuthPageWrapper>
          <SignInForm />
        </AuthPageWrapper>
        <Toaster />
      </>
    )
  }
}
