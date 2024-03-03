import { create } from 'zustand'

type AddTaskState = {
  sending: boolean
  statusCode: number | null
  setSending: (sending: boolean) => void
  setStatusCode: (statusCode: number | null) => void
  reset: () => void
}

export const useAddTask = create<AddTaskState>()(set => ({
  sending: false,
  statusCode: null,
  setSending: (sending: boolean) => set({ sending }),
  setStatusCode: (statusCode: number | null) => set({ statusCode }),
  reset: () => set({ sending: false, statusCode: null }),
}))
