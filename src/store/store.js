import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "../reducers/index"

const Logger = (appStore) => (next) => (action) => {
  const result = next(action)
  return result
}

const createStoreWithMiddleware = applyMiddleware(Logger)(createStore)
export const store = createStoreWithMiddleware(rootReducer)
