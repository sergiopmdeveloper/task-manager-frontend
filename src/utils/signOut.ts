import { useSignIn } from '@/stores/useSignIn'
import { useSignUp } from '@/stores/useSignUp'
import { NavigateFunction } from 'react-router-dom'

/**
 * Sign out the user.
 * @param {NavigateFunction} navigate - The function used for navigation.
 * @param {object} params - Optional parameters to pass to the sign-in redirection.
 */
export function signOut(navigate: NavigateFunction, params?: object) {
  localStorage.clear()
  navigate('/sign-in', { state: params })
  useSignUp.getState().reset()
  useSignIn.getState().reset()
}
