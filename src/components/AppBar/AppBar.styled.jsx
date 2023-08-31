import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../global';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-block: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 12px;
  font-weight: 700;
  color: inherit;

  &.active {
    color: #e84a5f;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
