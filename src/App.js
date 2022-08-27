import Card from "./components/card/Card";
import Category from "./components/category/Category";
import data from "./data";

function App() {
  return (
    <>
      <h1>shop-app </h1>
      <Category/>
      <Card veri={data}/>
    </>
  );
}

export default App;
