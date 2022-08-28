import "./selectmenu.scss";

const Category = () => {

  return (
    <div className="category">
      
      <div className="small-device">
        <select
          className="form-select form-select-md mb-2"
          aria-label=".form-select-lg example"
        >
          <option className="fw-bold" selected disabled>Markalar</option>
          <option  value="1" >Tat</option>
          <option  value="2">Sarelle</option>
          <option  value="3">Eti</option>
          <option  value="4">Ülker</option>
        </select>
      </div>
      <div className="small-device">
        <select
          className="form-select form-select-md mb-3"
          aria-label=".form-select-lg example"
        >
          <option className="fw-bold">Gramaj</option>
          <option className="fw-bold" value="1" >100gr</option>
          <option className="fw-bold" value="2">200gr</option>
          <option className="fw-bold" value="3">350gr</option>
          <option className="fw-bold" value="4">1000gr</option>
        </select>
      </div>
 
    
    </div>
  );
};

export default Category;