import React, { useState, useContext } from 'react';
import { CategoryProductsContainer, Title, ContentContainer } from './styles';
import { AddProductSection } from '../../styles/ComponentsStyles';

import BreadCrumbs from '../../components/breadCrumbs';
import ProductCardCategory from './productCardCategory/index';
import Footer from '../../components/footer';
import { AddIcon } from '../../assets';

import { ProductContext } from '../../hooks/contextprovider';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CategoryProducts() {
  const [isFavorited, setIsFavorited] = useState(false);

  const role = useSelector(state => state.auth.user.type);
  const { products, categories } = useContext(ProductContext);
  const { categoria } = useParams();
  const navigate = useNavigate();

  const category_id = categories.find(category => category.name === categoria);

  function handleFavoriteToggle(id) {
    setIsFavorited(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'Produtos', to: '/produtos' },
    { label: `${categoria}`, to: `/produtos/${categoria}` },
  ];

  return (
    <CategoryProductsContainer>
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <ContentContainer>
        <Title>{categoria}</Title>
        {products
          .filter(product => product.category_id === category_id.id)
          .map(product => (
            <ProductCardCategory
              key={product.id}
              product={product}
              category={categoria}
              isFavorited={isFavorited[product.id]}
              onToggleFavorited={handleFavoriteToggle}
            />
          ))}
        {role === 'admin' && (
          <AddProductSection onClick={() => navigate('/admin/produto')}>
            <p>Adicionar produto</p>
            <AddIcon />
          </AddProductSection>
        )}
      </ContentContainer>
      <Footer />
    </CategoryProductsContainer>
  );
}

export default CategoryProducts;
