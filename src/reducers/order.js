import { OrderAction } from "./../actions/actionTypes"
import update from "immutability-helper"

const initialState = {
  cart: [],
}

export default function orderReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case OrderAction.ADD_TO_CART: {
      const product = action.payload
      newState = update(state, { cart: { $push: [product] } })
      break
    }
    case OrderAction.DELETE_FROM_CART: {
      const productId = action.payload
      const newCart = state.cart.filter((item) => item.id !== productId)
      newState = update(state, { cart: { $set: newCart } })
      break
    }
    default:
      newState = state
  }
  return newState
}
