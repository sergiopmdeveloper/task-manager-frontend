import { create } from 'zustand'

// Types

type SignUpState = {
  sending: boolean
  statusCode: number | null
  setSending: (sending: boolean) => void
  setStatusCode: (statusCode: number | null) => void
  reset: () => void
}

// Stores

export const useSignUp = create<SignUpState>()(set => ({
  sending: false,
  statusCode: null,
  setSending: (sending: boolean) => set({ sending }),
  setStatusCode: (statusCode: number | null) => set({ statusCode }),
  reset: () => set({ sending: false, statusCode: null }),
}))
