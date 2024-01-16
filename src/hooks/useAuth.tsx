import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type AuthData = {
  name: string
  email: string
  access_token: string
}

const AUTH_KEYS = ['name', 'email', 'access_token']

/**
 * Custom hook for managing authentication state.
 * Retrieves authentication data from local storage and sets it in state.
 *
 * @returns The authentication data as a record of key-value pairs.
 */
export function useAuth() {
  const [auth, setAuth] = useState<AuthData>({
    name: '',
    email: '',
    access_token: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    const authData: AuthData = { name: '', email: '', access_token: '' }

    for (const key of AUTH_KEYS) {
      let item = localStorage.getItem(key)
      item = !item ? '' : item
      authData[key as keyof AuthData] = item
    }

    setAuth(authData)
  }, [navigate])

  return auth
}
