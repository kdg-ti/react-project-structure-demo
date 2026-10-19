import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/utils/formatPrice'
import { cartTotal, useCartStore } from '../store/cartStore'
import { CartItem } from './CartItem'

export const Cart = () => {
  const lines = useCartStore((s) => s.lines)
  const remove = useCartStore((s) => s.remove)
  const clear = useCartStore((s) => s.clear)

  if (lines.length === 0) return <p>Your cart is empty.</p>

  return (
    <section>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {lines.map((line) => (
          <CartItem key={line.productId} line={line} onRemove={() => remove(line.productId)} />
        ))}
      </ul>
      <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
        <span>Total</span>
        <span>{formatPrice(cartTotal(lines))}</span>
      </p>
      <Button variant="ghost" onClick={clear}>
        Empty the cart
      </Button>
    </section>
  )
}
