import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">

      {/* KURUMSAL */}

      <h6 className="">Kurumsal</h6>
      <ul className="footer">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            aria-current="page"
          >Hakkımızda</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            aria-current="page"
          >Vizyon & Misyon</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            aria-current="page"
          >Gizlilik Politikası</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            aria-current="page"
          >KVKK Sözleşmesi</NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            aria-current="page"
          >İletişim</NavLink>
        </li>
      </ul>

      {/* KATEGORİLER */}

      <h6 className="">Kategoriler</h6>
      <ul className="footer">
        <li className="nav-item">
          <NavLink
            to="/breakfast"
            className="nav-link"
            aria-current="page"
          >Kahvaltılıklar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/organic"
            className="nav-link"
            aria-current="page"
          >Organik Meyve & Sebze</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/fast"
            className="nav-link"
            aria-current="page"
          >Atıştırmalıklar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/oil"
            className="nav-link"
            aria-current="page"
          >Zeytinyağı</NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dry-food"
            className="nav-link"
            aria-current="page"
          >Kuru Gıda</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/organic"
            className="nav-link"
            aria-current="page"
          >Organik</NavLink>
        </li>
      </ul>

      {/* FIRSATLAR */}

      <h6 className="">Fırsatlar</h6>
      <ul className="footer">
        <li className="nav-item">
          <NavLink
            to="/breakfast"
            className="nav-link"
            aria-current="page"
          >Yeni Ürünler</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/organic"
            className="nav-link"
            aria-current="page"
          >Haftanın Fırsatları</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/fast"
            className="nav-link"
            aria-current="page"
          >İndirimli Ürünler</NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/oil"
            className="nav-link"
            aria-current="page"
          >Zeytinyağı</NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dry-food"
            className="nav-link"
            aria-current="page"
          >E-Hamal Kumbara</NavLink>
        </li>    
      </ul>
    </div>
  );
};

export default Footer;
