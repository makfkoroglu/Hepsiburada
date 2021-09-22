import React from "react"
import ReactPaginate from "react-paginate"
import { ProductItem } from "../ProductItem"
import "./productList.css"

function ProductList(props) {
  const changePage = ({ selected }) => {
    props.onPageChange(selected)
  }

  return (
    <div className="header-div">
      <div className="left-div">
        <div>
          <div className="left-filter-color-div">Renk</div>
          <ul className="filter-list">
            <li>Lacivert(3)</li>
            <li>Sarı(1)</li>
            <li>Siyah(5)</li>
            <li>Beyaz(2)</li>
          </ul>
        </div>
        <div>
          <div className="left-filter-color-div">Sıralama</div>
          <ul className="filter-list">
            <li>En Düşük Fiyat</li>
            <li>En Yüksek Fiyat</li>
            <li>En Yeniler (A{">"}Z)</li>
            <li>En Yeniler (Z{">"}A)</li>
          </ul>
        </div>
        <div>
          <div className="left-filter-color-div">Marka</div>
          <ul className="filter-list">
            <li>Samsung(4)</li>
            <li>Nokia(6)</li>
            <li>Apple(6)</li>
            <li>LG(2)</li>
            <li>Huawei(6)</li>
            <li>Xaomi(9)</li>
            <li>General Mobile(1)</li>
          </ul>
        </div>
      </div>
      <div className="right-div">
        {props.products.map((data) => {
          return (
            <ProductItem
              key={data.id}
              data={data}
              addToCart={props.onItemAddToCart}
            />
          )
        })}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={props.totalPage}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default ProductList
