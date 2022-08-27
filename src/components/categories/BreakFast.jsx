import React from 'react'
import data from "../../helpers/data";

const BreakFast = () => {
  return (
    <div className="container">
       
      {data.map((product) => {
        //destructuring
        const { id, product_name, prev_price,price, img, weight } = product;
        return (
          <div className="card" key={id}>            
            <img src={img}  alt={product_name}/>
            <h1>{product_name}</h1>
            <h4>{weight}</h4>
            <h3 className="prev-price"> {prev_price}</h3>
            <h2> {price}</h2>
            <div>
            <button className='card--small'>+</button>
            </div>                       
          </div>
        );
      })}
    </div>
  )
}

export default BreakFast