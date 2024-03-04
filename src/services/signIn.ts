import { useSignIn } from '@/stores/useSignIn'
import { type SignInSchemaType } from '@/validation/signIn'
import { type NavigateFunction } from 'react-router-dom'

// Custom exceptions

class WrongCredentials extends Error {
  constructor() {
    super('Wrong credentials')
    this.name = 'Wrong credentials'
  }
}

/**
 * Sign in a user.
 * @param {SignInSchemaType} data - The data for the sign-in process.
 * @param {NavigateFunction} navigate - The function to navigate to a new page.
 */
export function signIn(data: SignInSchemaType, navigate: NavigateFunction) {
  const { setSending, setStatusCode } = useSignIn.getState()

  setSending(true)
  setStatusCode(null)

  const formData = new URLSearchParams()

  formData.append('username', data.email)
  formData.append('password', data.password)

  fetch(`${import.meta.env.VITE_API_URL}/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData,
  })
    .then(response => {
      const statusCode = response.status
      setStatusCode(statusCode)
      if (statusCode === 401) {
        throw new WrongCredentials()
      } else {
        response.json().then(data => {
          const { name, email, access_token } = data
          localStorage.setItem('name', name)
          localStorage.setItem('email', email)
          localStorage.setItem('access_token', access_token)
          navigate(`/user/${name.toLowerCase()}`)
        })
      }
    })
    .catch(error => {
      if (error instanceof WrongCredentials) {
        console.error('Wrong credentials')
      } else {
        setStatusCode(500)
        console.error('Unexpected error occurred')
      }
    })
    .finally(() => {
      setSending(false)
    })
}
