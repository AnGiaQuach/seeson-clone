import { useState } from "react";
import Header from "./components/Header";
import GalleryOfImg from "./components/Swiper";
import styles from "./styles/App.module.css";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Header></Header>
      <GalleryOfImg></GalleryOfImg>
    </>
  );
}

export default App;
