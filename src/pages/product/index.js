import React, { useState } from 'react';
import {
  ProductContainer,
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

import { useParams } from 'react-router-dom';
import Footer from '../../components/footer';

function Product() {
  const [favorited, setFavorited] = useState(false);
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Produto 1',
      price: 99.99,
      category: 'Bolo de pote',
      flavor: 'Chocolate',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 49.99,
      category: 'Bolo de pote',
      flavor: 'Morango',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 29.99,
      category: 'Bolo de pote',
      flavor: 'Baunilha',
      quantity: 1,
    },
  ];

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const numberId = parseInt(id);
    const existingProduct = cart.findIndex(item => item.id === numberId);

    if (existingProduct !== -1) {
      cart[existingProduct].quantity += 1;
    } else {
      const productToAdd = products.find(product => product.id === numberId);
      cart.push({ ...productToAdd });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <ProductContainer>
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
        <ActionButton onClick={addToCart}>
          <AddCartIcon />
        </ActionButton>
      </Details>

      <Footer />
    </ProductContainer>
  );
}

export default Product;
