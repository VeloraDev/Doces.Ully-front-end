import React, { useState, useContext } from 'react';
import { CategoryProductsContainer, Title, ContentContainer } from './styles';
import ProductCardCategory from './productCardCategory/index';
import Footer from '../../components/footer';

import { ProductContext } from '../../services/contextprovider';
import { useParams } from 'react-router-dom';

function CategoryProducts() {
  const [isFavorited, setIsFavorited] = useState(false);

  const { products, categories } = useContext(ProductContext);
  const { categoria } = useParams();

  const category_id = categories.find(category => category.name === categoria);

  function handleFavoriteToggle(id) {
    setIsFavorited(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <CategoryProductsContainer>
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
      </ContentContainer>
      <Footer />
    </CategoryProductsContainer>
  );
}

export default CategoryProducts;
