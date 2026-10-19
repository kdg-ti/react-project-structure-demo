import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../api/products'

export const useProduct = (id: number) =>
  useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id) })
