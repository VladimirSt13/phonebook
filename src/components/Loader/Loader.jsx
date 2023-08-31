import PropTypes from 'prop-types';

import { TailSpin } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';
import { theme } from 'src/theme';

export const Loader = ({ visible }) => {
  return (
    <Wrapper>
      <TailSpin
        height="80"
        width="80"
        color={theme.colors.blue}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
      />
    </Wrapper>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
};
