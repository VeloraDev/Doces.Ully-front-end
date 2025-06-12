import React, { useState, useEffect, createContext } from 'react';
import axios from './axios';
import { get } from 'lodash';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data: products } = await axios.get('/products');
        const { data: categories } = await axios.get('/categories');

        const formatted = products.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        const categoriesMap = categories.reduce((map, category) => {
          map[category.id] = category.name;
          return map;
        }, {});

        const productsWithCategory = formatted.map(product => ({
          ...product,
          category_name: categoriesMap[product.category_id],
        }));

        setProducts(productsWithCategory);
        setCategories(categories);
      } catch (error) {
        const status = get(error, 'response.status', 0);
        const errorMessage = get(
          error,
          'response.data.message',
          'Ocorreu um erro!'
        );

        if (status === 404) {
          console.log(errorMessage);
        } else {
          console.log('erro desconhecido!');
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
