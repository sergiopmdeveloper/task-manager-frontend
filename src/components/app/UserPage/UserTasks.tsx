import type { AuthData } from '@/hooks/useAuth'
import { useTasks } from '@/hooks/useTasks'
import { UserTask } from '@/components/app/UserPage/UserTask'

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
      <div className="container flex flex-col gap-5">
        {tasks.map((task, key) => (
          <UserTask key={key} {...task} />
        ))}
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}
