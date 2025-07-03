import { useContext, useState } from 'react';
import {
  AddProductSection,
  CardsContainer,
  Line,
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
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import ConfirmModal from '../../components/confirmModal';
import LoadingPage from '../../components/loadingPage';

function Products() {
  const navigate = useNavigate();
  const { products, categories, removeCategory } = useContext(ProductContext);
  const role = useSelector(state => state.auth.user.type);

  const [selectedConfirm, setSelectedConfirm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteCategory(id) {
    try {
      setIsLoading(true);
      await axios.delete(`/categories/${id}`);
      toast.success('Categoria deletada com sucesso');
      removeCategory(id);
    } catch (error) {
      const errors = error.response?.data?.errors ?? [];
      errors.forEach(erro => toast.error(erro));
    } finally {
      setSelectedConfirm(null);
      setIsLoading(false);
    }
  }

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'Produtos', to: '/produtos' },
  ];

  return (
    <ProductsContainer>
      {isLoading && <LoadingPage />}
      <BreadCrumbs items={CrumbItems} size="big"></BreadCrumbs>
      <SectionCategory>
        {categories.map(category => (
          <SectionProducts key={category.id}>
            <ConfirmModal
              visible={selectedConfirm === category.id}
              onCancel={() => setSelectedConfirm(null)}
              onConfirm={() => deleteCategory(selectedConfirm)}
              message={`Excluir ${category.name}`}
              keyId={category.id}
            />
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
      </SectionCategory>
      {role === 'admin' && (
        <CardsContainer onClick={() => navigate('/admin/categoria')}>
          <AddProductSection>
            <p>criar nova categoria</p>
            <AddIcon />
          </AddProductSection>
        </CardsContainer>
      )}
      <Footer />
    </ProductsContainer>
  );
}

export default Products;
