import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import { validateCart, sendMessage } from './orderUtils';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import addressSchema from '../../validations/address';

export default function orderLogic({
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
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    }
  }, [addresses, reset, is_pickup, setValue]);

  async function handleOrder(data) {
    try {
      setIsLoading(true);
      if (!validateCart(cartItems, products)) {
        toast.error('Algum produto não existe mais na base de dados ');
        return;
      }

      const productsToOrder = id
        ? [{ product_id: fetchResponse.id, quantity: 1 }]
        : cartItems.map(({ id, quantity }) => ({
            product_id: id,
            quantity,
          }));

      const address = {
        neighborhood: data.neighborhood,
        street: data.street,
        number: data.number,
      };

      await axios.post('/orders', {
        is_pickup: data.is_pickup,
        payment_method: data.payment_method,
        products: productsToOrder,
        ...(!data.is_pickup && { address }),
      });
      toast.success('Pedido realizado');
      navigate('/');
      clearCart();
      sendMessage(data, { cartItems, id, fetchResponse, categoria, price });

      if ((!addresses || addresses.length === 0) && !data.is_pickup) {
        await axios.post('/addresses', {
          neighborhood: data.neighborhood,
          street: data.street,
          number: data.number,
          landmark: data.landmark,
        });
      }
    } catch (error) {
      const status = error.response?.status || 0;
      const errors = error.response?.data?.errors || 'Ocorreu um erro';

      if (status === 400) {
        toast.error('Adicione pelo menos 1 produto no carrinho');
      }
      errors.forEach(erro => console.log(erro));
    } finally {
      setIsLoading(false);
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

  return {
    price,
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
  };
}
