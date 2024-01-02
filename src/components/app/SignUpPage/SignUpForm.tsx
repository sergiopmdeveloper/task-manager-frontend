import { Field } from '@/components/app/Auth/Field'
import { FormContainer } from '@/components/app/Auth/FormContainer'
import { FormWrapper } from '@/components/app/Auth/FormWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Renders the sign up form.
 *
 * @returns The rendered sign up form.
 */
export function SignUpForm() {
  return (
    <FormContainer formTitle="Sign Up">
      <FormWrapper>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name..."
            autoComplete="Name"
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Your email..."
            autoComplete="Email"
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Your password..."
            autoComplete="Password"
          />
        </Field>
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </FormContainer>
  )
}
