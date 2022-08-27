import Card from "./components/card/Card";
import Category from "./components/category/Category";
import data from "./data";


function App() {
  return (
    <>
      
      <Category/>
      <Card veri={data}/>
    </>
  );
}

export default App;
