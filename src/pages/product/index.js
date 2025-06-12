import React, { useEffect, useState } from 'react';
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

import axios from '../../services/axios';
import Footer from '../../components/footer';

import { get } from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Product() {
  const { id, categoria } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState();
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    if (!id) return;

    async function getProduct() {
      try {
        const { data: product } = await axios.get(`/products/${id}`);
        setProductData(product);
      } catch (error) {
        const status = get(error, 'response.status', 0);
        const errorMessage = get(
          error,
          'response.data.message',
          'Ocorreu um erro!'
        );

        if (status === 404) {
          toast.error(errorMessage);
          navigate('*');
        } else {
          console.log('erro desconhecido!');
        }
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id, navigate]);

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
  }

  if (loading) return;

  const { name, price, quantity, description, img_url } = productData;

  function handleAddToCart() {
    if (productData.quantity === 0) {
      toast.error('Produto está zerado no estoque!');
      return;
    }

    const productIndex = cart.findIndex(item => item.id === productData.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...productData, quantity: 1, category: categoria });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Produto adicionado ao carrinho :)');
  }

  return (
    <ProductContainer>
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

        <ActionButton>
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
