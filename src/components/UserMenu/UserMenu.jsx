import { useAuth } from 'src/hooks';
import { useDispatch } from 'react-redux';

import { User, Wrapper } from './UserMenu.styled';
import { authActions } from 'src/redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <User>{user.email}</User>
      <button type="button" onClick={() => dispatch(authActions.logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
