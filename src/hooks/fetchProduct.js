import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

function fetchProduct(id, enable = true) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !enable) {
      setLoading(false);
      return;
    }

    async function getProduct() {
      try {
        const { data: product } = await axios.get(`/products/${id}`);
        setProductData(product);
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
    getProduct();
  }, [id, enable]);

  return { productData, loading };
}

export default fetchProduct;
