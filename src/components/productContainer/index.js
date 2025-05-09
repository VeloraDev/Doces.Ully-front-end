import React from 'react';
import { Container, Title, CardsContainer, Line } from './styles';
import ProductCard from '../productCard';
import ArrowCatogory from '../../assets/icons/arrow-category.svg';

function ProductContainer() {
  return (
    <Container>
      <Title>
        <h1>Produtos</h1>
        <button>
          <img src={ArrowCatogory} />
        </button>
      </Title>
      <CardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsContainer>
      <Line />
    </Container>
  );
}

export default ProductContainer;
