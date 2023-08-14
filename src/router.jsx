import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { appRoutes } from 'constants/appRoutes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const UserPhoneBookPage = lazy(() =>
  import('pages/UserPhoneBookPage/UserPhoneBookPage')
);

export const router = createBrowserRouter([
  {
    path: appRoutes.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: appRoutes.REGISTER,
        element: (
          <RestrictedRoute
            redirectTo={appRoutes.USER_PHONE_BOOK}
            component={<RegisterPage />}
          />
        ),
      },
      {
        path: appRoutes.LOGIN,
        element: (
          <RestrictedRoute
            redirectTo={appRoutes.USER_PHONE_BOOK}
            component={<LoginPage />}
          />
        ),
      },
      {
        path: appRoutes.USER_PHONE_BOOK,
        element: (
          <PrivateRoute
            redirectTo={appRoutes.LOGIN}
            component={<UserPhoneBookPage />}
          />
        ),
      },
    ],
  },
]);
