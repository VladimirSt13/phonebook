import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { OverlayStyled, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <OverlayStyled onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
