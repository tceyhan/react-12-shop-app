import Card from "./components/main/card/Card";
// import Category from "./components/main/category/Category";
// import data from "./helpers/data";
import Navbar from "./components/navbar/Navbar.jsx";
import "../src/scss/main.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import BreakFast from "./components/categories/BreakFast";
import OrganicFruits from "./components/categories/OrganicFruits";
import NewProduct from "./components/categories/NewProduct";
import DryFood from "./components/categories/DryFood";
import GreenGrocery from "./components/categories/GreenGrocery";
import Contact from "./components/Contact";
import CardDetail from "./components/main/card/CardDetail";
import Oil from "./components/categories/Oil";
import Fast from "./components/categories/Fast";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="products" element={<Card />} />
            <Route path="products/:id" element={<CardDetail />} />

            {/* Nested Route */}
            <Route path="/" element={<Categories />}>
              <Route index element={<BreakFast />} />
              <Route path="breakfast" element={<BreakFast />} />
              <Route path="organicfruits" element={<OrganicFruits />} />
              <Route path="fast" element={<Fast/>} />
              <Route path="oil" element={<Oil/>} />
              <Route path="new" element={<NewProduct />} />
              <Route path="dry-food" element={<DryFood />} />
              <Route path="greengrocery" element={<GreenGrocery />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>

      {/* <Category/> */}
      {/* <Card veri={data}/> */}
    </>
  );
}

export default App;
