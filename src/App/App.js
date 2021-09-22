import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header/header"
import ProductList from "../components/ProductList/productList"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"
import { getProducts, getMoreProducts } from "../actions/product"
import { addToCart,deleteFromCart } from "../actions/order"

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const totalPage = useSelector((state) => state.product.totalPage)
  const currentPage = useSelector((state) => state.product.currentPage)
  const cartItems = useSelector((state) => state.order.cart)


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  const onPageChange = useCallback(
    (selected) => {
      dispatch(getMoreProducts(selected))
    },
    [dispatch]
  )
  const onItemAddToCart = useCallback(
    (item) => {
      item.status=true
      dispatch(addToCart(item))
    },
    [dispatch]
  )
  const onItemDeleteFromCart = useCallback(
    (item) => {
      item.status=false
      
      dispatch(deleteFromCart(item.id))
    },
    [dispatch]
  )
  return (
    <div>
      <header>
        <Header cartItems={cartItems} onItemDeleteFromCart={onItemDeleteFromCart}></Header>
        <ProductList
          products={products}
          totalPage={totalPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onItemAddToCart={onItemAddToCart}
        ></ProductList>
      </header>
    </div>
  )
}

export default App
