import * as zod from 'zod'

// Schemas

export const SignUpSchema = zod.object({
  name: zod.string().min(1, 'Required'),
  email: zod.string().min(1, 'Required').email('Invalid email'),
  password: zod.string().min(4, 'Too short'),
})

// Types

export type SignUpSchemaType = zod.infer<typeof SignUpSchema>
