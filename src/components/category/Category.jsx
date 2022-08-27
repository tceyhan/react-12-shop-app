import "./category.scss";

const Category = () => {

  return (
    <div className="category">
      
      <div className="small-device">
        <select
          className="form-select form-select-md mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected className="fw-bold">Markalar</option>
          <option className="fw-bold" value="1" >Tat</option>
          <option className="fw-bold" value="2">Sarelle</option>
          <option className="fw-bold" value="3">Eti</option>
          <option className="fw-bold" value="4">Ülker</option>
        </select>
      </div>
      <div className="small-device">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <i className="fa fa-search" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Marka, Ürün, Lorem Ipsum Ara.."
            aria-label="marka"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;