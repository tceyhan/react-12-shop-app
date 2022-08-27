import "./Card.scss";

const Card = ({ veri }) => {
  console.log(veri);
  //  {veri}= bu yazım verinin eşitinde ne varsa o demek yani App.js deki eşiti {data}. {data} nın {data}= bu yazım datanın eşiti demek yani object=dizinin elemanları
  return (
    <div className="container">
       
      {veri.map((product) => {
        //destructuring
        const { id, product_name, prev_price,price, img, weight } = product;
        return (
          <div className="card" key={id}>
            {/* react üstte unique bir veri istiyor, data nın içinde gezip verileri ayrıştırırken emin olabilmek için */}
            <img src={img}  alt={product_name}/>
            <h1>{product_name}</h1>
            <h4>{weight}</h4>
            <h3 className="prev-price"> {prev_price}</h3>
            <h2> {price}</h2>
            

            <button className="card--small">+</button>
            <button className="card--large">-</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
