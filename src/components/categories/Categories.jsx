import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "../main/search/Search";

const Categories = () => {
  return (
    <div className="container flex-column mt-5">
      <div>
        <h1 className="mt-5">Kategoriler</h1>
      </div>

      <div className="d-flex justify-content-center m-1">
        <Link to="breakfast" className="btn btn-primary">
          Kahvaltılık
        </Link>
        <Link to="organic" className="btn btn-warning">
          Organik Ürünler
        </Link>
        <Link to="dry-food" className="btn btn-danger">
          Kuru Gıda
        </Link>
        <Link to="greengrocery" className="btn btn-success">
          Sebze / Meyveler
        </Link>
        <Link to="new" className="btn btn-success">
          Yeni Ürünler
        </Link>
      </div>
      <div>
        <Search/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Categories;
