import { signOut } from '@/utils/signOut'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Task = {
  title: string
  description: string
  status: string
  priority: string
  deadline: string
}

/**
 * Custom hook to fetch tasks for a given email and access token.
 *
 * @param {string} email - The email of the user.
 * @param {string} access_token - The access token for authentication.
 *
 * @returns {Task[]} An array of tasks.
 */
export function useTasks(email: string, access_token: string): Task[] {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/tasks/get-tasks?email=` +
        encodeURIComponent(email),
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + access_token,
        },
      }
    )
      .then(response => {
        if (response.status === 401) {
          signOut(navigate)
        } else {
          return response.json()
        }
      })
      .then(({ tasks }) => {
        if (tasks) {
          setTasks(tasks)
        }
      })
  }, [email, access_token, navigate])

  return tasks
}
