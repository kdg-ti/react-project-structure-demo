import { Button } from '@/components/ui/Button'
import { useCartStore } from '../store/cartStore'

type Props = { productId: number; name: string; price: number }

// Plain props instead of a Product: the cart feature does not import the products feature.
export const AddToCartButton = ({ productId, name, price }: Props) => {
  const add = useCartStore((s) => s.add)
  return <Button onClick={() => add({ productId, name, price })}>Add to cart</Button>
}
