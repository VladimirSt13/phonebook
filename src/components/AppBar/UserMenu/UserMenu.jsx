import { useAuth } from 'src/hooks';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

import { User, Wrapper } from './UserMenu.styled';
import { authActions } from 'src/redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <User>{user.email}</User>
      <IconButton
        aria-label="logout"
        color="secondary"
        onClick={() => dispatch(authActions.logOut())}
      >
        <LogoutIcon />
      </IconButton>
    </Wrapper>
  );
};
