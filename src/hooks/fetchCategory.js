import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

function fetchCategory(id, enable = true) {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !enable) return;

    async function getCategory() {
      try {
        const { data: category } = await axios.get(`/categories/${id}`);
        setCategoryData(category);
      } catch (error) {
        const errors = error.response?.data?.error ?? 'Ocorreu um erro!';

        if (Array.isArray(errors)) {
          errors.forEach(erro => toast.error(erro));
        } else if (typeof errors === 'string') {
          toast.error(errors);
        }
      } finally {
        setLoading(false);
      }
    }
    getCategory();
  }, [id, enable]);

  return { categoryData, loading };
}

export default fetchCategory;
