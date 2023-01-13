import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarCustom } from './AppBarCustom/AppBarCustom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBarCustom />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};
