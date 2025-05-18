import React from 'react';

import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  FavButton,
  ProductFlavor,
  Price,
  ContentDown,
  InStock,
  SeeMore,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { FavOnIcon, FavOffIcon } from '../../../assets/index';

function ProductCardCategory({
  id,
  flavor,
  price,
  inStock,
  isFavorited,
  onToggleFavorited,
}) {
  const navigate = useNavigate();

  return (
    <ProductCard>
      <ProductImage></ProductImage>
      <ProductContent>
        <ContentTop>
          <ProductFlavor>{flavor}</ProductFlavor>
          <FavButton onClick={() => onToggleFavorited(id)} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>
        <Price>{price}</Price>
        <ContentDown>
          <InStock inStock={inStock}>
            {inStock ? 'Em estoque' : 'Esgotado'}
          </InStock>
          <SeeMore onClick={() => navigate(`/produto/${id}`)}>Ver mais</SeeMore>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

export default ProductCardCategory;
