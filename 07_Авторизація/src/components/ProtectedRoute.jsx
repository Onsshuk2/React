import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Це має бути ваша логіка для перевірки авторизації

  if (!isAuthenticated) {
    // Якщо не авторизований, перенаправляємо на сторінку логіну
    return <Navigate to="/login" />;
  }

  return children; // Якщо авторизований, рендеримо дочірні елементи
};

export default ProtectedRoute;
