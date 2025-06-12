import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ToastStyles from './styles/stylesToastfy';
import AppRoutes from './routes/routes';
import Navbar from './components/navBar';
import ScrollToTop from './config/scrollToTop';
import { AppContainer } from './styles/AppStyles';
import { ProductProvider } from './services/contextprovider';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <AppContainer>
          <GlobalStyles />
          <Navbar />
          <ScrollToTop />
          <AppRoutes />
          <ToastStyles />
          <ToastContainer autoClose={3000} />
        </AppContainer>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
