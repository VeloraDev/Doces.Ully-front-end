import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, isClosed, role }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userRole = useSelector(state => state.auth.user.type);
  const location = useLocation();

  if ((!isLoggedIn && isClosed) || (role && role !== userRole)) {
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
