import React, { useCallback } from 'react';
import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  FavButton,
  ContentDown,
} from '../../../styles/ComponentsStyles';
import { ProductFlavor, Price, InStock, SeeMore } from './styles';
import { FavOnIcon, FavOffIcon } from '../../../assets/index';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductCardCategory({ product, isFavorited, onToggleFavorited }) {
  const { id, name, price, category, flavor, quantity } = product || {};
  const navigate = useNavigate();

  const handleFavorite = useCallback(() => {
    onToggleFavorited(id);
  }, [onToggleFavorited, id]);

  const handleSeeMore = useCallback(() => {
    navigate(`/produto/${category}/${id}`);
  }, [navigate, category, id]);

  return (
    <ProductCard>
      <ProductImage></ProductImage>
      <ProductContent>
        <ContentTop>
          <ProductFlavor>{flavor}</ProductFlavor>
          <FavButton onClick={handleFavorite} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>
        <Price>{price}</Price>
        <ContentDown>
          <InStock $inStock={quantity > 0}>
            {quantity > 0 ? 'Em estoque' : 'Esgotado'}
          </InStock>
          <SeeMore onClick={handleSeeMore}>Ver mais</SeeMore>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

ProductCardCategory.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  isFavorited: PropTypes.bool,
  onToggleFavorited: PropTypes.func.isRequired,
};

export default ProductCardCategory;
