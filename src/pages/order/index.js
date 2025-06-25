import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import {
  OrderContainer,
  AddressContainer,
  OptionPaymentSection,
  Background,
  ActionPaymentButton,
  ParagraphButton,
  Title,
  Form,
  CheckoutSection,
  Paragraph,
  ActionValue,
  ActionOrder,
} from './styles';

import {
  InputSection,
  DivInput,
  SelectContainer,
  Select,
  SelectTop,
  OptionsContainer,
  OptionsSection,
  Option,
} from '../../styles/ComponentsStyles';

import {
  WhatsIcon,
  DeliveryIcon,
  DeliveryDarkIcon,
  PeopleIcon,
  PeopleLightIcon,
  ArrowSelectIcon,
} from '../../assets';

import ConfirmModal from '../../components/confirmModal';
import BreadCrumbs from '../../components/breadCrumbs';
import Footer from '../../components/footer';
import fetchAddresses from '../../hooks/fetchAddresses';
import fetchCart from '../../hooks/fetchCart';
import fetchHook from '../../hooks/fetchHook';
import addressSchema from '../../validations/address';
import { ProductContext } from '../../hooks/contextprovider';

const neighborhoods = ['centro', 'casinhas', 'croatá', 'vila esperança'];
const payment_methods = ['pix', 'dinheiro'];

function Order() {
  const [is_pickup, setIs_pickup] = useState(false);
  const [selectingPayment, setSelectingPayment] = useState(false);
  const [selectingNeighborhood, setSelectingNeighborhood] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();
  const { id, categoria } = useParams();
  const { fetchResponse } = fetchHook(id, 'products', Boolean(id));
  const { products: cartItems, totalPriceFormatted, clearCart } = fetchCart();
  const { addresses } = fetchAddresses();
  const { products } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema()),
    defaultValues: {
      is_pickup: false,
    },
  });

  const price = id
    ? Number(fetchResponse.price).toFixed(2)
    : totalPriceFormatted;

  const neighborhood = watch('neighborhood');
  const payment_method = watch('payment_method');

  useEffect(() => {
    if (addresses?.length > 0) {
      const [addr] = addresses;
      reset({
        neighborhood: addr.neighborhood ?? '',
        street: addr.street ?? '',
        number: addr.number ?? '',
        landmark: addr.landmark ?? '',
        payment_method: '',
        is_pickup: is_pickup,
      });
      setValue('is_pickup', is_pickup);
    }
  }, [addresses, reset, is_pickup, setValue]);

  const validateCart = () =>
    cartItems.every(item => products.some(p => p.id === item.id));

  function sendMessage(data) {
    let message = `*Resumo do pedido:*\n`;

    message += `*${data.is_pickup ? 'Retirada' : 'Entrega'}*\n`;

    if (!data.is_pickup) {
      message += `*Método de pagamento*: ${data.payment_method}\n\n`;
      message += `*Endereço*:\n`;
      message += `Bairro: ${data.neighborhood}\n`;
      message += `Rua: ${data.street}\n`;
      message += `Número: ${data.number}\n`;
      message += `Complemento: ${data.landmark || ''}\n\n`;
    }
    message += `*Produtos*\n`;

    const iterator = id ? 1 : cartItems.length;
    const productsToSend = id
      ? [{ ...fetchResponse, quantity: 1, category: categoria }]
      : [...cartItems];

    for (let i = 0; i < iterator; i++) {
      message += ` - Produto: ${productsToSend[i].name}\n`;
      message += ` - Preço: R$${productsToSend[i].price.toFixed(2)}\n`;
      message += ` - Quantidade: ${productsToSend[i].quantity}\n`;
      message += ` - Categoria: ${productsToSend[i].category}\n\n`;
    }
    message += `Subtotal: ${price}`;

    const link = `https://wa.me/${process.env.REACT_APP_NUMBER_ADMIN}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  }

  async function handleOrder(data) {
    try {
      if (!validateCart()) {
        toast.error('Algum produto não existe mais na base de dados ');
        return;
      }

      const productsToOrder = id
        ? [{ product_id: fetchResponse.id, quantity: 1 }]
        : cartItems.map(({ id, quantity }) => ({
            product_id: id,
            quantity,
          }));

      await axios.post('/orders', {
        is_pickup: data.is_pickup,
        payment_method: data.payment_method,
        address_neighborhood: data.neighborhood,
        address_street: data.street,
        address_number: data.number,
        products: productsToOrder,
      });
      toast.success('Pedido realizado');
      navigate('/');
      clearCart();
      sendMessage(data);

      if ((!addresses || addresses.length === 0) && !data.is_pickup) {
        await axios.post('/addresses', {
          neighborhood: data.neighborhood,
          street: data.street,
          number: data.number,
          landmark: data.landmark,
        });
      }
    } catch (error) {
      const errors = error.response?.data?.errors || 'Ocorreu um erro';

      if (Array.isArray(errors)) {
        errors.forEach(erro => toast.error(erro));
      } else if (typeof errors === 'string') {
        toast.error(errors);
      }
    }
  }

  function handleConfirm() {
    setIsVisible(false);
    if (formData) {
      handleOrder(formData);
      setFormData(null);
    }
  }

  function onSubmit(data) {
    setIsVisible(true);
    setFormData(data);
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error?.message);
    });
  }

  const refs = {
    street: useRef(null),
    number: useRef(null),
    landmark: useRef(null),
  };

  const selectModes = [
    {
      key: 'entrega',
      icon: is_pickup ? DeliveryDarkIcon : DeliveryIcon,
      label: 'Entrega',
    },
    {
      key: 'retirada',
      icon: is_pickup ? PeopleLightIcon : PeopleIcon,
      label: 'Retirada',
    },
  ];

  const CrumbItems = [
    {
      label: id ? `${categoria}` : 'Página incial',
      to: id ? `/produtos/${categoria}` : '/',
    },
    {
      label: id ? `${fetchResponse.name}` : 'Carrinho',
      to: id ? `/produto/${categoria}/${fetchResponse.id}` : '/carrinho',
    },
    { label: 'endereço' },
  ];

  return (
    <OrderContainer>
      <ConfirmModal
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onConfirm={handleConfirm}
        message="Confirmar pedido e enviar a mensagem?"
        keyId="1"
      />
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <AddressContainer>
        <Title>Endereço</Title>
        <OptionPaymentSection>
          <Background $select={is_pickup}></Background>
          {selectModes.map(({ key, icon: Icon, label }) => {
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

        <Form id="orderForm" onSubmit={handleSubmit(onSubmit, onError)}>
          {!is_pickup && (
            <>
              <SelectContainer>
                <DivInput>
                  <label htmlFor="bairro">bairro</label>
                  <Select
                    id="bairro"
                    type="text"
                    onClick={() => setSelectingNeighborhood(prev => !prev)}>
                    <SelectTop>
                      <p>{neighborhood || 'Seleção'}</p>
                      <ArrowSelectIcon />
                    </SelectTop>
                  </Select>
                </DivInput>

                <OptionsContainer $onSelect={selectingNeighborhood}>
                  <OptionsSection $onSelect={selectingNeighborhood}>
                    {neighborhoods.map(neighborhood => (
                      <Option
                        key={neighborhood}
                        onClick={() => {
                          setSelectingNeighborhood(false);
                          setValue('neighborhood', neighborhood);
                        }}>
                        {neighborhood}
                      </Option>
                    ))}
                  </OptionsSection>
                </OptionsContainer>
              </SelectContainer>

              <InputSection>
                <DivInput onClick={() => refs.street.current?.focus()}>
                  <label htmlFor="street">rua</label>
                  <input
                    ref={refs.street}
                    id="street"
                    type="text"
                    {...register('street')}
                  />
                </DivInput>

                <DivInput onClick={() => refs.number.current?.focus()}>
                  <label htmlFor="number">N°</label>
                  <input
                    ref={refs.number}
                    id="number"
                    type="text"
                    {...register('number')}
                  />
                </DivInput>
              </InputSection>

              <DivInput onClick={() => refs.landmark.current?.focus()}>
                <label htmlFor="landmark">complemento</label>
                <input
                  ref={refs.landmark}
                  id="landmark"
                  type="text"
                  {...register('landmark')}
                />
              </DivInput>
            </>
          )}
          <SelectContainer>
            <DivInput>
              <label htmlFor="pagamento">forma de pagamento</label>
              <Select
                id="pagamento"
                type="text"
                onClick={() => setSelectingPayment(prev => !prev)}>
                <SelectTop>
                  <p>{payment_method || 'Forma de pagamento'}</p>
                  <ArrowSelectIcon />
                </SelectTop>
              </Select>
            </DivInput>

            <OptionsContainer $onSelect={selectingPayment}>
              <OptionsSection $onSelect={selectingPayment}>
                {payment_methods.map(method => (
                  <Option
                    key={method}
                    onClick={() => {
                      setSelectingPayment(false);
                      setValue('payment_method', method);
                    }}>
                    {method}
                  </Option>
                ))}
              </OptionsSection>
            </OptionsContainer>
          </SelectContainer>
          <input type="hidden" {...register('neighborhood')} />
          <input type="hidden" {...register('payment_method')} />
          <input type="hidden" {...register('is_pickup')} />
        </Form>

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
