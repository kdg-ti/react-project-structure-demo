import { ProductList } from '@/features/products/components/ProductList'

// A page composes. ProductList fetches its own data; the page just puts it on the screen.
export const HomePage = () => (
  <>
    <h1>Products</h1>
    <ProductList />
  </>
)
