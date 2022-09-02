import "./selectmenu.scss";

const SelectMenu = () => {
  return (
    <div className="select-group">
      <div className="select-menu">
        <select
          className="form-select form-select-md"
          aria-label=".form-select-lg example"
        >
          <option className="fw-bold" selected disabled>
            Markalar
          </option>
          <option value="1">Tat</option>
          <option value="2">Sarelle</option>
          <option value="3">Eti</option>
          <option value="4">Ülker</option>
        </select>
      </div>
      <div className="select-menu">
        <select
          className="form-select form-select-md"
          aria-label=".form-select-lg example"
        >
          <option className="fw-bold" selected disabled>
            Gramaj
          </option>
          <option className="fw-bold" value="1">
            100gr
          </option>
          <option className="fw-bold" value="2">
            200gr
          </option>
          <option className="fw-bold" value="3">
            350gr
          </option>
          <option className="fw-bold" value="4">
            1000gr
          </option>
        </select>
      </div>
      <div className="form-check select-menu">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="empty"
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Tükenenleri Gösterme
        </label>
      </div>
      
    </div>
  );
};

export default SelectMenu;
