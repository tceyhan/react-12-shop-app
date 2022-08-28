import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ veri }) => {
  console.log(veri);
  const navigate = useNavigate();
  const { id, product_name, prev_price, price, img, weight } = veri;

  return (   
      <div className="card" onClick={() => navigate(`products/${id}`, {state:"detail"})}>
        <img src={img} alt={product_name} />
        <h1>{product_name}</h1>
        <h4>{weight}</h4>
        <h3 className="prev-price"> {prev_price}</h3>
        <h2> {price}</h2>
        <button className="card--small">SATIN AL</button>
      </div>
    
  );
};

export default Card;
