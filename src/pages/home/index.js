import Slider from '../../components/slider';
import ProductContainer from '../../components/productContainer/index';
import Footer from '../../components/footer';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <Slider />
      <ProductContainer />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
