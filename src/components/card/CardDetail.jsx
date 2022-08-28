import { useParams } from "react-router-dom"


const CardDetail = ({detail}) => {
  const params = useParams()
 

  return (
  <div className="container">
    <img src={params.img} alt={params.product_name} />
    <h1>{params.product_name}</h1>
    <h4>{params.weight}</h4>
    <h3 className="prev-price"> {params.prev_price}</h3>
    <h2> {params.price}</h2>
    <button className="card--small">SATIN AL</button>    
  </div>
  )
}

export default CardDetail