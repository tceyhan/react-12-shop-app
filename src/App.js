// scss 
import "../src/scss/main.scss";
// react required
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
// categories
import Categories from "./components/categories/Categories";
import BreakFast from "./components/categories/BreakFast";
import OrganicFruits from "./components/categories/OrganicFruits";
import NewProduct from "./components/categories/NewProduct";
import DryFood from "./components/categories/DryFood";
import GreenGrocery from "./components/categories/GreenGrocery";
import Oil from "./components/categories/Oil";
import Fast from "./components/categories/Fast";
// card
import Card from "./components/card/Card";
import CardDetail from "./components/card/CardDetail";
// other
import Contact from "./components/Contact";



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
