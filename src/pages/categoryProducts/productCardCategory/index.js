import React, { useCallback, useState, useContext } from 'react';
import {
  ProductCard,
  ProductImage,
  ProductContent,
  ContentTop,
  InfoSection,
  FavButton,
  ContentDown,
  ConfirmContainer,
  ConfirmSection,
  ConfirmText,
  ActionGroup,
  CancelButton,
  ConfirmButton,
  Line,
} from '../../../styles/ComponentsStyles';
import { ProductFlavor, Price, InStock, SeeMore } from './styles';
import {
  FavOnIcon,
  FavOffIcon,
  EditProductLightIcon,
  DeleteLightIcon,
} from '../../../assets/index';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import axios from '../../../services/axios';
import { toast } from 'react-toastify';
import { ProductContext } from '../../../hooks/contextprovider';

function ProductCardCategory({
  product,
  category,
  isFavorited,
  onToggleFavorited,
}) {
  const { id, name, quantity, img_url, priceFormatted } = product || {};
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.user.type);
  const { removeProduct } = useContext(ProductContext);

  const [selectedConfirm, setSelectedConfirm] = useState();

  const handleFavorite = useCallback(() => {
    onToggleFavorited(id);
  }, [onToggleFavorited, id]);

  const handleSeeMore = useCallback(() => {
    navigate(`/produto/${category}/${id}`);
  }, [navigate, category, id]);

  async function handleDelete() {
    try {
      await axios.delete(`/products/${id}`);
      toast.success('produto deletado!');
      setSelectedConfirm(false);
      removeProduct(id);
    } catch (error) {
      const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';

      if (Array.isArray(errors)) {
        errors.forEach(erro => toast.error(erro));
      } else if (typeof errors === 'string') {
        toast.error(errors);
      }
    }
  }

  return (
    <ProductCard>
      <AnimatePresence>
        {selectedConfirm && (
          <ConfirmContainer
            key={id}
            initial={{ opacity: 0, scale: 0.98 }}
            exit={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            animation={selectedConfirm ? 'fadeIn' : 'fadeOut'}
            onClick={() => setSelectedConfirm(false)}>
            <ConfirmSection onClick={e => e.stopPropagation()}>
              <ConfirmText>Excluir {name}?</ConfirmText>
              <Line />
              <ActionGroup>
                <CancelButton onClick={() => setSelectedConfirm(false)}>
                  Cancelar
                </CancelButton>
                <ConfirmButton onClick={handleDelete}>Sim</ConfirmButton>
              </ActionGroup>
            </ConfirmSection>
          </ConfirmContainer>
        )}
      </AnimatePresence>
      <ProductImage src={img_url} />
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
          <InStock $inStock={quantity > 0}>
            {quantity > 0 ? 'Em estoque' : 'Esgotado'}
          </InStock>
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
