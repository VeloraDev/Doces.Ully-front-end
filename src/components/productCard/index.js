import { useCallback, useState } from 'react';
import {
  ProductContainer,
  ProductImage,
  Background,
  Image,
  ProductContent,
  TitleCategory,
  TitleFlavor,
  Price,
  FavButton,
} from './styles';
import {
  FavOnIcon,
  FavOffIcon,
  EditProductLightIcon,
} from '../../assets/index';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ProductCard({ product, isHome }) {
  const { id, name, quantity, img_url, category_name, priceFormatted } =
    product;
  const role = useSelector(state => state.auth.user.type);
  const navigate = useNavigate();

  const [favorited, setFavorited] = useState(false);

  const handleProductPage = useCallback(() => {
    navigate(`/produto/${category_name}/${id}`);
  }, [navigate, category_name, id]);

  return (
    <ProductContainer onClick={handleProductPage}>
      {role === 'admin' ? (
        <FavButton
          onClick={e => {
            navigate(`/admin/produto/${id}`);
            e.stopPropagation();
          }}>
          <EditProductLightIcon />
        </FavButton>
      ) : (
        <FavButton
          onClick={e => {
            e.stopPropagation();
            setFavorited(favorited ? false : true);
          }}>
          {favorited ? (
            <FavOnIcon width={35} height={35} />
          ) : (
            <FavOffIcon width={35} height={35} />
          )}
        </FavButton>
      )}
      <ProductImage src={img_url} $gray={quantity <= 0} />
      <ProductContent>
        {isHome && <TitleCategory>{category_name}</TitleCategory>}
        <TitleFlavor>{name}</TitleFlavor>
        <Price>R${priceFormatted}</Price>
      </ProductContent>
    </ProductContainer>
  );
}

ProductCard.PropTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
  }),
  isHome: PropTypes.bool.isRequired,
};

export default ProductCard;
