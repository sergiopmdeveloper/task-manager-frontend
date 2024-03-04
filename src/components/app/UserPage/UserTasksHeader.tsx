import { UserAddTaskModal } from './UserAddTaskModal'

/**
 * Tasks header component of the user page.
 * @returns The component.
 */
export function UserTasksHeader() {
  return (
    <div className="container flex justify-between mb-8">
      <h1 className="text-xl font-semibold">Tasks</h1>
      <UserAddTaskModal />
    </div>
  )
}
