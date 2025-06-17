import React, { useState, useRef, useEffect, useContext } from 'react';
import { CrudContainer, Title, CrudForm } from './styles';
import { DivInput, ActionButton } from '../../styles/ComponentsStyles';

import { useParams, useNavigate } from 'react-router-dom';
import fetchCategory from '../../hooks/fetchCategory';
import fetchProduct from '../../hooks/fetchProduct';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { crudSchema } from '../../validations/crud/crudSchema';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import { ProductContext } from '../../hooks/contextprovider';

function CRUD() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();

  const { updateCategory, addCategory } = useContext(ProductContext);

  const { categoryData, loading: loadingCat } = fetchCategory(
    id,
    tipo === 'categoria'
  );
  const { productData, loading: loadingProd } = fetchProduct(
    id,
    tipo === 'produto'
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(crudSchema({ tipo })),
  });

  async function onSubmit({ name }) {
    if (tipo === 'categoria') {
      if (id) {
        try {
          await axios.put(`/categories/${id}`, { name });
          toast.success('categoria atualizada com sucesso!');
          navigate('/produtos');
          updateCategory(id, name);
        } catch (error) {
          const errors = error.response?.data?.errors ?? [];

          if (Array.isArray(errors)) {
            errors.forEach(erro => toast.error(erro));
          } else if (typeof errors === 'string') {
            toast.error(errors);
          }
        }
      } else {
        try {
          const { data: category } = await axios.post(`/categories`, { name });
          toast.success('categoria criada com sucesso!');
          navigate('/produtos');
          addCategory(category);
        } catch (error) {
          const errors = error.response?.data?.errors ?? [];

          if (Array.isArray(errors)) {
            errors.forEach(erro => toast.error(erro));
          } else if (typeof errors === 'string') {
            toast.error(errors);
          }
        }
      }
    }
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error);
    });
  }

  useEffect(() => {
    if (!id) return;

    if (tipo === 'categoria') {
      reset({ name: categoryData.name });
    }
    if (tipo === 'produto') {
      reset({ name: productData.name });
    }
  }, [tipo, id, categoryData, productData, reset]);

  const refs = {
    name: useRef(null),
    description: useRef(null),
    price: useRef(null),
    quantity: useRef(null),
    category_id: useRef(null),
    img_url: useRef(null),
  };

  return (
    <CrudContainer>
      <Title>
        {id ? 'Editar ' : 'cadastrar '}
        {tipo}
      </Title>
      <CrudForm onSubmit={handleSubmit(onSubmit, onError)}>
        <DivInput onClick={() => refs.name.current?.focus()}>
          <label htmlFor="name">nome</label>
          <input ref={refs.name} id="name" type="text" {...register('name')} />
        </DivInput>

        {tipo === 'produto' && (
          <>
            <DivInput onClick={() => refs.description.current?.focus()}>
              <label htmlFor="descricao">descrição</label>
              <input ref={refs.description} id="descricao" type="text" />
            </DivInput>

            <DivInput onClick={() => refs.price.current?.focus()}>
              <label htmlFor="preco">preço</label>
              <input ref={refs.price} id="preco" type="text" />
            </DivInput>

            <DivInput onClick={() => refs.quantity.current?.focus()}>
              <label htmlFor="quantidade">quantidade</label>
              <input ref={refs.quantity} id="quantidade" type="text" />
            </DivInput>

            <DivInput onClick={() => refs.img_url.current?.focus()}>
              <label htmlFor="imagem">imagem</label>
              <input ref={refs.img_url} id="imagem" type="text" />
            </DivInput>
          </>
        )}

        <ActionButton type="submit">
          <p>{id ? 'editar' : 'cadastrar'}</p>
        </ActionButton>
      </CrudForm>
    </CrudContainer>
  );
}

export default CRUD;
