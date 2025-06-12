import React, { useCallback, useState } from 'react';
import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  FavButton,
  ContentDown,
  Line,
} from '../../../styles/ComponentsStyles';

import {
  ProductCategory,
  ConfirmContainer,
  ConfirmSection,
  ConfirmText,
  ActionGroup,
  CancelButton,
  ConfirmButton,
  PriceContainer,
  Text,
  QuantContainer,
  ProductPrice,
} from './styles';
import { FavOnIcon, FavOffIcon } from '../../../assets/index';
import { PlusIcon, MinusIcon } from '../../../assets/index';

import PropTypes from 'prop-types';

function ProductCardCart({ product, handleQuantity, handleAction, confirmId }) {
  const { id, name, price, quantity, img_url, category } = product || {};

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = useCallback(() => {
    setIsFavorited(!isFavorited);
  }, [isFavorited]);

  const onCancel = useCallback(() => {
    handleAction(id, 'cancel');
  }, [handleAction, id]);

  const onConfirm = useCallback(() => {
    handleAction(id);
  }, [handleAction, id]);

  if (!product) return;

  return (
    <ProductCard>
      {confirmId === product.id && (
        <ConfirmContainer>
          <ConfirmSection>
            <ConfirmText>Excluir este item do carrinho?</ConfirmText>
            <Line />
            <ActionGroup>
              <CancelButton onClick={onCancel}>Cancelar</CancelButton>
              <ConfirmButton onClick={onConfirm}>Sim</ConfirmButton>
            </ActionGroup>
          </ConfirmSection>
        </ConfirmContainer>
      )}

      <ProductImage src={img_url} />
      <ProductContent>
        <ContentTop>
          <ProductCategory>{category}</ProductCategory>
          <FavButton onClick={toggleFavorite} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>

        <Text>{name}</Text>

        <ContentDown>
          <QuantContainer>
            <MinusIcon
              width={23}
              height={23}
              onClick={() => handleQuantity(id, 'minus')}
            />
            <p>{product.quantity}</p>
            <PlusIcon
              width={23}
              height={23}
              onClick={() => handleQuantity(id, 'plus')}
            />
          </QuantContainer>

          <PriceContainer>
            <Text>total</Text>
            <ProductPrice>r$ {(price * quantity).toFixed(2)}</ProductPrice>
          </PriceContainer>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

ProductCardCart.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleQuantity: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
  confirmId: PropTypes.string.isRequired,
};

export default ProductCardCart;
