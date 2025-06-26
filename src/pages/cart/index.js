import { useState } from 'react';
import ProductCardCart from './productCardCart';

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

import fetchCart from '../../hooks/fetchCart';
import { Line } from '../../styles/ComponentsStyles';
import Footer from '../../components/footer';
import { CatIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [confirmId, setConfirmId] = useState(null);
  const navigate = useNavigate();
  const {
    products,
    totalPriceFormatted,
    totalQuantity,
    removeProduct,
    updateQuantity,
  } = fetchCart();

  function handleAction(id, option) {
    if (option === 'cancel') {
      setConfirmId(null);
      return;
    }

    removeProduct(id);
    setConfirmId(null);
  }

  function handleQuantity(id, operation) {
    const product = products.find(p => p.id === id);
    if (product.quantity === 1 && operation !== 'plus') {
      setConfirmId(id);
      return;
    }
    updateQuantity(id, operation);
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
          <CheckoutPrice>R${totalPriceFormatted}</CheckoutPrice>
        </CheckoutPriceContainer>
        <CheckoutButton onClick={() => navigate('/pedido')}>
          Finalizar compra
        </CheckoutButton>
      </CheckoutContainer>

      <Footer />
    </CartContainer>
  );
}

export default Cart;
