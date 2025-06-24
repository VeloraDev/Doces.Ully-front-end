import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { CrudContainer, Title, CrudForm, ImageContainer } from './styles';
import {
  DivInput,
  ActionButton,
  SelectContainer,
  Select,
  SelectTop,
  OptionsContainer,
  OptionsSection,
  Option,
} from '../../styles/ComponentsStyles';

import BreadCrumbs from '../../components/breadCrumbs';
import fetchHook from '../../hooks/fetchHook';
import axios from '../../services/axios';
import { ProductContext } from '../../hooks/contextprovider';
import { crudSchema } from '../../validations/crud/crudSchema';
import { ArrowSelectIcon } from '../../assets';

function ProductCategoryForm() {
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState({ id: '', name: '' });
  const [onSelect, setOnSelect] = useState(false);

  const navigate = useNavigate();
  const { tipo, id } = useParams();
  const isProduct = tipo === 'produto';

  const refs = {
    name: useRef(null),
    description: useRef(null),
    price: useRef(null),
    quantity: useRef(null),
    img_url: useRef(null),
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(crudSchema({ isProduct, id })),
  });

  const { categories, addProduct, updateProduct, updateCategory, addCategory } =
    useContext(ProductContext);

  const { fetchResponse: productFetch, loading: loadingProd } = fetchHook(
    id,
    'products',
    isProduct
  );
  const { fetchResponse: categoryFetch, loading: loadingCat } = fetchHook(
    id,
    'categories',
    !isProduct
  );

  const shouldFetchCategoryName = Boolean(
    productFetch?.category_id && isProduct
  );
  const { fetchResponse: categoryName, loading: loadingCatName } = fetchHook(
    productFetch?.category_id,
    'categories',
    shouldFetchCategoryName
  );

  useEffect(() => {
    if (!id) return;

    if (!isProduct && categoryFetch) {
      reset({ name: categoryFetch.name });
    }
    if (isProduct && productFetch) {
      reset({
        name: productFetch.name ?? '',
        description: productFetch.description ?? '',
        price: productFetch.price ?? 0,
        quantity: productFetch.quantity ?? 0,
        category_id: productFetch.category_id ?? 0,
      });
      setImageURL(productFetch.img_url);
      setCategory(categoryName);
    }
  }, [isProduct, id, categoryFetch, productFetch, reset, categoryName]);

  if (loadingProd || loadingCat) return;

  function handleApiErrors(error) {
    const errors = error.response?.data?.errors ?? [];
    (Array.isArray(errors) ? errors : [errors]).forEach(erro =>
      toast.error(erro)
    );
  }

  async function onSubmit(data) {
    const { name, image } = data;
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

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'produtos', to: '/produtos' },
    { label: 'crud' },
  ];

  return (
    <>
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <CrudContainer>
        <Title>
          {id ? 'Editar ' : 'cadastrar '}
          {tipo}
        </Title>
        <CrudForm onSubmit={handleSubmit(onSubmit, onError)}>
          {isProduct && (
            <ImageContainer onClick={() => refs.img_url.current?.focus()}>
              <label htmlFor="image">
                {imageURL ? <img src={imageURL} /> : 'Selecione uma imagem'}
              </label>
              <input
                ref={refs.img_url}
                id="image"
                type="file"
                {...register('image')}
                onChange={handleFile}
              />
            </ImageContainer>
          )}

          <DivInput onClick={() => refs.name.current?.focus()}>
            <label htmlFor="name">nome</label>
            <input
              ref={refs.name}
              id="name"
              type="text"
              {...register('name')}
            />
          </DivInput>

          {isProduct && (
            <>
              <DivInput
                onClick={() => refs.description.current?.focus()}
                $isDescription={true}>
                <label htmlFor="descricao">descrição</label>
                <textarea
                  ref={refs.description}
                  id="descricao"
                  rows="5"
                  cols="50"
                  {...register('description')}></textarea>
              </DivInput>

              <DivInput onClick={() => refs.price.current?.focus()}>
                <label htmlFor="preco">preço</label>
                <input
                  ref={refs.price}
                  id="preco"
                  type="text"
                  {...register('price')}
                />
              </DivInput>

              <DivInput onClick={() => refs.quantity.current?.focus()}>
                <label htmlFor="quantidade">quantidade</label>
                <input
                  ref={refs.quantity}
                  id="quantidade"
                  type="text"
                  {...register('quantity')}
                />
              </DivInput>

              <SelectContainer>
                <DivInput>
                  <label htmlFor="categoria">categoria</label>
                  <Select
                    onClick={() => setOnSelect(prev => !prev)}
                    id="categoria"
                    type="text">
                    <SelectTop>
                      <p>
                        {category.name !== '' ? category.name : 'selecione'}
                      </p>
                      <ArrowSelectIcon />
                    </SelectTop>
                  </Select>
                </DivInput>

                <OptionsContainer $onSelect={onSelect}>
                  <OptionsSection $onSelect={onSelect}>
                    {categories.map(category => (
                      <Option
                        key={category.id}
                        onClick={() => {
                          setOnSelect(false);
                          setValue('category_id', category.id);
                        }}>
                        {category.name}
                      </Option>
                    ))}
                  </OptionsSection>
                </OptionsContainer>
              </SelectContainer>
            </>
          )}
          <input type="hidden" {...register('category_id')} />
          <ActionButton type="submit">
            <p>{id ? 'editar' : 'cadastrar'}</p>
          </ActionButton>
        </CrudForm>
      </CrudContainer>
    </>
  );
}

export default ProductCategoryForm;
