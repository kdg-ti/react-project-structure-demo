import { create } from 'zustand'
import type { CartLine } from '@/types/cartLine'

type CartState = {
  lines: CartLine[]
  add: (line: Omit<CartLine, 'quantity'>) => void
  remove: (productId: number) => void
  clear: () => void
}

// store/: the app's client state. Only the cart has any, so this is the only store.
export const useCartStore = create<CartState>()((set) => ({
  lines: [],
  add: (line) =>
    set((state) => {
      const existing = state.lines.find((l) => l.productId === line.productId)
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.productId === line.productId ? { ...l, quantity: l.quantity + 1 } : l,
          ),
        }
      }
      return { lines: [...state.lines, { ...line, quantity: 1 }] }
    }),
  remove: (productId) =>
    set((state) => ({ lines: state.lines.filter((l) => l.productId !== productId) })),
  clear: () => set({ lines: [] }),
}))

export const cartTotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.price * l.quantity, 0)
