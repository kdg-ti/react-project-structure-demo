import { Link } from 'react-router'
import { useCartStore } from '@/store/cartStore'

// A selector: this component re-renders only when the count changes, not on every store change.
export const CartBadge = () => {
  const count = useCartStore((s) => s.lines.reduce((n, l) => n + l.quantity, 0))
  return <Link to="/checkout">🛒 {count}</Link>
}
