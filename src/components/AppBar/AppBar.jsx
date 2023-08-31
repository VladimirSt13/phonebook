import { useAuth } from 'src/hooks';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { Header, LogoLink, Wrapper } from './AppBar.styled';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { theme } from 'src/theme';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Wrapper>
        <LogoLink to="./">
          <Logo width="24" fill={theme.colors.white} />
          <span>Simple Ph-B</span>
        </LogoLink>

        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Wrapper>
    </Header>
  );
};
