import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/products'

// Server state: TanStack Query fetches and caches it for the whole app.
export const useProducts = () =>
  useQuery({ queryKey: ['products'], queryFn: getProducts })
