import { Field } from '@/components/app/Auth/Field'
import { FieldError } from '@/components/app/Auth/FieldError'
import { FormContainer } from '@/components/app/Auth/FormContainer'
import { FormError } from '@/components/app/Auth/FormError'
import { FormWrapper } from '@/components/app/Auth/FormWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUp } from '@/services/signUp'
import { useSignUp } from '@/stores/useSignUp'
import { SignUpSchema, type SignUpSchemaType } from '@/validation/signUp'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the sign up form.
 *
 * @returns The rendered sign up form.
 */
export function SignUpForm() {
  const { sending, statusCode } = useSignUp()
  const navigate = useNavigate()

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
    signUp(data, navigate)
  }

  return (
    <FormContainer formTitle="Sign Up">
      {statusCode === 409 && <FormError>User already exists</FormError>}
      {statusCode === 500 && <FormError>Unexpected error</FormError>}
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
        <Button disabled={sending} type="submit">
          {sending ? 'Sending' : 'Send'}
          {sending && <LoaderIcon className="animate-spin ml-1.5" size={20} />}
        </Button>
      </FormWrapper>
    </FormContainer>
  )
}
