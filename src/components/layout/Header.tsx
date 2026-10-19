import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Props = { actions?: ReactNode }

export const Header = ({ actions }: Props) => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.75rem 1rem',
      background: '#fff',
      borderBottom: '1px solid #ddd',
    }}
  >
    <Link to="/" style={{ fontWeight: 700, textDecoration: 'none' }}>
      Shop
    </Link>
    <Link to="/checkout">Checkout</Link>
    <span style={{ marginLeft: 'auto' }}>{actions}</span>
  </header>
)
