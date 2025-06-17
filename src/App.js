import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ToastStyles from './styles/stylesToastfy';
import AppRoutes from './routes/routes';
import Navbar from './components/navBar';
import ScrollToTop from './config/scrollToTop';
import { AppContainer } from './styles/AppStyles';

import Store from './store/index';
import { persistor } from './store/index';
import { ProductProvider } from './hooks/contextprovider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
