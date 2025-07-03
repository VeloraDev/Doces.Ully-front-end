import { useCallback, useState } from 'react';
import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  InfoSection,
  FavButton,
  ContentDown,
} from '../../../styles/ComponentsStyles';

import {
  ProductCategory,
  PriceContainer,
  Text,
  QuantContainer,
  ProductPrice,
} from './styles';

import ConfirmModal from '../../../components/confirmModal';
import PropTypes from 'prop-types';
import { FavOnIcon, FavOffIcon } from '../../../assets/index';
import { PlusIcon, MinusIcon } from '../../../assets/index';

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
      <ConfirmModal
        visible={confirmId === id}
        onCancel={onCancel}
        onConfirm={onConfirm}
        message="Excluir item do carrinho?"
        keyId={id}
      />
      <ProductImage src={img_url} />
      <ProductContent>
        <ContentTop>
          <InfoSection>
            <ProductCategory>{category}</ProductCategory>
            <Text>{name}</Text>
          </InfoSection>
          <FavButton onClick={toggleFavorite} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>

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
