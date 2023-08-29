import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'src/components/AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from 'src/components';

export const Layout = () => {
  return (
    <Box width="1024px" mx="auto" px="16px" height="100vh">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
