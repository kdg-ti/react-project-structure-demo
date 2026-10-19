// A line in the cart is its own, smaller copy of a product, not a reference to one: the price is
// the one at the moment of adding, so a price change in the catalogue does not silently change
// your cart.
export type CartLine = {
  productId: number
  name: string
  price: number
  quantity: number
}
