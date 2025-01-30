import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { token, loadingAuth } = useContext(AuthContext);
  // If we are still checking localStorage, show a "Loading..." message
  if (loadingAuth) {
    return <div>Loading...</div>; 
  }

  // If after checking localStorage the token is still missing → redirect
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If the token exists → render the page
  return children;
} 
