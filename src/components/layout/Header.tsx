import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Props = { children?: ReactNode }

export const Header = ({ children }: Props) => (
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
    <span style={{ marginLeft: 'auto' }}>{children}</span>
  </header>
)
