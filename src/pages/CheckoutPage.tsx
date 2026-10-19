import { BackButton } from '@/components/ui/BackButton'
import { Cart } from '@/components/Cart/Cart'
import { ProductList } from '@/components/ProductList/ProductList'

export const CheckoutPage = () => (
  <>
    <BackButton />
    <h1>Checkout</h1>
    <Cart />
    <h2 style={{ marginTop: '2rem' }}>Keep shopping</h2>
    <ProductList />
  </>
)
