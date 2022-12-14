// scss
import "../src/scss/main.scss";
// react required
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
// categories
import Categories from "./components/categories/Categories";
import BreakFast from "./components/categories/pages/BreakFast";
import OrganicFruits from "./components/categories/pages/OrganicFruits";
import NewProduct from "./components/categories/pages/NewProduct";
import DryFood from "./components/categories/pages/DryFood";
import GreenGrocery from "./components/categories/pages/GreenGrocery";
import Oil from "./components/categories/pages/Oil";
import Fast from "./components/categories/pages/Fast";
// card
import Card from "./components/card/Card";
import CardDetail from "./components/card/CardDetail";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Nested Route */}
        <Route path="/" element={<Categories />}>
          <Route path="products" element={<Card />} />
          <Route path="details/:id" element={<CardDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route index element={<BreakFast />} />
          <Route path="breakfast" element={<BreakFast />} />
          <Route path="organicfruits" element={<OrganicFruits />} />
          <Route path="fast" element={<Fast />} />
          <Route path="oil" element={<Oil />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="dry-food" element={<DryFood />} />
          <Route path="greengrocery" element={<GreenGrocery />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
