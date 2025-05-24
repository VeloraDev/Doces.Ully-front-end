import React, { useState, useEffect } from 'react';
import ProductCardCart from './productCardCart';

import { Line } from '../../styles/ComponentsStyles';
import {
  CartContainer,
  TitleContainer,
  CartTitle,
  ProductContainer,
  CheckoutContainer,
  CheckoutPriceContainer,
  CheckoutText,
  CheckoutPrice,
  CheckoutButton,
} from './styles';

import Footer from '../../components/footer';
import { CatIcon } from '../../assets';

import { useNavigate } from 'react-router-dom';

function Cart() {
  const [products, setProducts] = useState([]);
  const isEmpty = products.length === 0 ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(storedProducts);
  }, []);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalQuantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return (
    <CartContainer>
      <TitleContainer>
        <CartTitle>Seu carrinho</CartTitle>
        <Line />
      </TitleContainer>
      <ProductContainer isEmpty={isEmpty}>
        {isEmpty ? (
          <CatIcon onClick={() => navigate('/produtos')} />
        ) : (
          products.map(product => (
            <ProductCardCart key={product.id} product={product} />
          ))
        )}
      </ProductContainer>
      <Line />
      <CheckoutContainer>
        <CheckoutPriceContainer>
          <CheckoutText>valor final({totalQuantity}): </CheckoutText>
          <CheckoutPrice>R$ {totalPrice.toFixed(2)}</CheckoutPrice>
        </CheckoutPriceContainer>
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </CheckoutContainer>
      <Footer />
    </CartContainer>
  );
}

export default Cart;
