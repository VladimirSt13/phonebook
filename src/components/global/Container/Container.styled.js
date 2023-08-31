import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const StyledContainer = styled(Box)`
  margin: 0 auto;
  padding: 0 12px;
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;

  ${({ theme: { breakpoints } }) => breakpoints.down(breakpoints.mobile)} {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.up(breakpoints.desktop)} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
