import { ProductAction } from "./actionTypes"
import dataList from "../DummyData/dataList"

export function getProducts() {
  return {
    type: ProductAction.GET_PRODUCTS,
    payload: {
      products: dataList.slice(0, 12),
      currentPage: 1,
      totalPage: Math.ceil(dataList.length / 12),
    },
  }
}

export function getMoreProducts(page) {
  return {
    type: ProductAction.GET_MORE_PRODUCTS,
    payload: {
      products: dataList.slice(page * 12, (page + 1) * 12),
      currentPage: page + 1,
    },
  }
}
