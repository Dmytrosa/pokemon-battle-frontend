import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LayoutWithoutNav() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
