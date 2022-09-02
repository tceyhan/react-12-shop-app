import { Link } from "react-router-dom";
import "./pagination.scss";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link previous" to="/" aria-label="Previous">
            &lsaquo;
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            ...
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">
            7
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link next" to="#" aria-label="Next">
            &rsaquo;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
