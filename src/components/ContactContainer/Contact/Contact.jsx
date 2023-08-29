import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { contactsActions } from 'src/redux';

export const Contact = ({ contact, toggleModal }) => {
  const { _id: id, name, phone: number } = contact;

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(contactsActions.setContactForUpdate(contact));
    toggleModal();
  };

  const handleDelete = () => {
    dispatch(contactsActions.deleteContact(id));
  };

  return (
    <Item>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
