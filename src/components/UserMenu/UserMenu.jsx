// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { Wrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, ...</UserName>
      <button type="button">Logout</button>
    </Wrapper>
  );
};

//{user.name}
//onClick={() => dispatch(logOut())}
