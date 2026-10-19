import { useParams } from 'react-router'
import { BackButton } from '@/components/ui/BackButton'
import { AddToCartButton } from '@/features/cart/components/AddToCartButton'
import { ProductDetail } from '@/features/products/components/ProductDetail'

// Two features on one screen: the page imports both and hands the cart's button to the product.
// Neither feature knows the other exists.
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
