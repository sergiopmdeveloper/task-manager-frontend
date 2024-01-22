import { Button } from '@/components/ui/button'
import { type Task } from '@/hooks/useTasks'
import { cn } from '@/lib/utils'

/**
 * Renders a user task component.
 *
 * @param {Task} props - The task object.
 * @returns The rendered user task component.
 */
export function UserTask({ title, description, priority, deadline }: Task) {
  const priorityClass = cn({
    'bg-red-500': priority === 'High',
    'bg-orange-500': priority === 'Medium',
    'bg-blue-500': priority === 'Low',
  })

  const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="relative flex flex-col gap-4 bg-secondary p-5 rounded">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm">{description}</p>
      <div className="absolute top-2 right-2 flex flex-row items-center gap-2">
        <span className={`text-white p-1 rounded-sm text-xs ${priorityClass}`}>
          {priority}
        </span>
        <span className="p-1 rounded-sm bg-slate-300 text-xs">
          {formattedDeadline}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button className="bg-green-500 hover:bg-green-400">Finish</Button>
        <Button className="bg-yellow-500 hover:bg-yellow-400">Edit</Button>
        <Button className="bg-red-500 hover:bg-red-400">Delete</Button>
      </div>
    </div>
  )
}
