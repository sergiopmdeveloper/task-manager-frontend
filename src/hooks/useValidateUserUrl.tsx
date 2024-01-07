import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

/**
 * Custom hook to validate the user URL.
 */
export function useValidateUserUrl() {
  const navigate = useNavigate()
  const { name } = useParams<{ name: string }>()

  useEffect(() => {
    if (name) {
      const validUserName = localStorage.getItem('name')?.toLowerCase()

      if (validUserName !== name) {
        navigate(`/user/${validUserName}`)
      }
    }
  }, [name, navigate])
}
