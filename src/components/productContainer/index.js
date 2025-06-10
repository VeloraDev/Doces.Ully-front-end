import React from 'react';
import { CardsContainer } from '../../styles/ComponentsStyles';
import { Container, SectionTop, Title, ActionButton } from './styles';

import { useNavigate } from 'react-router-dom';
import ProductCard from '../productCard';
import { ArrowCategory } from '../../assets/index';

function ProductContainer() {
  const navigate = useNavigate();

  return (
    <Container>
      <SectionTop>
        <Title>Produtos</Title>
        <ActionButton onClick={() => navigate('/produtos')}>
          <ArrowCategory width={30} height={21} />
        </ActionButton>
      </SectionTop>
      <CardsContainer $isHome={true}>
        <ProductCard isHome={true} />
        <ProductCard isHome={true} />
        <ProductCard isHome={true} />
      </CardsContainer>
    </Container>
  );
}

export default ProductContainer;
