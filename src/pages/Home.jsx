import React from "react";
import Header from "../components/Header";
import ProductList from '../containers/ProductList';
import DesktopMenu from '../components/DesktopMenu'

const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default Home;
