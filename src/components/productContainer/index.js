import React, { useEffect, useState, useContext } from 'react';
import { CardsContainer } from '../../styles/ComponentsStyles';
import { Container, SectionTop, Title, ActionButton } from './styles';

import { useNavigate } from 'react-router-dom';
import ProductCard from '../productCard';
import { ArrowCategory } from '../../assets/index';
import { ProductContext } from '../../services/contextprovider';

function ProductContainer() {
  const { products } = useContext(ProductContext);
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
        {products.map(product => (
          <ProductCard key={product.id} product={product} isHome={true} />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default ProductContainer;
