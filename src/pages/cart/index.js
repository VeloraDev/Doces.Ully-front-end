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
  const [confirmId, setConfirmId] = useState(null);
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

  function handleAction(id, option) {
    if (option === 'cancel') {
      setConfirmId(null);
      return;
    }
    const updatedCart = products.filter(item => item.id !== id);
    setProducts(updatedCart);
    localStorage.setItem('cart', JSON.stringify(products));
    setConfirmId(null);
  }

  function handleQuantity(id, operacao) {
    const updatedProducts = products.map(productCart => {
      if (productCart.id === id) {
        if (productCart.quantity === 1 && operacao !== 'plus') {
          setConfirmId(id);
          return productCart;
        }
        return {
          ...productCart,
          quantity:
            operacao === 'plus'
              ? productCart.quantity + 1
              : productCart.quantity - 1,
        };
      }
      return productCart;
    });

    localStorage.setItem('cart', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  }

  return (
    <CartContainer>
      <TitleContainer>
        <CartTitle>Seu carrinho</CartTitle>
        <Line />
      </TitleContainer>
      <ProductContainer $isEmpty={products.length === 0}>
        {products.length === 0 ? (
          <CatIcon onClick={() => navigate('/produtos')} />
        ) : (
          products.map(product => (
            <ProductCardCart
              key={product.id}
              product={product}
              handleQuantity={handleQuantity}
              confirmId={confirmId}
              handleAction={handleAction}
            />
          ))
        )}
      </ProductContainer>
      <Line />

      <CheckoutContainer>
        <CheckoutPriceContainer>
          <CheckoutText>valor final({totalQuantity}): </CheckoutText>
          <CheckoutPrice>R${totalPrice.toFixed(2)}</CheckoutPrice>
        </CheckoutPriceContainer>
        <CheckoutButton>Finalizar compra</CheckoutButton>
      </CheckoutContainer>

      <Footer />
    </CartContainer>
  );
}

export default Cart;
