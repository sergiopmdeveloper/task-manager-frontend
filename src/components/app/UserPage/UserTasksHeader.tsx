import { AddTaskModal } from './AddTaskModal'

/**
 * Renders the header component for user tasks.
 *
 * @returns The rendered header component.
 */
export function UserTasksHeader() {
  return (
    <div className="container flex justify-between mb-8">
      <h1 className="text-xl font-semibold">Tasks</h1>
      <AddTaskModal />
    </div>
  )
}
