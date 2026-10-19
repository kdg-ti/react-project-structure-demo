import axios from 'axios'
import type { Product } from '@/types/product'

// api/: every call to the backend, and nothing else.
export const getProducts = async () => {
  const { data } = await axios.get<Product[]>('/products')
  return data
}

export const getProduct = async (id: number) => {
  const { data } = await axios.get<Product>(`/products/${id}`)
  return data
}
