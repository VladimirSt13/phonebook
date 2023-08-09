import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectContacts,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  // const outputContacts = useSelector(selectVisibleContacts);
  const outputContacts = useSelector(selectContacts);

  return (
    <List>
      {outputContacts.length > 0 ? (
        outputContacts.map(contact => (
          <Contact key={contact._id} contact={contact} />
        ))
      ) : (
        <div>No data</div>
      )}
    </List>
  );
};
