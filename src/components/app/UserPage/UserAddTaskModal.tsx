import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Plus } from 'lucide-react'

/**
 * Add task modal component of the user page.
 * @returns The component.
 */
export function UserAddTaskModal() {
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
