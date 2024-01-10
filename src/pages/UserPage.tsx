import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useValidateUserUrl } from '@/hooks/useValidateUserUrl'
import { verifyToken } from '@/services/verifyToken'
import { signOut } from '@/utils/signOut'
import { validateSession } from '@/utils/validateSession'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the UserPage component.
 *
 * @returns The rendered UserPage component.
 */
export function UserPage() {
  const navigate = useNavigate()

  const user = useAuth()
  const [userIsLoading, setUserIsLoading] = useState(true)

  useValidateUserUrl()

  useEffect(() => {
    if (user) {
      setUserIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (!userIsLoading && !validateSession(user)) {
      navigate('/sign-in')
    } else if (!userIsLoading) {
      verifyToken(user?.access_token, navigate)
    }
  }, [userIsLoading, user, navigate])

  if (!userIsLoading && validateSession(user)) {
    return (
      <div className="container h-20 items-center flex justify-between">
        <h1 className="text-xl font-semibold">Welcome {user.name}</h1>
        <Button variant="destructive" onClick={() => signOut(navigate)}>
          Logout
        </Button>
      </div>
    )
  }
}
