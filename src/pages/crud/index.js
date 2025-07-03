import { useState, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CrudContainer, Title, Form, ImageContainer } from './styles';
import { ActionButton } from '../../styles/ComponentsStyles';

import LoadingPage from '../../components/loadingPage';
import BreadCrumbs from '../../components/breadCrumbs';
import fetchData from '../../hooks/fetchData';
import crudLogic from './crudLogic';
import { ProductContext } from '../../hooks/contextprovider';
import CustomSelect from '../../components/form/customSelect';
import InputOrder from '../../components/form/inputOrder';

function Crud() {
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState({ id: '', name: '' });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { tipo, id } = useParams();
  const isProduct = tipo === 'produto';

  const imgRef = useRef(null);

  const { categories, addProduct, updateProduct, updateCategory, addCategory } =
    useContext(ProductContext);

  const { fetchResponse: productFetch, isLoading: loadingProd } = fetchData(
    id,
    'products',
    isProduct
  );

  const { fetchResponse: categoryFetch, isLoading: loadingCat } = fetchData(
    id,
    'categories',
    !isProduct
  );

  const shouldFetchCategoryName = Boolean(
    productFetch?.category_id && isProduct
  );

  const { fetchResponse: categoryName, isLoading: loadingCatName } = fetchData(
    productFetch?.category_id,
    'categories',
    shouldFetchCategoryName
  );

  const { register, handleSubmit, setValue, onSubmit, onError, handleFile } =
    crudLogic({
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
      setCategory,
    });

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'produtos', to: '/produtos' },
    { label: 'crud' },
  ];

  return (
    <>
      {(loadingProd || loadingCat || loadingCatName || isLoading) && (
        <LoadingPage />
      )}
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <CrudContainer>
        <Title>
          {id ? 'Editar ' : 'cadastrar '}
          {tipo}
        </Title>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          {isProduct && (
            <ImageContainer onClick={() => imgRef.current?.focus()}>
              <label htmlFor="image">
                {imageURL ? <img src={imageURL} /> : 'Selecione uma imagem'}
              </label>
              <input
                ref={imgRef}
                id="image"
                type="file"
                {...register('image')}
                onChange={handleFile}
              />
            </ImageContainer>
          )}
          <InputOrder label="nome" register={register} field="name" />

          {isProduct && (
            <>
              <InputOrder
                label="descrição"
                register={register}
                field="description"
                isDescription
              />

              <InputOrder label="preço" register={register} field="price" />

              <InputOrder
                label="quantidade"
                register={register}
                field="quantity"
              />

              <CustomSelect
                label="categoria"
                options={categories}
                selectLabel={category.name}
                onSelect={cat => {
                  setCategory({ id: cat.id, name: cat.name });
                  setValue('category_id', cat.id);
                }}
              />
            </>
          )}
          <input type="hidden" {...register('category_id')} />
          <ActionButton type="submit">
            <p>{id ? 'editar' : 'cadastrar'}</p>
          </ActionButton>
        </Form>
      </CrudContainer>
    </>
  );
}

export default Crud;
