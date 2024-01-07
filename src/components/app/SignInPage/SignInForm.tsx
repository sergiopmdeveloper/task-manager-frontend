import { Field } from '@/components/app/Auth/Field'
import { FieldError } from '@/components/app/Auth/FieldError'
import { FormContainer } from '@/components/app/Auth/FormContainer'
import { FormError } from '@/components/app/Auth/FormError'
import { FormWrapper } from '@/components/app/Auth/FormWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/services/signIn'
import { useSignIn } from '@/stores/useSignIn'
import { SignInSchema, type SignInSchemaType } from '@/validation/signIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the sign in form.
 *
 * @returns The rendered sign in form.
 */
export function SignInForm() {
  const { sending, statusCode } = useSignIn()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  })

  /**
   * Handles the form submission for the sign in form.
   *
   * @param data - The form data submitted by the user.
   */
  const onSubmit: SubmitHandler<SignInSchemaType> = data => {
    signIn(data, navigate)
  }

  return (
    <FormContainer formTitle="Sign In">
      {statusCode === 401 && <FormError>Wrong credentials</FormError>}
      {statusCode === 500 && <FormError>Unexpected error</FormError>}
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
