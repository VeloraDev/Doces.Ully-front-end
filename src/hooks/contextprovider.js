import { useState, useEffect, createContext } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesMap, setCategoriesMap] = useState([]);

  function formatPrice(price) {
    const priceNumber = Number(price);
    return priceNumber.toFixed(2).replace('.', ',');
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data: products } = await axios.get('/products');
        const { data: categories } = await axios.get('/categories');

        const categoriesMap = categories.reduce((map, category) => {
          map[category.id] = category.name;
          return map;
        }, {});

        const productsWithCategoryNameAndFormattedPrice = products.map(
          product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
            category_name: categoriesMap[product.category_id],
          })
        );

        setCategoriesMap(categoriesMap);
        setProducts(productsWithCategoryNameAndFormattedPrice);
        setCategories(categories);
      } catch (error) {
        const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';
        errors.forEach(erro => toast.error(erro));
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  function addProduct(product) {
    setProducts(old => [
      ...old,
      {
        ...product,
        priceFormatted: formatPrice(product.price),
        category_name: categoriesMap[product.category_id],
      },
    ]);
  }

  function updateProduct(product) {
    const { id, name, description, price, quantity, img_url, category_id } =
      product;
    setProducts(old =>
      old.map(product => {
        if (product.id === id) {
          return {
            id: id,
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            img_url: img_url,
            category_id: category_id,
            priceFormatted: formatPrice(price),
            category_name: categoriesMap[product.category_id],
          };
        } else {
          return product;
        }
      })
    );
  }

  function removeProduct(id) {
    setProducts(old => old.filter(product => product.id !== id));
  }

  function addCategory(category) {
    setCategories(old => [...old, category]);
  }

  function updateCategory(id, name) {
    setCategories(old =>
      old.map(category => {
        if (category.id === id) {
          return {
            ...category,
            name: name,
          };
        } else {
          return category;
        }
      })
    );
  }

  function removeCategory(id) {
    setCategories(old => old.filter(category => category.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        isLoading,
        addProduct,
        updateProduct,
        removeProduct,
        addCategory,
        updateCategory,
        removeCategory,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
