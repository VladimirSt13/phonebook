import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const outputVisibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {outputVisibleContacts.length > 0 ? (
        outputVisibleContacts.map(contact => (
          <Contact key={contact._id} contact={contact} />
        ))
      ) : (
        <div>No data</div>
      )}
    </List>
  );
};
