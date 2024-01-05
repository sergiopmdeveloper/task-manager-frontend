import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Custom hook for managing authentication state.
 * Retrieves authentication data from local storage and sets it in state.
 * If no authentication data is found, it navigates to the sign-up page.
 *
 * @returns The authentication data as a record of key-value pairs.
 */
export function useAuth() {
  const [auth, setAuth] = useState<Record<string, string | null>>({})
  const navigate = useNavigate()

  useEffect(() => {
    const authData: Record<string, string | null> = {}

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)

      if (key !== null) {
        authData[key] = localStorage.getItem(key)
      }
    }

    if (Object.keys(authData).length === 0) {
      navigate('/sign-up')
    }

    setAuth(authData)
  }, [navigate])

  return auth
}
