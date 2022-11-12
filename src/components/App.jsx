import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import UserPhoneBook from 'pages/UserPhoneBook/UserPhoneBook';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-phone-book" element={<UserPhoneBook />} />
      </Route>
    </Routes>
  );
};

/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPhoneBook />} />
          }
        /> */
