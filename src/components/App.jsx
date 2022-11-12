import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import UserPhoneBook from 'pages/UserPhoneBook/UserPhoneBook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/user-phone-book"
              component={<Register />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/user-phone-book"
              component={<Login />}
            />
          }
        />
        <Route
          path="/user-phone-book"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPhoneBook />} />
          }
        />
      </Route>
    </Routes>
  );
};
