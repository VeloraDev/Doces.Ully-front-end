import React, { useCallback, useEffect, useState } from 'react';
import {
  ProductContainer,
  ProductImage,
  ProductContent,
  TitleCategory,
  TitleFlavor,
  Price,
  FavButton,
} from './styles';

import { FavOnIcon, FavOffIcon } from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({ product, isHome }) {
  const { id, name, img_url, category_name, priceFormatted } = product;

  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();

  const handleProductPage = useCallback(() => {
    navigate(`/produto/${category_name}/${id}`);
  }, [navigate, category_name, id]);

  return (
    <ProductContainer onClick={handleProductPage}>
      <FavButton
        onClick={e => {
          e.stopPropagation();
          setFavorited(favorited ? false : true);
        }}
        data-id="bolo-pote">
        {favorited ? (
          <FavOnIcon width={35} height={35} />
        ) : (
          <FavOffIcon width={35} height={35} />
        )}
      </FavButton>
      <ProductImage src={img_url} />
      <ProductContent>
        {isHome && <TitleCategory>{category_name}</TitleCategory>}
        <TitleFlavor>{name}</TitleFlavor>
        <Price>R$ {priceFormatted}</Price>
      </ProductContent>
    </ProductContainer>
  );
}

ProductCard.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
  }),
  isHome: PropTypes.bool.isRequired,
};

export default ProductCard;
