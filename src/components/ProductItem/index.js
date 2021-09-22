
export function ProductItem(props) {
  return (
    <div className="product-div">
      <div align="center">
        <img
          className="img-div"
          src={props.data.imageUrl}
          alt={props.data.name}
        />
      </div>
      <div className="name-div">{props.data.name}</div>
      <div className="content-div">
        <div className="mark-div">
          <div>
            Marka:<span>{props.data.modelName}</span>
          </div>
          <div>
            Renk:<span>{props.data.color}</span>
          </div>
        </div>
        <div className="amount-div">{props.data.amount} TL</div>
        <div className="discount-div">{props.data.discount}</div>
       
      </div>
       <div className="add-to-card">
        <button
          className="add-to-card-text"
          disabled={props.data.status}
          onClick={() => props.addToCart(props.data)}
        >
          Sepete Ekle
        </button>
      </div>
      
    </div>
  )
}
