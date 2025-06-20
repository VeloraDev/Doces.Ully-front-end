import React, { useContext, useState } from 'react';
import {
  AddProductSection,
  CardsContainer,
  Line,
  ConfirmContainer,
  ConfirmSection,
  ConfirmText,
  ActionGroup,
  CancelButton,
  ConfirmButton,
} from '../../styles/ComponentsStyles';
import {
  ProductsContainer,
  SectionCategory,
  SectionProducts,
  SectionTop,
  Title,
  SectionIcons,
  AddProductIcon,
} from './styles';

import ProductCard from '../../components/productCard';
import Footer from '../../components/footer';
import BreadCrumbs from '../../components/breadCrumbs';
import { ProductContext } from '../../hooks/contextprovider';
import { ArrowCategoryDark, EditIcon, DeleteIcon, AddIcon } from '../../assets';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

function Products() {
  const navigate = useNavigate();
  const { products, categories, removeCategory } = useContext(ProductContext);
  const role = useSelector(state => state.auth.user.type);

  const [selectedConfirm, setSelectedConfirm] = useState(null);

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'Produtos', to: '/produtos' },
  ];

  async function deleteCategory(id) {
    try {
      await axios.delete(`/categories/${id}`);
      toast.success('Categoria deletada com sucesso');
      removeCategory(id);
    } catch (error) {
      const errors = error.response?.data?.errors ?? [];

      if (Array.isArray(errors)) {
        errors.forEach(erro => {
          toast.error(erro);
        });
      } else if (typeof errors === 'string') {
        toast.error(errors);
      }
    }
    setSelectedConfirm(null);
  }

  return (
    <ProductsContainer>
      <BreadCrumbs items={CrumbItems}></BreadCrumbs>
      <SectionCategory>
        {categories.map(category => (
          <SectionProducts key={category.id}>
            <AnimatePresence>
              {selectedConfirm === category.id && (
                <ConfirmContainer
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedConfirm(null)}>
                  <ConfirmSection onClick={e => e.stopPropagation()}>
                    <ConfirmText>Excluir {category.name}?</ConfirmText>
                    <Line />
                    <ActionGroup>
                      <CancelButton onClick={() => setSelectedConfirm(null)}>
                        Cancelar
                      </CancelButton>
                      <ConfirmButton
                        onClick={() => deleteCategory(selectedConfirm)}>
                        Sim
                      </ConfirmButton>
                    </ActionGroup>
                  </ConfirmSection>
                </ConfirmContainer>
              )}
            </AnimatePresence>
            <SectionTop>
              <Title>{category.name}</Title>
              <SectionIcons>
                <ArrowCategoryDark
                  onClick={() => navigate(`/produtos/${category.name}`)}
                  width={30}
                  height={19}
                />
                {role === 'admin' && (
                  <>
                    <EditIcon
                      onClick={() =>
                        navigate(`/admin/categoria/${category.id}`)
                      }
                    />
                    <DeleteIcon
                      onClick={() => setSelectedConfirm(category.id)}
                    />
                  </>
                )}
              </SectionIcons>
            </SectionTop>
            <CardsContainer $isHome={false}>
              {products
                .filter(product => product.category_id === category.id)
                .map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isHome={false}
                  />
                ))}
              {role === 'admin' && (
                <AddProductIcon
                  onClick={() =>
                    navigate(`/admin/produto`, {
                      state: {
                        categoryId: category.id,
                        categoryName: category.name,
                      },
                    })
                  }>
                  <AddIcon />
                </AddProductIcon>
              )}
            </CardsContainer>
            <Line />
          </SectionProducts>
        ))}
        {role === 'admin' && (
          <CardsContainer onClick={() => navigate('/admin/categoria')}>
            <AddProductSection>
              <p>criar nova categoria</p>
              <AddIcon />
            </AddProductSection>
          </CardsContainer>
        )}
      </SectionCategory>
      <Footer />
    </ProductsContainer>
  );
}

export default Products;
