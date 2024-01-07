import { useSignUp } from '@/stores/useSignUp'
import { useSignIn } from '@/stores/useSignIn'
import { NavigateFunction } from 'react-router-dom'

/**
 * Signs out the user by clearing local storage, navigating
 * to the sign-up page, and resetting the sign-up state.
 *
 * @param {NavigateFunction} navigate - The function used for navigation.
 */
export function signOut(navigate: NavigateFunction) {
  localStorage.clear()
  navigate('/sign-in')
  useSignUp.getState().reset()
  useSignIn.getState().reset()
}
