import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CalendarDays, Plus } from 'lucide-react'
import { useState } from 'react'
import { UserTaskFormWrapper } from './UserTaskFormWrapper'

/**
 * Add task modal component of the user page.
 * @returns The component.
 */
export function UserAddTaskModal() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger>
        <div className="bg-secondary w-10 h-10 flex items-center justify-center cursor-pointer hover:brightness-95">
          <Plus />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <UserTaskFormWrapper>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            autoComplete="off"
          />
          <Input
            id="description"
            type="text"
            placeholder="Description"
            autoComplete="off"
          />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger>
              <div className="w-full flex items-center justify-between px-3 py-2 rounded border">
                <span className="text-sm">Deadline</span>
                <CalendarDays className="w-4 h-4" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
          <Button type="submit">Create task</Button>
        </UserTaskFormWrapper>
      </PopoverContent>
    </Popover>
  )
}
