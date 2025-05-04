import React, { useState } from 'react';
import { ProductContainer, ImageContainer, Content, ContentDown, Title, Price, Button, FavIcon } from './styles';
import FavOff from '../../assets/icons/FavIcon.svg';
import FavOn from '../../assets/icons/FavIconActive.svg';

function ProductCard() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <Content>
        <Title>Bolo de pote</Title>
        <ContentDown>
          <Price>R$ 99,99</Price>
          <Button onClick={() => setFavorited(favorited ? false : true)} data-id="bolo-pote">
            <FavIcon src={favorited ? FavOn : FavOff} alt="Botão favoritar" />
          </Button>
        </ContentDown>
      </Content>
    </ProductContainer>
  );
}

export default ProductCard;
