import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type AuthData = {
  name: string | null
  email: string | null
  access_token: string | null
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
    name: null,
    email: null,
    access_token: null,
  })

  const navigate = useNavigate()

  useEffect(() => {
    const authData: AuthData = { name: null, email: null, access_token: null }

    for (const key of AUTH_KEYS) {
      authData[key as keyof AuthData] = localStorage.getItem(key)
    }

    setAuth(authData)
  }, [navigate])

  return auth
}
