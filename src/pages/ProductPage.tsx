import { useParams } from 'react-router'
import { BackButton } from '@/components/ui/BackButton'
import { AddToCartButton } from '@/components/Cart/AddToCartButton'
import { ProductDetail } from '@/components/ProductDetail'
import { useProduct } from '@/hooks/useProduct'

// The page puts the product and the cart's button together. useProduct shares its cache with
// ProductDetail, so the product is fetched once.
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
