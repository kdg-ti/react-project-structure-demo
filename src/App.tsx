import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from '@/components/layout/Header'
import { CartBadge } from '@/features/cart/components/CartBadge'
import { queryClient } from '@/lib/queryClient'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { HomePage } from '@/pages/HomePage'
import { ProductPage } from '@/pages/ProductPage'

// The app layer: providers and routes. It may import anything, nothing imports it.
// Header is shared, so it cannot import the cart; App puts the badge inside it, as children.
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Header>
        <CartBadge />
      </Header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </QueryClientProvider>
)
