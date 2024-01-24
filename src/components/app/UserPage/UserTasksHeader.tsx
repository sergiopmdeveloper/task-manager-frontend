import { Plus } from 'lucide-react'

/**
 * Renders the header component for user tasks.
 *
 * @returns The rendered header component.
 */
export function UserTasksHeader() {
  return (
    <div className="container flex justify-between mb-8">
      <h1 className="text-xl font-semibold">Tasks</h1>
      <div className="bg-secondary w-10 h-10 flex items-center justify-center cursor-pointer hover:brightness-95">
        <Plus />
      </div>
    </div>
  )
}
