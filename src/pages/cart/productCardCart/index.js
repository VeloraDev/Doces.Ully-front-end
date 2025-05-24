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
  PriceContainer,
  Text,
  QuantContainer,
  ProductPrice,
} from './styles';

import { FavOnIcon, FavOffIcon } from '../../../assets/index';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

function ProductCardCart({ product }) {
  const [isFavorited, setIsFavorited] = useState(false);

  if (!product) return null;

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
        <Text>{product.flavor}</Text>
        <ContentDown>
          <QuantContainer>
            <CiCircleMinus />
            <p>{product.quantity}</p>
            <CiCirclePlus />
          </QuantContainer>
          <PriceContainer>
            <Text>total</Text>
            <ProductPrice>
              r$ {(product.price * product.quantity).toFixed(2)}
            </ProductPrice>
          </PriceContainer>
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

export default ProductCardCart;
