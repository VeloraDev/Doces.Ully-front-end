import React, { useState, useEffect, createContext } from 'react';
import axios from '../services/axios';
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
        const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';

        if (Array.isArray(errors)) {
          errors.forEach(erro => toast.error(erro));
        } else if (typeof errors === 'string') {
          toast.error(errors);
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  function removeProduct(id) {
    setProducts(old => old.filter(product => product.id !== id));
  }

  function uptadeProduct() {}

  function addProduct() {}

  function removeCategory(id) {
    setCategories(old => old.filter(category => category.id !== id));
  }

  function updateCategory(id, name) {
    setCategories(old =>
      old.map(product => {
        if (product.id === id) {
          return {
            ...product,
            name: name,
          };
        } else {
          return product;
        }
      })
    );
  }

  function addCategory(category) {
    setCategories(old => [...old, category]);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        removeProduct,
        removeCategory,
        updateCategory,
        addCategory,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
