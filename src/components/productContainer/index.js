import { useContext } from 'react';
import { CardsContainer } from '../../styles/ComponentsStyles';
import { Container, SectionTop, Title, ActionButton } from './styles';
import ProductCard from '../productCard';

import { useNavigate } from 'react-router-dom';
import { ArrowCategory } from '../../assets/index';
import { ProductContext } from '../../hooks/contextprovider';
import Loadingpage from '../loadingPage';

function ProductContainer() {
  const { products, isLoading } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <Container>
      {isLoading && <Loadingpage />}
      <SectionTop>
        <Title>Produtos</Title>
        <ActionButton onClick={() => navigate('/produtos')}>
          <ArrowCategory width={30} height={21} />
        </ActionButton>
      </SectionTop>
      <CardsContainer $isHome={true}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} isHome={true} />
        ))}
      </CardsContainer>
    </Container>
  );
}

export default ProductContainer;
