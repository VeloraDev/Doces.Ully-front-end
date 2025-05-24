import React from 'react';

import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  FavButton,
  ContentDown,
} from '../../../styles/ComponentsStyles';

import { ProductFlavor, Price, InStock, SeeMore } from './styles';
import { useNavigate } from 'react-router-dom';
import { FavOnIcon, FavOffIcon } from '../../../assets/index';

function ProductCardCategory({ product, isFavorited, onToggleFavorited }) {
  const navigate = useNavigate();

  return (
    <ProductCard>
      <ProductImage></ProductImage>
      <ProductContent>
        <ContentTop>
          <ProductFlavor>{product.flavor}</ProductFlavor>
          <FavButton
            onClick={() => onToggleFavorited(product.id)}
            data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>
        <Price>{product.price}</Price>
        <ContentDown>
          <InStock inStock={product.inStock}>
            {product.inStock ? 'Em estoque' : 'Esgotado'}
          </InStock>
          <SeeMore
            onClick={() =>
              navigate(`/produto/${product.category}/${product.id}`)
            }>
            Ver mais
          </SeeMore>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

export default ProductCardCategory;
