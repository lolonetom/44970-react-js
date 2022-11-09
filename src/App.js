import React from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer />
    <Footer />
    </>
  );
}
