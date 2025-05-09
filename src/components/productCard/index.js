import React, { useState } from 'react';
import {
  ProductContainer,
  ImageContainer,
  Content,
  TitleCategory,
  TitleFlavor,
  Price,
  Button,
  FavIcon,
} from './styles';
import FavOff from '../../assets/icons/fav-icon.svg';
import FavOn from '../../assets/icons/fav-iconActive.svg';

function ProductCard() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ProductContainer>
      <Button onClick={() => setFavorited(favorited ? false : true)} data-id="bolo-pote">
        <FavIcon src={favorited ? FavOn : FavOff} alt="Botão favoritar" />
      </Button>
      <ImageContainer></ImageContainer>
      <Content>
        <TitleCategory>Bolo de pote</TitleCategory>
        <TitleFlavor>Sabor</TitleFlavor>
        <Price>
          <p>R$ 99,99</p>
        </Price>
      </Content>
    </ProductContainer>
  );
}

export default ProductCard;
