import data from "../../../helpers/data";
import Card from "../../card/Card";
import "./card-containers.scss";

const CardContainers = () => {
  return (
    <main className="category-card-container">

      {
      
      data.map((product) => (
        <Card veri={product} />
      ))
      
      }
      
    </main>
  );
};

export default CardContainers;
