import "./card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ veri }) => {
  console.log(veri);
  const navigate = useNavigate();
  const { id, product_name, prev_price, price, img, weight, description } =
    veri;

  const handleAddCart = () => {
    
  }
  return (
    <div
      class="card"
      onClick={() => navigate(`details/${id}`, { state: {veri} })}
    >
      <img src={img} class="card-img-top" alt={product_name} />
      <div class="card-body">
        <h5 class="card-title">{product_name}</h5>
        <p class="card-text">{description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{weight}</li>
        <li class="list-group-item prev-price">{prev_price}</li>
        <li class="list-group-item">{price}</li>
      </ul>
      <div class="card-body" onClick={() => handleAddCart}>        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="blueviolet"
            className="bi bi-plus-circle-fill card-link"
            viewBox="0 0 16 16"
            
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>        
      </div>
    </div>
  );
};

export default Card;
