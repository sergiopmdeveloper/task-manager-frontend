import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Plus } from 'lucide-react'

/**
 * Renders a modal component for adding a task.
 *
 * @returns The rendered AddTaskModal component.
 */
export function AddTaskModal() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="bg-secondary w-10 h-10 flex items-center justify-center cursor-pointer hover:brightness-95">
          <Plus />
        </div>
      </PopoverTrigger>
      <PopoverContent>TODO: Add task form</PopoverContent>
    </Popover>
  )
}
