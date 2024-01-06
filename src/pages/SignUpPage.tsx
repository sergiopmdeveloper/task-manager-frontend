import { SignUpForm } from '@/components/app/SignUpPage/SignUpForm'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the sign-up page.
 *
 * @returns The sign-up page component.
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
    if (!userIsLoading && Object.keys(user).length > 0) {
      navigate(`/user/${user.name?.toLowerCase()}`)
    }
  }, [userIsLoading, user, navigate])

  if (!userIsLoading && Object.keys(user).length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <SignUpForm />
      </div>
    )
  }
}
