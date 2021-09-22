import { ProductAction } from "./../actions/actionTypes"
import update from "immutability-helper"

const initialState = {
  products: [],
  currentPage: 0,
  totalPage: 0,
}

export default function productReducer(state = initialState, action) {
  let newState
  switch (action.type) {
    case ProductAction.GET_PRODUCTS: {
      const { products, currentPage, totalPage } = action.payload
      newState = update(state, {
        products: { $set: products },
        currentPage: { $set: currentPage },
        totalPage: { $set: totalPage },
      })
      break
    }
    case ProductAction.GET_MORE_PRODUCTS: {
      const { products, currentPage } = action.payload
      newState = update(state, {
        products: { $set: products },
        currentPage: { $set: currentPage },
      })
      break
    }
    default:
      newState = state
  }
  return newState
}
