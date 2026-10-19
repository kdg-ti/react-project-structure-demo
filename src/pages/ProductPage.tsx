import { useParams } from 'react-router'
import { BackButton } from '@/components/ui/BackButton'
import { AddToCartButton } from '@/components/Cart/AddToCartButton'
import { ProductDetail } from '@/components/ProductDetail'

// The page puts the product and the cart's button together.
export const ProductPage = () => {
  const { id } = useParams()
  return (
    <>
      <BackButton />
      <ProductDetail
        id={Number(id)}
        renderActions={(product) => (
          <AddToCartButton productId={product.id} name={product.name} price={product.price} />
        )}
      />
    </>
  )
}
