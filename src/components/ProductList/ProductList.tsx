import { Spinner } from '@/components/ui/Spinner'
import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './ProductCard'

// The list fetches its own data. The page that shows it does not have to.
export const ProductList = () => {
  const { data: products, isPending, isError } = useProducts()

  if (isPending) return <Spinner />
  if (isError) return <p>Could not load the products. Is the mock backend running?</p>

  return (
    <ul style={{ padding: 0, display: 'grid', gap: '0.5rem' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  )
}
