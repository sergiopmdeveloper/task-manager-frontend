import { AuthField } from '@/components/app/AuthPage/AuthField'
import { AuthFieldError } from '@/components/app/AuthPage/AuthFieldError'
import { AuthFormContainer } from '@/components/app/AuthPage/AuthFormContainer'
import { AuthFormError } from '@/components/app/AuthPage/AuthFormError'
import { AuthFormSuggestion } from '@/components/app/AuthPage/AuthFormSuggestion'
import { AuthFormWrapper } from '@/components/app/AuthPage/AuthFormWrapper'
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
 * Sign-up form component of the sign-up page.
 * @returns The component.
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
    <AuthFormContainer formTitle="Sign Up">
      {statusCode === 409 && <AuthFormError>User already exists</AuthFormError>}
      {statusCode === 500 && <AuthFormError>Unexpected error</AuthFormError>}
      <AuthFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <AuthField>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name..."
            autoComplete="username"
            {...register('name')}
          />
          {errors.name && (
            <AuthFieldError>{errors.name.message}</AuthFieldError>
          )}
        </AuthField>
        <AuthField>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Your email..."
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <AuthFieldError>{errors.email.message}</AuthFieldError>
          )}
        </AuthField>
        <AuthField>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Your password..."
            autoComplete="current-password"
            {...register('password')}
          />
          {errors.password && (
            <AuthFieldError>{errors.password.message}</AuthFieldError>
          )}
        </AuthField>
        <AuthFormSuggestion page="sign-up" />
        <Button disabled={sending} type="submit">
          {sending ? 'Sending' : 'Send'}
          {sending && <LoaderIcon className="animate-spin ml-1.5" size={20} />}
        </Button>
      </AuthFormWrapper>
    </AuthFormContainer>
  )
}
