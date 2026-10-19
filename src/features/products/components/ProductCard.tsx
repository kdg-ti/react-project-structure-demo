import { Link } from 'react-router'
import { formatPrice } from '@/utils/formatPrice'
import type { Product } from '../types/product'

type Props = { product: Product }

export const ProductCard = ({ product }: Props) => (
  <li
    style={{
      listStyle: 'none',
      padding: '0.75rem 1rem',
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Link to={`/products/${product.id}`}>{product.name}</Link>
    <span>{formatPrice(product.price)}</span>
  </li>
)
