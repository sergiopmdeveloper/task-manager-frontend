import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Custom hook to validate the user URL.
 */
export function useValidateUserUrl() {
  const navigate = useNavigate()

  useEffect(() => {
    const pathArray = window.location.pathname.split('/')
    const urlUserName = pathArray.length > 2 ? pathArray[2] : null

    if (urlUserName) {
      const validUserName = localStorage.getItem('name')?.toLowerCase()

      if (validUserName !== urlUserName) {
        navigate(`/user/${validUserName}`)
      }
    }
  }, [navigate])
}
