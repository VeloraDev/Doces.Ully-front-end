import { useCallback, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import ConfirmModal from '../../../components/confirmModal';

import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  InfoSection,
  FavButton,
  ContentDown,
  StockBadge,
} from '../../../styles/ComponentsStyles';
import {
  FavOnIcon,
  FavOffIcon,
  EditProductLightIcon,
  DeleteLightIcon,
} from '../../../assets/index';

import { ProductContext } from '../../../hooks/contextprovider';
import { ProductFlavor, Price, SeeMore } from './styles';
import LoadingPage from '../../../components/loadingPage';

function ProductCardCategory({
  product,
  category,
  isFavorited,
  onToggleFavorited,
}) {
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.user.type);
  const { removeProduct } = useContext(ProductContext);
  const { id, name, quantity, img_url, priceFormatted } = product || {};

  const [selectedConfirm, setSelectedConfirm] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = useCallback(() => {
    onToggleFavorited(id);
  }, [onToggleFavorited, id]);

  const handleSeeMore = useCallback(() => {
    navigate(`/produto/${category}/${id}`);
  }, [navigate, category, id]);

  async function handleDelete() {
    try {
      setIsLoading(true);
      await axios.delete(`/products/${id}`);
      toast.success('produto deletado!');
      setSelectedConfirm(false);
      removeProduct(id);
    } catch (error) {
      const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';
      errors.forEach(erro => toast.error(erro));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProductCard>
      {isLoading && <LoadingPage />}
      <ConfirmModal
        visible={selectedConfirm}
        onCancel={() => setSelectedConfirm(false)}
        onConfirm={handleDelete}
        message={`Excluir ${name}?`}
        keyId={id}
      />
      <ProductImage src={img_url} $gray={quantity <= 0} />
      <ProductContent>
        <ContentTop>
          <InfoSection>
            <ProductFlavor>{name}</ProductFlavor>
            <Price>R$ {priceFormatted}</Price>
          </InfoSection>
          {role === 'admin' ? (
            <FavButton>
              <EditProductLightIcon
                onClick={() => navigate(`/admin/produto/${id}`)}
                width={37}
                height={37}
              />
            </FavButton>
          ) : (
            <FavButton onClick={handleFavorite}>
              {isFavorited ? (
                <FavOnIcon width={35} height={35} />
              ) : (
                <FavOffIcon width={35} height={35} />
              )}
            </FavButton>
          )}
        </ContentTop>
        <ContentDown>
          <StockBadge $inStock={quantity > 0}>
            {quantity > 0 ? 'Em estoque' : 'Esgotado'}
          </StockBadge>
          {role === 'admin' ? (
            <DeleteLightIcon
              onClick={() => setSelectedConfirm(true)}
              width={37}
              height={38}
            />
          ) : (
            <SeeMore onClick={handleSeeMore}>Ver mais</SeeMore>
          )}
        </ContentDown>
      </ProductContent>
    </ProductCard>
  );
}

ProductCardCategory.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
  }),
  category: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  onToggleFavorited: PropTypes.func.isRequired,
};

export default ProductCardCategory;
