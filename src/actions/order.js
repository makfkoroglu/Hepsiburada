import { OrderAction } from "./actionTypes"

export function addToCart(product) {
  return { type: OrderAction.ADD_TO_CART, payload: product }
}
export function deleteFromCart(productId) {
  return { type: OrderAction.DELETE_FROM_CART, payload: productId }
}
