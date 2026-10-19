import { http } from '@/lib/axios'
import type { Product } from '../types/product'

// api/: the calls to the backend for this feature, and nothing else.
export const getProducts = async () => {
  const { data } = await http.get<Product[]>('/products')
  return data
}

export const getProduct = async (id: number) => {
  const { data } = await http.get<Product>(`/products/${id}`)
  return data
}
