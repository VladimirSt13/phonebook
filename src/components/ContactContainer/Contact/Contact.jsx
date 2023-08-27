import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { contactsActions } from 'src/redux';

export const Contact = ({ contact }) => {
  const { _id: id, name, phone: number } = contact;

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(contactsActions.deleteContact(contactId));
  };

  return (
    <Item>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
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
