import type { ReactNode } from 'react'
import { Spinner } from '@/components/ui/Spinner'
import { formatPrice } from '@/utils/formatPrice'
import { useProduct } from '@/hooks/useProduct'
import type { Product } from '@/types/product'

type Props = {
  id: number
  /**
   * What to show under the product, such as an "Add to cart" button. Here ProductDetail could
   * import that button itself; it takes a function instead so that this branch stays the same code
   * as `main`, where the products feature may not import the cart feature.
   */
  renderActions?: (product: Product) => ReactNode
}

export const ProductDetail = ({ id, renderActions }: Props) => {
  const { data: product, isPending, isError } = useProduct(id)

  if (isPending) return <Spinner />
  if (isError) return <p>Product not found.</p>

  return (
    <article>
      <h1>{product.name}</h1>
      <p style={{ fontSize: '1.25rem' }}>{formatPrice(product.price)}</p>
      <p>{product.description}</p>
      {renderActions?.(product)}
    </article>
  )
}
