import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/utils/formatPrice'
import type { CartLine } from '../types/cartLine'

type Props = { line: CartLine; onRemove: () => void }

export const CartItem = ({ line, onRemove }: Props) => (
  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.5rem 0' }}>
    <span style={{ flex: 1 }}>
      {line.quantity} × {line.name}
    </span>
    <span>{formatPrice(line.price * line.quantity)}</span>
    <Button variant="ghost" onClick={onRemove}>
      Remove
    </Button>
  </li>
)
