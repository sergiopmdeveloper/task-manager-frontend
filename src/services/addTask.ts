import { type Task } from '@/hooks/useTasks'
import { useAddTask } from '@/stores/useAddTask'
import { signOut } from '@/utils/signOut'
import { type NavigateFunction } from 'react-router-dom'

class TaskAlreadyExists extends Error {
  constructor() {
    super('Task already exists')
    this.name = 'TaskAlreadyExists'
  }
}

/**
 * Adds a task to the server.
 *
 * @param {Task} task - The task to be added.
 * @param {string} email - The email of the user.
 * @param {string} token - The authentication token.
 * @param {NavigateFunction} navigate - The navigation function.
 */
export function addTask(
  task: Task,
  email: string,
  token: string,
  navigate: NavigateFunction
) {
  const { setSending, setStatusCode } = useAddTask.getState()

  setSending(true)
  setStatusCode(null)

  fetch(`${import.meta.env.VITE_API_URL}/tasks/add-task`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      task,
    }),
  })
    .then(response => {
      const statusCode = response.status
      setStatusCode(statusCode)
      if (statusCode === 401) {
        signOut(navigate)
      } else if (statusCode === 409) {
        throw new Error('Task already exists')
      }
    })
    .catch(error => {
      if (error instanceof TaskAlreadyExists) {
        console.error(error.message)
      } else {
        setStatusCode(500)
        console.error('Unexpected error occurred')
      }
    })
    .finally(() => {
      setSending(false)
    })
}
