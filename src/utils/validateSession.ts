import { type AuthData } from '@/hooks/useAuth'

/**
 * Validates a session object.
 *
 * @param {AuthData} session - The session object to validate.
 *
 * @returns True if the session is valid, false otherwise.
 */
export function validateSession(session: AuthData): boolean {
  if (!session.name || !session.email || !session.access_token) {
    return false
  }
  return true
}
