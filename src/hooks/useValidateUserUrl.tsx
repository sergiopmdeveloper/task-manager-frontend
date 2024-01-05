import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

/**
 * Custom hook to validate the user URL.
 */
export function useValidateUserUrl() {
  const { user: urlUserName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const validUserName = localStorage.getItem('name')?.toLowerCase()

    if (validUserName !== urlUserName) {
      navigate(`/user/${validUserName}`)
    }
  }, [urlUserName, navigate])
}
