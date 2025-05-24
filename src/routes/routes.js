import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from '../pages/cart';
import Home from '../pages/home';
import Login from '../pages/login';
import Page404 from '../pages/page404';
import Products from '../pages/products';
import Product from '../pages/product';
import Register from '../pages/register';
import MyRoute from './myRoute';
import CategoryProducts from '../pages/categoryProducts';

function AppRoutes() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/cadastro', element: <Register /> },
    { path: '/carrinho', element: <Cart />, isClosed: false },
    { path: '/produtos', element: <Products />, isClosed: false },
    {
      path: '/produtos/:categoria',
      element: <CategoryProducts />,
      isClosed: false,
    },
    { path: '/produto/:categoria/:id', element: <Product />, isClosed: false },
    { path: '*', element: <Page404 /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element, isClosed }) => (
        <Route
          key={path}
          path={path}
          element={<MyRoute isClosed={isClosed}>{element}</MyRoute>}
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
