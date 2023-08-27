import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { authActions } from 'src/redux/auth/slice';
import { router } from 'src/router';

import { Loader } from 'src/components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.refreshUser());
  }, [dispatch]);

  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
