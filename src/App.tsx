import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from '@/components/layout/AppShell'
import { CartBadge } from '@/components/Cart/CartBadge'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { HomePage } from '@/pages/HomePage'
import { ProductPage } from '@/pages/ProductPage'

// `/api` is the mock backend, json-server inside the Vite dev server (vite.config.ts)
axios.defaults.baseURL = '/api'
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 30_000 } } })

// Providers and routes. App.tsx may import anything, nothing imports it.
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
