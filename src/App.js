import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes/routes';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer autoClose={3000} className="toas-container" />
    </BrowserRouter>
  );
}

export default App;
