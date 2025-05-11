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

function ProductCard() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ProductContainer>
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
        <TitleCategory>Bolo de pote</TitleCategory>
        <TitleFlavor>Sabor</TitleFlavor>
        <Price>R$ 99,99</Price>
      </ProductContent>
    </ProductContainer>
  );
}

export default ProductCard;
