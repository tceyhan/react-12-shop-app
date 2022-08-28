import "./Card.scss";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ veri }) => {
  console.log(veri);
  const navigate = useNavigate();
  const { id, product_name, prev_price, price, img, weight, description } =
    veri;

  return (
    <div
      class="card"
      onClick={() => navigate(`products/${id}`, { state: "detail" })}
    >
      <img src={img} class="card-img-top" alt={product_name} />
      <div class="card-body">
        <h5 class="card-title">{product_name}</h5>
        {/* <p class="card-text">{description}</p> */}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{weight}</li>
        <li class="list-group-item">{prev_price}</li>
        <li class="list-group-item">{price}</li>
      </ul>
      <div class="card-body">
        <Link to="/" class="card-link">
          Favorilere Ekle
        </Link>
        <Link to="/" class="card-link">
          Sepete Ekle
        </Link>
      </div>
    </div>
  );
};

export default Card;
