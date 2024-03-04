import * as zod from 'zod'

// Schemas

export const SignInSchema = zod.object({
  email: zod.string().min(1, 'Required'),
  password: zod.string().min(1, 'Required'),
})

// Types

export type SignInSchemaType = zod.infer<typeof SignInSchema>
