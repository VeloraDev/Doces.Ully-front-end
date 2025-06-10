import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, isClosed }) {
  const isLoggedIn = false;
  const location = useLocation();

  if (!isLoggedIn && isClosed) {
    return (
      <Navigate to="/login" replace state={{ prevPath: location.pathname }} />
    );
  }
  return children;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isClosed: PropTypes.bool,
};

export default PrivateRoute;
