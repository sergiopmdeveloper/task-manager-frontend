import * as zod from 'zod'

export const SignInSchema = zod.object({
  email: zod.string().min(1, 'Required'),
  password: zod.string().min(1, 'Required'),
})

export type SignInSchemaType = zod.infer<typeof SignInSchema>
