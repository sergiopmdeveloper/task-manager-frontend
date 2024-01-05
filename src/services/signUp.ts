import { useSignUp } from '@/stores/useSignUp'
import { type SignUpSchemaType } from '@/validation/signUp'

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
 */
export function signUp(data: SignUpSchemaType) {
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
        // Implement session logic
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
