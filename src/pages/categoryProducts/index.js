import React, { useState } from 'react';
import { CategoryProductsContainer, Title } from './styles';
import ProductCardCategory from './productCardCategory/index';

function CategoryProducts() {
  const [isFavorited, setIsFavorited] = useState(false);

  const products = [
    {
      id: 1,
      flavor: 'Bolo de pote',
      price: 'R$ 99,99',
      inStock: true,
    },
    {
      id: 2,
      flavor: 'Bolo de pote',
      price: 'R$ 99,99',
      inStock: false,
    },
  ];

  function handleFavoriteToggle(id) {
    setIsFavorited(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <CategoryProductsContainer>
      <Title>categoria</Title>

      {products.map(product => (
        <ProductCardCategory
          key={product.id}
          id={product.id}
          flavor={product.flavor}
          price={product.price}
          inStock={product.inStock}
          isFavorited={isFavorited[product.id]}
          onToggleFavorited={handleFavoriteToggle}
        />
      ))}
    </CategoryProductsContainer>
  );
}

export default CategoryProducts;
