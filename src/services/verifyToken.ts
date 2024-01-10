import { signOut } from '@/utils/signOut'
import { type NavigateFunction } from 'react-router-dom'

/**
 * Verifies the given token by making a POST request to the API endpoint.
 *
 * @param {string} token - The token to be verified.
 * @param {NavigateFunction} navigate - The function used for navigation.
 */
export function verifyToken(token: string | null, navigate: NavigateFunction) {
  fetch(`${import.meta.env.VITE_API_URL}/auth/verify-token?token=` + token, {
    method: 'POST',
    headers: {
      accept: 'application/json',
    },
  }).then(response => {
    if (response.status === 401) {
      signOut(navigate, { expired: true })
    }
  })
}
