import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ veri }) => {

  console.log(veri);
  const navigate = useNavigate();
  const { id, product_name, prev_price, price, img, weight } = veri;
  
  const handleAddCart = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="card"
      onClick={() => navigate(`details/${id}`, { state: { veri } })}
    >
      <div>
        {" "}
        <img src={img} className="card-img" alt={product_name} />
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{weight}</li>
          <li className="list-group-item prev-price">{prev_price}</li>
          <li className="list-group-item price">{price}</li>
        </ul>
      </div>
      <div className="card-aside-group">
        <div className="addButton" onClick={handleAddCart}>
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
    </div>
  );
};

export default Card;
