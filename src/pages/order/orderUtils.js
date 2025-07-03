import {
  DeliveryIcon,
  DeliveryDarkIcon,
  PeopleIcon,
  PeopleLightIcon,
} from '../../assets';

export const validateCart = (cartItems, products) =>
  cartItems.every(item => products.some(p => p.id === item.id));

export function sendMessage(data, options) {
  const { cartItems, id, fetchResponse, categoria, price } = options;

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

export function getSelectModes(is_pickup) {
  return [
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
}

export function getCrumbItems(id, categoria, fetchResponse) {
  return [
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
}
