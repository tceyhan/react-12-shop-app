import React from "react";
import { Link, Outlet } from "react-router-dom";
import SelectMenu from "../selectmenu/SelectMenu";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <img src="../../assets/images/catagory_link_picture/kahvaltılık.jpg" alt="" />
        <Link to="breakfast" className="btn breakfast">          
          Kahvaltılık
        </Link>
        <Link to="organicfruits" className="btn organicfruits">
          Organik Ürünler
        </Link>
        <Link to="dry-food" className="btn dry-food">
          Kuru Gıda
        </Link>
        <Link to="greengrocery" className="btn greengrocery">
          Sebze / Meyveler
        </Link>
        <Link to="fast" className="btn fast">
          Atıştırmalıklar
        </Link>
        <Link to="oil" className="btn oil">
          Zeytinyağı
        </Link>
        <Link to="new" className="btn new">
          Yeni Ürünler
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
