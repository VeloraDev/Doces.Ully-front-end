import React, { useState } from 'react';
import {
  ProductContainer,
  PathSection,
  Branch,
  SectionTop,
  TitleSection,
  Title,
  IconsSection,
  ButtonIcon,
  StockBadge,
  ProductFigure,
  Details,
  Price,
  PriceText,
  DescriptionSection,
  DescriptionTitle,
  Divider,
  DescriptionText,
  ActionButton,
} from './styles';

import {
  FavOnIcon,
  FavOffIcon,
  ShareIcon,
  BuyIcon,
  AddCartIcon,
} from '../../assets/index';

import Footer from '../../components/footer';

function Product() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ProductContainer>
      <PathSection>
        <Branch>...</Branch>
        <Branch>></Branch>
        <Branch>PRODUTOS</Branch>
        <Branch>></Branch>
        <Branch>cATEGORIA</Branch>
        <Branch>></Branch>
        <Branch>NOME</Branch>
      </PathSection>
      <SectionTop>
        <TitleSection>
          <Title>Nome do produto</Title>
          <IconsSection>
            <ButtonIcon>
              <ShareIcon />
            </ButtonIcon>
            <ButtonIcon onClick={() => setFavorited(prev => !prev)}>
              {favorited ? (
                <FavOnIcon width={35} height={35} />
              ) : (
                <FavOffIcon width={35} height={35} />
              )}
            </ButtonIcon>
          </IconsSection>
        </TitleSection>
        <StockBadge>EM ESTOQUE</StockBadge>
        <ProductFigure></ProductFigure>
      </SectionTop>

      <Details>
        <Price>R$ 99,99</Price>
        <PriceText>À vista no pix</PriceText>

        <DescriptionSection>
          <DescriptionTitle>Descrição do produto</DescriptionTitle>
          <Divider />
          <DescriptionText>
            Esse bolo aqui eh fenomenal comprem todos agora ele é de chocolate
            com chocolate e comprem comprem
          </DescriptionText>
        </DescriptionSection>

        <ActionButton>
          <BuyIcon />
        </ActionButton>
        <ActionButton>
          <AddCartIcon />
        </ActionButton>
      </Details>

      <Footer />
    </ProductContainer>
  );
}

export default Product;
