import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from '@/components/layout/AppShell'
import { CartBadge } from '@/features/cart/components/CartBadge'
import { queryClient } from '@/lib/queryClient'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { HomePage } from '@/pages/HomePage'
import { ProductPage } from '@/pages/ProductPage'

// The app layer: providers and routes. It may import anything, nothing imports it.
// AppShell is shared, so it cannot know about the cart; it gets the badge handed in.
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppShell actions={<CartBadge />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  </QueryClientProvider>
)
