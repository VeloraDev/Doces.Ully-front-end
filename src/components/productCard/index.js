import React, { useCallback, useState } from 'react';
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

  const handleProductPage = useCallback(() => {
    navigate('');
  }, [navigate]);

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
      <ProductImage></ProductImage>
      <ProductContent>
        {isHome && <TitleCategory>category</TitleCategory>}
        <TitleFlavor>flavor</TitleFlavor>
        <Price>R$ 99,00</Price>
      </ProductContent>
    </ProductContainer>
  );
}

export default ProductCard;
