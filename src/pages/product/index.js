import { useState } from 'react';
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

import fetchData from '../../hooks/fetchData';
import BreadCrumbs from '../../components/breadCrumbs';
import Footer from '../../components/footer';
import Loadingpage from '../../components/loadingPage';
import fetchCart from '../../hooks/fetchCart';

function Product() {
  const { id, categoria } = useParams();
  const { fetchResponse, isLoading } = fetchData(id, 'products');
  const { addProduct } = fetchCart();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [favorited, setFavorited] = useState(false);
  const { name, price, quantity, description, img_url } = fetchResponse;

  function formatPrice(price) {
    const priceNumber = Number(price);
    return priceNumber.toFixed(2).replace('.', ',');
  }

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
    addProduct({ ...fetchResponse, quantity: 1, category: categoria });
    toast.success('Produto adicionado ao carrinho');
  }

  const CrumbItems = [
    { label: 'Produtos', to: '/produtos' },
    { label: `${categoria}`, to: `/produtos/${categoria}` },
    { label: `${fetchResponse.name}`, to: `/produto/${categoria}/${id}` },
  ];

  return (
    <ProductContainer>
      {isLoading && <Loadingpage />}
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
          <StockBadge $inStock={quantity > 0}>
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
