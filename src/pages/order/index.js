import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  OrderContainer,
  AddressContainer,
  OptionPaymentSection,
  Background,
  ActionPaymentButton,
  ParagraphButton,
  Title,
  CheckoutSection,
  Paragraph,
  ActionValue,
  ActionOrder,
} from './styles';

import { WhatsIcon } from '../../assets';
import Loadingpage from '../../components/loadingPage';
import ConfirmModal from '../../components/confirmModal';
import BreadCrumbs from '../../components/breadCrumbs';
import Footer from '../../components/footer';

import fetchAddresses from '../../hooks/fetchAddresses';
import fetchCart from '../../hooks/fetchCart';
import fetchData from '../../hooks/fetchData';
import { ProductContext } from '../../hooks/contextprovider';

import OrderForm from './orderForm';
import { getSelectModes, getCrumbItems } from './orderUtils';
import orderLogic from './orderLogic';

function Order() {
  const [is_pickup, setIs_pickup] = useState(false);

  const navigate = useNavigate();
  const { id, categoria } = useParams();
  const { fetchResponse } = fetchData(id, 'products', Boolean(id));
  const { products: cartItems, totalPriceFormatted, clearCart } = fetchCart();
  const { addresses, isLoading: addrIsLoading } = fetchAddresses();
  const { products } = useContext(ProductContext);
  const {
    isLoading,
    isVisible,
    setIsVisible,
    handleConfirm,
    onSubmit,
    onError,
    handleSubmit,
    register,
    setValue,
    watch,
    price,
  } = orderLogic({
    id,
    categoria,
    cartItems,
    fetchResponse,
    products,
    addresses,
    navigate,
    clearCart,
    totalPriceFormatted,
    is_pickup,
  });

  return (
    <OrderContainer>
      {(isLoading || addrIsLoading) && <Loadingpage />}
      <ConfirmModal
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onConfirm={handleConfirm}
        message="Confirmar pedido e enviar a mensagem?"
        keyId="1"
      />
      <BreadCrumbs
        items={getCrumbItems(id, categoria, fetchResponse)}></BreadCrumbs>
      <AddressContainer>
        <Title>Endereço</Title>
        <OptionPaymentSection>
          <Background $select={is_pickup}></Background>
          {getSelectModes(is_pickup).map(({ key, icon: Icon, label }) => {
            const isSelected = key === 'retirada' ? is_pickup : !is_pickup;

            return (
              <ActionPaymentButton
                key={key}
                onClick={() => {
                  const pickup = key === 'retirada';
                  setIs_pickup(pickup);
                  setValue('is_pickup', pickup);
                }}>
                <Icon />
                <ParagraphButton $select={isSelected}>{label}</ParagraphButton>
              </ActionPaymentButton>
            );
          })}
        </OptionPaymentSection>
        <OrderForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onError={onError}
          is_pickup={is_pickup}
          register={register}
          setValue={setValue}
          watch={watch}
        />
        <CheckoutSection>
          <Paragraph>Subtotal: R${price}</Paragraph>
          <Paragraph>Taxa de entrega: R$00.00</Paragraph>
          <ActionValue>Valor a pagar: {price}</ActionValue>
          <ActionOrder form="orderForm" as="button" type="submit">
            <WhatsIcon />
            <p>Enviar pedido</p>
          </ActionOrder>
        </CheckoutSection>
      </AddressContainer>
      <Footer />
    </OrderContainer>
  );
}

export default Order;
