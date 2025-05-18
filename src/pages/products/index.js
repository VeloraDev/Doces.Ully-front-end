import React from 'react';
import { CardsContainer, Line } from '../../styles/GlobalStyles';
import {
  ProductsContainer,
  PathSection,
  SectionCategory,
  SectionProducts,
  SectionTop,
  Title,
} from './styles';

import { ArrowCategoryDark } from '../../assets';
import ProductCard from '../../components/productCard';
import Footer from '../../components/footer';

import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  const categorys = [
    {
      id: 1,
      name: 'Bolo de pote',
    },
    {
      id: 2,
      name: 'Palha italiana',
    },
    {
      id: 3,
      name: 'Bolo encomendado',
    },
  ];

  return (
    <ProductsContainer>
      <PathSection></PathSection>

      <SectionCategory>
        {categorys.map(category => (
          <SectionProducts key={category.id}>
            <SectionTop>
              <Title>{category.name}</Title>
              <ArrowCategoryDark
                onClick={() => navigate(`/produtos/${category.name}`)}
                width={30}
                height={19}
              />
            </SectionTop>
            <CardsContainer $isHome={false}>
              <ProductCard isHome={false} />
              <ProductCard isHome={false} />
              <ProductCard isHome={false} />
              <ProductCard isHome={false} />
            </CardsContainer>
            <Line />
          </SectionProducts>
        ))}
      </SectionCategory>

      <Footer />
    </ProductsContainer>
  );
}

export default Products;
