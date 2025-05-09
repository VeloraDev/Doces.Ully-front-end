import React from 'react';
import ProductContainer from '../../components/productContainer/index';
import Slider from '../../components/slider';
import Footer from '../../components/footer';

function Home() {
  return (
    <>
      <Slider />
      <ProductContainer />
      <Footer />
    </>
  );
}

export default Home;
