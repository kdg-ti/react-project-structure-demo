import { Spinner } from '@/components/ui/Spinner'
import { formatPrice } from '@/utils/formatPrice'
import { useProduct } from '@/hooks/useProduct'

type Props = {
  id: number
}

export const ProductDetail = ({ id }: Props) => {
  const { data: product, isPending, isError } = useProduct(id)

  if (isPending) return <Spinner />
  if (isError) return <p>Product not found.</p>

  return (
    <article>
      <h1>{product.name}</h1>
      <p style={{ fontSize: '1.25rem' }}>{formatPrice(product.price)}</p>
      <p>{product.description}</p>
    </article>
  )
}
