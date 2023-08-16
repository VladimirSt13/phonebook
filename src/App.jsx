import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { router } from 'router';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      basename="phonebook"
    />
  );
};
