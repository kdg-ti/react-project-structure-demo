const euro = new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' })

/** utils/: a pure function. Same input, same output, no React in it. */
export const formatPrice = (amount: number) => euro.format(amount)
