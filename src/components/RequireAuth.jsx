

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const location = useLocation();

  if (!currentUser) {
    // Nếu chưa login, chuyển hướng sang /login và nhớ vị trí cũ
    return <Navigate to="/login" state={{ from: location }}/>;
  }

  // Nếu đã login, cho vào trang
  return children;
};

export default RequireAuth;
