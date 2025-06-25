import React, { useState } from 'react';
import {
  ProductContainer,
  SectionTop,
  SectionTopContent,
  TitleSection,
  Title,
  IconsSection,
  ButtonIcon,
  ImageContainer,
  ProductFigure,
  Details,
  Price,
  PriceText,
  DescriptionSection,
  DescriptionTitle,
  Divider,
  DescriptionText,
  ActionSection,
  ActionButton,
} from './styles';
import {
  FavOnIcon,
  FavOffIcon,
  ShareIcon,
  CartButtonIcon,
  AddCartIcon,
} from '../../assets/index';
import { StockBadge } from '../../styles/ComponentsStyles';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import fetchHook from '../../hooks/fetchHook';
import BreadCrumbs from '../../components/breadCrumbs';
import Footer from '../../components/footer';

function Product() {
  const { id, categoria } = useParams();
  const { fetchResponse, loading } = fetchHook(id, 'products');
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [favorited, setFavorited] = useState(false);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
  }

  if (loading) return <></>;

  const { name, price, quantity, description, img_url } = fetchResponse;

  function checkIsLogged() {
    if (!isLoggedIn) {
      toast.info('Você precisa estar logado!');
      return false;
    }
    return true;
  }

  function handleOrder() {
    if (quantity <= 0) {
      toast.info('Produto está esgotado!');
      return;
    }
    navigate(`/pedido/${categoria}/${id}`);
  }

  function handleAddToCart() {
    if (!checkIsLogged()) return;
    if (quantity <= 0) {
      toast.info('Produto está esgotado!');
      return;
    }

    const productIndex = cart.findIndex(item => item.id === fetchResponse.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...fetchResponse, quantity: 1, category: categoria });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Produto adicionado ao carrinho');
  }

  const CrumbItems = [
    { label: 'Produtos', to: '/produtos' },
    { label: `${categoria}`, to: `/produtos/${categoria}` },
    { label: `${fetchResponse.name}`, to: `/produto/${categoria}/${id}` },
  ];

  return (
    <ProductContainer>
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <SectionTop>
        <SectionTopContent>
          <TitleSection>
            <Title>{name}</Title>
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
          <StockBadge $InStock={quantity > 0}>
            {quantity > 0 ? 'EM ESTOQUE' : 'ESGOTADO'}
          </StockBadge>
          <ImageContainer>
            <ProductFigure src={img_url} />
          </ImageContainer>
        </SectionTopContent>
      </SectionTop>

      <Details>
        <Price>R$ {formatPrice(price)}</Price>
        <PriceText>À vista no pix</PriceText>

        <DescriptionSection>
          <DescriptionTitle>Descrição do produto</DescriptionTitle>
          <Divider />
          <DescriptionText>{description}</DescriptionText>
        </DescriptionSection>

        <ActionSection>
          <ActionButton onClick={handleOrder}>
            comprar
            <CartButtonIcon />
          </ActionButton>
          <ActionButton onClick={handleAddToCart}>
            <AddCartIcon />
          </ActionButton>
        </ActionSection>
      </Details>

      <Footer />
    </ProductContainer>
  );
}

export default Product;
