import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'src/components/Layout/Layout';
import { RestrictedRoute } from 'src/components/RestrictedRoute';
import { PrivateRoute } from 'src/components/PrivateRoute';
import { appRoutes } from 'src/constants/appRoutes';

const HomePage = lazy(() => import('src/pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('src/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/RegisterPage/RegisterPage'));
const UserPhoneBookPage = lazy(() =>
  import('src/pages/UserPhoneBookPage/UserPhoneBookPage')
);

const routes = [
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
];

export const router = createBrowserRouter(routes, {
  basename: appRoutes.BASE_NAME,
});
