import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/products'

// Server state lives in the feature that uses it: TanStack Query caches it for the whole app.
export const useProducts = () =>
  useQuery({ queryKey: ['products'], queryFn: getProducts })
