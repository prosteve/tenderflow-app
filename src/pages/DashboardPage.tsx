// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Note the path here

export const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  // While the auth state is loading, don't render anything
  // This prevents a flash of the login page before the user is identified
  if (isLoading) {
    return null; // or a loading spinner
  }

  // If loading is finished and there's no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If loading is finished and there is a user, render the child route
  return <Outlet />; 
};