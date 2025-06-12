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

function ProductCardCategory({
  product,
  category,
  isFavorited,
  onToggleFavorited,
}) {
  const { id, name, quantity, img_url, priceFormatted } = product || {};
  const navigate = useNavigate();

  const handleFavorite = useCallback(() => {
    onToggleFavorited(id);
  }, [onToggleFavorited, id]);

  const handleSeeMore = useCallback(() => {
    navigate(`/produto/${category}/${id}`);
  }, [navigate, category, id]);

  return (
    <ProductCard>
      <ProductImage src={img_url} />
      <ProductContent>
        <ContentTop>
          <ProductFlavor>{name}</ProductFlavor>
          <FavButton onClick={handleFavorite} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>
        <Price>R$ {priceFormatted}</Price>
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
    quantity: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
  }),
  category: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  onToggleFavorited: PropTypes.func.isRequired,
};

export default ProductCardCategory;
