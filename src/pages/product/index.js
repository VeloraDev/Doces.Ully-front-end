import React, { useState } from 'react';
import { ProductContainer, ContainerTop, ContentTop } from './styles';
import FavOn from '../../assets/icons/fav-iconActive.svg';
import FavOff from '../../assets/icons/fav-icon.svg';
import ShareIcon from '../../assets/icons/share-icon.svg';

function Product() {
  const [favorited, setFavorited] = useState(false);

  return (
    <ProductContainer>
      <ContainerTop>
        <ContentTop>
          <h1>Nome do produto</h1>
          <div>
            <button>
              <img src={ShareIcon} />
            </button>
            <button onClick={() => setFavorited(prev => !prev)}>
              <img src={favorited ? FavOn : FavOff} />
            </button>
          </div>
        </ContentTop>
      </ContainerTop>
    </ProductContainer>
  );
}

export default Product;
