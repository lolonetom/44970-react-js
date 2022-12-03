import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";
import CartContextComponent from "./CartContextComponent";
import Carro from "./components/Carro";

export default function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/carro" element={ <Carro /> } />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}
