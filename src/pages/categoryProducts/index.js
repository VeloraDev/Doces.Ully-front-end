import React, { useState } from 'react';
import { CategoryProductsContainer, Title, ContentContainer } from './styles';
import ProductCardCategory from './productCardCategory/index';
import Footer from '../../components/footer';

function CategoryProducts() {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteToggle(id) {
    setIsFavorited(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <CategoryProductsContainer>
      <ContentContainer>
        <Title>categoria</Title>

        {/* {products.map(product => (
          <ProductCardCategory
            key={product.id}
            product={product}
            isFavorited={isFavorited[product.id]}
            onToggleFavorited={handleFavoriteToggle}
          />
        ))} */}
      </ContentContainer>
      <Footer />
    </CategoryProductsContainer>
  );
}

export default CategoryProducts;
