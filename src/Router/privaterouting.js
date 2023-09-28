import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {
  const state = true;
  return state ? (
    <>
      <Outlet />
    </>
  ) : (
    <div>
      <Navigate to="/" />
    </div>
  );
}

export default PrivateRoute;