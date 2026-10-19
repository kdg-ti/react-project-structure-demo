import type { ReactNode } from 'react'
import { Header } from './Header'

type Props = {
  /** Something the app wants in the header's corner, such as a cart badge. */
  actions?: ReactNode
  children: ReactNode
}

/** The page frame: a header and the main column. Shared: it knows nothing about products or carts. */
export const AppShell = ({ actions, children }: Props) => (
  <>
    <Header actions={actions} />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>{children}</main>
  </>
)
