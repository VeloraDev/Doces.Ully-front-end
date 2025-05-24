import React, { useState } from 'react';

import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  FavButton,
  ContentDown,
} from '../../../styles/ComponentsStyles';

import {
  ProductCategory,
  ProductFlavor,
  PriceContainer,
  QuantContainer,
  ProductPrice,
} from './styles';

import { FavOnIcon, FavOffIcon } from '../../../assets/index';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

function ProductCardCart({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <ProductCard>
      <ProductImage></ProductImage>
      <ProductContent>
        <ContentTop>
          <ProductCategory>{product.name}</ProductCategory>
          <FavButton onClick={() => onToggleFavorited(id)} data-id="bolo-pote">
            {isFavorited ? (
              <FavOnIcon width={35} height={35} />
            ) : (
              <FavOffIcon width={35} height={35} />
            )}
          </FavButton>
        </ContentTop>
        <ProductFlavor>{product.flavor}</ProductFlavor>
        <ContentDown>
          <QuantContainer>
            <CiCircleMinus />
            <p>{product.quantity}</p>
            <CiCirclePlus />
          </QuantContainer>
          <PriceContainer>
            <ProductFlavor>total</ProductFlavor>
            <ProductPrice>r$ {product.price * product.quantity}</ProductPrice>
          </PriceContainer>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

export default ProductCardCart;
