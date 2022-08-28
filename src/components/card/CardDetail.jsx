import { useParams } from "react-router-dom"


const CardDetail = ({detail}) => {
  const params = useParams()
  const ürün = params.detail

  return (
    <div><div className="card">
    {/* <img src={img} alt={product_name} />
    <h1>{ürün.product_name}</h1>
    <h4>{weight}</h4>
    <h3 className="prev-price"> {prev_price}</h3>
    <h2> {price}</h2>
    <button className="card--small">SATIN AL</button> */}
  </div></div>
  )
}

export default CardDetail