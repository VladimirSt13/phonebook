import PropTypes from 'prop-types';

import { TailSpin } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

export const Loader = ({ visible }) => {
  return (
    <Wrapper>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
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
