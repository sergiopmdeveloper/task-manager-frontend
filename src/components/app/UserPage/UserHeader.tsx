import { Button } from '@/components/ui/button'
import { signOut } from '@/utils/signOut'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the header component for the user page.
 *
 * @param {string | null} name - The name of the user.
 * @returns The rendered header component.
 */
export function UserHeader({ name }: { name: string | null }) {
  const navigate = useNavigate()

  return (
    <div className="container h-20 items-center flex justify-between">
      <h1 className="text-xl font-semibold">Welcome {name}</h1>
      <Button variant="destructive" onClick={() => signOut(navigate)}>
        Logout
      </Button>
    </div>
  )
}
