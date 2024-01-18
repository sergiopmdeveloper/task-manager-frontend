import type { AuthData } from '@/hooks/useAuth'
import { useTasks } from '@/hooks/useTasks'

/**
 * Renders the user tasks component.
 *
 * @param email - The user's email.
 * @param access_token - The access token for authentication.
 *
 * @returns The rendered user tasks component.
 */
export function UserTasks({ email, access_token }: Omit<AuthData, 'name'>) {
  const tasks = useTasks(email, access_token)

  if (tasks.length > 0) {
    return (
      <>
        {tasks.map((task, key) => (
          <h1 key={key}>{task.title}</h1>
        ))}
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}
