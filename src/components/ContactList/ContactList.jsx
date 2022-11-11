import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const outputContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {outputContacts.length > 0 ? (
        outputContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <div>No data</div>
      )}
    </List>
  );
};
