import React from 'react';
import { Container, Title, CardsContainer } from './styles';
import ProductCard from '../productCard';

function ProductContainer() {
  return (
    <Container>
      <Title>Produtos</Title>
      <CardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsContainer>
    </Container>
  );
}

export default ProductContainer;
