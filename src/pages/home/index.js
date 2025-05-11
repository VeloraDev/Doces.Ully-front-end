import React from 'react';
import Slider from '../../components/slider';
import ProductContainer from '../../components/productContainer/index';
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
