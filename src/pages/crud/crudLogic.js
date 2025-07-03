import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { crudSchema } from '../../validations/crud/crudSchema';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

function crudLogic({
  isProduct,
  id,
  tipo,
  productFetch,
  categoryName,
  categoryFetch,
  setImageURL,
  setIsLoading,
  navigate,
  addProduct,
  updateProduct,
  addCategory,
  updateCategory,
  setCategory: setCategoryInfo,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(crudSchema({ isProduct, id })),
  });

  useEffect(() => {
    if (isProduct && productFetch) {
      reset({
        name: productFetch.name ?? '',
        description: productFetch.description ?? '',
        price: productFetch.price ?? 0,
        quantity: productFetch.quantity ?? 0,
        category_id: productFetch.category_id ?? 0,
      });
      setImageURL(productFetch.img_url);
      setCategoryInfo(categoryName);
    }

    if (!isProduct && categoryFetch) {
      reset({ name: categoryFetch.name });
    }
  }, [
    isProduct,
    productFetch,
    categoryFetch,
    categoryName,
    setImageURL,
    setCategoryInfo,
    reset,
  ]);

  function handleApiErrors(error) {
    const errors = error.response?.data?.errors ?? [];
    errors.forEach(erro => toast.error(erro));
  }

  async function onSubmit(data) {
    const { name, image } = data;
    setIsLoading(true);

    try {
      if (!isProduct) {
        if (id) {
          await axios.put(`/categories/${id}`, { name });
          updateCategory(id, name);
        } else {
          const { data: category } = await axios.post(`/categories`, { name });
          addCategory(category);
        }
      } else {
        const formData = new FormData();
        ['name', 'description', 'price', 'quantity', 'category_id'].forEach(
          field => data[field] && formData.append(field, data[field])
        );

        if (image && image instanceof File) {
          formData.append('image', image);
        }

        if (id) {
          const { data: product } = await axios.put(
            `/products/${id}`,
            formData
          );
          updateProduct(product);
        } else {
          const { data: product } = await axios.post('/products', formData);
          addProduct(product);
        }
      }

      toast.success(`${tipo} ${id ? 'atualizado' : 'criado'}!`);
      navigate('/produtos');
    } catch (error) {
      handleApiErrors(error);
    } finally {
      setIsLoading(false);
    }
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error?.message);
    });
  }

  function handleFile(e) {
    const imageFile = e.target.files[0];
    if (!imageFile) return;
    setValue('image', imageFile, { shouldValidate: true });
    setImageURL(URL.createObjectURL(imageFile));
  }

  return {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    onError,
    handleFile,
    errors,
  };
}

export default crudLogic;
