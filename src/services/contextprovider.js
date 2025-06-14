import React, { useState, useEffect, createContext } from 'react';
import axios from './axios';
import { toast } from 'react-toastify';

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
        const status = error.response?.status ?? 0;
        const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';

        if (errors.lenght > 0) {
          errors.map(erro => toast.error(erro));
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
