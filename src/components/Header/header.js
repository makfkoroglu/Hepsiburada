import vector from "../../assets/Vector.png"
import searchIcon from "./../../assets/search.svg"
import "./header.css"

function header(props) {
  return (
    <div>
     
      <div className="header">
        <div className="header-logo">
          <img src={vector} alt="hepsiburada" />
        </div>
        <div className="search-div">
          <img src={searchIcon} alt="hepsiburada" />
          <input
            className="search-div-input"
            icon={searchIcon}
            type="text"
            name="name"
            placeholder="25 milyon’dan fazla ürün içerisinde ara"
          />
        </div>
        <div className="div-basket">
       Sepetim({props.cartItems.length})
       <div className="basket-detail">
       {props.cartItems.map((e, key) => {
        return  <div key={key} className="basket-content">
        <div className="basket-image"><img className="basket-image" src={e.imageUrl} alt="a"/></div>
        <div className="basket-content-text">{e.name}</div>
        <div><button  onClick={() => props.onItemDeleteFromCart(e)} className="basket-content-button">Kaldır</button></div>
      </div>;
    })}
       
       </div>
        </div>
        
      </div>
      <div>
        <div className="div-filter">
          <div className="div-filter-left">
            <div>iPhone IOS cep telefonu</div>
            <div className="div-filter-left-search-result">Aranan Kelime:</div>
          </div>
          <div className="div-filter-middle"></div>
          <div className="div-filter-right">
            <select
              placeholder={"Sıralama"}
              style={{
                height: "45px",
                width: "118px",
                color: "#b0b0b0",
                border: "0",
              }}
              name="cars"
              id="cars"
            >
              <option value="A" disabled selected hidden>
                Sıralama
              </option>
              <option value="0">En Düşük Fiyat</option>
              <option value="1">En Yüksek Fiyat</option>
              <option value="2">En Yeniler (A{">"}Z)</option>
              <option value="3">En Yeniler (Z{">"}A)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
  )
  
  
}

export default header
