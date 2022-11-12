// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  );
};

/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */
