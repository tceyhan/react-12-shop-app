
import data from "../../helpers/data";
import Card from '../card/Card';

const BreakFast = () => {
 
  return (
    <div className="container">       
      {data.map((product) => { return <Card veri={product} />})}
    </div>
  )
}

export default BreakFast