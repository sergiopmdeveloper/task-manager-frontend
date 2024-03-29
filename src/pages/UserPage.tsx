import { UserHeader } from '@/components/app/UserPage/UserHeader'
import { UserTasks } from '@/components/app/UserPage/UserTasks'
import { useAuth } from '@/hooks/useAuth'
import { useValidateUserUrl } from '@/hooks/useValidateUserUrl'
import { verifyToken } from '@/services/verifyToken'
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
      <>
        <UserHeader name={user.name} />
        <UserTasks email={user.email} access_token={user.access_token} />
      </>
    )
  }
}
