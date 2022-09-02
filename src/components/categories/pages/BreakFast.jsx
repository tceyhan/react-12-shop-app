import GridMenu from "../gridmenu/GridMenu";
import SelectMenu from "../selectMenu/SelectMenu";
import CardContainers from "../CardContainers/CardContainers";
import Header from "../categoryHeader/Header";
import Seo from "../seo/Seo";
import Pagination from "../../pagination/Pagination";

const BreakFast = () => {
  return (
    <div className="category">
      <header>
        <Header />
      </header>
      <main>
        <div className="selectmenu">
          <SelectMenu />
          <GridMenu />
        </div>
        <CardContainers />      
      </main>
      <div className="pagination">
       <Pagination/> 
      </div>
      
      <footer>
        <Seo />
      </footer>
    </div>
  );
};

export default BreakFast;
