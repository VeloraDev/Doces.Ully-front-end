import React, { useState } from 'react';
import {
  ProductContainer,
  SectionTop,
  SectionTopContent,
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
import { toast } from 'react-toastify';

function Product() {
  const [favorited, setFavorited] = useState(false);
  const { id } = useParams();
  const numberId = parseInt(id);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = cart.find(item => item.id === numberId);

  function addToCart() {
    alert('Ainda não funciona :(');
    return;

    const productToAdd = products.find(product => product.id === numberId);

    if (productToAdd.quantity === 0) {
      toast.error('Produto está zerado no estoque!');
      return;
    }

    const productIndex = cart.findIndex(item => item.id === numberId);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...productToAdd });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Produto adicionado ao carrinho :)');
  }

  return (
    <ProductContainer>
      <SectionTop>
        <SectionTopContent>
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
          <StockBadge $InStock={product?.quantity > 0}>
            {product?.quantity > 0 ? 'EM ESTOQUE' : 'ESGOTADO'}
          </StockBadge>
          <ProductFigure></ProductFigure>
        </SectionTopContent>
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
