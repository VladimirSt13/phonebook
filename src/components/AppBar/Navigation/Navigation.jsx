import { Box } from '@mui/system';

import { useAuth } from 'src/hooks';

import { StyledNavLink } from '../AppBar.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      component="nav"
      sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}
    >
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/user-phone-book">PhoneBook</StyledNavLink>
      )}
    </Box>
  );
};
