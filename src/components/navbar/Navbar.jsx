import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed-top">
    <div className="nav-top">
      <ul>
        <li className="nav-top-link">Ürünlerimiz</li>
        <li className="nav-top-link">Organik Sertifikası</li>
        <li className="nav-top-link">Fırsatlar Köşesi</li>
        <li className="nav-top-link">Sipariş Takibi</li>
      </ul>    
              
    </div>
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="input-group flex-nowrap searchInput">
          
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="marka"
            aria-describedby="addon-wrapping"
          />
          <span className="input-group-text" id="addon-wrapping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="blueviolet"              
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>  

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">      
            <li className="nav-item">
              <NavLink to="/checkout" className="nav-link" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="blueviolet"
                  className="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favourite" className="nav-link" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-bookmarks"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                  <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  );
};
export default Navbar;
