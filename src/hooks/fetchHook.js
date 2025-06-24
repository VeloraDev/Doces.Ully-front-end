import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

function fetchHook(id, type, enable = true) {
  const [fetchResponse, setFetchResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !enable) {
      setLoading(false);
      return;
    }

    async function fetchRequest() {
      try {
        const { data } = await axios.get(`/${type}/${id}`);
        setFetchResponse(data);
      } catch (error) {
        const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';
        errors.forEach(erro => toast.error(erro));
      } finally {
        setLoading(false);
      }
    }
    fetchRequest();
  }, [id, type, enable]);

  return { fetchResponse, loading };
}

export default fetchHook;
