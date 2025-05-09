import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes/routes';
import Navbar from './components/navBar';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <AppRoutes />
      <ToastContainer autoClose={3000} className="toas-container" />
    </BrowserRouter>
  );
}

export default App;
