import working from "../../../assets/images/working.jpg";

const OrganicFruits = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1 className="header">Organik Ürünler</h1>
    <img
      className="img-fluid"
      src={working}
      alt="YAPIM AŞAMASINDA"
    />
  </div>
  )
}

export default OrganicFruits;