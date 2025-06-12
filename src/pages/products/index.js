import React, { useContext, useState } from 'react';
import { CardsContainer, Line } from '../../styles/ComponentsStyles';
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
import BreadCrumbs from '../../components/breadCrumbs';
import { ProductContext } from '../../services/contextprovider';

import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  const { products, categories } = useContext(ProductContext);

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'Produtos', to: '/produtos' },
  ];

  return (
    <ProductsContainer>
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <SectionCategory>
        {categories.map(category => (
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
              {products
                .filter(product => product.category_id === category.id)
                .map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isHome={false}
                  />
                ))}
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
