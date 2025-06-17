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

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FetchProduct from '../../hooks/fetchProduct';
import BreadCrumbs from '../../components/breadCrumbs';
import Footer from '../../components/footer';

function Product() {
  const { id, categoria } = useParams();
  const { productData, loading } = FetchProduct(id);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [favorited, setFavorited] = useState(false);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
  }

  if (loading) return <></>;

  const { name, price, quantity, description, img_url } = productData;

  function checkIsLogged() {
    if (!isLoggedIn) {
      toast.info('Você precisa estar logado!');
      return false;
    }
    return true;
  }

  function handleAddToCart() {
    if (!checkIsLogged()) return;

    if (productData.quantity === 0) {
      toast.info('Produto está zerado no estoque!');
      return;
    }

    const productIndex = cart.findIndex(item => item.id === productData.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...productData, quantity: 1, category: categoria });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Produto adicionado ao carrinho');
  }

  const CrumbItems = [
    { label: '...', to: '/' },
    { label: 'Produtos', to: '/produtos' },
    { label: `${categoria}`, to: `/produtos/${categoria}` },
    { label: `${productData.name}`, to: `/produto/${categoria}/${id}` },
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
          <ProductFigure src={img_url} />
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

        <ActionButton onClick={() => navigate('/pedido')}>
          <BuyIcon />
        </ActionButton>
        <ActionButton onClick={handleAddToCart}>
          <AddCartIcon />
        </ActionButton>
      </Details>

      <Footer />
    </ProductContainer>
  );
}

export default Product;
