import { useState, useEffect } from 'react';
import axios from '../services/axios';
import { toast } from 'react-toastify';

export default function fetchAdrresses() {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAddresses() {
      try {
        const { data } = await axios.get('/addresses');
        setAddresses(data);
      } catch (error) {
        const errors = error.response?.data?.errors || 'Ocorreu um erro';
        errors.forEach(erro => toast.error(erro));
      } finally {
        setIsLoading(false);
      }
    }
    getAddresses();
  }, []);

  return { addresses, isLoading };
}
