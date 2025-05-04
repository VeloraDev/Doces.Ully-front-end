import React from 'react';
import ProductContainer from '../../components/productContainer/index';
import Navbar from '../../components/navBar';
import Slider from '../../components/slider';

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductContainer />
    </>
  );
}

export default Home;
