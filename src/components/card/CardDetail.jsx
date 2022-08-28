import { useLocation, useNavigate } from "react-router-dom";

import "./cardDetail.scss";

const CardDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.veri);

  const { product_name, prev_price, price, img, weight, description } =
    location.state.veri;

  return (
    <div class="product">      
      <img src={img} class="card-img-top" alt={product_name} />
      <div class="card-body">
        <h1>{product_name}</h1>
        <p class="card-text">{description}</p>
        <p class="list-group-item">{weight}</p>
        <p class="list-group-item prev-price">{prev_price}</p>
        <p class="list-group-item">{price}</p>      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
          onClick={() => navigate(-1)}
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="blueviolet"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
          onClick={() => navigate("/checkout")}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </div>
    </div>
  );
};

export default CardDetail;
