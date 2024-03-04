import { type Task } from '@/hooks/useTasks'
import { cn } from '@/lib/utils'
import { Check, Pencil, Trash } from 'lucide-react'

/**
 * Task component of the user page.
 * @param {Task} props - The task object.
 * @param {string} props.title - The task title.
 * @param {string} props.description - The task description.
 * @param {string} props.priority - The task priority.
 * @param {string} props.deadline - The task deadline.
 * @returns The component.
 */
export function UserTask({ title, description, priority, deadline }: Task) {
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
        <span
          className={cn('text-white p-1 rounded-sm text-xs ${priorityClass}', {
            'bg-red-500': priority === 'High',
            'bg-orange-500': priority === 'Medium',
            'bg-blue-500': priority === 'Low',
          })}
        >
          {priority}
        </span>
        <span className="p-1 rounded-sm bg-slate-300 text-xs">
          {formattedDeadline}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-green-600 w-8 cursor-pointer hover:brightness-110 rounded h-8 flex items-center justify-center">
          <Check className="h-4 w-4 stroke-green-300" />
        </div>
        <div className="bg-yellow-600 w-8 cursor-pointer hover:brightness-110 rounded h-8 flex items-center justify-center">
          <Pencil className="h-4 w-4 stroke-yellow-300" />
        </div>
        <div className="bg-red-600 w-8 cursor-pointer hover:brightness-110 rounded h-8 flex items-center justify-center">
          <Trash className="h-4 w-4 stroke-red-300" />
        </div>
      </div>
    </div>
  )
}
