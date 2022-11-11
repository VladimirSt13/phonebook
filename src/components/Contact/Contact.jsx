import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
