import React from 'react';
import {
  Container,
  SectionTop,
  Title,
  ActionButton,
  CardsContainer,
} from './styles';

import ProductCard from '../productCard';
import { ArrowCategory } from '../../assets/index';

function ProductContainer() {
  return (
    <Container>
      <SectionTop>
        <Title>Produtos</Title>
        <ActionButton>
          <ArrowCategory width={30} height={21} />
        </ActionButton>
      </SectionTop>
      <CardsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsContainer>
    </Container>
  );
}

export default ProductContainer;
