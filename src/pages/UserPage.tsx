import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useValidateUserUrl } from '@/hooks/useValidateUserUrl'
import { signOut } from '@/utils/signOut'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    if (!userIsLoading && Object.keys(user).length === 0) {
      navigate('/sign-up')
    }
  }, [userIsLoading, user, navigate])

  if (!userIsLoading && Object.keys(user).length > 0) {
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
