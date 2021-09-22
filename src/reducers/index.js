import { combineReducers } from "redux"
import productReducer from "./product"
import orderReducer from "./order"

export const rootReducer = combineReducers({
  product: productReducer,
  order: orderReducer,
})
