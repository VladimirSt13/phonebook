import { List } from './ContactList.styled';
import { Contact } from 'src/components/ContactContainer/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'src/redux/contacts/selectors';

export const ContactList = ({ toggleModal }) => {
  const outputVisibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {outputVisibleContacts.length > 0 ? (
        outputVisibleContacts.map(contact => (
          <Contact
            key={contact._id}
            contact={contact}
            toggleModal={toggleModal}
          />
        ))
      ) : (
        <div>No data</div>
      )}
    </List>
  );
};
