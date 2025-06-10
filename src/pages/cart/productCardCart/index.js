import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
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

function ProductCardCart({ product, handleQuantity, handleAction, confirmId }) {
  const { id, name, price, category, flavor, quantity } = product || {};

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = useCallback(() => {
    setIsFavorited((prev = !prev));
  }, []);

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

      <ProductImage></ProductImage>
      <ProductContent>
        <ContentTop>
          <ProductCategory>{name}</ProductCategory>
          <FavButton onClick={toggleFavorite} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>

        <Text>{flavor}</Text>

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
    category: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  handleQuantity: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
  confirmId: PropTypes.string.isRequired,
};

export default ProductCardCart;
