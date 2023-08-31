import { StyledContainer } from './Container.styled';

import PropTypes from 'prop-types';

export const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
