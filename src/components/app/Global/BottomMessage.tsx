import { cn } from '@/lib/utils'

type BottomMessageProps = {
  children: React.ReactNode
  type: 'error' | 'success' | 'warning'
}

/**
 * Renders a bottom message component.
 *
 * @param {BottomMessageProps} props - The props of the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @param {'error' | 'success' | 'warning'} props.type - The type of the message.
 *
 * @returns The rendered bottom message component.
 */
export function BottomMessage({ children, type }: BottomMessageProps) {
  const styles = cn({
    'absolute bottom-4 right-4 text-xs px-2 py-1 rounded': true,
    'bg-red-300 text-red-600': type === 'error',
    'bg-green-300 text-green-600': type === 'success',
    'bg-yellow-300 text-yellow-600': type === 'warning',
  })

  return <span className={styles}>{children}</span>
}
