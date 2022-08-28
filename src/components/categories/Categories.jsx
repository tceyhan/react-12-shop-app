import React from "react";
import { Link, Outlet } from "react-router-dom";
import SelectMenu from "../selectmenu/SelectMenu";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="home">
      <div className="d-flex justify-content-center">
        <Link to="breakfast" className="btn btn-success">
          Kahvaltılık
        </Link>
        <Link to="organicfruits" className="btn btn-warning">
          Organik Ürünler
        </Link>
        <Link to="dry-food" className="btn btn-danger">
          Kuru Gıda
        </Link>
        <Link to="greengrocery" className="btn btn-success">
          Sebze / Meyveler
        </Link>
        <Link to="fast" className="btn btn-warning">
          Atıştırmalıklar
        </Link>
        <Link to="oil" className="btn btn-danger">
          Zeytinyağı
        </Link>
        <Link to="new" className="btn btn-primary">
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
