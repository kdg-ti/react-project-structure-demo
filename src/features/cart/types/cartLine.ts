// The cart knows that products exist: it is a list of them. What it does not do is import the
// products feature. It keeps its own, smaller copy of what it needs, so renaming or deleting
// `Product` never breaks the cart, and the price is the one at the moment of adding: a price
// change in the catalogue does not silently change your cart.
export type CartLine = {
  productId: number
  name: string
  price: number
  quantity: number
}
