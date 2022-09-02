import { Outlet } from "react-router-dom";
import "./categories.scss";
import CategoryButtons from "./categoryButtons/CategoryButtons";

const Categories = () => {
  return (
    <div className="home">
      <CategoryButtons />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
