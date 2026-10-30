import { useParams } from 'react-router'
import { BackButton } from '@/components/ui/BackButton'
import { AddToCartButton } from '@/features/cart/components/AddToCartButton'
import { ProductDetail } from '@/features/products/components/ProductDetail'
import { useProduct } from '@/features/products/hooks/useProduct'

// Two features on one screen: the page imports both and puts the cart's button under the product.
// Neither feature knows the other exists. useProduct shares its cache with ProductDetail, so the
// product is fetched once.
export const ProductPage = () => {
  const id = Number(useParams().id)
  const { data: product } = useProduct(id)
  return (
    <>
      <BackButton />
      <ProductDetail id={id} />
      {product && (
        <AddToCartButton productId={product.id} name={product.name} price={product.price} />
      )}
    </>
  )
}
