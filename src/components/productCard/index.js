import React, { useState } from 'react';
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

function ProductCard({ isHome }) {
  const [favorited, setFavorited] = useState(false);
  const navigate = useNavigate();

  return (
    <ProductContainer onClick={() => navigate('/produto/1')}>
      <FavButton
        onClick={() => setFavorited(favorited ? false : true)}
        data-id="bolo-pote">
        {favorited ? (
          <FavOnIcon width={35} height={35} />
        ) : (
          <FavOffIcon width={35} height={35} />
        )}
      </FavButton>
      <ProductImage></ProductImage>
      <ProductContent>
        {isHome && <TitleCategory>Bolo de pote</TitleCategory>}
        <TitleFlavor>Sabor</TitleFlavor>
        <Price>R$ 99,99</Price>
      </ProductContent>
    </ProductContainer>
  );
}

export default ProductCard;
