import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectContacts,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const outputVisibleContacts = useSelector(selectVisibleContacts);
  console.log(
    'file: ContactList.jsx:11  ContactList  outputVisibleContacts:',
    outputVisibleContacts
  );

  const outputContacts = useSelector(selectContacts);
  console.log(
    'file: ContactList.jsx:12  ContactList  outputContacts:',
    outputContacts
  );

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
