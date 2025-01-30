import React from 'react';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';

export default function LayoutWithNav() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
