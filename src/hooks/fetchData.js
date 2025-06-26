import { useState, useEffect } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

function fetchData(id, type, enable = true) {
  const [fetchResponse, setFetchResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id || !enable) {
      setIsLoading(false);
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
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [id, type, enable]);

  return { fetchResponse, isLoading };
}

export default fetchData;
