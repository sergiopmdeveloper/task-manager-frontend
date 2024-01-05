import { create } from 'zustand'

interface SignUpState {
  sending: boolean
  statusCode: number | null
  setSending: (sending: boolean) => void
  setStatusCode: (statusCode: number | null) => void
}

export const useSignUp = create<SignUpState>()(set => ({
  sending: false,
  statusCode: null,
  setSending: (sending: boolean) => set({ sending }),
  setStatusCode: (statusCode: number | null) => set({ statusCode }),
}))
