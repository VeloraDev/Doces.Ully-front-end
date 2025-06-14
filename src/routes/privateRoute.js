import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, isClosed }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
