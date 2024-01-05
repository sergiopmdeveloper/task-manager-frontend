import { useAuth } from '@/hooks/useAuth'
import { useValidateUserUrl } from '@/hooks/useValidateUserUrl'

/**
 * Renders the UserPage component.
 *
 * @returns The rendered UserPage component.
 */
export function UserPage() {
  const user = { ...useAuth() }
  useValidateUserUrl()

  return <h1>{user.name}</h1>
}
