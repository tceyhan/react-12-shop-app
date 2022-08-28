
import { Link, Outlet } from "react-router-dom";
import SelectMenu from "../selectmenu/SelectMenu";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <img src="../../assets/images/catagory_link_picture/kahvaltılık.jpg" alt="" />
        <Link to="breakfast" className="btn breakfast">                 
          KAHVALTILIK
        </Link>
        <Link to="organicfruits" className="btn organicfruits uppercase">
          ORGANİK ÜRÜN
        </Link>
        <Link to="dry-food" className="btn dry-food">
          KURU GIDA
        </Link>
        <Link to="greengrocery" className="btn greengrocery">
          SEBZE & MEYVE
        </Link>
        <Link to="fast" className="btn fast">
          ATIŞTIRMALIK
        </Link>
        <Link to="oil" className="btn oil">
          ZEYTİNYAĞI
        </Link>
        <Link to="new" className="btn new">
          YENİ ÜRÜNLER
        </Link>
      </div>
      <div className="selectmenu">
        <SelectMenu />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
