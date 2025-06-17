import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from '../pages/cart';
import Home from '../pages/home';
import Login from '../pages/login';
import Page404 from '../pages/page404';
import Products from '../pages/products';
import Product from '../pages/product';
import Register from '../pages/register';
import PrivateRoute from './privateRoute';
import CategoryProducts from '../pages/categoryProducts';
import Order from '../pages/order';
import CRUD from '../pages/CRUD';

function AppRoutes() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login role="client" /> },
    { path: '/admin/login', element: <Login role="admin" /> },
    { path: '/cadastro', element: <Register /> },
    { path: '/carrinho', element: <Cart />, isClosed: true },
    { path: '/produtos', element: <Products /> },
    {
      path: '/produtos/:categoria',
      element: <CategoryProducts />,
      isClosed: false,
    },
    { path: '/produto/:categoria/:id', element: <Product /> },
    { path: '/pedido', element: <Order />, isClosed: true },
    {
      path: '/admin/:tipo/:id?',
      element: <CRUD />,
      isClosed: true,
      role: 'admin',
    },
    { path: '*', element: <Page404 /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element, isClosed, role }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute isClosed={isClosed} role={role}>
              {element}
            </PrivateRoute>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
