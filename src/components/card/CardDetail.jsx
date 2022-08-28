import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import BackArrow from "../../assets/BackArrow"
import CheckoutBag from "../../assets/ChackoutBag"
import "./cardDetail.scss"

const CardDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(params.id)
  console.log(location.state.veri)

  const {  product_name, prev_price, price, img, weight, description } = location.state.veri

 

  return (
  <div class="card">
   <div className="detailsNav">
   <BackArrow onClick={() => navigate(-1)}/>
    <h1>{product_name}</h1>
    <CheckoutBag onClick={() => navigate("/checkout")}/>
   </div>
  <img src={img} class="card-img-top" alt={product_name} />
  <div class="card-body">
   
    <p class="card-text">{description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{weight}</li>
    <li class="list-group-item prev-price">{prev_price}</li>
    <li class="list-group-item">{price}</li>
  </ul>
  <div class="card-body">
    <Link to="/" class="card-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="blueviolet"
        class="bi bi-plus-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    </Link>
  </div>
</div>
  )
}

export default CardDetail;