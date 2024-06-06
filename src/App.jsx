import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Blogs from "./pages/BlogsPage";
import Basket from "./pages/Basket";
import Shop from "./pages/Shopping";
import PlantCare from "./pages/Plant";
import Checkout from "./pages/Payment";
import Login from "./pages/SignUp";
import Footer from "./components/Footer";

export const AboutContext = createContext();
export const ProductContext = createContext();
export const ShopContext = createContext();

const App = () => {
  const [about, setAbout] = useState([]);
  const [product, setProduct] = useState([]);
  const [shop, setShop] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ product, setProduct }}>
        <AboutContext.Provider value={{ about, setAbout }}>
          <ShopContext.Provider value={{ shop, setShop }}>
            <div className="w-[100%]">
              <BrowserRouter>
                <div className="w-[1200px] m-auto">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/plantcare" element={<PlantCare />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/shop/basket" element={<Basket />} />
                    <Route
                      path="/shop/basket/checkout"
                      element={<Checkout />}
                    />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
                <Footer />
              </BrowserRouter>
            </div>
          </ShopContext.Provider>
        </AboutContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default App;
