import { Field } from '@/components/app/Auth/Field'
import { FieldError } from '@/components/app/Auth/FieldError'
import { FormContainer } from '@/components/app/Auth/FormContainer'
import { FormWrapper } from '@/components/app/Auth/FormWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpSchema, type SignUpSchemaType } from '@/validation/signUp'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

/**
 * Renders the sign up form.
 *
 * @returns The rendered sign up form.
 */
export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  })

  /**
   * Handles the form submission for the sign up form.
   *
   * @param data - The form data submitted by the user.
   */
  const onSubmit: SubmitHandler<SignUpSchemaType> = data => {
    console.log(data)
  }

  return (
    <FormContainer formTitle="Sign Up">
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name..."
            autoComplete="username"
            {...register('name')}
          />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Your email..."
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Your password..."
            autoComplete="current-password"
            {...register('password')}
          />
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </FormContainer>
  )
}
