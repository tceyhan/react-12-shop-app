import GridMenu from "../gridmenu/GridMenu";
import SelectMenu from "../selectmenu/SelectMenu";
import CardContainers from "../CardContainers/CardContainers";
import Header from "../categoryHeader/Header";
import Seo from "../seo/Seo";

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
      <footer>
        <Seo />
      </footer>
    </div>
  );
};

export default BreakFast;
