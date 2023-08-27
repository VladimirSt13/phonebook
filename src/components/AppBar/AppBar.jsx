import { useAuth } from 'src/hooks';
import { AuthNav } from 'src/components/AuthNav/AuthNav';
import { UserMenu } from 'src/components/UserMenu/UserMenu';
import { Navigation } from 'src/components/Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
