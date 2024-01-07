import { useSignUp } from '@/stores/useSignUp'
import { type SignUpSchemaType } from '@/validation/signUp'
import { type NavigateFunction } from 'react-router-dom'

class EmailAlreadyExistsError extends Error {
  constructor() {
    super('Email already exists')
    this.name = 'EmailAlreadyExistsError'
  }
}

/**
 * Signs up a user with the provided data.
 *
 * @param {SignUpSchemaType} data - The data for the sign-up process.
 * @param {NavigateFunction} navigate - The function to navigate to a new page.
 */
export function signUp(data: SignUpSchemaType, navigate: NavigateFunction) {
  const { setSending, setStatusCode } = useSignUp.getState()

  setSending(true)
  setStatusCode(null)

  fetch(`${import.meta.env.VITE_API_URL}/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => {
      const statusCode = response.status
      setStatusCode(statusCode)
      if (statusCode === 409) {
        throw new EmailAlreadyExistsError()
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
      if (error instanceof EmailAlreadyExistsError) {
        console.error('Email already exists')
      } else {
        setStatusCode(500)
        console.error('Unexpected error occurred')
      }
    })
    .finally(() => {
      setSending(false)
    })
}
