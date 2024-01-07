import { useSignUp } from '@/stores/useSignUp'
import { NavigateFunction } from 'react-router-dom'

/**
 * Signs out the user by clearing local storage, navigating
 * to the sign-up page, and resetting the sign-up state.
 *
 * @param {NavigateFunction} navigate - The function used for navigation.
 */
export function signOut(navigate: NavigateFunction) {
  const { reset } = useSignUp.getState()

  localStorage.clear()
  navigate('/sign-up')
  reset()
}
