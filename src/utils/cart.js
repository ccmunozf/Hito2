export function updateQuantity(cart, id, change) {
  return cart
    .map((pizza) => pizza.id === id ? { ...pizza, count: pizza.count + change } : pizza)
    .filter((pizza) => pizza.count > 0)
}

export function calculateTotal(cart) {
  return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)
}
